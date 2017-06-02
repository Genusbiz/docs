# Table

The table control allows the use of a predefined [table](../../../../tables.md) to be used within a form. A table can be advanced and rich on functionality. For simpler listings, the [grid](grid.md) may be a more suited option.


## Properties

See [Common Control Properties](../common-control-properties.md), in addition to the control specific properties below.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Allow Search</td>

<td>Specifies if the users are allowed to perform searches in the table. If this option is not selected, the data filter may contain conditions with the OR operator.</td>

</tr>

<tr>

<td>Search Pane</td>

<td>

Specifies the availability of the search pane.

*   **Off** - The search pane is not available
*   **Collapsed** - The search pane is available, but is initially collapsed.
*   **Expanded** - The search pane is available, and is initially expanded

When Allow Search is not selected, the value is Off.

</td>

</tr>

<tr>

<td>Data Filter</td>

<td>

Filters the data for the table.

The public data sources in the table are listed. Each data source by default uses the data filter as specified in the table, but the filters can be modified. To modify the filter for a data source, select a data source in the list, and click **Modify**. A data filter may only contain conditions with the OR operator if the **Allow Search** option is not selected.

</td>

</tr>

<tr>

<td>Default Filter</td>

<td>

Specifies how the data sources are initially filtered, but allows the users to search for additional data which is not included in the default filter.

The public data sources in the table are listed. Each data source by default uses the default data filter as specified in the table, but the filters can be modified. To modify the default data filter for a data source, select a data source in the list, and click **Modify**.

</td>

</tr>

<tr>

<td>Detail Master Binding</td>

<td>

The detail master bindings are used when creating new objects in the table. The table data sources (detail) is bound to a parent data source (master) in the form. The bindings are used to check that the user has access to create new objects, and link the new object to its parent object.

The public data sources in the table are listed, and foreach data source, a binding can be specified. To specify a binding for a data source, in the **Field** cell, click "**...**" to select the field to bind to the master data source. Then in the **Master Group** cell, click "**...**" to select the data source or group to bind the detail data source to.

</td>

</tr>

<tr>

<td>Show No of Objects</td>

<td>Displays the number of objects in the table.</td>

</tr>

<tr>

<td>

Table

</td>

<td>The [table](../../../../tables.md) to use.</td>

</tr>

<tr>

<td>View</td>

<td>The [view](../../../../tables/views.md) of the selected table to use.</td>

</tr>

</tbody>

</table>