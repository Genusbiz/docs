# Value

A *Value* is a definition of a data element accessible in an *Analysis*.

A *Value* can be;
* a count of objects in a data source
* a field of an object in a data source
* an aggregated numeric property of a set of objects
* the result of a [Function](function.md)
* the result of a [Formula](formula.md)

*Values* can be pies in a [Pie Chart](../visualizations/pie-chart.md) or bars in a [Bar Chart](../visualizations/bar-chart.md)
Some [Visualizations](../visualizations/index.md) use a different name for *Value*. E.g. a [Table](../visualizations/table.md) calls them *Columns*.

### Data types and Aggregates
Values can be numerics, strings, dates, etc.
Only numeric *Values* can be aggregated. If a non-numeric field of an object is used in e.g. a [Measure](../visualizations/measure.md) it uses a single-or-nothing algorithm, meaning if there is a single qualified object in the data source of the value, then the data element of that object is used, otherwise nothing is used.
