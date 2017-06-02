# Grid

The grid displays displays data in a two-dimensional table. The bound data is arranged in columns and rows. Grid columns correspond to fields in a data source, while rows represent data records.

## General

### Columns

The columns represent the fields in the data source, and contain cells that display values from the corresponding field in a data source. The column has a column header which displays the column's caption and enables an end-user to move and resize the column, apply sorting and filtering, etc.

### Grouping

Allows data to be grouped by an unlimited number of columns. When a grid is grouped by a single column, rows that have identical values in this column are arranged into groups. Each group is identified by a group row. If the grid is grouped by another column, data rows within each group are arranged into second level groups based on the values of the new grouping column, etc.

### Fixed total summaries

Allows you to display brief information about all rows or groups of rows. For example, you can display the number of records, minimum, maximum values, or average values from various columns.

### Detail view

Display details for a row as a new grid or a tab sheet with grids. For example, display the companies in the grid, and the company contacts in a detail view.

### Performance considerations

When displaying large data volumes performance considerations are imporant. Consider turning off or limiting best fit calculations for the width of columns. See the grid and column properties Best Fit Mode and Best Fit Max Row Count.

The auto option of the scrollbar visibility settings are convenient, but can lead to performance issues. Consider turning off the auto option wherever possible.


## Properties

See [Common Control Properties](../common-control-properties.md), in addition to the control specific properties below.

### General

Property                |  Description
------------------------|------------------------------------------------------------------------
Allow Customize View    | Enable individual users to change view settings, like visible columns, grouping, etc.
Auto Columns Width      | Column widths are changed automatically, so that the total width of all columns matches the width of the control. When changing the width of one column, the widths of other columns are automatically changed to maintain the total width.
Best Fit Max Row Count  | The maximum number of rows that is used when calculating the best fit. If no value is entered, all rows specified in the Best Fit Mode is used.<br><br>This is a useful setting to increase performance, as best fit calculations for large data volumes can be time consuming.
Best Fit Mode           | Specifies the way the column width is calculated. This is a default setting which can be overriden for individual columns.<br><ul><li>**None** - No best fit calculation is performed.</li><li>**All Rows** - The column width is calculated based on text of all cells within this column.</li><li>**DistinctValues** - The column width is calculated based on all distinct values in the underlying datasource.</li><li>**VisibleRows** - The column width is calculated based on the values in the currently visible cells.</li></ul>
Columns                 | The columns that are defined for the control.<br><br>See below for details on the column properties.
Data Filter             | Filters the data from the bound data source.
Default Selection       | Defines which items in the grid that are selected initially.<br><ul><li>**None** - No items are selected</li><li>**Mark First Item** - The first item in the grid is selected.</li><li>**Condition** - A condition defines which items are initially selected.</li></ul>
Detail View             | To display a detail view, select the type of detail view to use, otherwise leave this option blank.<br><ul><li>**Grid** - The detail view contains a grid.</li><li>**Tabs** - The detail view contains tab sheets with a grid for each sheet.</li></ul>
Detail View Settings    | Contains the specification for the selected detail view. Only applicable if a detail view is selected.<br><br>For information on the specific properties, see [Detail View Settings Properties](grid.md) below.
Fixed Total Summaries   | A list of aggregated summary numbers which are displayed at the bottom. These summaries are fixed for the entire grid, and is thereby independent of any columns. For information on summaries connected to columns, see [Column Properties](grid.md).<br><br>For information on specific properties, see [Total Summary Properties](grid.md) below.
Grouping                | Default grouping of the rows in the grid. Specify which columns to group on in which order, group intervals, and if the groups are default expanded or collapsed.
Horizontal Scrollbar Visibility | Controls the visibility of the scrollbar.<br><ul><li>**Auto** - The scrollbar is visible if it is needed.</li><li>**Hidden** - The scrollbar is always hidden.</li><li>**Visible** - The scrollbar is always visible.</li></ul><br>The Auto option is convenient, but can in complex forms lead to performance issues.
Selection Mode          | <ul><li>**Single** - It is only possible to select one item at a time.</li><li>**Multiple** - It is posssible to select multiple items.</li></ul>
Show Column Headers     | Displays headers with column names at the top of each column.
Show Grouped Columns    | Columns that are used for grouping the data, are displayed. To automatically hide columns that are used for grouping, clear this option.
Show Horizontal Lines   | Displays lines between rows.
Show No of Objects      | Shows the number of objects in the grid in a parenthesis in the caption for the grid. This option has no effect if a caption is not displayed.
Show Row Indicator      | Displays a special column before the first column, where various indicators are displayed for the rows. *For example, it is indicated which row has focus.*
Show Vertical Lines     | Displays lines between columns.
Sorting                 | Default sorting of the rows in the grid. Specify which columns to sort ascending or descending on, and in which order.
Vertical Scrollbar Visibility | Controls the visibility of the scrollbar.<br><ul><li>**Auto** - The scrollbar is visible if it is needed.</li><li>**Hidden** - The scrollbar is always hidden.</li><li>**Visible** - The scrollbar is always visible.</li></ul><br>The Auto option is convenient, but can in complex forms lead to performance issues.


