## Properties

 **

See** [Common Control Properties](../../common-control-properties.md), in addition to the control specific properties below.

 **General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Allow drag of milestones</td>

<td>Enables dragging of tasks that are milestones, to change order or summary task.</td>

</tr>

<tr>

<td>Allow drag of summaries</td>

<td>Enables dragging of tasks that are summaries, to change order or summary task.</td>

</tr>

<tr>

<td>Allow drag of tasks</td>

<td>Enables dragging of tasks that are not milestones or summaries, to change order or summary task.</td>

</tr>

<tr>

<td>Allow link tasks</td>

<td>Enables creating dependencies</td>

</tr>

<tr>

<td>Allow resize of summaries</td>

<td>Enables changing of the duration of tasks that are summaries.</td>

</tr>

<tr>

<td>Allow resize of tasks</td>

<td>Enables changing of the duration of tasks that are not summaries or milestones.</td>

</tr>

<tr>

<td>Columns</td>

<td>

A list of columns which can display detail information for individual tasks to the left in the grid area.

For information on specific properties see Column Properties below.

</td>

</tr>

<tr>

<td>Snap tasks to date</td>

<td>Ensures that tasks are dragged to dates, avoiding the higher degree of detail like hours or minutes.</td>

</tr>

<tr>

<td>Task Dependency</td>

<td>Defines where information on dependencies are held.</td>

</tr>

<tr>

<td>Task Dependency - Dependency Type Field</td>

<td>

The field in the dependency group which contains the type of dependency.

The selected field must have the data interpretation Gantt Task Dependency, which contains the following values:

**Finish-to-Start**

Task 1 must finish before Task 2 can start.

**Start-to-Start**  

Task 1 and Task 2 must start at the same time.

**Finish-to-Finish**  

Task 1 and Task 2 must finish at the same time.

**Start-to-Finish**  
The start of Task 1 determines the finish of Task 2.

</td>

</tr>

<tr>

<td>Task Dependency - Group</td>

<td>The group of a task, where information on dependencies are held.</td>

</tr>

<tr>

<td>Task Dependency - Predecessor Task Field</td>

<td>The field in the dependency group which contains a reference to the predecessor task.</td>

</tr>

<tr>

<td>Task Fields</td>

<td>The fields in the data source that contain specific properties for the task.</td>

</tr>

<tr>

<td>Task Fields - Deadline Field</td>

<td>The field that contains the deadline date.</td>

</tr>

<tr>

<td>Task Fields - Description Field</td>

<td>The field that contains the description of the task.</td>

</tr>

<tr>

<td>Task Fields - Duration Field</td>

<td>The field that contains the duration of the task. This value is calculated based on the start date ane finish date. If the start and finish dates are modified outside the control, the duration must also be updated to maintain consistency.</td>

</tr>

<tr>

<td>Task Fields - Finish Date Field</td>

<td>The field that contains the finish date of the task</td>

</tr>

<tr>

<td>Task Fields - Is Milestone Field</td>

<td>The field that contains a boolean value specifying if this task is a milestone.</td>

</tr>

<tr>

<td>Task Fields - Is Summary Field</td>

<td>The field that contains a boolean value specifying if this task is a summary task.</td>

</tr>

<tr>

<td>Task Fields - Name Field</td>

<td>The field that contains the name of the task.</td>

</tr>

<tr>

<td>Task Fields - Order Index Field</td>

<td>

The field that contains an order index. The order index is a number identifying the order of the item in relation to the other items on the same level and within the same summary (parent).

*For example (order index in parenthesis):*

*Summary 1 (1)*

*Summary 1.1 (1)*

*Task 1.1.1 (1)*

*Task 1.1.2 (2)*

*Summary 1.2 (2)*

*Task 1.2.1 (1)*
*Task 1.2.2 (2)*
*Summary 2 (2)*

*Task 2.1 (1)*
*Task 2.2 (2)*

If order index is blank for any of the items tasks, all ordering functionality is disabled and a warning is displayed. If the order index is not unique for all items within a group, ordering may behave erratically.

