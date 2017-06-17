## Properties

Put article content here

**Properties**

See [Common Control Properties](../../common-control-properties.md), in addition to the control specific properties below.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Auto Series</td>

<td>

A series definition which allows the data to be split into categories, and thereby dynamically produce multiple series.

For information on specific properties see Auto Series Properties below.

</td>

</tr>

<tr>

<td>Diagram Type</td>

<td>Currently only the **XY Diagram 2D** is supported</td>

</tr>

<tr>

<td>Legend</td>

<td>

Settings for the legend, where an item is shown for each series that has enabled it.

For information on specific properties see Legend Properties below.

</td>

</tr>

<tr>

<td>Panes</td>

<td>

A list of panes, where axes are displayed and series are plotted.

For information on specific properties see Panes Properties below.

</td>

</tr>

<tr>

<td>Rotate</td>

<td>

Rotate the chart 90 degrees. Useful if you want to display the value along the X axis. Use in combination with reverse the axes to achieve the desired layout.

</td>

</tr>

<tr>

<td>Series</td>

<td>

A list of series of different types, which define the data to be plotted, and the pane and axis to use for plotting.

For information on specific properties see Series Properties below.

</td>

</tr>

<tr>

<td>Titles</td>

<td>

A list of titles that can be formatted and placed individually.

For information on specific properties see Title Properties below.

</td>

</tr>

<tr>

<td>X Axes</td>

<td>

A list of X axes that can be used for multiple series in multiple panes. The X axes represent the argument of a point in a series. There must be at least one X axis.

For information on specific properties see Axis Properties below.

</td>

</tr>

<tr>

<td>Y Axes</td>

<td>

A list of X axes that can be used for multiple series in multiple panes. The Y axes represent the value of a point in a series. There must be at least one Y axis.

For information on specific properties see Axis Properties below.

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

<td>Palette</td>

<td>Sets the color palette for the chart which also defines the colors for the series.</td>

</tr>

</tbody>

</table>


## Axis Properties

To add an Axis, click **Add**, and then edit the properties below.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Alignment</td>

<td>

**Near**

The axis is displayed at the left or bottom side of the chart, depending on its type and orientation.

**Far**

The axis is displayed at the right or top side of the chart, depending on its type and orientation.

</td>

</tr>

<tr>

<td>Constant Lines</td>

<td>

A list of constant lines, that can be placed and formatted individually, to indicate high or low values, limits, and other constants in the chart.

For information on specific properties see Constant Lines Properties below.

</td>

</tr>

<tr>

<td>Data Type</td>

<td>

The data type to use for the axis. This determines which data source fields can be used to bind a series to the axis. Choose from:

*   Simple Types: Calendar Time, Integer, Real, or String (only available for X axes)
*   Complex Types: select an object class from your application model.

</td>

</tr>

<tr>

<td>Date Time Options</td>

<td>If the data type is Calendar Time, or the data type of the value field is Calendar Time, date time options for the axis is available.</td>

</tr>

<tr>

<td>Date Time Options - Date Time Format</td>

<td>

**Custom**

The format string specified by the DateTimeOptions.FormatString property will be applied.

**General**

Displays a date and time, using the general date-time settings determined by your computer's regional settings.

**LongDate**

Displays a date using the long-date format specified in your computer's regional settings.

**LongTime**

Displays a time using the long-time format specified in your computer's regional settings.

**MonthAndDay**

Displays a date as a month name and day number, using your computer's regional settings (e.g., February 11).

**MonthAndYear**

Displays a date as a month name and year number, using your computer's regional settings (e.g., February, 2006).

**QuarterAndYear**

Displays a date as a quarter value and year number using your computer's regional settings (e.g., Q2 2006).

**ShortDate**

Displays a date using the short-date format specified in your computer's regional settings.

**ShortTime**  
Displays a time using the short-time format specified in your computer's regional settings.

</td>

</tr>

<tr>

<td>Date Time Options - Date Time Format String</td>

<td>

Specify a custom format for the date-time values. Only Applicable for date time format Custom.

