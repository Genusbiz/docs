## Commands

Commands are used to specify tasks and operations in the form. A command is triggered through the Ribbon, or by an [Event](events.md).

Choose from a wide range of effect types that are characteristic for forms, or run a [task](../tasks.md) to employ the full functionality of [action orchestration](../action-orchestration.md).

To see if a command is used within the form, right click the command, and click **Find Local References**.


## Add a Command

1.  In the **Form Description** area, click **Commands**.
2.  In the **Task Pane**, click **Add**.
3.  In the **Properties** area, configure settings for the command. The settings are described in the sections below.



## General Settings for a Command

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Checked Binding</td>

<td>

Defines when the ribbon button is displayed as marked. This is a binding to a data source field with data type boolean. When the value is True, the ribbon button is displayed as marked, and when the value is False, the ribbon button is displayed as normal. Use a task to modify the value of the field to change the state of the ribbon button. This is useful to display additional information regarding the state of an option directly on the ribbon button, for example for a ribbon button Detail View which turns the display of detailed information on or off in the form.

</td>

</tr>

<tr>

<td>Control</td>

<td>

The control or view the command is associated with. For some controls commands can also be associated with elements within the control, for example series in the [chart](views/desktop-controls/reporting-and-visualization-controls/chart.md) control, and nodes in the [diagram](views/desktop-controls/reporting-and-visualization-controls/diagram.md) control. For the command to be visible, the control or one of the parent controls must have focus.

</td>

</tr>

<tr>

<td>Create Data</td>

<td>Specifies how to create new data for data sources when opening a form. Only applicable for the **Open a Form** command type.</td>

</tr>

<tr>

<td>Data Binding</td>

<td>

Specifies how the data flows to and from a form opened with a **Open a Form** command type

**One Way**

Updates the opened form with source data from the source form. Changes to the data in the opened form is not recognized in the source form.

**Two Way**

Updates both the opened form and the source form when data changes in either.

</td>

</tr>

<tr>

<td>Data Source</td>

<td>Specifies which data source to react to changes in. Only applicable for **On Value Changed** event type.</td>

</tr>

<tr>

<td>Description</td>

<td>A short description describing the purpose of the command.</td>

</tr>

<tr>

<td>Disabled Screen Tip</td>

<td>An extra screen tip that is displayed below the regular screen tip. It is only displayed when the command is disabled, and should describe what is required for the command to be activated.</td>

</tr>

<tr>

<td>Effect</td>

<td>The effect when the command is triggered. The possible effects varies according to the command type. For more information see Command Types below.</td>

</tr>

<tr>

<td>Enabled</td>

<td>

The command is enabled or disabled. When a command is represented by an item in a menu or a button in the ribbon, or is connected to a button, the menu item, ribbon button, and button are all disabled if the command is disabled.  

**Yes**  
The command is enabled.  

**No**  
The command is disabled.  

**Condition...**  
A condition determines if the command is enabled. Use a condition when the command should only be enabled in som cases, for example depending on the state of an object.

</td>

</tr>

<tr>

<td>Filter Data</td>

<td>Specifies how to filter data for data sources when opening a form. Only applicable for the **Open a Form** command type.</td>

</tr>

<tr>

<td>Hide in Ribbon</td>

<td>Option to hide the command when customizing the ribbon. This is useful for commands that are intended for use with events only, for example background events.</td>

</tr>

<tr>

<td>Name</td>

<td>Name displayed in the ribbon and menus where the command appears. If the name is blank, the name of the effect is used.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>The screen tip which is displayed when the mouse cursor is moved over the ribbon button or the menu item for the command. Only available for the **On Menu Item Click** event type.</td>

</tr>

<tr>

<td>Symbol</td>

<td>Symbol that is displayed for the command in the ribbon and menus.</td>

</tr>

<tr>

<td>Tip</td>

<td>Short text that is displayed along with the command name, to make it easier to distinguish between similar commands when customizing the ribbon.</td>

</tr>

<tr>

<td>Type</td>

<td>

The type of effect for the command. For more information, see Command Types below.

</td>

</tr>

<tr>

<td>View</td>

<td>

The view to use when opening the form specified in the **Effect** option. Only applicable for the **Open A Form** command type.

</td>

</tr>

<tr>

<td>Visible</td>

<td>

Determines if the command is visible.

**Yes**

The command is visible.

**No**  

The command is not visible.

**Conditional**

A condition determines if the command item is visible. Use a condition when the command should only be visible in some cases, for example depending on the state of an object.

</td>

</tr>

</tbody>

</table>

## Command Types

