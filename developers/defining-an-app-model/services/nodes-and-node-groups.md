# Nodes and Node Groups

Nodes and Node Groups are administrated in Genus Studio, and can be found in the Services group in the navigation pane.

> [!NOTE]
> A node is a [Genus Server](../../../terminology.md#genus-server). If you register a node, it must correspond to a real and existing Genus Server. If you have registered nodes that do not exist, your agents and data marts will _not_ be accessible and will _not_ run (since agents and data marts are load balanced between all registered nodes).

**Node**  

A node represents a Genus App Services server that is registered and allowed to run one or more app services. For a node to provide services, Genus App Services must be installed and configured, and the node must also be a member of a node group.

A node can be dedicated to one data set, or it can provide services to all data sets.  

Properties:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Identifying Name</td>

<td>The name used to identify the server in the network. This name must correspond to the Computer Name, or NetBIOS name, of the server. This name MUST NOT include the domain part of the machine address. Eg. "myserver", not "myserver.mynetwork.com"</td>

</tr>

<tr>

<td>HTTP Address</td>

<td>The address to the server in the network. Some of the services can use this address to contact the server directly and thereby optimizing performance.</td>

</tr>

<tr>

<td>Data Set Independent Services:</td>

<td>This group contains service that cannot run for one data set but always handles all data sets. These services must therefore only be enabled on one node for each environment.</td>

</tr>

<tr>

<td>Mail Service</td>

<td>Option that enables running of Mail Services on the node.</td>

</tr>

<tr>

<td>Data Set Dependent Services:</td>

<td>This group contains services that can run for either one data set or for all data sets. These services can be enabled on one or more nodes for each environment.</td>

</tr>

<tr>

<td>Run for</td>

<td>The data set that the node provides data set dependent services for. If the node provides services for all data sets, select **All Data Sets**.</td>

</tr>

<tr>

<td>Agent Execution Service</td>

<td>Option that enables running of Agent Services on the node.</td>

</tr>

<tr>

<td>Calendar Service</td>

<td>Option that enables running of Calendar Services on the node.</td>

</tr>

<tr>

<td>Contact Service</td>

<td>Option that enables running of Contact Services on the node.</td>

</tr>

<tr>

<td>Data Mart Service</td>

<td>Option that enables running of Data Mart Services on the node.</td>

</tr>

<tr>

<td>REST Service</td>

<td>Option that enables running of REST Services on the node.</td>

</tr>

<tr>

<td>Web Service</td>

<td>Option that enables running of Web Services on the node.</td>

</tr>

</tbody>

</table>

**Node Group**  

A node group is used for logical grouping of nodes. The nodes in a node group can provide different or overlapping types of services, for different or overlapping data sets. Directory objects such as data marts, web services, and agents, are deployed to a node group. Objects deployed to a node group is processed by any node within that group which provides the requested app service for a given data set. Take care to not deploy an object to a group that does not run the required service.

A group can contain nodes from several environments, for example development, test, and production. This allows for easy transfer of the directory between different environments. The configuration of the node (server) itself determines which environment it belongs to.  

**Typical Scenarios**

*   Test and Production Environments - Define all nodes that exist in the test environment and in the production environment, and add them to the node groups relevant for your system. When transferring the directory from the test environment to the production environment, no further configuration of nodes and node groups are necessary.
*   Dedicated nodes for different load - Use node groups to dedicate nodes for certain types of load to increase performance. For example use a group of nodes to only handle data mart requests. Or for example have two node groups which both handle agents, but one is used for agents which run heavy batch operations, while the other handle short lived operations.
*   Dedicate nodes for different data sets - Let the node group that handles web services contain several nodes, where each node is specified to only handle one data set.