Standard date-time format specifiers for composing the format pattern are described in the Date and Time Format Strings topics in MSDN.

</td>

</tr>

<tr>

<td>Date Time Options - Date Time Grid Alignment</td>

<td>

Align the beginning of a chart's gridlines to the selected unit.

The available values are: Millisecond, Second, Minute, Hour, Day, Week, Month, Quarter, Year

</td>

</tr>

<tr>

<td>Date Time Options - Date Time Measure Unit</td>

<td>

Defines the detail level to use for the axis.

The available values are: Millisecond, Second, Minute, Hour, Day, Week, Month, Quarter, Year

For example, set the value to Month to disregard the day part of a date value along the axis.

</td>

</tr>

<tr>

<td>Labels</td>

<td>

Settings for displaying and formatting labels along the axis.

For information on specific properties see Labels Properties below.

</td>

</tr>

<tr>

<td>

Max Value

</td>

<td>The maximum value of the axis. Use the property to ensure that the range of the axis is greater than the range required by the series.</td>

</tr>

<tr>

<td>Max Visible Value</td>

<td>The initially maximum visible value of the axis. Typically use this property to zoom to a certain value when using scrollbars.</td>

</tr>

<tr>

<td>Min Value</td>

<td>

The minimum value of the axis. Use the property to ensure that the range of the axis is greater than the range required by the series.

</td>

</tr>

<tr>

<td>Min Visible Value</td>

<td>

The initially minimum visible value of the axis. Typically use this property to zoom to a certain value when using scrollbars.

</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the axis when selecting axis to use on panes and series.</td>

</tr>

<tr>

<td>Numeric Options</td>

<td>If the data type is Integer or Real, or the data type of the value field is Integer or Real, numeric options for the axis is available.</td>

</tr>

<tr>

<td>Numeric Options - Format</td>

<td>

**Currency**

Displays numbers as currency, using the currency format specified in your computer's regional settings. Example: $100.  

**FixedPoint**

Displays numbers as real numeric values with the specified number of decimal places. The number of decimal places is specified by Numeric Options - Precision, and the decimal separator is based upon your computer's regional settings. Example: 100.00.  

**General**

Displays numbers without any specific formatting applied to them. The decimal symbol specified in your computer's regional settings is used. Example: 100.  

**Number**

Displays numbers as numeric values, using the number format specified in your computer's regional settings. Example: 100.00.  

**Percent**

Displays numbers multiplied by 100 with a percent sign (%) appended to the right; displays two digits to the right of the symbol specified in your computer's regional settings. Example: 100 %.  

**Scientific**

Displays numbers using standard scientific notation. This format is determined by your computer's regional settings. Example: 1.00E+002.

</td>

</tr>

<tr>

<td>Numeric Options - Precision</td>

<td>The maximum number of digits displayed to the right of a value's decimal point. Not applicable for format General.</td>

</tr>

<tr>

<td>Primary Axis</td>

<td>Only one axis can be set at primary axis (one for X axes, and one for Y axes).</td>

</tr>

<tr>

<td>Reverse</td>

<td>Reverse the order of values along the axis.</td>

</tr>

<tr>

<td>Title</td>

<td>

Defines the title for the axis.

For information on specific properties see Title Properties below.

</td>

</tr>

<tr>

<td>Tick Marks / Grid Lines</td>

<td>

Settings for displaying and formatting tick marks and grid lines for the axis.

For information on specific properties see Tick Marks / Grid Lines Properties below.

</td>

</tr>

<tr>

<td>Value Field</td>

<td>

The field of a complex data type to use for values along the axis.

For example: if the data type is set to *Company*, the value field can be set to *Company.Name* to use the name of the companies along the axis, or the value field can be set to *Company.Organizational Code*, to use this value along the axis.

</td>

</tr>

</tbody>

</table>



## Axis Title Properties

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Alignment</td>

<td>

**Center**

Specifies that the title is aligned to the center of the axis.

**Far**

Specifies that the title is aligned far from the beginning of the axis.

**Near**

Specifies that the title is aligned near the beginning of the axis.

</td>

</tr>

<tr>

<td>Background Color</td>