</td>

</tr>

<tr>

<td>Task Fields - Percent Complete Field</td>

<td>The field that contains the value for how many percent completed the task is.</td>

</tr>

<tr>

<td>Task Fields - Start Date Field</td>

<td>The field that contains the start date of the task.</td>

</tr>

<tr>

<td>Task Fields - Summary Task Field</td>

<td>The field that contains the reference to the summary task (parent) for the task.</td>

</tr>

<tr>

<td>Visible Range From</td>

<td>

The starting point in the initially visible range. Typically use this property to zoom to a certain range. See [Data Binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals").

</td>

</tr>

<tr>

<td>Visible Range To</td>

<td>The ending point in the initially visible range. Typically use this property to zoom to a certain range. See [Data Binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals").</td>

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

<td>Background color for the row.</td>

</tr>

<tr>

<td>Row Font Size</td>

<td>Font size for the text in the row.</td>

</tr>

<tr>

<td>Row Font Style</td>

<td>Font style for the text in the row. **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Row Font Weight</td>

<td>Weight of the text in the row: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Row Foreground Color</td>

<td>Text color in the row.</td>

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

<td>Data Binding</td>

<td>The data for the column. See [Data Binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals").</td>

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

<td>Used to identify the column in the list of all columns.</td>

</tr>

<tr>

<td>Read Only</td>

<td>The column is not possible to modify. Always enabled.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>The screen tip which is displayed when the mouse cursor is moved over the column. Enter a text in the box, or click the "..." button in the box to select a field containing the text to display.</td>

</tr>

<tr>

<td>Visible</td>

<td>**Yes**  
The field is visible to the end user.  

**No**  
The field is not visible to the end user.  

**Condition...**  
A condition determines if the column is visible.</td>

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

How to calculate the best fit width.

**All**

The header and content is used.

**Header**

Only the header is used.

</td>

</tr>

<tr>

<td>Frozen</td>

<td>Column is moved to the left, and is always displayed when scrolling the columns.</td>

</tr>

<tr>

<td>Max Widht</td>

<td>The maximum width of the column when resizing or when the width is calculated automatically.</td>

</tr>

<tr>

<td>Min Width</td>

<td>The minimum width of the column when resizing or when the width is calculated automatically.</td>

</tr>

<tr>

<td>Width</td>

<td>The initial widht of the column.</td>

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

<td>Format the cell in the column individually based on conditions on the object. See [automatic formatting](../../../../../common-concepts/automatic-formatting.md).</td>

</tr>

<tr>

<td>Cell Background Color</td>

<td>Background color for the cell.</td>

</tr>

<tr>

<td>Cell Font Size</td>

<td>Font size for the text in the cell.</td>

</tr>

<tr>

<td>Cell Font Style</td>

<td>Font style for the text in the cell. **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Cell Font Weight</td>

<td>Font weight for the text in the cell. **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Cell Foreground Color</td>

<td>Color of the text in the cell.</td>

</tr>

<tr>

<td>Display Format String</td>

<td>

Format the value and add any text to its textual representation. The formatted text is displayed if the value is not currently edited (if it is not focused or it is read-only).  

*For example, to display currency values, set the DisplayFormatString property to 'c2'. If the editor's value is 99.9, its formatted equivalent will be $99.90.*

The specified display format should match the value's type, otherwise, it is ignored and is not applied.

Standard format specifiers for composing the format pattern are described in the Format Strings topics in MSDN.

</td>

</tr>

<tr>

<td>Label Background Color</td>

<td>Background color for the coloumn header.</td>

</tr>

<tr>

<td>Label Font Size</td>

<td>Font size for the text in the coloumn header.</td>

</tr>

<tr>

<td>Label Font Style</td>

<td>Font style for the text in the coloumn header. **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Label Font Weight</td>

<td>Font weight for the text in the coloumn header. **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Label Foreground Color</td>

<td>Color of the text in the coloumn header.</td>

</tr>

</tbody>

</table>