The table below describes the available command types, when the command types are available, and the settings for the effect property.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Effect Type</th>

<th>Description</th>

<th>Effect</th>

<th>Applicable for Event Types</th>

</tr>

<tr>

<td>Apply Changes</td>

<td>Changes in the form are saved.</td>

<td>

N/A

</td>

<td>

On Activate, On Active Object Changed, On Click,

On Focused, On Menu Item Click, On Value Changed

</td>

</tr>

<tr>

<td>Close</td>

<td>Close the form window. The Effect determines what happens if there are unsaved changes.</td>

<td>

**Discard Changes**

Any unsaved changes in the form are discarded.

**Save Changes**

Unsaved changes in the form are saved.

**Query Save Changes**

Ask the user what to do, if there are any unsaved changes.

</td>

<td>

On Activate, On Active Object Changed, On Click,

On Focused, On Menu Item Click, On Value Changed

</td>

</tr>

<tr>

<td>Combined</td>

<td>Performs several commands that are contained within the combined command. Add commands directly to the combined command, or drag existing commands into the combined command.</td>

<td>N/A</td>

<td></td>

</tr>

<tr>

<td>Delete Objects</td>

<td>Deletes the selected objects from the data source the control is bound to.</td>

<td>N/A</td>

<td>

On Activate, On Active Object Changed, On Click,

On Focused, On Menu Item Click, On Value Changed

</td>

</tr>

<tr>

<td>Open a Form</td>

<td>Open another form in a new window.</td>

<td>Select a form.</td>

<td>

On Activate, On Active Object Changed, On Click, On Focused,

On Menu Item Click, On Switch View, On Value Changed

</td>

</tr>

<tr>

<td>Open a Report</td>

<td>Open a report in a new window.</td>

<td>Select a report</td>

<td>

On Activate, On Active Object Changed, On Click, On Focused,

On Menu Item Click, On Switch View, On Value Changed

</td>

</tr>

<tr>

<td>Open HTML / Rich Text Editor</td>

<td>Open an editor to modify HTML or RTF encoded text.</td>

<td>

**Data Binding**

Specifies the location of the data to edit. For more information, see [Data Binding](../../../users/searching-for-data/data-binding.md "Data Binding") and [Data Binding Fundamentals](views/desktop-controls/list-and-lookup-controls/data-binding-fundamentals.md "Data Binding Fundamentals").

**Default Font - Size**

Specify the default font size if the field is initially empty.

**Default Font - Name**

Specify the default font if the field is initially empty.

</td>

<td>

On Activate, On Active Object Changed, On Click,

On Focused, On Menu Item Click, On Value Changed

</td>

</tr>

<tr>

<td>Open View</td>

<td>Open a view in the form, in a new window.</td>

<td>Select a view from this form.</td>

<td>

On Activate, On Active Object Changed, On Click, On Focused,

On Menu Item Click, On Switch View, On Value Changed

</td>

</tr>

<tr>

<td>Refresh</td>

<td>The data sources in the form are refreshed. This has the same effect as clicking the Refresh button in the toolbar or, pressing **F5**.</td>

<td>

**Restrict to Data Sources**

To only refresh some of the data sources, select these in the list of data sources. To refresh all, all the data sources can be left un-checked.

</td>

<td>

On Activate, On Active Object Changed, On Click, On Focused, On Menu Item Click, On Value Changed

</td>

</tr>

<tr>

<td>Revert Changes</td>

<td>Any changes in the data sources in the form are discarded. This has the same effect as clicking the Revert Changes button in the toolbar.</td>

<td>N/A</td>

<td>On Activate, On Active Object Changed, On Click, On Focused, On Menu Item Click, On Value Changed</td>

</tr>

<tr>

<td>Run a Command</td>

<td>Run another command in the form. Useful for improving availability and naming of commands that are available from Table controls. Also useful in combination with combined commands.</td>

<td>Select a command from this form.</td>

<td></td>

</tr>

<tr>

<td>Run a Task (Global Scope)</td>

<td>Run a [task](../tasks.md) which is not defined within the form.</td>

<td>Select a task from the directory.</td>

<td>All</td>

</tr>

<tr>

<td>Run a Task (Local Scope)</td>

<td>Run a [task](tasks.md) which is defined within the form.</td>

<td>Select a task from this form.</td>

<td>All</td>

</tr>

<tr>

<td>Switch View</td>

<td>Switch to another view in the form.</td>

<td>Select a view from this form.</td>

<td>

On Activate, On Active Object Changed, On Click, On Focused,

On Menu Item Click, On Switch View, On Value Changed

</td>

</tr>

</tbody>

</table>

