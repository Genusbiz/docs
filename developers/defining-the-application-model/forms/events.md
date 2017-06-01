# Events

Events are used to make specific [Commands](commands.md) available to the users through menu items and buttons, and to react to a number of other occurences in the form, like when a view is opened or a control receives focus.


## Add an event

1.  In the **Form Description** area, click **Events**.
2.  In the **Task Pane**, click **Add**.
3.  In the **Properties** area, configure settings for the event. The different settings are described in the sections below.



## General settings for an Event

Property                   | Description
---------------------------|------------------------------
Control                    | The control or view the event is associated with. For some controls events can also be associated with elements within the control, for example series in the [chart](views/desktop-controls/reporting-and-visualization-controls/chart.md) control, and nodes in the [diagram](views/desktop-controls/reporting-and-visualization-controls/diagram.md) control.
Data Source                | Specifies which data source to react to changes in. Only applicable for **On Value Changed** event type.
Fields                     | Specifies which data source fields to react to changes in. The event occurs when a change is detected in any one of the specified fields. Only applicable for the On Value Changed event type.
Menu                       | Determines where the event appear in menus, and when the event is invoked. For more information, see Menus below.
Type                       | The type of event that has occured. For information on the available types see Event Types below.


## Event types

The available event types and what controls they are applicable for.

Event Type                     | Applicable For                            | Description
-------------------------------|-------------------------------------------|------------------------------------
On Activate                    | Various controls                          | The user has double clicked the control or pressed **ENTER** in the control.
On Active Object Changed       | Form                                      | The active object of a data source has changed. For more information, see [Active Object](../common-concepts/active-object.md).
On Before Active Object Change | Form                                      | The active object of a data source is about to change. For more information, see [Active Object](../common-concepts/active-object.md).
On Click                       | Button, Check Box, and Text controls      | The control is clicked by the user.
On Close                       | Form                                      | The Form is about to close.
On Drop                        | Diagram Node                              | A drag and drop operation is performed which ends on a node in the [diagram](views/desktop-controls/reporting-and-visualization-controls/diagram.md).
On Focused                     | Containers and various other controls     | The control has received focus, for example the control is next in the tab sequence and the user presses **TAB**.
On Load Form                   | Form                                      | The form is opened.
On Load View                   | View                                      | The view is displayed. This event type is always triggered when a view is shown, regardless of how it was activated.
On Menu Item Click             | Containers and various other controls     | The menu item for a control is selected by the user.
On Open View                   | View                                      | The view is opened in a separate window, using the [Open View](commands.md) effect.
On Switch View                 | View                                      | The view is displayed in the same window, using the [Switch View](commands.md)effect.
On Value Changed               | Form                                      | A field in a data source has changed value.


## Menus

The selected menu corresponds to, and publishes the event in, a windows menu. Some menu values also makes the event available through the task pane, a mouse action, or a keyboard shortcut.

Menu               | Windows Menu              | Task Pane | Mouse Action / Keyboard Shortcut
-------------------|---------------------------|-----------|---------------------------------
Actions            | Actions                   | Actions   |
Copy               | Edit - Copy               |           | CTRL+C
Delete             | File - Delete             |           | DELETE
Explore            | Explore                   | Explore   |
Forward            | File - Forward            |           |
New                | File - New                |           | CTRL+N
None               |                           |           |
Open               | File - Open               |           |
Open in New Window | File - Open in New Window |           | Double Click, ENTER
Paste Special      | Edit - Paste Special      |           | CTRL+V
Preview            | File - Preview            |           |
Print              | File - Print              |           |
Report             | Report                    | Report    |
Reply              | File - Reply              |           |
Send               | File - Send               |           |