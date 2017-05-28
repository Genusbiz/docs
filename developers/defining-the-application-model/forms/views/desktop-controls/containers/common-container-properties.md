## Common Container Properties

There are a some properties that are common to most container controls, and some properties require special considerations. In addition see the [Common Control Properties](../common-control-properties.md).

Not all properties below are applicable to all container controls.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Allow Horizontal Sizing</td>

<td>Offers handles on the left and right borders of the layout control wich allows the user to drag the border to resize the container control horisontally. Not applicable for conditional group.</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Allow Vertical Sizing</td>

<td>Offers handles on the top and bottom borders of the layout control wich allows the user to drag the border to resize the container control vertically. Not applicable for conditional group.</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Container Type</td>

<td>The type of container. Enables changing the type of a container between group and group box. Only applicable for group and group box.</td>

</tr>

<tr>

<td>Data Binding</td>

<td>

The main purpose of data binding in a container is for setting a context for the container, which is useful in certain situations, for example when publishing events to a container the context of the data binding. Also, if the data binding is for a single object, access to the container and all its content is defined by the users access to the bound object.

</td>

</tr>

<tr>

<td>Events</td>

<td>Events that are published to a container is available for the container itself, but also for all controls inside the container. This makes it easy to publish certain events that should be available for many controls.</td>

</tr>

<tr>

<td>Item Alignment</td>

<td>

Controls with labels are typically aligned horizontally, first by the label, and then by the content. This alignment is done for controls within a group or group box. When there are several groups stacked vertically, all with other controls inside, it is possible to align the controls locally for each group, or across all the groups. Only applicable for group and group box.

**Across Groups**

The controls are aligned horizontally across all the groups that are stacked on top of each other. This setting does not include containers with the Scroll Content option enabled.

**Local**

The controls are aligned horizontally within the group, disregarding controls in other groups.

</td>

</tr>

<tr>

<td>Item Space</td>

<td>The spacing, in pixels, between the controls in the container. Clear the field to use the default value.</td>

</tr>

<tr>

<td><span style="FONT-WEIGHT: normal">Orientation</td>

<td>

The layout direction of the controls inside the container control. Only applicable for group and group box.

**Horizontal**

The contained controls are stacked horizontally.

**Vertical**

The contained controls are stacked vertically.

</td>

</tr>

<tr>

<td>Scroll Content</td>

<td>

If the content of a container exceeds the width or height of the container, a vertical and/or horizontal  
scrollbar is automatically displayed.

Item Alignment Across Groups does not work for groups with this option enabled.

This option has no effect during design of the form, and scrollbars will appear for the entire form when needed.

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

<td>Min Height</td>

<td>

The minimum height of the container. The default value is 0.0, and the value can be equal to or greather than 0.0 Not applicable for conditional groups.

</td>

</tr>

<tr>

<td>Min Width</td>

<td>

The minimum width of the container. The default value is 0.0, and the value can be equal to or greather than 0.0\. Not applicable for conditional groups.

</td>

</tr>

</tbody>

</table>