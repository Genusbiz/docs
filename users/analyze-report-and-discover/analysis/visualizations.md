# Visualizations

These are the *Visualizations* available in an *Analysis*

## Arc Gauge
Can display how a value measures between two other values.

The first value is the data value. The second and third value determines the start and end of the gauge, respectively.

## Area Chart
An *Area Chart* has the same functionality as a [Line Chart](line-chart.md).

## Bar Chart
A *Bar Chart* can be used in two ways:
* Visualizing one or more [Values](../concepts/index.md) grouped by a single [Category](../concepts/index.md)
* Visualizing a single [Value](../concepts/index.md) grouped by two [Categories](../concepts/index.md), where one acts as a Auto Series

In both cases, the primary *Category* will be used to generate *Bars*. 
In the first case, each *Value* will generate a *Bar*.
In the second case, each object in the *Auto Series* will be a *Bar*.

Actions can be applied to Header, Content, Button and Context Menu. 

## Bubble Chart
Bubble chart vizualies one category data source using three of four values. 
The first and second value represents the bubbles position on the x and y axis. 
The third value determines the size of the bubble.

The fourth, optional value can be used for data bound color for the bubbles. 

## Circle packing
**Circle packing** is a layout of circles, where the size of a circle correspond to a [Value](../concepts/index.md). 
The color may correspond to the grouping by a single [Category](../concepts/index.md), or to the [Value](../concepts/index.md). 
It is useful for identifying deviating values.

Actions can be applied to Header, Content, Button, and Context Menu.

## Circular distribution
A **Circular Distribution** is used to display one [value](../concepts/value.md) grouped by one or two [categories](../concepts/category.md), in a circle.
The radial category is used to group the value in equal arcs of the circle, while the linear category slices up the arcs inward. 
The value is visualized as the color of each slice, calculated using either a gradient between the minimum and maximum data points or conditional colors.

*A typical use case is to visualize when tasks are completed. The radial category would be hour of day, and the linear category day of week. The color would then represent the number of tasks completed at that hour and day.*

## Column Chart
A *Column Chart* has the same functionality as a [Bar Chart](bar-chart.md).
The data points are visualized in vertical columns rather than in horizontal bars.

## Combination Chart
A *Combination Chart* has more than one [Value](../concepts/index.md) grouped by a single [Category](../concepts/index.md)

Each *Value* in a *Combination Chart* can be visualized as a *Column*, a *Line* or an *Area*.

Actions can be applied to Header, Content, Button, Context Menu. 

## Deviation table
A **Deviation table** is used to list a percentage deviation between two [values](../concepts/index.md) grouped by one [category](../concepts/index.md). The table shows the group name, current value and deviation.
The width of the columns can be set by adjusting the *column width* of the category in the format tab of the designer. Sorting can be done by category or value. Adjusting font size and color is supported, as is defining a suffix and number format of the values.

Actions can be applied to header, content, button, context menu.

*A typical use case would be showing the value of a stock or currency and comparing it to its value the previous day.*

## Doughnut Chart
A *Doughnut Chart* has the same functionality as a [Pie Chart](pie-chart.md).

## Dropdown
The *Dropdown* visualization is a Multi [Category](../concepts/category.md) Dropdown visualization. It supports n categories, and shows a dropdown for each, containing the objects from the category data source.

By default, it uses the naming field(s) of the category data source for naming of the objects, but this can be overriden.  
It supports sorting by state and selection.

## Full Stacked Area Chart
A *Full Stacked Area Chart* has the same functionality as a [Stacked Area Chart](normal-stacked-area-chart.md).
The total area will always be the entire area of the tile.

## Full Stacked Bar Chart
A *Full Stacked Bar Chart* has the same functionality as a [Stacked Bar Chart](normal-stacked-bar-chart.md).
The bars will all be the same height, so they will not be used to compare the total value of objects in the primary *Category*, but to compare trhe distribution of *Auto Series* objects or *Values* in them.

