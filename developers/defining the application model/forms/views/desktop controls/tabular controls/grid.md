## Grid

The grid displays displays data in a two-dimensional table. The bound data is arranged in columns and rows. Grid columns correspond to fields in a data source, while rows represent data records.

**Columns**

The columns represent the fields in the data source, and contain cells that display values from the corresponding field in a data source. The column has a column header which displays the column's caption and enables an end-user to move and resize the column, apply sorting and filtering, etc.

**Grouping**

Allows data to be grouped by an unlimited number of columns. When a grid is grouped by a single column, rows that have identical values in this column are arranged into groups. Each group is identified by a group row. If the grid is grouped by another column, data rows within each group are arranged into second level groups based on the values of the new grouping column, etc.

**Fixed Total Summaries**

Allows you to display brief information about all rows or groups of rows. For example, you can display the number of records, minimum, maximum values, or average values from various columns.

**Detail View**

Display details for a row as a new grid or a tab sheet with grids. For example, display the companies in the grid, and the company contacts in a detail view.

**Performance Considerations**

When displaying large data volumes performance considerations are imporant. Consider turning off or limiting best fit calculations for the width of columns. See the grid and column properties Best Fit Mode and Best Fit Max Row Count.

The auto option of the scrollbar visibility settings are convenient, but can lead to performance issues. Consider turning off the auto option wherever possible.

In this article

* * *

