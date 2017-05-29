## Combo Box

The combo box combines the functionality of a single-line text editor with a dropdown window. The dropdown displays a list of items which can be selected by the end-user. Selecting an item changes the editor's edit value. To empty a combo box, the user must press the CTRL + DELETE keys.

The control supports both data binding types

*   Value: the control can be bound to a field that references other objects
*   Object: the control can be bound to a data source

**Properties**

See [Common Control Properties](../common-control-properties.md), in addition to the control specific properties below.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Data Filter</td>

<td>

Filters the data for the control.

*   For data binding type Object, the data binding data source is filtered.
*   For data binding type Value, the data source referenced by the data binding field is filtered.

</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Display Value</td>

<td>A field in the data source to display as the value in the list.</td>

</tr>

<tr>

<td>Open in Default Form</td>

<td>The selected object can be opened using the [default form](../../../../object-class/modify-an-object--or-identifier-domain/explore.md) for the object class.</td>

</tr>

<tr>

<td>Show Special Items</td>

<td>

Show items to assist the user with selection

*   **None** - the user can click to clear the value. Only displayed for Native and Radio Button styles.
*   **Select All** - the user can click this item to select all the items. Only displayed for Check Box style.

</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Sort Order</td>

<td>

Sort the list by display value

**None**

Do not sort.

**Ascending**

Sort alphabetically ascending.

**Descending**

<span style="FONT-WEIGHT: normal">Sort alphabetically descending.

</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Style</td>

<td>

Defines the visual style of the control

**Native**

Show as standard combo box.

**Check Box**

Show as a list of check boxes.

**Radio Button**

Show as a list of radio buttons.

</td>

</tr>

</tbody>

</table>