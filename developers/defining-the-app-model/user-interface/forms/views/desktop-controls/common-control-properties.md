# Common control properties

Each control has a set of properties which configures various aspects of the controls appearance and functionality. Some properties are valid only for specific controls, and these are described for the individual control. Other properties are more general and are described below. There may be general properties that are not valid for all controls.


## General properties

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Commands</td>

<td>The commands that are connected to this control. The availability (visibility) of a command is determined by whether the control has focus or not. For more information, see [Commands](../../commands.md).</td>

</tr>

<tr>

<td>Data Binding Type</td>

<td>

The type of binding between the control and the data source. For most controls this is option is not available, as the inherent nature of the control only allows one of the two. See also [Data Binding Fundamentals](data-binding-fundamentals.md "Data Binding Fundamentals").

**Value**

The control is bound to a field in a data source, and a value is transferred between the control and the data source.

**Object**

The control is bound to a data source, and a selection of objects is transferred between the control and the data source.

</td>

</tr>

<tr>

<td>Data Binding</td>

<td>The binding to the data for the control. See [Data Binding](../../../../../../users/search-and-refine/data-binding.md "Data Binding").</td>

</tr>

<tr>

<td>Enabled</td>

<td>

The control is enabled. If not enabled, the control is dimmed and read only. If the control that is not enabled is a [container](containers.md), all the controls in the container control is set not enabled. See also **Read Only** above.

**Yes**

The control is enabled for for the end user.

**No**

The control is not enabled for the end user.

**Condition...**

A [condition](../../../../common-concepts/conditions.md) determines if the control is enabled for the end user. Use a condition when the control should only be enabled in som cases, for example depending on the state of an object.

</td>

</tr>

<tr>

<td>Events</td>

<td>The events this control is bound to. For more information, see [Events](../../events.md).</td>

</tr>

<tr>

<td>Hide if Empty</td>

<td>The control is not displayed if the data it is bound to is empty.</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the control. Enter a text in the box, or click the "..." button in the box to select a field to use the name of the field as label.</td>

</tr>

<tr>

<td>Label - Colon Suffix</td>

<td>Show a colon ":" after the label.</td>

</tr>

<tr>

<td>Name</td>

<td>The name of the control is used when referring to the control during definition of the form, and must be unique within the form. The name is not visible to the end user.</td>

</tr>

<tr>

<td>Null Text</td>

<td>The value to be displayed if the control is empty. The null text is displayed as dimmed text which disappears when the control is activated. For example, enter the value "Enter comment here" to display this value in an empty comment field to encourage users to do so.</td>

</tr>

<tr>

<td>Read Only</td>

<td>

The field value is not possible to edit, but is displayed as normal. If the control is a [container](containers.md), all the controls in the container control is set read only. See also **Enabled** below.

**Yes**

The field value is read only for for the end user.

**No**

The field value is not read only for the end user.

**Condition...**

A [condition](../../../../common-concepts/conditions.md) determines if the field value is read only for the end user. Use a condition when the field value only should be read only in som cases, for example depending on the state of an object.

</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>The screen tip which is displayed when the mouse cursor is moved over the control. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Tab Index</td>

<td>The number in the tab sequence order for the control.</td>

</tr>

<tr>

<td>Tab Stop</td>

<td>The control is part of the tab sequence in the form.</td>

</tr>

<tr>

<td>Visible</td>

<td>

**Yes**

The field is visible to the end user.

**No**

The field is not visible to the end user.

**Condition...**

A [condition](../../../../common-concepts/conditions.md) determines if the field is visible to the end user. Use a condition when the field only should be visible in som cases, for example depending on the state of an object.

</td>

</tr>

</tbody>

</table>

## Size and position properties

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Height</td>

<td>The Height of the control. Auto height is used when the Vertical Alignment is set to Stretch.</td>

</tr>

<tr>

<td>Horizontal Alignment</td>

<td>

**Left**

The control is aligned to the left inside the container. If there are other controls inside the container that are also aligned to the left, they will be placed next to each other from the left edge, and they may be manualle re-ordered.

**Center**

The control is aligned to the center inside the container. If there are other controls inside the container that are also aligned to the center, they will be placed next to each other in the center, and they may be manualle re-ordered.

**Right**

The control is aligned to the right inside the container. If there are other controls inside the container that are also aligned to the right, they will be placed next to each other from the right edge, and they may be manualle re-ordered.

**Stretch**

The control is stretched in horizontal direction to fill the container. The width of the control is automatic. If there are other controls inside the container that are also stretched, they will divide the available area between them.

</td>

</tr>

<tr>

<td>Margin</td>

<td>The distance between the side of a control and the adjacent control. Margins are additive, which means that two controls next to each other, are placed at a distance apart, equal to the sum of the two margins. This is true if the controls are inside a container with item space set to zero, otherwise the item space is also added.</td>

</tr>

<tr>

<td>Margin - Bottom</td>

<td>Bottom margin.</td>

</tr>

<tr>

<td>

Margin- Left

</td>

<td>Left margin.</td>

</tr>

<tr>

<td>Margin - Right</td>

<td>Right margin.</td>

