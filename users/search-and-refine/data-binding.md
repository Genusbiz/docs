# Data Binding

A data binding can provide objects or values, and can be used to provide the data to be edited or visualized by a control, or it can provide data to configure the control.

**Data to be Edited or Visualized**

Many controls only has the one Data Binding, as the nature of the control does not require anything more, like [Text Edit](../../developers/defining-the-app-model/user-interface/forms/views/desktop-controls/text-and-number-controls.md#text-edit), [List Box](../../developers/defining-the-app-model/user-interface/forms/views/desktop-controls/list-and-lookup-controls.md#list-box), or [Check Box](../../developers/defining-the-app-model/user-interface/forms/views/desktop-controls/button-controls.md#check-box). In these examples, the Text Edit requires one value or field from one object, while the list box requires a set of objects.

For controls that require more than one data binding, the locations and names of the data bindings can vary. For example, the [Date Range Bar](../../developers/defining-the-app-model/user-interface/forms/views/desktop-controls/time-and-date-controls.md#date-range-bar) has the two such data bindings: Range Start, Range End, Selected Start, Selected End. The [Chart](../../developers/defining-the-app-model/user-interface/forms/views/desktop-controls/reporting-and-visualization-controls/chart.md) control has a list of Series, which each has a data binding that provides the points to plot in the chart.

**Data to Configure the Control**

Many of the properties in a control allow data to be provided by a data binding. This makes the controls more dynamic than if the configuration is based on constants during design.

For example, the [Date Range Bar](../../developers/defining-the-app-model/user-interface/forms/views/desktop-controls/time-and-date-controls.md#date-range-bar) has the two such data bindings: Range Start, Range End. The [Track Bar](../../developers/defining-the-app-model/user-interface/forms/views/desktop-controls/button-controls.md#track-bar) has several data bindings to configure the control: Min Value, Max Value, Tick Frequency, Small Step, Large Step.

**Properties**

A data binding consist of the following properties, in which the first is always required, while the two other may be optional or unavailable.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Source</td>

<td>The data source that contains the data. Depending on the usage, the data source may contain one object or many objects.</td>

</tr>

<tr>

<td>Active Object</td>

<td>The binding is dependent on the Active Object within the data source. If the data source contains many objects, and one only is required, the active object binding can be used to get the one object that is currently active from the data source.</td>

</tr>

<tr>

<td>Field</td>

<td>The field in the data soure, that contains the data. This is required if the data binding requires a value.</td>

</tr>

</tbody>

</table>

See also [Data Binding](../../developers/defining-the-app-model/common-concepts/data-binding.md), and [Active Object](../../developers/defining-the-app-model/common-concepts/active-object.md).