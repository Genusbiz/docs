## Group Box

The group box is a box with a header, title, and border, that can contain other controls. The group box is typically used to create a named logical group for other controls, which may be collapsible to hide the content and show only the header.

![IDBBA26A1C90EF4E85.png](media/IDBBA26A1C90EF4E85.png)

To achieve the desired [layout](../../view-layout-fundamentals.md), combine several groups and other containers, and place them next to or inside each other, with different orientation.

The group box control can easily be changed into a [group](group.md) control, by changing the **Container Type**.  


## Properties

See [Common Container Properties](common-container-properties.md) and [Common Control Properties](../common-control-properties.md), in addition to the control specific properties below.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Is Collapsed</td>

<td>The group box is initially collapsed. This option has no effect if the group box is not collapsible.</td>

</tr>

<tr>

<td>Is Collapsible</td>

<td>The group box can be collapsed or expanded, to hide or show the content, by clicking on the title area. If the title area is not displayed, it is not possible to collapse or expand the group box.</td>

</tr>

<tr>

<td>Show Summary when Expanded</td>

<td>

In addition to displaying the summary fields when the group box is collapsed, with this option enabled, the summary fields are displayed also when the group box is expanded.

This option is disabled by default.

</td>

</tr>

<tr>

<td>Show Title</td>

<td>The title area is displayed. This option is default selected.</td>

</tr>

<tr>

<td>Summary Fields</td>

<td>

Summary fields are used to provide quick access to information contained within a group box. The fields are displayed to the right in the group box title when the group box is collapsed.  

See below for details on the summary field properties.

</td>

</tr>

</tbody>

</table>

**Format**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Transparent Title Area</td>

<td>Removes the background color for the title area, and shows the color from the control behind the group box.</td>

</tr>

</tbody>

</table>

## Summary Field Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>The value for the field. See [Data Binding](../../../../../../users/searching-for-data/data-binding.md "Data Binding") and [Data Binding Fundamentals](../list-and-lookup-controls/data-binding-fundamentals.md "Data Binding Fundamentals").</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the field. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Label - Colon Suffix</td>

<td>Show a colon ":" after the label.</td>

</tr>

<tr>

<td>Show Label in Title</td>

<td>By default the value is displayed in the group box title, and the label and value are displayed in the tool tip. Enable this option to include the label in the group box title.</td>

</tr>

</tbody>

</table>

