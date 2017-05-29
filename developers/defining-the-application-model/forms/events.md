## Events

Events are used to make specific [Commands](commands.md) available to the users through menu items and buttons, and to react to a number of other occurences in the form, like when a view is opened or a control receives focus.

In this article

* * *

*   [Add an Event](#add-an-event)

*   [General Settings for an Event](#general-settings-for-an-event)

*   [Event Types](#event-types)

*   [Menus](#menus)

* * *

## Add an Event

1.  In the **Form Description** area, click **Events**.
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

<td>Control</td>

<td>

The control or view the event is associated with. For some controls events can also be associated with elements within the control, for example series in the [chart](views/desktop-controls/reporting-and-visualization-controls/chart.md) control, and nodes in the [diagram](views/desktop-controls/reporting-and-visualization-controls/diagram.md) control.

</td>

</tr>

<tr>

<td>Data Source</td>

<td>Specifies which data source to react to changes in. Only applicable for **On Value Changed** event type.</td>

</tr>

<tr>

<td>Fields</td>

<td>

Specifies which data source fields to react to changes in. The event occurs when a change is detected in any one of the specified fields. Only applicable for the On Value Changed event type.

</td>

</tr>

<tr>

<td>Menu</td>

<td>

Determines where the event appear in menus, and when the event is invoked. For more information, see Menus below.

</td>

</tr>

<tr>

<td>Type</td>

<td>

The type of event that has occured. For information on the available types see Event Types below.

</td>

</tr>

</tbody>

</table>

## Event Types

The available event types and what controls they are applicable for.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

Event Type

</th>

<th>Applicable For</th>

<th>Description</th>

</tr>

<tr>

<td>On Activate</td>

<td>Various controls</td>

<td>The user has double clicked the control or pressed **ENTER** in the control.</td>

</tr>

<tr>

<td>On Active Object Changed</td>

<td>Form</td>

<td>The active object of a data source has changed. For more information, see [Active Object](../common-concepts/active-object.md).</td>

</tr>

<tr>

<td>On Before Active Object Change</td>

<td>Form</td>

<td>The active object of a data source is about to change. For more information, see [Active Object](../common-concepts/active-object.md).</td>

</tr>

<tr>

<td>On Click</td>

<td>Button, Check Box, and Text controls</td>

<td>The control is clicked by the user.</td>

</tr>

<tr>

<td>On Close</td>

<td>Form</td>

<td>The Form is about to close.</td>

</tr>

<tr>

<td>On Drop</td>

<td>Diagram Node</td>

<td>A drag and drop operation is performed which ends on a node in the [diagram](views/desktop-controls/reporting-and-visualization-controls/diagram.md).</td>

</tr>

<tr>

<td>On Focused</td>

<td>Containers and various other controls</td>

<td>The control has received focus, for example the control is next in the tab sequence and the user presses **TAB**.</td>

</tr>

<tr>

<td>On Load Form</td>

<td>Form</td>

<td>The form is opened.</td>

</tr>

<tr>

<td>On Load View</td>

<td>View</td>

<td>The view is displayed. This event type is always triggered when a view is shown, regardless of how it was activated.</td>

</tr>

<tr>

<td>On Menu Item Click</td>

<td>Containers and various other controls</td>

<td>The menu item for a control is selected by the user.</td>

</tr>

<tr>

<td>On Open View</td>

<td>View</td>

<td>The view is opened in a separate window, using the [Open View](commands.md) effect.</td>

</tr>

<tr>

<td>On Switch View</td>

<td>View</td>

<td>The view is displayed in the same window, using the [Switch View](commands.md) effect.</td>

</tr>

<tr>

<td>On Value Changed</td>

<td>Form</td>

<td>A field in a data source has changed value.</td>

</tr>

</tbody>

</table>



## Menus

The selected menu corresponds to, and publishes the event in, a windows menu. Some menu values also makes the event available through the task pane, a mouse action, or a keyboard shortcut.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

Menu

</th>

<th>Windows Menu</th>

<th>Task Pane</th>

<th>Mouse Action / Keyboard Shortcut</th>

</tr>

<tr>

<td>Actions</td>

<td>

Actions

</td>

<td>Actions</td>

<td></td>

</tr>

<tr>

<td>Copy</td>

<td>

Edit - Copy

</td>

<td></td>

<td>CTRL+C</td>

</tr>

<tr>

<td>Delete</td>

<td>File - Delete</td>

<td></td>

<td>DELETE</td>

</tr>

<tr>

<td>Explore</td>

<td>Explore</td>

<td>Explore</td>

<td></td>

</tr>

<tr>

<td>Forward</td>

<td>File - Forward</td>

<td></td>

<td></td>

</tr>

<tr>

<td>New</td>

<td>File - New</td>

<td></td>

<td>CTRL+N</td>

</tr>

<tr>

<td>None</td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Open</td>

<td>File - Open</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Open in New Window</td>

<td>File - Open in New Window</td>

<td></td>

<td>Double Click, ENTER</td>

</tr>

<tr>

<td>Paste Special</td>

<td>Edit - Paste Special</td>

<td></td>

<td>CTRL+V</td>

</tr>

<tr>

<td>Preview</td>

<td>File - Preview</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Print</td>

<td>File - Print</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Report</td>

<td>

Report

</td>

<td>Report</td>

<td></td>

</tr>

<tr>

<td>Reply</td>

<td>File - Reply</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Send</td>

<td>File - Send</td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

