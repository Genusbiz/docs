## Radio Button

The radio button control displays a set of items as radio buttons which allows only one item to be selected at the time.

The control supports both data binding types

*   Value: the control can be bound to a field that references other objects
*   Object: the control can be bound to a data source

**Properties**

See [Common Control Properties](../common control properties.md), in addition to the control specific properties below.

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

Defines which item that is selected initially. Only applicable for data binding type Object.

**None**

No item is selected

**Mark First Item**

The first item is selected.

**Condition**

A condition defines which item is initially selected.

</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Display Value</td>

<td>A field in the data source to display as the value in the list.</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Orientation</td>

<td>

<span style="FONT-WEIGHT: normal">The orientation to prioritize when displaying items.

**Horizontal**

The items are displayed from left to right, then top to bottom.

**Vertical**

The items are displayed from top to bottom, then left to right.

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

</tbody>

</table>