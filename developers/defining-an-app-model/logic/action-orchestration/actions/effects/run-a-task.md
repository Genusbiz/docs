## Run a Task

Use this effect to run a task. This is useful to reuse common functionality and logic, and to break down complexity by modularizing large actions.

To run a task do the following:

1.  In the **Name** box, optionally type a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
2.  In the **Description** box, optionally type a description.
3.  In the **Task** box select the task you want to run. If the effect is included in a Rule, a Web Service, or an Agent, it is only possible to select Tasks which can run on the Application Server. When you have selected a task, all the data sources which are not private in the task, are listed in the **Data Filters** table.
4.  For each of the data sources in the **Data Filters** table you can specify a data filter by selecting the data source and clicking **Modify**. The data sources are populated according to the data filters when the selected task is executed.

If you use this effect in a Task it is not allowed to call itself recursively, but it is possible to call itself indirectly via other tasks. In these cases special attention is required to avoid etarnal loops.


## Specifying a Data Filter for a Data Source

A data source in a [Rule](../../../../object-class/modify-an-object--or-identifier-domain/rules.md), [Agent](../../../../agents.md), or [Web Service](../../../../web-services.md) can be filtered and sorted using one of several methods. A data source in a [Task](../../../tasks.md) can be filtered in the publication of the task.

To filter and sort a data source, select the data source, and click the **Data Filter** tab.

**Filtering**

Select how to filter a data source from the following methods:

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**None (no objects will be selected)**</td>

<td>No objects will be selected for the data source. Select this option if data are read using an effect, for example if data are imported from a file.</td>

</tr>

<tr>

<td>**Default**</td>

<td>Only available when filtering data for data sources of type Report. Select this option if you want to keep the default data filter defined in the Report.</td>

</tr>

<tr>

<td>**Set equal to active user account**</td>

<td>Only available when filtering data for a data source that is associated with a [Account Profile](../../../../security/account-profiles.md), for example *Person*. Populates the data source with the object associated with the user that is signed in when the action is executed.</td>

</tr>

<tr>

<td>**Two-way binding to objects selected from the context**</td>

<td>Only available when publishing a Task or defining a Report Link. When running a Task or opening a Link, the objects selected by the user are sent as input to the Task or Link. Selecting this option connects the data source directly to the objects selected by the users, and gives you the opportunity to exeute context sensitive actions.</td>

</tr>

<tr>

<td>**Get objects from the clipboard**</td>

<td>Populates the data source with data placed on the clipboard. See [copy and paste data](../../../../../how-to/exchange-data-with-other-applications/copy-and-paste-data.md) for examples. If the data source is of type **General File** or **File Folder**, click **Reject files of type** if you do not want to include all files placed on the clipboard. For example, you may want to process mail messages in a separate data source of type **Mail Message**.</td>

</tr>

<tr>

<td>**All objects**</td>

<td>Populates the data source with all objects of a given type, for example all *Product Categories*.</td>

</tr>

<tr>

<td>**One-way binding to objects in the data source**</td>

<td>Only available when filtering data in the [Run a Task](run-a-task.md) effect. Populates the data source in the task that is called with the same objects as a data source in the current task. If the task that is called makes changes to the data source while executing, this is not reflected in the data source used for filtering.</td>

</tr>

<tr>

<td>**Two-way binding to objects in the data source**</td>

<td>Only available when filtering data in the [Run a Task](run-a-task.md) effect. Populates and binds the data source in the task that is called with the objects in a data source in the current task. If the task that is called makes changes to the data source while executing, this is reflected in the data source that is bound.</td>

</tr>

<tr>

<td>**Select a specific set of objects**</td>

<td>Populates the data source with a static selection of objects, for example a selection of *Product Categories*.</td>

</tr>

<tr>

<td>**Select a saved search**</td>

<td>Only available when [distributing reports](distribution-of-reports.md "Distribution of Reports"). Select this option if a saved search is to be used as a filter for your report.</td>

</tr>

<tr>

<td>**Select objects which meet the condition**</td>

<td>

Populates the data source with a dynamic selection of objects which satisfies a condition, for example all *employees working in a department*. Follow the instructions in the [step-by-step procedure](../../../../common-concepts/conditions.md) on how to define a condition. To read the objects from another data source instead of from the database, select the **Read Objects from Data Source** check box. In the **Read Objects from Data Source** list, select which data source to read objects from.

</td>

</tr>

<tr>

<td>**Select objects which meet one of the conditions**</td>

<td>Same as the option above, but gives you the opportunity to define one or more filter conditions with a conditional statement. The conditional statement determines which filter condition to apply.</td>

</tr>

</tbody>

</table>

**Sorting**

You can control the way objects are sorted and the number of objects to read when data are filtered. You might want to process data in a certain order, or only process objects with the highest or lowest values within a range, such as candidates with the top 10 grades or products with the bottom 5 sales amounts.

To sort data, do the following:

1.  In the **Sort By** box, click **Modify**.
2.  In the **Sort objects by** list, click a field.
3.  To sort in ascending alphanumeric order, click **Ascending**. To sort in descending alphanumeric order, click **Descending**.
4.  To sort by an additional field, click a field in the **Then by** list.

To limit the number of objects to read, click **Read the first object(s)** and then do one of the following:

*   Click in the **Read the first object(s) field** and in the menu, click **Enter a number** or press F2 and then enter a value.
*   To select a field from one of your data sources, in the **Read the first object(s)** field, click **Select field or group**. In the **Select Field or Group** dialog box, select a field of data type Integer.  

