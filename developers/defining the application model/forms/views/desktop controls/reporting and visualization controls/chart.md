## Chart

The Chart control visualizes multiple series of data in a graphical manner. A chart can contain several panes, and each pane can display multiple axes and series. A variety of types of series are available, like bars, lines, points, area, etc. Series can be defined manually, or automatically in the so called auto series, and can be listed in a legend.

**Axes**

The chart must have one X axis and one Y axis, but it can have more than one of each. The X axis represents the argument, and the Y axis represents the value. To change this direction, rotate the whole chart. The main reason for having more than one X or Y axis in a chart is that different series can be linked to different axes. If the chart has more than one pane, each pane may also have its own set of axes. An axis may be invisible if it is not shown in any panes. The most important setting for an axis is its data type, which determines how the series connect to the axis. Also, be aware of the alignment in cases where you have more than one axis.

**Panes**

A chart must have a pane, but it can have several, in wich case they are stacked on top of each other. The most important setting for a pane, is which X axes and Y axes are visible for the pane. For example, by not showing an axis, two panes can visually share the axis. Also, be aware that a pane can allow zooming and scrolling using the mouse, without showing any scrollbars.

**Series**

There can be many series, and different types of series can be combined whithin the same chart. The most important settings for series are how to bind to the data, which pane to show the series in, and how to bind the series to the axes. The data binding determines which data source is used for the series, while the axes binding determines which values in the data source are used to plot the series against the axis.

**Auto Series**

The auto series is similar to a series when it is defined, but based on the definition several series are produced from the data. The data is split into several series based on a category, which is the most important setting for auto series. The series category and series category display name defines which field to use to split the data into series.

**Titles**

There can be several titles in the chart, and they can be placed at different locations using the horizontal alignment, vertical alignment, and dock settings. Use the standard format settings to achieve the visual expression you want.

**Legend**

Each series can be apart of the legend, or not. Use horizontal position, vertical position, and orientation to place the legend box in the chart, and the standard format setting to control the visual expression.

**Topics in "Chart"**
* [Examples / How To](chart/examples  how to.md)
* [Properties](chart/properties.md)