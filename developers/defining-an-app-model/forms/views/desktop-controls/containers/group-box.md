# Group box

The group box is a box with a header, title, and border, that can contain other controls. The group box is typically used to create a named logical group for other controls, which may be collapsible to hide the content and show only the header.

![IDBBA26A1C90EF4E85.png](media/IDBBA26A1C90EF4E85.png)

To achieve the desired [layout](../../view-layout-fundamentals.md), combine several groups and other containers, and place them next to or inside each other, with different orientation.

The group box control can easily be changed into a [group](group.md) control, by changing the **Container Type**.  


## Properties

See [Common Container Properties](common-container-properties.md) and [Common Control Properties](../common-control-properties.md), in addition to the control specific properties below.

### General

Property                   | Description
---------------------------|--------------------------------
Is Collapsed               | The group box is initially collapsed. This option has no effect if the group box is not collapsible.
Is Collapsible             | The group box can be collapsed or expanded, to hide or show the content, by clicking on the title area. If the title area is not displayed, it is not possible to collapse or expand the group box.
Show Summary when Expanded | In addition to displaying the summary fields when the group box is collapsed, with this option enabled, the summary fields are displayed also when the group box is expanded.<br><br>This option is disabled by default.
Show Title                 | The title area is displayed. This option is default selected.
Summary Fields             | Summary fields are used to provide quick access to information contained within a group box. The fields are displayed to the right in the group box title when the group box is collapsed.<br><br>See below for details on the summary field properties.


### Format

Property                 | Description
-------------------------|--------------------------------
Transparent Title Area   | Removes the background color for the title area, and shows the color from the control behind the group box.


### Summary field properties

Property                 | Description
-------------------------|--------------------------------
Data Binding             | The value for the field. See [Data Binding](../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](../data-binding-fundamentals.md "Data Binding Fundamentals").
Label                    | The label for the field. Enter a text in the box, or click the "..." button in the box to select a field.
Label - Colon Suffix     | Show a colon ":" after the label.
Show Label in Title      | By default the value is displayed in the group box title, and the label and value are displayed in the tool tip. Enable this option to include the label in the group box title.