### Format

Property                |  Description
------------------------|------------------------------------------------------------------------
Row Background Color    | Background color for the rows in the grid.
Row Font Size           | Size of the text in the rows in the grid.
Row Font Style          | Style of the text in the rows in the grid: **Normal** or **Italic**.
Row Font Weight         | Weight of the text in the rows in the grid: **Normal** or **Bold**.
Row Foreground Color    | Color of the text in the rows.


## Column Properties

### General

Property                |  Description
------------------------|------------------------------------------------------------------------
Control                 | The control used to display and edit a cell in the column. Currently only Text Edit is available.
Control Settings        | Settings specific for the selected control.
Control Settings - Word Wrap | Enables wrapping of text that is too long to display on one line. Only applicable to the Text Edit control
Data Binding            | The data for the column. See [Data Binding](../../../../../../users/searching-for-data/data-binding.md "Data Binding") and [Data Binding Fundamentals](../data-binding-fundamentals.md "Data Binding Fundamentals").
Initially Selected      | The column is selected when the control is initially opened.
Label                   | The label for the column. Enter a text in the box, or click the "..." button in the box to select a field.
Label - Colon Suffix    | Show a colon ":" after the label.
Name                    | Used to identify the column in a list of columns.
Open in Default Form    | The selected object can be opened using the [default form](../../../../object-class/modify-an-object--or-identifier-domain/explore.md) for the object class.
Read Only               | It is not possible to edit the cells in column. This option is currently always true.
Screen Tip              | The screen tip which is displayed when the mouse cursor is moved over the column. Enter a text in the box, or click the "..." button in the box to select a field.
Tab Index               | The number in the tab sequence order for the column.
Tab Stop                | The control is part of the tab sequence in the form.
Total Summaries         | A list of aggregated summary numbers which are displayed at the bottom of the column. For information on summaries independent of columns, see the controls Fixed Total Summary property.<br><br>For information on specific properties, see Total Summary Properties below.
Visible                 | <ul><li>**Yes** - The column is visible to the end user.</li><li>**No** - The column is not visible to the end user.</li><li>**Condition** - A condition determines if the column is visible to the end user. Use a condition when the column only should be visible in som cases, for example depending on the state of an object.</li></ul>

### Size and Position

Property                |  Description
------------------------|------------------------------------------------------------------------
Best Fit Area           | Specifies which column elements are taken into account when calculating the optimal width.<br><ul><li>**None** - No elements of the column is taken into account.</li><li>**All** - All elements of a column (row cells, header, total summary) is taken into account.</li><li>**Header** - Only the header is taken into account.</li><li>**Rows** - Grid rows' values should be taken into account.</li><li>**Total Summary** - The total summary's text should be taken into account.</li></ul>
Best Fit Max Row Count  | The maximum number of rows that is used when calculating the best fit. If no value is entered, the number specified for the control is used.<br><br>This is a useful setting to increase performance, as best fit calculations for large data volumes can be time consuming.
Best Fit Mode           | Specifies how the column width is calculated.<br><ul><li>**Default** - The best fit mode for the grid is used.</li><li>**All Rows** - The column width is calculated based on text of all cells within this column.</li><li>**DistinctValues** - The column width is calculated based on all distinct values in the underlying datasource.</li><li>**VisibleRows** - The column width is calculated based on the values in the currently visible cells.</li></ul>
Fixed                   | Specifies the behaviour for the column when scrolling horizontally.<br><ul><li>**None** - The column takes part in horizontal scrolling.</li><li>**Left** - The column is anchored to the left edge.</li><li>**Right** - The column is anchored to the right edge.</li></ul>
Fixed Width             | The column width remains the same and is not affected by the auto widht option.
Max Width               | The maximum width of the column when resizing or when the width is calculated automatically
Min Width               | The minimum width of the column when resizing or when the width is calculated automatically.


