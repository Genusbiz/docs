# Data mart problem solving and FAQ

The datamart/analysis concept relies on a correctly configured environment to function correctly. Here are some tips on how to go about troubleshooting your installation.

To be able to run analyses/data extracts against a data mart all of the following prerequisits must be met:
*   A data mart must be correctly defined
*   A data mart loading schedule must be configured and executed.
*   Nodes and node-groups must be configured correctly to allow servers to provide data marts for clients.
*   The data mart must be loaded and running on one or more servers in your network.

## Correctly configuring a data mart
*   Make sure that your data mart exposes the relevant data sources. 
*   Check filters and subsets on all data sources to make sure that they actually return the data you expect. Remember that self-filters also may limit the amount of data that you will see.
*   Verify that data sources you expect to reference in analyses is not marked "private".
*   Remember to publish the relevant fields on all public data sources. 
*   Check that connections between data sources has been defined appropriately.
*   See [Data Mart Concepts](data-mart-concepts.md) for more information. 

## The data mart loading schedule
A data mart must be scheduled to load at one ore more servers before it will be available for requests from analyses or data extracts. Check that a data mart schedule is defined for this data mart and that the following requirements are fulfilled:
*   Check that the schedule handles the correct Data Mart
*   A node group must be assigned to this schedule. See **Nodes and Node Groups** below. 
*   A properly configured loading schedule must be defined. 
    *   Check that a proper Schedule Type is selected in the combo box,  and that a proper start time is set.
    *   Click on the button labeled **Advanced...** to verify a proper repeat pattern for the schedule.
*   Make sure that the correct flags has been set for **Load Parallel, Auto Load and Enabled**
*   Check if the schedule actually has been executed by checking the **Start-** and **End Time-columns** in the **Schedules table** in Studio. 
    *   A more comprehensive load-history may be viewed by right-clicking on a **Schedule** in the schedules table and clicking **Execution History**
*   See [Loading and Scheduling](data-mart-loading.md) for more information.

## Nodes and node group
For a data mart server to provide any services it must be added to the directory as a Node, and added to a Node Group.
*    A server must have a corresponding node configured under **Services->Nodes** in Genus Studio. Double-click on the relevant node configuration in the Nodes table, or click New to make a new configuration.
    *   The Identifying Name should be the name of the server-computer as shown in **Control Panel -> System and Security -> System**, without domain! Eg. `myserver`, not `myserver.mynetwork.com` 
    *   HTTP Address must be set correctly as a valid URL containing a scheme, host, and an optional port only. `https://myserver.mynetwork.com:8080` is an example of a valid adress.
    *   If this server only should handle requests for a single dataset, the corresponding data set must be chosen under Data Set Dependent Services.
    *   To allow this server to handle data mart requests, the data mart service-flag must be checked. 
*   A node must be included in a node group under **services -> node groups** in Genus Studio.
    *   Click **New** to create a new node group.
    *   Click **Add** in the node group dialog window to add an existing node to this Node Group.
    *   A node group may contain one or more nodes.
*   See [Nodes and node groups](../../../developers/defining-an-app-model/services/nodes-and-node-groups.md) for more information

## Permissions
To make an analysis or data mart; make sure you have permissions to create an analysis or data mart. Make sure the user of the analysis has read & execute permissions to the analysis and data mart.

## Synchronizing settings across multiple nodes
If you are deploying data marts on multiple nodes, you have to synchronize some settings across the nodes. Se [Synchronizing cryptographic keys and settings in an application server cluster](../../../developers/installation-and-configuration/configure-and-maintain-genus-server/synchronizing-crypo-keys-in-a-cluster.md)

## Genus Configuration
*   Try typing the **Virtual Directory** of a data set with only lower case letters
*   Make sure the redirect internet host name setting in Genus Services Options is correctly set.
*   Ensure that crypto-keys are equal on all servers.