<td>Background color for the title.</td>

</tr>

<tr>

<td>Border Color</td>

<td>Border color for the box surrounding the title.</td>

</tr>

<tr>

<td>Border Thickness</td>

<td>Border thickness, in pixels, of the box surrounding the title.</td>

</tr>

<tr>

<td>Font Size</td>

<td>The size of the title text.</td>

</tr>

<tr>

<td>Font Style</td>

<td>The style of the title text: **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Font Weight</td>

<td>The weight of the text in the title: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Foreground Color</td>

<td>Text color of the title.</td>

</tr>

<tr>

<td>Show Border</td>

<td>Show the border box surrounding the title.</td>

</tr>

<tr>

<td>Title</td>

<td>Enter a text to use as the title, or click "...", to use [data binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") to get dynamic text from a field in a data source.</td>

</tr>

<tr>

<td>Visible</td>

<td>Show the title.</td>

</tr>

</tbody>

</table>



## Axis Tick Marks / Grid Lines Properties <a name="axis-tick-marks-grid-lines-properties"/>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Grid Line Color</td>

<td>The color of the major grid lines.</td>

</tr>

<tr>

<td>Grid Line Thickness</td>

<td>The thickness, in pixels, of the major grid lines.</td>

</tr>

<tr>

<td>Minor Grid Line Color</td>

<td>The color of the minor grid lines.</td>

</tr>

<tr>

<td>Minor Grid Line Thickness</td>

<td>The thickness, in pixels, of the minor grid lines.</td>

</tr>

<tr>

<td>Minor Tick Mark / Grid Line Count</td>

<td>The number of minor tick marks / minor grid lines between two major tick marks / grid lines.</td>

</tr>

<tr>

<td>Minor Tick Mark Length</td>

<td>The length, in pixels, of the minor tick marks.</td>

</tr>

<tr>

<td>Minor Tick Mark Thickness</td>

<td>The thickness, in pixels, of the minor tick marks.</td>

</tr>

<tr>

<td>Show Grid Lines</td>

<td>Displays the major grid lines.</td>

</tr>

<tr>

<td>Show Minor Grid Lines</td>

<td>Displays the minor grid lines between the major grid lines.</td>

</tr>

<tr>

<td>Show Minor Tick Marks</td>

<td>Displays the minor tick marks between the major tick marks.</td>

</tr>

<tr>

<td>Show Tick Marks</td>

<td>Displays the major tick marks.</td>

</tr>

<tr>

<td>Tick Mark Length</td>

<td>The length, in pixels, of the major tick marks.</td>

</tr>

<tr>

<td>Tick Mark Thickness</td>

<td>The thickness, in pixels, of the major tick marks.</td>

</tr>

</tbody>

</table>



## Axis Labels Properties

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Label After-Text</td>

<td>

A text that is added after the label.

Enter a text, or click "...", to use [data binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") to get dynamic text from a field in a data source.

</td>

</tr>

<tr>

<td>Label Before-Text</td>

<td>A text that is added after the label.  

Enter a text, or click "...", to use [data binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") to get dynamic text from a field in a data source.</td>

</tr>

<tr>

<td>Label Font Size</td>

<td>The size of the label text.</td>

</tr>

<tr>

<td>Label Font Style</td>

<td>The style of the label text: **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Label Font Weight</td>

<td>The weight of the text in the label: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Label Foreground Color</td>

<td>Text color</td>

</tr>

<tr>

<td>Visible</td>

<td>Display labels along the axis.</td>

</tr>

</tbody>

</table>



## Axis Constant Line Properties

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Color</td>

<td>The color of the constant line.</td>

</tr>

<tr>

<td>Legend Text</td>

<td>

Add a legend text to include an item in the legend

Enter a text, or click "...", to use [data binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") to get dynamic text from a field in a data source.

</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify a constant line in the list.</td>

</tr>

<tr>

<td>Show Behind Series</td>

<td>Do not let the constant line be drawn over any series.</td>

</tr>

<tr>

<td>Show Title Below Line</td>

<td>Let the title be displayed below the constant line, instead of above.</td>

</tr>

<tr>

<td>Thickness</td>

<td>The thickness, in pixels, of the constant line.</td>

</tr>

<tr>

<td>Title</td>

<td>

Add a title text to display a title for the constant line.

Enter a text, or click "...", to use [data binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") to get dynamic text from a field in a data source.

</td>

</tr>

<tr>

<td>Title Alignment</td>

<td>**Center**

Specifies that the title is aligned to the center of the axis.

**Far**

Specifies that the title is aligned far from the beginning of the axis.

**Near**

Specifies that the title is aligned near the beginning of the axis.

</td>

</tr>

<tr>

<td>Title Color</td>

<td>Text color of the title.</td>

</tr>

<tr>

<td>Title Font Size</td>

<td>The size of the title text.</td>

</tr>

<tr>

<td>Title Font Style</td>

<td>The style of the title text: **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Title Font Weight</td>

<td>The weight of the text in the title: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Title Horizontal Alignment</td>

<td>

**Left**

Align the title text to the left.

**Center**

Align the title text to the center.

**Right**

Align the title text to the right.

</td>

</tr>

<tr>

<td>Value</td>

<td>

The axis value at which to display the constant line.

Enter a value, or click "...", to use [data binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") to get dynamic value from a field in a data source.

</td>

</tr>

</tbody>

</table>



## Pane Properties

 Select a pane in the list to see the properties of the pane, as described below.

To add a new pane, click **Add**, and then edit the properties.

To change the order of the panes, select a pane in the list, and click **Move Up** or **Move Down**. The default pane is always displayed at the top, even if it is not at the top in the list of panes. To change the order of the panes, select a pane in the list, and click **Move Up** or **Move Down**. The default pane is always displayed at the top, even if it is not at the top in the list of panes.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Default Pane</td>

<td>Only one pane can be the default pane.</td>

</tr>

<tr>

<td>Enable X Axis Scroll / Zoom</td>

<td>Enables scrolling and zooming along the X axis. Scrolling can be performed either by using the mouse to drag the chart, or by using scrollbars. Zooming can be performed either by using the mouse wheel, or by using scrollbars.</td>

</tr>

<tr>

<td>Enable Y Axis Scroll / Zoom</td>

<td>Enables scrolling and zooming along the Y axis. Scrolling can be performed either by using the mouse to drag the chart, or by using scrollbars. Zooming can be performed either by using the mouse wheel, or by using scrollbars.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the pane when selecting a pane for a series.</td>

</tr>

<tr>

<td>Visible X Axes</td>

<td>A list of X axes that should be visible in the pane. Series in the pane can be bound to axes that are not visible.</td>

</tr>

<tr>

<td>Visible Y Axes</td>

<td>A list of Y axes that should be visible in the pane. Series in the pane can be bound to axes that are not visible.</td>

</tr>

<tr>

<td>X Axis Scrollbar Options</td>

<td>Options for the scrollbar along the X axis. Only available if Enable X Axis Scroll / zoom is selected.</td>

</tr>

<tr>

<td>X Axis Scrollbar Options - Alignment</td>

<td>

**Near**

The scrollbar is displayed at the left or bottom side of the chart, depending on its type and orientation.

**Far**

The scrollbar is displayed at the right or top side of the chart, depending on its type and orientation.

</td>

</tr>

<tr>

<td>X Axis Scrollbar Options - Thickness</td>

<td>The thickness of the X axis scrollbar in pixels. Clear the value for automatic sizing. Only available if X Axis Scrollbar Options - Visible is selected.</td>

</tr>

<tr>

<td>X Axis Scrollbar Options - Visible</td>

<td>Display the scrollbar along the X axis.</td>

</tr>

<tr>

<td>Y Axis Scrollbar Options</td>

<td>Options for the scrollbar along the Y axis. Only available if Enable Y Axis Scroll / zoom is selected.</td>

</tr>

<tr>

<td>Y Axis Scrollbar Options - Alignment</td>

<td>

**Near**

The scrollbar is displayed at the left or bottom side of the chart, depending on its type and orientation.

**Far**

The scrollbar is displayed at the right or top side of the chart, depending on its type and orientation.

</td>

</tr>

<tr>

<td>Y Axis Scrollbar Options - Thickness</td>

<td>The thickness of the Y axis scrollbar in pixels. Clear the value for automatic sizing. Only available if Y Axis Scrollbar Options - Visible is selected.</td>

</tr>

<tr>

<td>Y Axis Scrollbar Options - Visible</td>

<td>Display the scrollbar along the Y axis.</td>

</tr>

</tbody>

</table>



## Series Properties

The type of a series is shown in the list on the left. Select a series to see the properties of the series, as described below.

To add a new series, in the **Add Item of Type** list, select the type of series you want to add, and click **Add**.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>The data that is used to plot the series. See [Data Binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals").</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the series. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Label - Colon Suffix</td>

<td>Show a colon ":" after the label.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the series in the list of all series.</td>

</tr>

<tr>

<td>Pane</td>

<td>The pane the series is plotted in.</td>

</tr>

<tr>

<td>Show in Legend</td>

<td>Display information about this series in the legend.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>

The screen tip which is displayed when the mouse cursor is moved over the series. Enter a text in the box, or click the "..." button in the box to define an advanced [screen tip](../../common-control-properties.md).

</td>

</tr>

<tr>

<td>X Axis Binding</td>

<td>How the data of the series is connected to an X axis.</td>

</tr>

<tr>

<td>X Axis Binding - Axis</td>

<td>The X axis in the chart, that the series is connected to. The axis does not have to be visible in the pane, but it most often is.</td>

</tr>

<tr>

<td>X Axis Binding - Field</td>

<td>The field in the series data that is used to connect to the X axis. The field must have the same data type as the axis.</td>

</tr>

<tr>

<td>Y Axis Binding</td>

<td>How the data of the series is connected to a Y axis.</td>

</tr>

<tr>

<td>Y Axis Binding - Axis</td>

<td>The Y axis in the chart, that the series is connected to. The axis does not have to be visible in the pane, but it most often is.</td>

</tr>

<tr>

<td>Y Axis Binding - Field</td>

<td>The field in the series data that is used to connect to the Y axis. The field must have the same data type as the axis.</td>

</tr>

</tbody>

</table>



## Auto Series Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>The data that is used to plot the series. See [Data Binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals").</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the series. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Label - Colon Suffix</td>

<td>Show a colon ":" after the label.</td>

</tr>

<tr>

<td>Name</td>

<td>The name of the auto series.</td>

</tr>

<tr>

<td>Pane</td>

<td>The pane the series is plotted in.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>

The screen tip which is displayed when the mouse cursor is moved over the series. Enter a text in the box, or click the "..." button in the box to define an advanced [screen tip](../../common-control-properties.md).

</td>

</tr>

<tr>

<td>Series Category</td>

<td>The field which is used to split the data into different series. For example, if the data contains Date, Amount, and Company, connect Date to the X axis, Amount to the Y axis, and use company as series category to create a series per company.</td>

</tr>

<tr>

<td>Series Category Display Name</td>

<td>

The field of a complex series category to use for series values .  

For example: if the series category is set to Company, the display name can be set to Company.Name to use the name of the companies for the automatically generated series, or the value field can be set to Company.Organizational Code , to use this value for the series.

</td>

</tr>

<tr>

<td>Type</td>

<td>The type of series to automatically generate. For exampel, *Line2D* or *Area2D*.</td>

</tr>

<tr>

<td>X Axis Binding</td>

<td>How the data of the series is connected to an X axis.</td>

</tr>

<tr>

<td>X Axis Binding - Axis</td>

<td>The X axis in the chart, that the series is connected to. The axis does not have to be visible in the pane, but it most often is.</td>

</tr>

<tr>

<td>X Axis Binding - Field</td>

<td>The field in the series data that is used to connect to the X axis. The field must have the same data type as the axis.</td>

</tr>

<tr>

<td>Y Axis Binding</td>

<td>How the data of the series is connected to a Y axis.</td>

</tr>

<tr>

<td>Y Axis Binding - Axis</td>

<td>The Y axis in the chart, that the series is connected to. The axis does not have to be visible in the pane, but it most often is.</td>

</tr>

<tr>

<td>Y Axis Binding - Field</td>

<td>The field in the series data that is used to connect to the Y axis. The field must have the same data type as the axis.</td>

</tr>

</tbody>

</table>



## Titles Properties

 Select a title to see the properties of the title, as described below.

To add a new title, click **Add**. 

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Label</td>

<td>The text for the title. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Label - Colon Suffix</td>

<td>Show a colon ":" after the label.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>

The screen tip which is displayed when the mouse cursor is moved over the title. Enter a text in the box, or click the "..." button in the box to define an advanced [screen tip](../../common-control-properties.md).

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

<td>Horizontal Alignment</td>

<td>

**Left**

Align the title text to the left.

**Center**

Align the title text to the center.

**Right**

Align the title text to the right.

**Stretch**

Stretch the title text. This may not always be applicable.

</td>

</tr>

<tr>

<td>Vertical Alignment</td>

<td>

**Top**

Align the title text to the top.

**Center**

Align the title text to the center.

**Bottom**

Align the title text to the bottom.

**Stretch**

Stretch the title text. This may not always be applicable.

</td>

</tr>

<tr>

<td>Dock</td>

<td>

The position of the title in the chart.

**Left**

The title is positioned to the left in the chart.

**Top**

The title is positioned at the top in the chart.

**Right**

The title is positioned to the right in the chart.

**Bottom**

The title is positioned at the bottom in the chart.

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

<td>Background Color</td>

<td>Background color for the title.</td>

</tr>

<tr>

<td>Border Color</td>

<td>Border color for the box surrounding the title.</td>

</tr>

<tr>

<td>Border Thickness</td>

<td>Border thickness, in pixels, of the box surrounding the title.</td>

</tr>

<tr>

<td>Font Size</td>

<td>The size of the title text.</td>

</tr>

<tr>

<td>Font Style</td>

<td>The style of the title text: **Normal** or **Italic** .</td>

</tr>

<tr>

<td>Font Weight</td>

<td>The weight of the text in the title: **Normal** or **Bold** .</td>

</tr>

<tr>

<td>Foreground Color</td>

<td>Text color of the title.</td>

</tr>

</tbody>

</table>



## Legend Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Background Color</td>

<td>Background color for the legend box.</td>

</tr>

<tr>

<td>Foreground Color</td>

<td>Text color within the legend.</td>

</tr>

<tr>

<td>Border Color</td>

<td>Color of the border of the legend box.</td>

</tr>

<tr>

<td>Border Thickness</td>

<td>Thickness of the border of the legend box.</td>

</tr>

<tr>

<td>Font Size</td>

<td>The size of the text in the legend.</td>

</tr>

<tr>

<td>Font Style</td>

<td>The style of the text in the legend: **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Font Weight</td>

<td>The weight of the text in the legend: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Horizontal Position</td>

<td>

**Center**

Centers a legend horizontally within the Diagram.

**Left**

The legend is positioned on the left side of the Diagram.

**Left Outside**

The legend is positioned to the left of the Chart area.

**Right**

The legend is positioned on the right side of the Diagram.

**Right Outside**

The legend is positioned to the right of the Chart area.

</td>

</tr>

<tr>

<td>Vertical Position</td>

<td>

**Bottom**

The legend is positioned level with the bottom of the Diagram.

**Bottom Outside**

The legend is positioned at the bottom of the Chart area.

**Center**

Centers a legend vertically within the Diagram.  

**Top**

The legend is positioned level with the top of the Diagram.

**Top Outside**

The legend is positioned at the top of the Chart area.

</td>

</tr>

<tr>

<td>Orientation</td>

<td>

**Vertical**

The legend items are listed from left to right.

**Horizontal**

The legend items are listed from top to bottom.

</td>

</tr>

<tr>

<td>Indent from Diagram</td>

<td>Number of pixels to indent the legend from the diagram.</td>

</tr>

</tbody>

</table>

