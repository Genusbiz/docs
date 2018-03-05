# Data mart problem solving and FAQ

The datamart/analysis concept relies on a correctly configured environment to function correctly. Here are some tips on how to go about troubleshooting your installation.

To be able to run analyses/data extracts against a data mart all of the following prerequisits must be met:
*   A data mart must be correctly defined.
*   A data mart load plan must be configured and executed.
*   Nodes and node-groups must be configured correctly to allow servers to provide data marts for clients.
*   The data mart must be loaded and running on one or more servers in your network.

## Correctly configuring a data mart
*   Make sure that your data mart exposes the relevant data sources. 
*   Check filters and subsets on all data sources to make sure that they actually return the data you expect. Remember that self-filters also may limit the amount of data that you will see.
*   Verify that data sources you expect to reference in analyses is not marked "private".
*   Remember to publish the relevant fields on all public data sources. 
*   Check that connections between data sources have been defined appropriately.
*   See [Data Mart Concepts](data-mart-concepts.md) for more information. 

## The data mart load plan
A data mart must be scheduled to load at one ore more servers before it will be available for requests from analyses or data extracts. Check that a data mart load plan is defined for this data mart and that the following requirements are fulfilled:
*   Check that the load plan handles the correct data mart.
*   A node group must be assigned to this load plan. See **[Nodes and Node Groups](#nodes-and-node-groups)** below. 
*   Check that the load plans **Enabled**-flag has been set.
*   A properly configured load plan must be defined in the **Reload**-page. 
    *   Check that a proper load plan is set up,  and that a proper start time is set.
    *   Click on the button labeled **Advanced...** to verify a proper repeat pattern for the load plan.
*   Make sure that the correct flag has been set for **Load Parallel**
*   Use the **Auto Load**-page to set up required auto load behaviour. 
*   Check if the load plan actually has been executed by checking the **Start-** and **End Time** columns in the **Load Plans** table in Genus Studio. 
    *   A more comprehensive load history may be viewed by right-clicking on a **Load Plan** in the **Load Plans** table and clicking **History**
*   See [Loading and Scheduling](data-mart-loading.md) for more information.

## Don't leave faulty data mart load plans running on auto
A data mart load plan where auto load is checked will attempt to load the data mart within 2 minutes, unless it has been generally disabled or is disabled by auto load disabling rules. If the data mart fails to load, it will make another attempt 2 minutes later.

When the data mart fails to load, it will write the most recent content of Genus Log to the load plan's history log. This will allow you to  investigate why the mart would not load by rightclicking on the failed load history record and selecting "View Log...". If the data mart load succeeds, no extra log data will be written.

The amount of data written in a single history-record is limited to 1 MB, but as this could potentionally happen every 2 minutes, it may still amount to large volumes of data over time. Consequently, you should not let a failing data mart load plan stay enabled with autoload for extended periods of time. If you are experiencing difficulties trying to load a data mart, you should disable the load plan when you are not actively trying to solve the issue. 

## Nodes and node groups
For a data mart server to provide any services it must be added to the directory as a node, and added to a node group.
*    A server must have a corresponding node configured under **Services** -> **Nodes** in Genus Studio. Double-click on the relevant node configuration in the **Nodes** table, or click **New** to make a new configuration.
    *   The **Identifying Name** should be the name of the server as shown in **Control Panel** -> **System and Security** -> **System**, without domain! Eg. `myserver`, not `myserver.mynetwork.com` 
    *   **HTTP Address** must be set correctly as a valid URL containing a scheme, host, and an optional port only. `http://myserver.mynetwork.com:8080` is an example of a valid address.
    *   If this server only should handle requests for a single dataset, the corresponding data set must be chosen under **Data Set Dependent Services** (i.e. "**Run for**").
    *   To allow this server to handle data mart requests, the **Data Mart Service** option must be checked. 
*   A node must be included in a node group under **Services** -> **Node Groups** in Genus Studio.
    *   Click **New** to create a new node group.
    *   Click **Add** in the node group dialog window to add an existing node to this node group.
    *   A node group may contain one or more nodes.
*   See [Nodes and node groups](../../../developers/defining-an-app-model/services/nodes-and-node-groups.md) for more information

## Permissions
To make an analysis or data mart; make sure you have permissions to create an analysis or data mart. Make sure the user of the analysis has read & execute permissions to the analysis and data mart. Be careful using "Run as Administrator" when developing analysis. It is not a feature in the browser viewer.

## Synchronizing settings across multiple nodes
If you are deploying data marts on multiple nodes, you have to synchronize some settings across the nodes. Se [Synchronizing cryptographic keys and settings in an application server cluster](../../../developers/installation-and-configuration/configure-and-maintain-genus-server/synchronizing-crypto-keys-in-a-cluster.md).

## Genus Configuration

Try typing the **Virtual Directory** of a data set with only lower case letters.

Make sure the redirect internet host name setting in Genus Services Options is correctly set.

Ensure that crypto-keys are equal on all servers.
