---
title: Genus Apps Nodes and Node Groups
description: Nodes and Node Groups in Genus Apps. Definition of servers (nodes) in the environment and functionialties and services provided on these servers. 
author: eriksandnes
---
# Nodes and node groups

Nodes and node groups are administrated in Genus Studio, and can be found in the Services group in the navigation pane.

> [!NOTE]
> A node is a [Genus Server](../../../terminology.md#genus-server). If you register a node, it must correspond to a real and existing Genus Server. If you have registered nodes that do not exist, your agents and data marts will _not_ be accessible and will _not_ run (since agents and data marts are load balanced between all registered nodes).

## Node

A node is a [Genus Server](../../../terminology.md#genus-server) that is registered and allowed to run one or more app services. For a node to provide services, Genus Services must be installed and configured, and the node must also be a member of a node group.

A node can be dedicated to one data set, or it can provide services to all data sets.  

Properties:

| Property                      | Description     |
| ------------------------------|-----------------|
| Identifying Name              | The name used to identify the server in the network. This name must correspond to the Computer Name, or NetBIOS name, of the server. This name MUST NOT include the domain part of the machine address. Eg. "myserver", not "myserver.mynetwork.com" |
| HTTP Address                  | The address to the server in the network. Some of the services can use this address to contact the server directly and thereby optimizing performance.|
| Data Set Independent Services | This group contains service that cannot run for one data set but always handles all data sets. These services must therefore only be enabled on one node for each environment.|
| Mail Service                  | Option that enables running of Mail Services on the node.|
|Data Set Dependent Services    | This group contains services that can run for either one data set or for all data sets. These services can be enabled on one or more nodes for each environment.|
| Run for                       | The data set that the node provides data set dependent services for. If the node provides services for all data sets, select **All Data Sets**.|
| Agent Execution Service       | Option that enables running of Agent Services on the node.|
| Calendar Service              | Option that enables running of Calendar Services on the node.|
| Contact Service               | Option that enables running of Contact Services on the node.|
| Data Mart Service             | Option that enables running of Data Mart Services on the node.|
| REST Service                  | Option that enables running of REST Services on the node.|
| Web Service                   | Option that enables running of Web Services (SOAP) on the node.|

## Node group

A node group is used for logical grouping of nodes. The nodes in a node group can provide different or overlapping types of services, for different or overlapping data sets. Directory objects such as data marts, web services, and agents, are deployed to a node group. Objects deployed to a node group is processed by any node within that group which provides the requested app service for a given data set. Take care to not deploy an object to a group that does not run the required service. 

## Typical scenarios

Dedicated nodes for different load - Use node groups to dedicate nodes for certain types of load to increase performance. For example use a group of nodes to only handle data mart requests. Or for example have two node groups which both handle agents, but one is used for agents which run heavy batch operations, while the other handle short lived operations.

Dedicate nodes for different data sets - Let the node group that handles web services contain several nodes, where each node is specified to only handle one data set.
