# Data mart loading and scheduling

A data mart needs to be loaded before it is ready to provide data for analyses or data extracts. Loading a data mart may be a resource-intensive event, and should be planned accordingly.

Data mart loading and scheduling are configured in Genus Studio.

**Note:** Data marts are always loaded in their entirety on the server(s) (nodes) they run on. Make sure the sum of the sizes of all your data marts (located on one server / node) is less than the server's physical memory and that it is still room for other processes, like the operating system and other Genus Services, to run. Since data marts are loaded in a compressed manner, the actual size used can be hard to calculate. We therefore recommend testing your servers capabilities by starting with smaller data marts and increasing their size gradually.

## Loading strategy considerations

Some data marts provides large amounts of relatively static data, while other use cases may require frequently updated data. These are some considerations that must be made when deciding a load strategy for a data mart:

* **Freshness**: Is it really necessary to have a near-realtime view of the data?
* **Loading time**: Longer loading times may require more infrequent loading.
* **Reloading**: At what time of the day should a data mart reload? Loading of heavy data marts could be scheduled to happen during off-hours.
* **Parallel loading**: Can a new data mart instance be loaded in parallel, next to an already running instance?
* **Automatic loading**: Should a data mart reload automatically in the event of a server failure?
* **Manual reload**: A data mart may be configured to allow manual reloading from a running analysis. This option should probably not be used very frequently, and should only be used for smaller data marts as it is a synchronous operation.

Data mart load scheduling is configured in the **Schedules** table found when expanding the **Data marts**-item of the **Discovery** group in Genus Studio. A data mart schedule defines all aspects of the loading strategy for a given data mart:

* **Data mart**: Identifies which data mart this schedule should handle.
* **Node Group**: Identifies which node group that should handle requests for this data mart.
* **Schedule**: Configures when and how often the data mart should reload.
* **Auto Load**: Indicates if a data mart should load automatically if it is not already loaded.
* **Load Parallel**: Indicates if a new data mart instance should be reloaded without stopping the already running instance.
* **Enabled**: Allows disabling a data mart schedule temporarily.
* **History**: Shows when this schedule last was executed, how many milliseconds it took to load, the total number of rows and if the loading succeeded. A complete execution history may be displayed by rightclicking a schedule and selecting **Execution History...**

## Node group

A schedule must specify which node group that should handle requests for this data mart. There must be at least one node within this node group configured to handle data mart requests. More information on how to enable nodes in the node group to load data marts may be found in [Nodes and node groups](../../../developers/defining-an-app-model/services/nodes-and-node-groups.md)

## Schedule

A schedule may be configured to load once, daily, on specific week days or specific months. The schedule will run during the configured time-slot, and may be configured to reload repeatedly at given intervals.

Select a **Schedule Type** and type a **Start Time**. Use **Schedule (Once|Daily|Weekly|Monthly)** to configure which days this schedule should be active.

Click **Advanced...** to configure an optional **End Date** and **Repeat**-options for the schedule. Repeat-options defines how often the data mart should reload within the given schedule.

It is also possible to define and configure multiple reload-schedules by checking **Show multiple schedules**.

## Freshness vs loading time

A data mart represents a snapshot of the source data at a given time, running in-memory on a server node. How often this snapshot should be refreshed will depend on a combination of business requirements, expected loading times and the amount of server resources available. Reloading a heavy data mart too frequently may hurt performance on the server, while to infrequent reloads may result in stale data.

Smaller data marts may be set up to reload more frequently, offering a fresh view of the data when needed. [Data mart concepts](data-mart-concepts.md) also recommends you to create small and to-the-point data marts, giving opportunities to reload more often.

## Load options

**Load Parallel**: Reloading a data mart in parallel lets the new instance load while the old instance continues to run. After the new instance has finished loading, the system will route all later requests to it. The old instance will be taken down and destroyed. The upside to this strategy is obviously that the data mart will be continously accessible. The downside is that you require more resources on your server to be able to spin up 2 instances at the same time. If parallel loading is disabled, the data mart will be unavailable while the new instance is loading.

**Auto Load**: Loads a new instance of the data mart if it is not already running. The mart will start to load at any time of the day, regardless of schedule settings.

**Manual Reload**: A data mart may be configured to allow a user to reload the data mart when necessary. This option may be turned on for a given data mart in the **General Settings**-dialog available from the data mart editor. When this option has been enabled, there will be an extra option named **Reload data mart** under the **Refresh**-button in the analysis viewer when viewing an analysis based on the relevant data mart. When the user clicks **Reload data mart**, a reload-operation will be started immediately if the data mart is already running.

This way of reloading the mart is only intended to be used when you know that there are changes to the data offered by the data mart. Manual reloading will not reload the definition of the data mart. When there are changes to the data marts logic or layout, it should be reloaded by the scheduler.

In a multi-node setup (see [Nodes and node groups](../../../developers/defining-an-app-model/services/nodes-and-node-groups.md)), only the node that the analysis viewer is connected to will be reloaded. Other nodes will reload according to relevant schedules. Frequent use of the manual reload option may pose a heavy burden on the server, particularly for larger data marts. Use it sparingly.

**Enabled**: Enables or disables loading of the data mart entirely.

## Event history

Every time a data mart is loaded, an event log entry is created. To control the growth of history, Genus Apps provides capabilities to define "retention rules" for history logs. See [Guidelines and best practices](../../../developers/guidelines-and-best-practices/deleting-log-entries-in-the-history.md))
