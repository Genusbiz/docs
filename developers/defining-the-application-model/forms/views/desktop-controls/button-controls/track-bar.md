## Track Bar

The track bar is a scrollable control which is used to slide a small thumb along a continuous line to change the value. It also supports a range style with two thumbs for a start and end value. A track bar can be oriented horizontally and vertically, and can also be manipulated with the keyboard.

The control data bindings can be bound to properties of data type integer or real.

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

<td>

Data Binding - End

</td>

<td>A [data binding](../../../../../../users/searching-for-data/data-binding.md "Data Binding") that defines the end of the range. Only applicable if Style is Range.</td>

</tr>

<tr>

<td>Data Binding - Start</td>

<td>A [data binding](../../../../../../users/searching-for-data/data-binding.md "Data Binding") that defines the start of the range. Only applicable if Style is Range.</td>

</tr>

<tr>

<td>Large Step</td>

<td>

The number of ticks to move the thumb if

*   pressing the PAGE UP or PAGE DOWN keys
*   clicking on the track bar line on either side of the thumb, if the Move To Point option is disabled.

</td>

</tr>

<tr>

<td>Max Value</td>

<td>The maximum value for the track bar.</td>

</tr>

<tr>

<td>Min Value</td>

<td>The minimum value for the track bar.</td>

</tr>

<tr>

<td>Move To Point</td>

<td>Allow the user to click anywhere on the track bar line to move the thumb to this point.</td>

</tr>

<tr>

<td>Orientation</td>

<td>

**Horizontal**

The track bar is oriented from left to right.

**Vertical**

The track bar is oriented from top to bottom.

</td>

</tr>

<tr>

<td>Show Step Buttons</td>

<td>A button is displayed on each end of the track bar. These can be used to change the value.</td>

</tr>

<tr>

<td>Small Step</td>

<td>

The number of ticks to move the thumb if

*   pressing one of the arrow keys
*   clicking on one of the step buttons.

</td>

</tr>

<tr>

<td>Style</td>

<td>

**Native**

The trackbar has one thumb to modify one value.

**Range**

The trackbar has two thumbs, which can be operated independently, and thereby defines a range.

</td>

</tr>

<tr>

<td>Tick Frequency</td>

<td>A tick is displayed for every n positions, if tick placement is not set to None. For example, a tick frequency of 10 displays 11 ticks for a trackbar from 0 to 100.</td>

</tr>

<tr>

<td>Tick Placement</td>

<td>

**None**

No tickmarks are displayed.

**Top Left**

Tickmarks are displayed above the line for horizontal orientation, or to the left for vertical orientation.

**Bottom Right**

Tickmarks are displayed below the line for horizontal orientation, or to the right for vertical orientation.

**Both**

Tickmarks are displayed on both sides.

</td>

</tr>

</tbody>

</table>