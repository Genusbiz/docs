# Tasks in data mart

Tasks defined within a data mart are local to the data mart, which means that they are not accessible from anywhere outside the data mart, and they are used to populate a data source. To populate a data source the task must meet certain requirements. The task must contain effects that actually creates objects in the data source or read objects into the data source, or a combination of these. The task cannot create or modify objects in other data sources.  

A task can only be activated if the user has the permissions to execute it, see [Security Permissions](../../../developers/defining-an-app-model/security/security-permissions.md) for more information.

To add a task within the data mart.

1.  In the **Data Mart Description** area, click **Tasks**.
2.  In the task pane , click **Add**.
3.  For information on how to define a task, see [Tasks](../../../developers/defining-an-app-model/logic/tasks.md).