## Full Stacked Column Chart
A *Full Stacked Column Chart* has the same functionality as a [Full Stacked Bar Chart](percentage-stacked-bar-chart.md).
The data points are visualized in vertical columns rather than in horizontal bars.

## Heatmap
A *Heatmap* visualizes a single [Value](../concepts/index.md) grouped by two [Category](../concepts/index.md)

Actions can be applied to Header, Content, Button, Context Menu.

## Line Chart
A *Line Chart* can be used in two ways:
* Visualizing one or more [Values](../concepts/index.md) grouped by a [Category](../concepts/index.md)
* Visualizing a single [Value](../concepts/index.md) grouped by two [Categories](../concepts/index.md) where one acts as a Auto Series.

In both cases the primary *Category* will be used to generate *Lines*. 
In the first case, each *Value* will generate a *Line*.
In the second case, each object in the *Auto Series* will be a *Line*.

Actions can be applied to Header, Content, Button, Context Menu.

## Map
Maps can have one or more layers. Layers are either map tiles or data layers.

### OSM
Defaults to Open Street Map tiles, but other sources can be used by providing a server url, e.g.: ``http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png``
### WMS-C

### Data layers
All data layers (except geoJSON layer) requires a data source with a norhitng and easting property. The available layer type are:
### Point layer
This is the simplest layer. It shows points on the map and can be configured with a symbol and a symbol color.
### Hotspot layer
This layer shows circle markers that can be configured with data boun size and color.
### Heatmap layer
This layer is a heatmap of points that must have a value representing its intensity. Max and min intensity properties are optiononal, if none are set, the intensity will scale from the lowest to the highest value.
### GeoJSON layer
The GeoJSON layer draws GeoJSON features on the map. The GeoJSON features are provided by a link to a GeoJSON-file. The GeoJSON features are mapped to a data source using a property, and only features that are present in both the GeoJSON file and the data source are displayed. All GeoJSON properties can be shown in the screen tip, along with values.

## Markdown
A *Markdown* visualizes one or more [Values](../concepts/index.md) in a formatted text.

The Values are merged into the markdown text definition of the visualization.
To include a value in the markdown, add e.g. {2} to include the second *Value*.

## Measure List
A *Measure List* visualizes one or more [Values](../concepts/index.md)

The Values are listed top down in a two column table.
The Label is put left aligned in the first column.
The data is put right aligned in trhe second column.

Actions can be applied to the Values.

## Measure
A *Measure* visualizes one or more [Values](../concepts/index.md)

The Values are listed top down.
The data is put directly after the Label, with no spacing.

Actions can be applied to the Values.

## Stacked Area Chart
A *Stacked Area Chart* has the same functionality as a [Stacked Column Chart](normal-stacked-column-chart.md).

## Stacked Bar Chart
A *Stacked Bar Chart* can be used in two ways:
* Visualizing one [Value](../concepts/index.md) grouped by a primary and secondary [Category](../concepts/index.md). The secondary category is called an *Auto Series*.
* Visualizing two or more [Values](../concepts/index.md) grouped by a single [Category](../concepts/index.md).

In both cases the primary *Category* will be used to generate *Bars*. 
In the first case, each bar will contain the data value for each object in the *Auto Series*.
In the second case, each bar will contain the data value for each *Value*.

Actions can be applied to Header, Content, Button, Context Menu. 

## Stacked Column Chart
A *Stacked Column Chart* has the same functionality as a [Stacked Bar Chart](normal-stacked-bar-chart.md).
The data points are visualized in vertical columns rather than in horizontal bars.

## Pie Chart
A *Pie Chart* visualizes a single [Value](../concepts/index.md) grouped by a single [Category](../concepts/index.md)

Actions can be applied to Header, Content, Button, Context Menu.

## Sankey diagram
A **Sankey diagram** is a flow diagram where the width of the links is proportional to the flow between the nodes.

