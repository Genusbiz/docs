# Action Orchestration

Action Orchestration is used in Tasks, Agents, Web Services and Rules to define a set of actions to perform during execution. Specific actions are performed by adding effects, flow is controlled by adding decisions and controls, transactions are handled by adding scopes, iterations are handled by adding enumerators.

During execution of actions, there may occur errors that could result in a disruption of the normal execution flow. These errors are often referred to as exceptions, and can be handled by adding exception handlers to the action. Exception handlers are special steps which are dedicated to resolving error situations, and are only executed if an error should occur.

The actions use data sources to retrieve, create, modify, or delete data. A data source is made up of fields and groups, and the kind of data stored in a field or group is defined by the data type. A field can store data for both simple and complex data types. A group is by definition a complex data type.

**Topics in "Action Orchestration"**
* [Data Sources](data-sources/index.md)
* [Actions](actions/index.md)
* [Exception Handling](exception-handling.md)