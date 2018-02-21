## Value designer options

[Values](../../concepts.md#value)  are numeric can be assigned a *Number Format*

In the **DATA** tab you can find the following options:
* **Label** - The label is used as a name for the value. It is used as a column header, series name, etc.
* **Data Source** - Select the data source to get a value from. By only selectiong a data source, the value will be the count of objects in that data source.
* **Field** - Select a field from the selected data source. 
* **Aggregation** - Choose how to aggregate the value in the selected field.
* **Constant** - A constant numeric value can be specified as an alternative to a value from a datas source. Can be used for boundary values in some visualizations.
* **Formula** - A value can be a [Formula](../formula-designer.md)
* **Show column total** - For tile types that support it, will calculate an aggregate across the category datasource; e.g column totals in a table.
* **Connect by** - Different connections between the data source of the value and the category data source can be selected.
* **Subsets** - Multiple subsets can be selected. The subsets are used as an additional qualification when aggregating values.
* **Ignore Selection** - Multiple datas sources can be selected. Selections in any of the specified data sources done in the analysis will be ignored when aggregating values.

In the **FORMAT** tab you can find the following options:
* **Number Format** - Specify any [number format](../format-pane/number-format.md).
* **Data Point Symbol** - Used to specify a value dependant symbol for the data point.
* **Data Point Color** - Used to specify a value dependant color for the data point.
* **Data Point Label** - Can be On | Off | Auto. Selectiong "On" (v.2018.1->) displays a field for writing a data point label. The data point label can merge parameters into the text by enclosing them in brackets. E.g: "{name} has value: {value}". On is only implemented for some tile types. If not implemented it works like Auto. Auto dislays the default data point label. Off hides the data point label.
* **Size Column to fit Content** - Use this to adjust column widths in a table or grid.
* **Data Series Color** - Specify a color for all visualizations of this value, independent of the numeric value. 
* **Use secondary value axis** - Some visualizations, like column charts, have two value axis.
