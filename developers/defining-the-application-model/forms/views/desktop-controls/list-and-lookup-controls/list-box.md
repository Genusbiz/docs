## List Box

The list box edit displays a list of items, from which one or more can be selected, depending on the selection mode.

The control supports both data binding types

*   Value: the control can be bound to a field that references other objects
*   Object: the control can be bound to a data source

**Properties** 

See [Common Control Properties](../common-control-properties.md), in addition to the control specific properties below.

**General**

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

<td> Filters the data for the control.

*   For data binding type Object, the data binding data source is filtered.
*   For data binding type Value, the data source referenced by the data binding field is filtered. </td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Default Selection</td>

<td>

Defines which items in the list that are selected initially. Only applicable for data binding type Object.

**None**

No items are selected

**Mark First Item**

The first item in the list is selected.

**Condition**

A condition defines which items are initially selected.

</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Display Value</td>

<td>A field in the data source to display as the value in the list.</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Orientation</td>

<td>

**Horizontal**

The items in the list is displayed from left to right.

**Vertical**

The items in the list is displayed from top to bottom.

</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Selection Mode</td>

<td>

<span style="FONT-WEIGHT: normal">Defines how the control accepts selection of items.

**Single**

Only one item can be selected at the time.

**Multiple**

Several items can be selected at the same time. An item is selected or de-selected by clicking on it.

**Extended**

Several items can be selected at the same time. To select consecutive items, click the first item, press and hold down SHIFT, and then click the last item. To select nonconsecutive items, press and hold down CTRL, and then click each item.

</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Show Special Items</td>

<td>

Show items to assist user with selection

*   **None -** <span style="FONT-WEIGHT: normal">the user can click this item to clear the value. Only displayed for Native style Single selection mode.
*   **(Select All)** - the user can click this item to select all the items. Only displayed for Check Box style.

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

**Native**

Displays a plain list of items. Can be combined with all selection modes.

**Check Box**

Displays a list of items where each item is preceeded by a check box. Only available in combination with selection mode Multiple.

**Radio Button**

Displays a list of items where each item is preceeded by a radio button. Only available in combination with selection mode Single.

</td>

</tr>

</tbody>

</table>

**Size and Position**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Maximum Lines</td>

<td>The maximum number of lines the list box can display without scroll bars. If there are less items to display the size of the control is reduced accordingly.</td>

</tr>

</tbody>

</table>