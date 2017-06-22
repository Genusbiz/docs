# View properties

## General

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Buttons</td>

<td>

Specifies which standard buttons are shown at the bottom of the form window. This setting only applies if the view is the default view of the form, or it is opened using an open view effect, and not if it is displayed by a switch view effect.

**None**

No buttons are shown.

**Ok and Cancel**

The Ok and Cancel buttons are shown.

**Yes and No**

The Yes and No buttons are shown.

**Yes, No, and Cancel**

The Yes, No, and Cancel buttons are shown.

</td>

</tr>

<tr>

<td>Commands</td>

<td>

A list of commands associated with the view.

For more information see [Commands](../commands.md).

</td>

</tr>

<tr>

<td>Events</td>

<td>

A list of events associated with the view.

For more information see [Events](../events.md).

</td>

</tr>

<tr>

<td>Item Space</td>

<td>The spacing between the controls that have the view as parent. Clear the field to use the default value.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the view in a list of views.</td>

</tr>

<tr>

<td>Orientation</td>

<td>

The layout direction of the controls inside the view.

**Horizontal**

The contained controls are stacked horizontally.

**Vertical**

The contained controls are stacked vertically.

</td>

</tr>

<tr>

<td>Read Only</td>

<td>

The view is in a read only state which means that all contained controls are set read only.

**Yes**

The view is read only for for the end user.

**No**

The view is not read only for the end user.

**Condition**

A condition determines if the view is read only for the end user. Use a condition when the view should only be read only in som cases, for example depending on the state of an object.

</td>

</tr>

<tr>

<td>Refiners</td>

<td>

Specifies which [refiners](../../../../../users/search-and-refine/refiners.md) are available in the view, and which data sources they refine.

To add a refiner, in the **Refiners** window, click **Add**. Then in the **Select Refiners** window, select a refiner in the **Available Refiners** list and click **Add** to move it to the **Selected Refiners** list. Click **OK**. A refiner that is added is by default specified to affect all the data sources it has the ability to filter. To modify these settings, locate the refiner to modify in the list of refiners, and click the down arrow in the **Refined Data Sources** cell. Then select the data sources to refine, or click to clear the data sources that should not be refined.

Data sources that are added to the forma later is not added to any existing refiners.

</td>

</tr>

<tr>

<td>Default View</td>

<td>The view is used if the form is opened without specifying which view to use. Only one view in the form can be default view at a time.</td>

</tr>

<tr>

<td>Show Task Pane</td>

<td>

Shows the task pane when the form is opened. This setting only applies if the view is the default view of the form, or it is opened using an open view effect, and not if it is displayed by a switch view effect. Only applicable for Application Window.

</td>

</tr>

<tr>

<td>Style</td>

<td>

The visual appearance of the window for the form view. This setting does not affect the modality of the window. This setting only applies if the view is the default view of the form, or it is opened using an open view effect, and not if it is displayed by a switch view effect.

**Application Window**

Open the view in an application window with menu, toolbars, task panes

**Dialog Box**

Open the view in a dialog box, witout

**Reading Pane**

Use the view as a [reading pane](../../tables/views.md) in a table.

</td>

</tr>

<tr>

<td>Title</td>

<td>

The title for the application window or the dialog box, depending on the style. The title is constructed by adding one or more fields.

</td>

</tr>

<tr>

<td>Type</td>

<td>

Specifies the type of platform the view can be used.

**Desktop**

The view is used in forms on a windows desktop application.

**App**

The view is used in forms on app clients.

</td>

</tr>

</tbody>

</table>


## Size and position

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Form Size</td>

<td>

**Resizable**

The form can be resized by the user. The widht and height properties specify the initial size.

**Fixed**

The size of the form is specified by the widht and height properties, and the form cannot be resized by the user.

</td>

</tr>

<tr>

<td>Height</td>

<td>The height of the view, or the initial height of the view if it is resizable. The unit of measure is according to the specified measurement unit.</td>

</tr>

<tr>

<td>Measurement Unit</td>

<td>

The unit of measure to use for specifying distances in the view, like widths, heights, margins, and paddings.

**Px**

Use pixels. This is typically used for screen layout.

**cm**

Use centimeters. This is typically used for creating forms that are similar to existing paper based forms.

**mm**

Use millimeters. Same as for cm, but more detailed.

</td>

</tr>

<tr>

<td>Padding</td>

<td>The distance between the side of the view and its content. The unit of measure is according to the specified measurement unit.</td>

</tr>

<tr>

<td>Size</td>

<td>

The size of the view. Only applicable for fixed form size.

**Custom**

The size is specified by the width and height properties.

**A3 Portrait (420x297mm)**

The size is set to a A3 portrait format. The width and height shows the size according to the measurement unit.

**A3 Landscape (297x420 mm)**

The size is set to a A3 landscape format. The width and height shows the size according to the measurement unit.

**A4 Portrait (297x210 mm)**

The size is set to a A4 portrait format. The width and height shows the size according to the measurement unit.

**A4 Landscape (210x297 mm)**

The size is set to a A4 landscape format. The width and height shows the size according to the measurement unit.

**A5 Portrait (210x148 mm)**

The size is set to a A5 portrait format. The width and height shows the size according to the measurement unit.

**A5 Landscape (148x210 mm)**

The size is set to a A5 landscape format. The width and height shows the size according to the measurement unit.

</td>

</tr>

<tr>

<td>Width</td>

<td>The width of the view, or the initial width of the view if it is resizable. The unit of measure is according to the specified measurement unit.</td>

</tr>

</tbody>

</table>


## Format


Property             | Description
---------------------|-----------------------
Automatic formatting |
Background Color     | The background color of the view.