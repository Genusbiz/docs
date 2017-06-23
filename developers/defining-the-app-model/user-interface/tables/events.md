# Events

This part of the setup allows you to define how users can interact with objects in data sources bound to row templates. In the setup, you can define:

*   Built-in effects. such as *New* and *Open*, available to users.
*   Tasks and Reports available to users in the Task Pane and menus.


## Add an Event

1.  In the **Table Description** area, click **Events**.
2.  In the **Task Pane**, click **Add**.
3.  In the **Properties** area, configure settings for the event. The different settings are described in the sections below.



## General Settings for an Event

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Event Type</td>

<td>The type of evvent that has occurred. Currently the only supported event type is **On Menu Item Click**.</td>

</tr>

<tr>

<td>Row</td>

<td>Which row template in the table layout the event is associated with. For example, an event associated with the **Open** command can be bound to a row to open the selected object in a Form.</td>

</tr>

<tr>

<td>Column</td>

<td>Which column in the table layout the event is associated with. For example, an event associated with the **Open** command can be bound to a column to open an outbound object in a cell, such as the *Department* column in a table presenting *employees*.</td>

</tr>

<tr>

<td>Applies to Row</td>

<td>Applies if the event is bound to a column with a data type pointing to an object domain, and the command is **Open SOP* - (Modify)**. That is, if you want to open an outbound object when users activate an row, select this option. For example, in a table presenting a relation between two objects, the object of interest is not the object bound to the row, but one of the objects in the relation.</td>

</tr>

<tr>

<td>Effect Type</td>

<td>The operation performed by the event: **Insert a New Row**, **Open a Form**, **Run a Task**, **Delete Objects**, **Open a Report**, **Drill Aggregated Field**, or **Open Associated Objects**. For more information, see the article below describing available effects for an event.</td>

</tr>

<tr>

<td>Effect</td>

<td>The effect for the event. Depending on the effect type, the event can point to a Task, a Form, a Report, an aggregated measure, or an Object Class.</td>

</tr>

<tr>

<td>Menu</td>

<td>Determines where the event appear in menus, and when the event is invoked. For more information, see the article below describing available menus for an event.</td>

</tr>

<tr>

<td>Custom Name</td>

<td>Name displayed in menus where the event appears. If the name is blank, the name of the effect is used.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>Applies if the effect for the event is a Task. If the screen tip spans more than one line, add an empty line after the first line to make the first line the title of the screen tip. The title appears in bold, and is separated from the body text with a thin line.</td>

</tr>

<tr>

<td>Description</td>

<td>A short description describing the purpose of the event.</td>

</tr>

<tr>

<td>Is Default</td>

<td>Applies if menu is **New**. Only one event can be marked as default. The event marked as default is executed when users click the **New** button in the toolbar, or press the keyboard shortcut for the **New** command (CTRL+N). Actions not marked as default are available in the sub menu for the **New** command.</td>

</tr>

<tr>

<td>Refresh Table when the Task has Finished</td>

<td>

Applies if the effect for the event is a Task.

When selected, the table does not refresh the data sources during the execution of the task, but waits until the task is finished before refreshing the data sources. This means that the table does not appear responsive while the task is running, but if the task performs many modifications on the data sourcess it will finish much faster, as no time will be spent on updating the table for every modification the task performs.

Data sources with the option **Reload Objects on Refresh** selected, are reloaded after the Task has run. Typically you would select this option if objects are modified by an external application, such as a stored procedure in a relational database system.

</td>

</tr>

</tbody>

</table>



## Available Menus for an Event

The table below describes where an event appears in menus, and the prerequisites for associating an event with a menu.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Menu</th>

<th>Windows Menu</th>

<th>Available if Bound to</th>

<th>Other Resctrictions</th>

<th>Comment</th>

</tr>

<tr>

<td>New</td>

<td>File - New</td>

<td>Row or Column</td>

<td>If bound to a column, the data type for the column has to point to an object domain. The column has to be of type **Data**.</td>

<td></td>

</tr>

<tr>

<td>Open</td>

<td>File - Open</td>

<td>Row</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Open in New Window</td>

<td>File - Open in New Window</td>

<td>Row or Column</td>

<td>If bound to a column, the data type for the column has to point to an object domain.</td>

<td></td>

</tr>

<tr>

<td>Explore</td>

<td>Explore</td>

<td>Column</td>

<td></td>

<td>Used to explore an aggregated measure or associated objects.</td>

</tr>

<tr>

<td>Invoke File</td>

<td>Activate table row (double click / ENTER)</td>

<td>Row</td>

<td></td>

<td>Opens the file associated with an object. That is, the file stored in a property interpreted as **File Data** (only one property in an Object Class can be defined with this interpretation).</td>

</tr>

<tr>

<td>Delete</td>

<td>Edit - Delete</td>

<td>Row</td>

<td>Only available if the Effect Type is Delete.</td>

<td></td>

</tr>

<tr>

<td>Print</td>

<td>File - Print</td>

<td>Row</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Preview</td>

<td>File - Preview</td>

<td>Row</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Run</td>

<td>Actions, Task Pane (Actions)</td>

<td>Row or Column</td>

<td>If bound to a column, the column has to be of type **Identifying Data**.</td>

<td>Allows you to perform the event with a binding to an object which identifies a row in a multidimensional table layout.</td>

</tr>

<tr>

<td>Report</td>

<td>Report, Task Pane (Report)</td>

<td>Row or Column</td>

<td>If bound to a column, the column has to be of type **Identifying Data**.</td>

<td>Allows you to perform the event with a binding to an object which identifies a row in a multidimensional table layout.</td>

</tr>

<tr>

<td>Paste Special</td>

