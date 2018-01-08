# Data point labels

**How custom data labels work on each component that has it:**
	• Bars and columns: One value label over the top of each bar or column
	• Areas and lines: One value label on each distinct data point along the curve
	• Stacked XYcharts: one value label per layer per bar/column/curve
	• Percentage XY charts: one value label per layer per bar/column/curve
	• Pyramid and Funnel: one value label per layer
	• All pie charts: one value label per slice
	• Circle Packing, Event Line and Bubbles: one category label per blob


**How predetermined data labels work on each component that has it:**
	• Radial: shows a label with the maximum value

## Dynamic references
These are written in curly brackets to be replaced in runtime with the corresponding value. For example if you have made a pie chart of
how many donuts each child has eaten, and Johnny ate 3 donuts out of 10 you can write:

*{name} has eaten {value} donuts, this is {percentage}% of the total*
and what you would see on Johnny's pie slice in the viewer would be:
*Johnny has eaten 3 donuts, this is 30% of the total*

{value} gets replaced by the aggregated value of that node and is supported by all components with custom data labels.
{name} gets replaced by the category or value name depending on which kind of label the control uses and is also always supported.
{percentage} gets replaced by the % of the total value this node represents with 2 decimal places rounded to closest number (ex: 33.3333... Becomes 33.33 while 66.6666... Becomes 66.67 (whole numbers stay whole, so 1 does **not** become 1.00)).
Percentage is supported only by controls that use percent explicitly like Pie charts or percentage Xycharts. If you want the number to have a % afterwards you have to add it yourself like so: {percentage}%
