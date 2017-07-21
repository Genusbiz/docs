# Eventline
An **eventline** is a [Bubble Chart](bubble-chart.md) with a time-based x-axis. It has the following values:

* X-value: This must be connected to a Date
* Y-value: The height of the circle. Must be a number or a string that is parsable to a number
* Radius: The size of the circle. Same as Y-value
* Color: Set the data color for this field in the designer to color the circles. Will not show up in tooltip.
* Remaining values: These will show up in the tooltip with their label and value. 

By brushing over the graph, the user can select a zoomed in area to display. Double-click to zoom back.

*A typical use case would be showing customers; when they were registered on the x-axis, valuation on the y-axis, number of employees as radius and color according to the customer's field of business*