<td>Edit - Paste Special</td>

<td>Row</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Copy</td>

<td>Edit - Copy</td>

<td>Row</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Send</td>

<td>File - Send</td>

<td>Row or Column</td>

<td>If bound to a column, the column has to be of type **Identifying Data**.</td>

<td>Allows you to perform the event with a binding to an object which identifies a row in a multidimensional table layout.</td>

</tr>

<tr>

<td>Reply</td>

<td>File - Reply</td>

<td>Row or Column</td>

<td>If bound to a column, the column has to be of type **Identifying Data**.</td>

<td>Allows you to perform the event with a binding to an object which identifies a row in a multidimensional table layout.</td>

</tr>

<tr>

<td>Forward</td>

<td>File - Forward</td>

<td>Row or Column</td>

<td>If bound to a column, the column has to be of type **Identifying Data**.</td>

<td>Allows you to perform the event with a binding to an object which identifies a row in a multidimensional table layout.</td>

</tr>

</tbody>

</table>



## Available Effect Types for an Event

The table below describes supported effect types for an event, and the prerequisites for associating an event with an effect type.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Effect Type</th>

<th>Comment</th>

</tr>

<tr>

<td>Insert a New Row</td>

<td>

Display a new item row to enter data and create a new object.

</td>

</tr>

<tr>

<td>Delete Objects</td>

<td>Delete selected objects.</td>

</tr>

<tr>

<td>Open a Form</td>

<td>Open the Form selected as effect.</td>

</tr>

<tr>

<td>Run a Task</td>

<td>Run the Task selected as target. If the command equals **Copy**, the content of data sources in the Task which represent an XML document or a file, are placed on the clibpoard after the Task is run. Note that if the Task contains any effects of type [Copy Data to the Clipboard](../../logic/action-orchestration/actions/effects/copy-data-to-the-clipboard.md), the content of the data sources are not placed on the clipboard. That is, the data placed on the clipboard by effects are prioritized. If the command equals **Paste Special**, the Task will appear in the **Paste Special** dialog box. The task will only appear in the dialog if a) the option **Get object(s) from the clipboard** is selected as data filter for one or more data sources and b) the clipboard contains data that can be used to populate these data sources. See [copy and paste data](../../../how-to/exchange-data-with-other-applications/copy-and-paste-data.md) for more information.</td>

</tr>

<tr>

<td>Open a Report</td>

<td>Open the Report selected as target.</td>

</tr>

<tr>

<td>Explore Aggregated Data</td>

<td>Explore objects in the base data source for the aggregated measure.</td>

</tr>

<tr>

<td>Explore Associated Objects</td>

<td>Explore objects in an Object Class. The association is defined by specifying a data filter.</td>

</tr>

</tbody>

</table>



## Restrict Access to an Event

To restrict access to an event, in the **Properties** area, click the **Enabling** tab. Access is restricted by specifying:

*   When an event is available.
*   When an event is enabled.
*   In which views the event is hidden.

To control when an event is available, choose one of the options in the **Available** section. When an event is unavailable, it is hidden in menus.

 <table style="WIDTH: 100%">

<tbody>

<tr>

<th>Option</th>

<th>Description</th>

</tr>

<tr>

<td>On Activate Object</td>

<td>The event is available when one object is marked as active in the table.</td>

</tr>

<tr>

<td>On Select Objects</td>

<td>The event is available when one or more objects are selected in the table.</td>

</tr>

<tr>

<td>Always</td>

<td>The event is available irrespective of the number of objects selected.</td>

</tr>

</tbody>

</table> 

To control when an event is visible, choose one of the options in the **Visible** section:

 <table style="WIDTH: 100%">

<tbody>

<tr>

<th>Option</th>

<th>Description</th>

</tr>

<tr>

<td>No</td>

<td>The event is never visible. Select this option to temporarily hide an event.</td>

</tr>

<tr>

<td>Yes</td>

<td>The event is always Visible.</td>

</tr>

<tr>

<td>If this condition is true</td>

<td>The event is visible if the active object, or the selected objects, satisfies certain criteria.</td>

</tr>

</tbody>

</table> 

To control when an event is enabled, choose one of the options in the **Enabled** section:

 <table style="WIDTH: 100%">

<tbody>

<tr>

<th>Option</th>

<th>Description</th>

</tr>

<tr>

<td>No</td>

<td>The event is always disabled. Select this option to temporarily disable an event.</td>

</tr>

<tr>

<td>Yes</td>

<td>The event is always enabled.</td>

</tr>

<tr>

<td>If this condition is true</td>

<td>The event is enabled if the active object, or the selected objects, satisfies certain criteria.</td>

</tr>

</tbody>

</table> 

To hide an event in one or more views, click **Modify** in the **Hidden in Views** box.



## Filtering Data for an Event

To filter data for an event, in the **Properties** area, click the **Data Filters** tab. Data can be filtered if the target for the event is a Task, a Report or an Object Class.

Data filtering enables you to run context sensitive actions with respect to the current active object in a table, or the selected objects. If the target for the action is a Task or a Report, you can specify a data filter for each data source provided by the Task or the Report. If the target is an Object Class, that is, the purpose of the action is to explore associated objects, you can filter data in the Object Class.

For more information on how to filter a data source, see the article [Specifying a Data Filter for a Data Source](../../logic/action-orchestration/data-sources/specifying-a-data-filter-for-a-data-source.md).



## Sort Events

To change the display order of events in menus and in the Task Pane, click **Sort**. In the **Sort Events** dialog box, you can change the sort order for events associated with the same command. To move an event, click the event you want to move, and then click **Move Up** or **Move Down** until the event is in the position you want.