</tr>

<tr>

<td>Margin - Top</td>

<td>Top margin.</td>

</tr>

<tr>

<td>Padding</td>

<td>The distance between the side of the control and its content. Padding is typically defined for controls which contain other controls, such as a Group or Group Box. For common controls, such as a Text Edit or a Button, the Padding property is rarely used to position the control. We do not recommend that you use the Padding property for any other controls than container based controls, such as Group, Group Box, and Tab Sheet, as this property may be hidden for common controls in future versions.</td>

</tr>

<tr>

<td>Padding - Bottom</td>

<td>Bottom padding.</td>

</tr>

<tr>

<td>Padding - Left</td>

<td>Left padding</td>

</tr>

<tr>

<td>Padding - Right</td>

<td>Right padding.</td>

</tr>

<tr>

<td>Padding - Top</td>

<td>Top padding.</td>

</tr>

<tr>

<td>Vertical Alignment</td>

<td>

**Top**

The control is aligned to the top inside the container. If there are other controls inside the container that are also aligned to the top, they will be placed below each other from the top edge, and they may be manualle re-ordered.

 **Center** 

The control is aligned to the center inside the container. If there are other controls inside the container that are also aligned to the center, they will be placed above each other in the center, and they may be manualle re-ordered.

**Bottom**

The control is aligned to the bottom inside the container. If there are other controls inside the container that are also aligned to the bottom, they will be placed above each other from the bottom edge, and they may be manualle re-ordered.

**Stretch**

The control is stretched in vertical direction to fill the container. The height of the control is automatic. If there are other controls inside the container that are also stretched, they will divide the available area between them.

</td>

</tr>

<tr>

<td>Width</td>

<td>The width of the control. Auto width is used when the Horizontal Alignment is set to Stretch.</td>

</tr>

</tbody>

</table>



## Format properties

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Automatic Formatting</td>

<td></td>

</tr>

<tr>

<td>Background Color</td>

<td>The background color of the control.</td>

</tr>

<tr>

<td>Border Color</td>

<td>The color of the border surrounding the control.</td>

</tr>

<tr>

<td>Border Thickness</td>

<td>The thickness of the border surrounding the control.</td>

</tr>

<tr>

<td>Display Format String</td>

<td>Format the value and add any text to its textual representation. The formatted text is displayed if the value is not currently edited (if it is not focused or it is read-only).  

*For example, to display currency values, set the DisplayFormatString property to 'c2'. If the editor's value is 99.9, its formatted equivalent will be $99.90.  

The specified display format should match the value's type, otherwise, it is ignored and is not applied.  

Standard format specifiers for composing the format pattern are described in the Format Strings topics in MSDN.*</td>

</tr>

<tr>

<td>Font Size</td>

<td>The size of the text in the control.</td>

</tr>

<tr>

<td>Font Style</td>

<td>

The style of the text in the control: **Normal** or **Italic**.

</td>

</tr>

<tr>

<td>Font Weight</td>

<td>The weight of the text in the control: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Foreground Color</td>

<td>The color of the text in the control.</td>

</tr>

<tr>

<td>Label Background Color</td>

<td>The background color for the label.</td>

</tr>

<tr>

<td>Label Font Size</td>

<td>The size of the font for the label.</td>

</tr>

<tr>

<td>Label Foreground Color</td>

<td>The color of the label text.</td>

</tr>

<tr>

<td>Label Font Style</td>

<td>

The style of the label text in the control: **Normal** or **Italic**.

</td>

</tr>

<tr>

<td>Label Font Weight</td>

<td>The weight of the label text in the control: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Label Horizontal Alignment</td>

<td>

The alignment of the label text within the available horizontal space:

**Left**

Align the label text to the left.

**Center**

Align the label text to the center.

**Right**

Align the label text to the right.

</td>

</tr>

<tr>

<td>Label Position</td>

<td>

**Left**

Display label for control to the left of the control.

**Top**

Display label for control above the control.

</td>

</tr>

<tr>

<td>Label Vertical Alignment</td>

<td>

The alignment of the label text within the available vertical space:

**Top**

Align the label text to the top.

**Center**

Align the label text to the center.

**Bottom**

Align the label text to the bottom.

</td>

</tr>

<tr>

<td>Show Border</td>

<td>The border is displayed.</td>

</tr>

</tbody>

</table>

## Screen tip properties

### General

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>The data binding specifies the field to use for the screen tip value. For more information see [Data Binding](../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](data-binding-fundamentals.md "Data Binding Fundamentals").</td>

</tr>

<tr>

<td>

Label

</td>

<td>The label for the screen tip item. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Label - Colon Suffix</td>

<td>Show a colon ":" after the label.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the screen tip in a list of screen tips.</td>

</tr>

</tbody>

</table>

### Size and position

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Horizontal Alignment</td>

<td>

The alignment of the screen tip item.

**Left**

The screen tip item is aligned to the left.

**Center**

The screen tip item is aligned to the center.

**Right**

The screen tip item is aligned to the right.

**Stretch**

The screen tip item is stretched from the left to the right, if possible..

</td>

</tr>

</tbody>

</table>

