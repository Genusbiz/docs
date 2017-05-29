## Properties

See [Common Control Properties](../../common-control-properties.md), in addition to the control specific <span style="FONT-WEIGHT: normal">properties below.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>

Defines the location of the data to be visualized, using a standard [data binding](../../../../../../../users/searching-for-data/data-binding.md "Data Binding"). Only applicable for single level data structure.

</td>

</tr>

<tr>

<td>Data Structure</td>

<td>

**Single Level**

The data resides in one data source, and can be grouped by one or more fields.

**Nested Levels**

The data is structured as a hierarchy of data sources, as a tree. There can be one or more such hierarchies of data sources, and each level in the hierharchies can branch out through one or more new data sources, in so called sub levels.

</td>

</tr>

<tr>

<td>Groups</td>

<td>

Defines how to group the data. Only applicable for single level data structure.

For information on specific properties see Group Properties below.

</td>

</tr>

<tr>

<td>Layout</td>

<td>

**Squarified**

The boxes are stacked in both directions.

**Slice and Dice**

The boxes are stacked in one direction only.

</td>

</tr>

<tr>

<td>Label Field</td>

<td>

The field of the data source to use as label. Only applicable for single level data structure.

</td>

</tr>

<tr>

<td>Levels</td>

<td>

Defines the levels for hierarchical data. Only applicable for nested levels data structure.

The list contains the root levels of the hierarchies. Each root level can have one or more sub levels.

For information on specific properties see Level Properties below.

</td>

</tr>

<tr>

<td>Slice Orientation</td>

<td>

<span style="FONT-WEIGHT: normal">The direction to stack the slices. Only applicable for layout slice and dice.

**Vertical**

Stack the slices vertically.

**Horizontal**

Stack the slices horizontally.

</td>

</tr>

<tr>

<td>ToolTip Field</td>

<td>The field of the data source to use as a tooltip. Only applicable for single level data structure.</td>

</tr>

<tr>

<td>Value Field</td>

<td>The field of the data source to use as the value. Only applicable for single level data structure.</td>

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

<td><span style="FONT-WEIGHT: normal">Colorizer Type</td>

<td>

<span style="FONT-WEIGHT: normal">The type of colorizer to use to automatically calculate a color for each box based on its size. Only applicable for nested levels data structures. For information on colorizing single level data structures, see <span style="FONT-WEIGHT: normal">[Groups](properties.md)<span style="FONT-WEIGHT: normal">.

**Desaturation**

Use desaturation for colorizing the boxes.

**Gradient**

Use gradients for colorizing the boxes.

</td>

</tr>

<tr>

<td>Colorizer Desaturation</td>

<td>

Pick one color, and automatically calculate the desaturated color for each box based on its value in the range of values. Only applicable for nested levels data structures, and when colorizer type desaturation is selected.

For information on specific properties see Colorizer Desaturation Properties below.

</td>

</tr>

<tr>

<td>Colorizer Gradient</td>

<td>

Define two or more gradient stops, and automatically calculate the color for each box to create a gradient between defined values. Only applicable for nested levels data structures, and when colorizer type gradient is selected.

For information on specific properties see Colorizer Gradient Properties below.

</td>

</tr>

</tbody>

</table>

In this article

* * *

*   [Groups](#groups)

*   [Levels](#levels)

*   [Colorizer Desaturation](#colorizer-desaturation)

*   [Colorizer Gradient](#colorizer-gradient)

* * *

## Groups

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Group By</td>

<td>A field in the data source to group the data on.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the group in the list of groups</td>

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

<td><span style="FONT-WEIGHT: normal">Colorizer Type</td>

<td>

<span style="FONT-WEIGHT: normal">The type of colorizer to use for this group, to automatically calculate a color for each box based on its size.

**Desaturation**

Use desaturation for colorizing the boxes.

**Gradient**

Use gradients for colorizing the boxes.

</td>

</tr>

<tr>

<td>Colorizer Desaturation</td>

<td>

Pick one color, and automatically calculate the desaturated color for each box based on its value in the range of values.

For information on specific properties see Colorizer Desaturation Properties below.

</td>

</tr>

<tr>

<td>Colorizer Gradient</td>

<td>

Define two or more gradient stops, and automatically calculate the color for each box to create a gradient between defined values.

For information on specific properties see Colorizer Gradient Properties below.

</td>

</tr>

</tbody>

</table>

## Levels

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>Defines the location of the data to be visualized for this level, using a standard [data binding](../../../../../../../users/searching-for-data/data-binding.md "Data Binding").</td>

</tr>

<tr>

<td>

Label

</td>

<td>The field of the level data source to use as label.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the level in a list of levels.</td>

</tr>

<tr>

<td>Parent Binding</td>

<td>

A field in the level data source that defines the parent relationship with the data source of the parent level.

Only applicable if the level is a sub level.

</td>

</tr>

<tr>

<td>Sub Levels</td>

<td>A list of levels that are children to this level. The data sources of the sub levels must have a parent relationship with the data source of this level.</td>

</tr>

<tr>

<td>ToolTip</td>

<td>The field of the level data source to use as a tooltip.</td>

</tr>

<tr>

<td>Value</td>

<td>The field of the level data source to use as the value.</td>

</tr>

</tbody>

</table>



## Colorizer Desaturation

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Color</td>

<td>

The color to use as base color when automatically calculating the desaturated color for each box based on its value in the range of values.

</td>

</tr>

<tr>

<td>Saturation From</td>

<td>A value between 0 and 1, that specifies the amount of saturation of the color assigned to the box representing the smallest value in the range.</td>

</tr>

<tr>

<td>Saturation To</td>

<td>A value between 0 and 1, that specifies the amount of saturation of the color assigned to the box representing the largest value in the range.</td>

</tr>

</tbody>

</table>

For example,

Color = signal red, Saturation From = 0.1, Saturation To = 0.5, results in a gradient from light pink for the smallest values, to dark pink for the largest values.

Color = dark blue, Saturation From = 1, Saturation To = 0.5, results in a gradient from dark blu for the smallest values, to medium blue for the largest values.



## Colorizer Gradient

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Use Relative Values</td>

<td>Enables the use of values between 0 and 1, instead of actual values that may change over time.</td>

</tr>

<tr>

<td>Gradient Stops</td>

<td>

List of gradient stops, of which two or more must be defined. The gradient stops with the smallest and largest values should always be placed outside the range of possible values. If a value falls outside the defined range, the result for the corresponding box will be no color.

</td>

</tr>

</tbody>

</table>

**Gradient Stop**

 **<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property**</th>

<th>Description</th>

</tr>

<tr>

<td>Color</td>

<td>The color of the gradient stop.</td>

</tr>

<tr>

<td>Name</td>

<td>Identifies the gradient stop in the list of gradient stops.</td>

</tr>

<tr>

<td>Value</td>

<td>The value for this gradient stop. If the **Use Relative Value**is enabled, this value must be between 0 and 1.</td>

</tr>

</tbody>

</table> 

