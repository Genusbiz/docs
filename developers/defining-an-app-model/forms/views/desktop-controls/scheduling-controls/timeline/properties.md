# Properties

 

See [Common Control Properties](../../common-control-properties.md), in addition to the control specific properties below.

**General**

 **General**

Property      | Description
--------------|-----------
Series        | A list of series bound to data sources, representing the events to present.<br><br>For information on specific properties, see Series Properties below.
Views         | A list of views for how to present which series.<br><br>For information on specific properties, see View Properties below.



## Series Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Caption</td>

<td>The caption for the series. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Data Binding</td>

<td>The data source that contains the data for this series. For more information see [Data Binding](../../../../../../../users/searching-for-data/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals").</td>

</tr>

<tr>

<td>Data Filter</td>

<td>Filters the data from the data source for the series.</td>

</tr>

<tr>

<td>Duration Field</td>

<td>The field wich contains the start date of the event. This field is not possible to specify if the end date field is specified.</td>

</tr>

<tr>

<td>End Date Field</td>

<td>The field wich contains the end date of the event. This field is not possible to specify if the end duration field is specified.</td>

</tr>

<tr>

<td>Fields</td>

<td>

A list of fields to display for the event. Only applicable when Fields is the selected style.

For more information on the specific properties, see [Field Properties](properties.md) below.

</td>

</tr>

<tr>

<td>Group By Field</td>

<td>The field to use for grouping this series. Different types of fields can be selected, but the grouping is based on the textual representation.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the series in a list of series, for example when selecting series in a view.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>The screen tip which is displayed when the mouse cursor is moved over the series. Enter a text in the box, or click the "..." button in the box to define an advanced [screen tip](../../common-control-properties.md).</td>

</tr>

<tr>

<td>Shape</td>

<td>

The shape to display when the event has zero duration: **Ellipse**, **Rectangle**, **Rounded Rectangle**, **Triangle Up**, **Triangle Down Star**, **Diamond**, **Hexagon**. Only applicable when Instance Shape is the selected style.

</td>

</tr>

<tr>

<td>Start Date Field</td>

<td>The field wich contains the start date of the event.</td>

</tr>

<tr>

<td>Style</td>

<td>

The style for displaying the event.

**Fields**

One or more fields from the event is displayed.

**Icon (Automatic Formatting)**

An icon is displayed for the event. The icon that is displayed, is defined in the automatic formatting that is currently applied.

**Instance Shape**

A shape is displayed when the event has zero duration.

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

<td>Automatic Formatting</td>

<td>

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

See [Automatic Formatting](../../../../../common-concepts/automatic-formatting.md).

</td>

</tr>

<tr>

<td>Background Color</td>

<td>Background color for the event. Only applicable when event has a duration.</td>

</tr>

<tr>

<td>Font Size</td>

<td>Size of the text displayed for the event.</td>

</tr>

<tr>

<td>Font Style</td>

<td>Style of the text displayed for the event: **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Font Weight</td>

<td>Weight of the text displayed for the event: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Foreground Color</td>

<td>Color of the text displayed for the event.</td>

</tr>

</tbody>

</table>

## Series Field Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>The data binding for the field. For more information see [Data Binding](../../../../../../../users/searching-for-data/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals")</td>

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

<td>Name</td>

<td>Used to identify the field in a list of fields.</td>

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

<td>Horizontal Alignment</td>

<td>The alignment of the text for the field. ****Left**  
The text is aligned to the left.**  

**Center**  
The text is center aligned.  

**Right**  
The text is aligned to the right.  

**Stretch**  
The text is stretched, if possible.</td>

</tr>

</tbody>

</table>



## View Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Caption</td>

<td>The caption for the view. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Group By</td>

<td>

Specifies how grouping is performed within this view.

**None**

There is no grouping.

**Series**

The events are grouped by series. The groups are thereby the caption of the series, and all events are placed within the series it belongs to.

**Field**

The events are grouped by the Group By fields specified in the individual series. Note that the grouping is based on the textual representation of the field.

</td>

</tr>

<tr>

<td>Group Expand Mode</td>

<td>

Specifies how the groups can be expanded. This option has no effect if no grouping is performed.

**Always**

All the groups are expanded, and cannot be collapsed.

**Single**

Only one group can be expanded at a time. Expanding another group collapses the previously expanded one.

**Multiple**

More than one group can be expanded at a time.

</td>

</tr>

<tr>

<td>Hidden Series</td>

<td>Lists the series that should not be visible in this view.</td>

</tr>

<tr>

<td>Intervals</td>

<td>

A list of intervals, which defines the units (year, day, hour, etc) that are available along the timeline. To add an interval to the list, click **Add**.

For information on specific properties, see Interval Properties below.

</td>

</tr>

<tr>

<td>Is Default</td>

<td>Specifies that this view is the default view. Only one view can be the default view, and when this option is selected, the option is cleared for any other view with this option previously selected.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the view in a list of views.</td>

</tr>

<tr>

<td>Period End Date</td>

<td>

The end date for the range in the timeline.

Only available if period end type is set to bound.

</td>

</tr>

<tr>

<td>Period End Type</td>

<td>

How period end is assigned a value.

**Auto**

The value is calculated from the provided data.

**Bound**

The value is assigned through data binding.

</td>

</tr>

<tr>

<td>Period Start Date</td>

<td>

The start date for the range in the timeline.

Only available if period start type is set to bound.

</td>

</tr>

<tr>

<td>Period Start Type</td>

<td>

How period start is assigned a value.

**Auto**

The value is calculated from the provided data.

**Bound**

The value is assigned through data binding.

</td>

</tr>

<tr>

<td>Scroll Mode</td>

<td>

Specifies if scrolling and zooming is allowed.

**Scroll and Zoom**

Both scrolling and zooming is possible.

**Scroll Only**

Scrolling is possible, but zooming is not.

**None**

Scrolling and zooming is not possible.

</td>

</tr>

<tr>

<td>Selection Enabled</td>

<td>Enables selection of items by clicking on them. See [Active Object](../../../../../common-concepts/active-object.md).</td>

</tr>

<tr>

<td>Visible Period End Date</td>

<td>The initially visible end date for the timeline. Scroll or zoom to view the full range.</td>

</tr>

<tr>

<td>Visible Period Start Date</td>

<td>The initially visible start date for the timeline. Scroll or zoom to view the full range.</td>

</tr>

</tbody>

</table>



## View Interval Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Properties</th>

<th>Description</th>

</tr>

<tr>

<td>Interval</td>

<td>

The unit to display along the timeline. Available values are: **Century**, **Decade**, **Year**, **Quarter**, **Month**, **Week**, **Day**, **Hour**, **Minute**, **Second**, **Millisecond**.

</td>

</tr>

<tr>

<td>Spans</td>

<td>

An integer number which specifies the number of intervals that can be grouped together if required, for example during zooming.

*For example: the Interval is set to Week, and Spans is set to 4\. When zooming in and out the timeline may show individual weeks or groups of four and four weeks.*

It is possible to allow an interval to span several different values by entering them with a comma between.

*For example: Interval is Minute, Span is "10, 15, 30, 60".*

</td>

</tr>

</tbody>

</table>