In the Genus App platform, the diagram is used to present N-1 [values](../concepts/value.md) grouped pairwise by N [categories](../concepts/category.md). The categories will be distributed along the horizontal axis, and appear as vertically stacked columns of category objects. Between each pair of adjacent categories, there will be links visualizing the aggregated value between the category objects.

The component accepts 2, 3 or 4 categories (and thus 1, 2 or 3 main values). In addition to the visualized values, one can specify additional values to be grouped by pairs of adjacent categories. These values will be displayed in the tooltip.

*A typical use case would be to show the flow of tasks from customer to employee and further from employee to task state. Additional values to be displayed in the tooltip could be the number of hours worked on the tasks or the proportion of tasks completed after deadline*

## Single Category Field
A *Single Category Field* is a simple comma-separated outlisting of the objects from a [Category](../concepts/category.md) data source.

By default, it uses the naming field(s) of the category data source for naming of the objects, but this can be overriden.  
Sorting and selection is supported.

## Speedometer Gauge
Displays a value in a speedometer gauge. The first value is the value to be displayed. The second and third values are the start and end of the gauge, respectively. 
All following values are thresholds on the gauge. 

## Symbolic distribution
A **symbolic distribution** can be used in two ways:
* Visualizing a single [value](../concepts/value.md) grouped by a single [category](../concepts/category.md)
* Visualizing one or more *uncategorized* [values](../concepts/value.md)

A symbol picker can be applied to choose a symbol to represent the aggregated value(s).

Enabling sorting will only have an effect in the case of categorized data.

*A typical use case would be visualizing total hours grouped on projects.* 

## Table
A table presents bound data in a tabular format, where columns represent data fields and rows represent objects. Numerous data management and layout customization features are supported.

## Three Dimensional Grid
A Three Dimensional Grid presents bound data in a tabular format, where columns represent data fields and rows represent objects.  Numerous data management and layout customization features are supported.

## Ticker
A **ticker** is a moving visualization of a [Value](../concepts/index.md) and its deviation from a comparative value.
It can be used in two ways:
* With one value input, it will compare each element to its predecessor (e.g. change from month to month)
* With two value inputs, it will compare each element to the corresponding element in the other input. A constant value may also be used.

In each case, the result will be displayed with colors and symbols indicating whether the first element is larger, smaller or equal to the element it is compared to.
A version of the Ticker without animation is the [Deviation Table](deviation-table.md).

*A typical use case would be showing the value of a stock and comparing it to its value the previous day.*

## Transposed grid
A transposed grid presents bound data in a tabular format, where rows represent data fields and columns represent objects. Numerous data management and layout customization features are supported.

## Two Dimensional Grid
A Two Dimensional Grid presents bound data in a tabular format, where columns represent data fields and rows represent objects.  Numerous data management and layout customization features are supported.

The grid allows data to be grouped by an unlimited number of columns. When a grid is grouped by a single column, rows that have identical values in this column are arranged into groups. Each group is identified by a group row. If the grid is grouped by another column, data rows within each group are arranged into second level groups based on the values of the new grouping column, etc.

## Value Chips
A **Value Chip** visualizes one or more [Values](../concepts/index.md)

The Values are left to right, then down.
The data is put directly after the Label, with no spacing, inside a Chip.

Actions can be applied to the Values.

## Value Grid
A *Value Grid* is a spreadsheet-like component visualized in a tabular form where each cell represents one [Value](../concepts/value.md).   

### Filtering rows and columns
Rows and columns in the Value Grid can be configured with a [Filter](../concepts/selection.md) that will be applied on all the cell values in a row/column, i.e. filtering all the cell values in that row/column.

### Formatting
The Value Grid can be formatted in a various of ways, on row level (applied to all cells in that row), column level (applied to all cells in that column) and on cell/value level (applied to one cell). Some formatting properties (not exhaustive) are:
* Row height
* Column height
* Border format
* Background color
* Text alignment