### Format

Property                |  Description
------------------------|------------------------------------------------------------------------
Automatic Formatting    | 
Cell Background Color   | Background color for the cells.
Cell Font Size          | Size of the cell text.
Cell Font Style         | Style of the cell text: **Normal** or **Italic**.
Cell Font Weigth        | Weight of the cell text: **Normal** or **Bold**.
Cell Foreground Color   | The color of the cell text.
Display Format String   | Format the value and add any text to its textual representation. The formatted text is displayed if the value is not currently edited (if it is not focused or it is read-only).<br><br>*For example, to display currency values, set the DisplayFormatString property to 'c2'. If the editor's value is 99.9, its formatted equivalent will be $99.90.*<br><br>The specified display format should match the value's type, otherwise, it is ignored and is not applied.<br><br>*Standard format specifiers for composing the format pattern are described in the Format Strings topics in MSDN.*
Label Background Color  | Background color for the column label.
Label Font Size         | Size of the font for the column label.
Label Font Style        | Style of the column label text: **Normal** or **Italic**.
Label Font Weigth       | Weight of the column label text: **Normal** or **Bold**.
Label Foreground Color  | Color of the column label text.

## Total Summary Properties

### General

Property                |  Description
------------------------|------------------------------------------------------------------------
Column                  | The column that contains the values to use for the summary.
Label                   | The label for the summary item.
Show in Column Summary  | Enables summaries under individual columns. This option can for example be disabled when the Show in Group Summary is enabled, to show summaries only for the groups and not a total for the columns.
Show in Group Summary   | Enables summaries for individual groups, in addition to a total summary under the columns. Only applicable if the control offers grouping.
Summary Type            | Specifies the type of aggregation function to use for the summary value.<br><ul><li>**None** - Disables summary value calculation.</li><li>**Average** - The average value of a column.</li><li>**Count** - The record count.</li><li>**Max** - The maximum value in a column.</li><li>**Min** - The minimum value in a column.</li><li>**Sum** - The sum of all values in a column.</li></ul>


### Size and Position

Property                |  Description
------------------------|------------------------------------------------------------------------
Alignment               | <ul><li>**Default** - Only applicable for Total Summaries.</li><li>**Left** - The summary is aligned to the left. Only applicable for Fixed Total Summaries.</li><li>**Right** - The summary is aligned to the right. Only applicable for Fixed Total Summaries.</li></ul>


## Detail View Settings Properties

Property                |  Description
------------------------|------------------------------------------------------------------------
Control                 | The control that is used for the detail view.
Control Settings        | Settings for the grid control used as a detail view. When specifying a grid as a detail view in a grid, the detail view grid cannot have a detail view itself. Only applicable when the detail view is control view.<br><br>For information on specific properties, see Grid Properties.
Header                  | Text to display as a header for the detail view. Only applicable if show header is selected.
Tab Items               | A list of tab sheets to display in the detail view. Only applicable when the detail view is tab sheets view.<br><br>For information on specific properties, see Tab Item Properties.
Name                    | The name of the detail view settings.
Show Header             | Displays a header for the detail view.


## Tab Item Properties

Property                |  Description
------------------------|------------------------------------------------------------------------
Control                 | The control that is used for the detail view.
Control Settings        | Settings for the grid control in the tab item. For a grid as a tab item, the grid cannot have a detail view itself.<br><br>For information on specific properties, see Grid Properties.
Header                  | Text to display as a header for the tab item. Only applicable if show header is selected.
Name                    | The name of the tab item.
Show Header             | Displays a header for the tab item.


## Special Considerations for Events

To simplify the definition of a Grid, it handles certain events specially.

Events with the **On Activate** event type handles double clicking or pressing enter in the grid. Often you want these events to open the item in a new window, but to also enable the Open in a new window menu, you are required to define the **On** **Menu Item Click** event type with the **Open in a new window** menu setting as well.

To simplify the setup, the combination of the **On Menu Item Click** event type and the **Open in a new window** menu setting is therefore also triggered by double clicking and pressing enter in the grid, as long as there are no events with the **On Activate** event type defined.

