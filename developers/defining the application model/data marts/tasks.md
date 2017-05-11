## Tasks

Tasks defined within a data mart are local to the data mart, which means that they are not accessible from anywhere outside the data mart,and they are used to populate a data source. To populate a data source the task must meet certain requirements. The task must contain effects that actually creates objects in the data source or read objects into the data source, or a combination of these. The task cannot create or modify objects in other data sources.  

A task can only be activated if the user has the permissions to execute it. Set security permissions to allow the appropriate users and groups to execute the actions. In the list of tasks, right click the task and select Properties. Select the Security tab, and add permissions. To re-use the permissions of one task on other tasks, in the list of tasks, right click the task and select Copy, and then right click another task, and select Paste Security. Select Add to add permissions to the existing, or Replace to replace the existing permissions. If the task should be accessible for all users of the form, it can be useful to grant permissions for the task to Everyone.  

In this article

* * *

*   [Add a Task](#add-a-task)

* * *

## Add a Task

To add a task within the Data Mart.

1.  In the **Data Mart Description** area, click **Tasks**.
2.  In the Task Pane , click **Add**.
3.  For information on how to define a task, see [Tasks](../tasks.md).