*   [Properties](#properties)

*   [Column Properties](#column-properties)

*   [Total Summary Properties](#total-summary-properties)

*   [Detail View Settings Properties](#detail-view-settings-properties)

*   [Tab Item Properties](#tab-item-properties)

*   [Special Considerations for Events](#special-considerations-for-events)

* * *

## Properties

See [Common Control Properties](../common control properties.md), in addition to the control specific properties below.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Allow Customize View</td>

<td>Enable individual users to change view settings, like visible columns, grouping, etc.</td>

</tr>

<tr>

<td>Auto Columns Width</td>

<td>Column widths are changed automatically, so that the total width of all columns matches the width of the control. When changing the width of one column, the widths of other columns are automatically changed to maintain the total width.</td>

</tr>

<tr>

<td>Best Fit Max Row Count</td>

<td>The maximum number of rows that is used when calculating the best fit. If no value is entered, all rows specified in the Best Fit Mode is used.  

This is a useful setting to increase performance, as best fit calculations for large data volumes can be time consuming.</td>

</tr>

<tr>

<td>Best Fit Mode</td>

<td>

Specifies the way the column width is calculated. This is a default setting which can be overriden for individual columns.

**None**

No best fit calculation is performed.

**All Rows**

The column width is calculated based on text of all cells within this column.

**DistinctValues**

The column width is calculated based on all distinct values in the underlying datasource.

**VisibleRows**

The column width is calculated based on the values in the currently visible cells.

</td>

</tr>

<tr>

<td>Columns</td>

<td>

The columns that are defined for the control.

See below for details on the column properties.

</td>

</tr>

<tr>

<td>Data Filter</td>

<td>Filters the data from the bound data source.</td>

</tr>

<tr>

<td>Default Selection</td>

<td>

Defines which items in the grid that are selected initially.

**None**  
No items are selected  

**Mark First Item**  
The first item in the grid is selected.  

**Condition**  
A condition defines which items are initially selected.

</td>

</tr>

<tr>

<td>Detail View</td>

<td>

To display a detail view, select the type of detail view to use, otherwise leave this option blank.

**Grid**

The detail view contains a grid.

**Tabs**

The detail view contains tab sheets with a grid for each sheet.

</td>

</tr>

<tr>

<td>Detail View Settings</td>

<td>

Contains the specification for the selected detail view. Only applicable if a detail view is selected.

For information on the specific properties, see [Detail View Settings Properties](grid.md) below.

</td>

</tr>

<tr>

<td>Fixed Total Summaries</td>

<td>

A list of aggregated summary numbers which are displayed at the bottom. These summaries are fixed for the entire grid, and is thereby independent of any columns. For information on summaries connected to columns, see [Column Properties](grid.md).

For information on specific properties, see [Total Summary Properties](grid.md) below.

</td>

</tr>

<tr>

<td>Grouping</td>

<td>Default grouping of the rows in the grid. Specify which columns to group on in which order, group intervals, and if the groups are default expanded or collapsed.</td>

</tr>

<tr>

<td>Horizontal Scrollbar Visibility</td>

<td>

Controls the visibility of the scrollbar.

**Auto**

The scrollbar is visible if it is needed.

**Hidden**

The scrollbar is always hidden.

**Visible**

The scrollbar is always visible.

The Auto option is convenient, but can in complex forms lead to performance issues.

</td>

</tr>

<tr>

<td>Selection Mode</td>

<td>

**Single**

It is only possible to select one item at a time.

**Multiple**

It is posssible to select multiple items.

</td>

</tr>

<tr>

<td>Show Column Headers</td>

<td>Displays headers with column names at the top of each column.</td>

</tr>

<tr>

<td>Show Grouped Columns</td>

<td>Columns that are used for grouping the data, are displayed. To automatically hide columns that are used for grouping, clear this option.</td>

</tr>

<tr>

<td>

Show Horizontal Lines

</td>

<td>Displays lines between rows.</td>

</tr>

<tr>

<td>Show No of Objects</td>

<td>Shows the number of objects in the grid in a parenthesis in the caption for the grid. This option has no effect if a caption is not displayed.</td>

</tr>

<tr>

<td>Show Row Indicator</td>

<td>Displays a special column before the first column, where various indicators are displayed for the rows. <span style="FONT-STYLE: italic">For example, it is indicated which row has focus.</td>

</tr>

<tr>

<td>Show Vertical Lines</td>

<td>Displays lines between columns.</td>

</tr>

<tr>

<td>Sorting</td>

<td>Default sorting of the rows in the grid. Specify which columns to sort ascending or descending on, and in which order.</td>

</tr>

<tr>

<td>Vertical Scrollbar Visibility</td>

<td>Controls the visibility of the scrollbar.  

**Auto**  
The scrollbar is visible if it is needed.  

**Hidden**  
The scrollbar is always hidden.  

**Visible**  
The scrollbar is always visible.  

The Auto option is convenient, but can in complex forms lead to performance issues.</td>

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

<td>Row Background Color</td>

<td>Background color for the rows in the grid.</td>

</tr>

<tr>

<td>Row Font Size</td>

<td>Size of the text in the rows in the grid.</td>

</tr>

<tr>

<td>Row Font Style</td>

<td>Style of the txt in the rows in the grid: **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Row Font Weight</td>

<td>Weight of the text in the rows in the grid: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Row Foreground Color</td>

<td>Color of the text in the rows.</td>

</tr>

</tbody>

</table>

## Column Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Control</td>

<td>The control used to display and edit a cell in the column. Currently only Text Edit is available.</td>

</tr>

<tr>

<td>Control Settings</td>

<td>Settings specific for the selected control.</td>

</tr>

<tr>

<td>Control Settings - Word Wrap</td>

<td>Enables wrapping of text that is too long to display on one line. Only applicable to the Text Edit control</td>

</tr>

<tr>

<td>Data Binding</td>

<td>The data for the column. See [Data Binding](../../../../../../users/searching for data/data binding.md "Data Binding") and [Data Binding Fundamentals](../list and lookup controls/data binding fundamentals.md "Data Binding Fundamentals").</td>

</tr>

<tr>

<td>Initially Selected</td>

<td>The column is selected when the control is initially opened.</td>

</tr>

<tr>

<td>

Label

</td>

<td>The label for the column. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Label - Colon Suffix</td>

<td>Show a colon ":" after the label.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the column in a list of columns.</td>

</tr>

<tr>

<td>Open in Default Form</td>

<td>The selected object can be opened using the [default form](../../../../object class/modify an object- or identifier domain/explore.md) for the object class.</td>

</tr>

<tr>

<td>Read Only</td>

<td>It is not possible to edit the cells in column. This option is currently always true.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>The screen tip which is displayed when the mouse cursor is moved over the column. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Tab Index</td>

<td>The number in the tab sequence order for the column.</td>

</tr>

<tr>

<td>Tab Stop</td>

<td>The control is part of the tab sequence in the form.</td>

</tr>

<tr>

<td>Total Summaries</td>

<td>

A list of aggregated summary numbers which are displayed at the bottom of the column. For information on summaries independent of columns, see the controls Fixed Total Summary property.  

For information on specific properties, see Total Summary Properties below.

</td>

</tr>

<tr>

<td>Visible</td>

<td>**Yes**  
The column is visible to the end user.  

**No**  
The column is not visible to the end user.  

**Condition**  
A condition determines if the column is visible to the end user. Use a condition when the column only should be visible in som cases, for example depending on the state of an object.</td>

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

<td>Best Fit Area</td>

<td>

Specifies which column elements are taken into account when calculating the optimal width.

**None**

No elements of the column is taken into account.

**All**  
All elements of a column (row cells, header, total summary) is taken into account.  

**Header**  
Only the header is taken into account.

**Rows**

Grid rows' values should be taken into account.

**Total Summary**

The total summary's text should be taken into account.

</td>

</tr>

<tr>

<td>Best Fit Max Row Count</td>

<td>

The maximum number of rows that is used when calculating the best fit. If no value is entered, the number specified for the control is used.

This is a useful setting to increase performance, as best fit calculations for large data volumes can be time consuming.

</td>

</tr>

<tr>

<td>Best Fit Mode</td>

<td>

Specifies how the column width is calculated.  

**Default**  
The best fit mode for the grid is used.

**All Rows**  
The column width is calculated based on text of all cells within this column.  

**DistinctValues**  
The column width is calculated based on all distinct values in the underlying datasource.  

**VisibleRows**  
The column width is calculated based on the values in the currently visible cells.

</td>

</tr>

<tr>

<td>Fixed</td>

<td>

Specifies the behaviour for the column when scrolling horizontally.

**None**

The column takes part in horizontal scrolling.

**Left**

The column is anchored to the left edge.

**Right**

The column is anchored to the right edge.

</td>

</tr>

<tr>

<td>Fixed Width</td>

<td>The column width remains the same and is not affected by the auto widht option.</td>

</tr>

<tr>

<td>Max Width</td>

<td>The maximum width of the column when resizing or when the width is calculated automatically</td>

</tr>

<tr>

<td>Min Width</td>

<td>The minimum width of the column when resizing or when the width is calculated automatically.</td>

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

<td></td>

</tr>

<tr>

<td>Cell Background Color</td>

<td>Background color for the cells.</td>

</tr>

<tr>

<td>Cell Font Size</td>

<td>Size of the cell text.</td>

</tr>

<tr>

<td>Cell Font Style</td>

<td>Style of the cell text: **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Cell Font Weigth</td>

<td>Weight of the cell text: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Cell Foreground Color</td>

<td>The color of the cell text.</td>

</tr>

<tr>

<td>Display Format String</td>

<td>Format the value and add any text to its textual representation. The formatted text is displayed if the value is not currently edited (if it is not focused or it is read-only).  

<span style="FONT-STYLE: italic">For example, to display currency values, set the DisplayFormatString property to 'c2'. If the editor's value is 99.9, its formatted equivalent will be $99.90.  

The specified display format should match the value's type, otherwise, it is ignored and is not applied.  

<span style="FONT-STYLE: italic">Standard format specifiers for composing the format pattern are described in the Format Strings topics in MSDN.</td>

</tr>

<tr>

<td>Label Background Color</td>

<td>Background color for the column label.</td>

</tr>

<tr>

<td>Label Font Size</td>

<td>

Size of the font for the column label.

</td>

</tr>

<tr>

<td>Label Font Style</td>

<td>Style of the column label text: **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Label Font Weigth</td>

<td>Weight of the column label text: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Label Foreground Color</td>

<td>Color of the column label text.</td>

</tr>

</tbody>

</table>



## Total Summary Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Column</td>

<td>The column that contains the values to use for the summary.</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the summary item.</td>

</tr>

<tr>

<td>Show in Column Summary</td>

<td>

Enables summaries under individual columns. This option can for example be disabled when the Show in Group Summary is enabled, to show summaries only for the groups and not a total for the columns.

</td>

</tr>

<tr>

<td>Show in Group Summary</td>

<td>

Enables summaries for individual groups, in addition to a total summary under the columns. Only applicable if the control offers grouping.

</td>

</tr>

<tr>

<td>Summary Type</td>

<td>

Specifies the type of aggregation function to use for the summary value.

**None**

Disables summary value calculation.

**Average**

The average value of a column.

**Count**

The record count.

**Max**

The maximum value in a column.

**Min**

The minimum value in a column.

**Sum**

The sum of all values in a column.

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

<td>Alignment</td>

<td>

**Default**

Only applicable for Total Summaries.

**Left**

The summary is aligned to the left.

Only applicable for Fixed Total Summaries.

**Right**

The summary is aligned to the right.

Only applicable for Fixed Total Summaries.

</td>

</tr>

</tbody>

</table>



## Detail View Settings Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Control</td>

<td>The control that is used for the detail view.</td>

</tr>

<tr>

<td>Control Settings</td>

<td>

Settings for the grid control used as a detail view. When specifying a grid as a detail view in a grid, the detail view grid cannot have a detail view itself. Only applicable when the detail view is control view.

For information on specific properties, see Grid Properties.

</td>

</tr>

<tr>

<td>Header</td>

<td>Text to display as a header for the detail view. Only applicable if show header is selected.</td>

</tr>

<tr>

<td>Tab Items</td>

<td>

A list of tab sheets to display in the detail view. Only applicable when the detail view is tab sheets view.

For information on specific properties, see Tab Item Properties.

</td>

</tr>

<tr>

<td>Name</td>

<td>The name of the detail view settings.</td>

</tr>

<tr>

<td>Show Header</td>

<td>Displays a header for the detail view.</td>

</tr>

</tbody>

</table>



## Tab Item Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Control</td>

<td>The control that is used for the detail view.</td>

</tr>

<tr>

<td>Control Settings</td>

<td>

Settings for the grid control in the tab item. For a grid as a tab item, the grid cannot have a detail view itself.

For information on specific properties, see Grid Properties.

</td>

</tr>

<tr>

<td>Header</td>

<td>Text to display as a header for the tab item. Only applicable if show header is selected.</td>

</tr>

<tr>

<td>Name</td>

<td>The name of the tab item.</td>

</tr>

<tr>

<td>Show Header</td>

<td>Displays a header for the tab item.</td>

</tr>

</tbody>

</table>



## Special Considerations for Events

To simplify the definition of a Grid, it handles certain events specially.

Events with the **On Activate** event type handles double clicking or pressing enter in the grid. Often you want these events to open the item in a new window, but to also enable the Open in a new window menu, you are required to define the **On** **Menu Item Click** event type with the **Open in a new window** <span style="FONT-WEIGHT: normal">menu setting as well<span style="FONT-WEIGHT: normal">.

<span style="FONT-WEIGHT: normal">To simplify the setup, the combination of the **On Menu Item Click** <span style="FONT-WEIGHT: normal">event type and the **Open in a new window** <span style="FONT-WEIGHT: normal">menu setting is therefore also triggered by double clicking and pressing enter in the grid, as long as there are no events with the **On Activate** <span style="FONT-WEIGHT: normal"><span style="FONT-WEIGHT: normal"><span style="FONT-WEIGHT: normal"><span style="FONT-WEIGHT: normal">event type defined.

