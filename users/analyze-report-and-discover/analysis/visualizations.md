# Visualizations

These are the *visualizations* available in an *analysis*

## Arc gauge
An *arc gauge* visualizes how a value measures between two other values.

The first value is the data value. 
The second and third value determines the start and end of the gauge, respectively.

## Area chart
An *area chart* has the same functionality as a [line chart](#line-chart).

## Bar chart
A *bar chart* can be used in two ways:
* Visualizing one or more values grouped by a single category
* Visualizing a single value grouped by two categories, where one acts as an *auto series*

In both cases, the primary category will be used to generate *bars*. 
In the first case, each value will generate a bar.
In the second case, each object in the auto series will be a bar.

Actions can be applied to header, content, button and context menu. 

## Bubble chart
A *bubble chart* vizualies three of four values grouped on a single category. 

The first and second value represents the bubbles position on the x and y axis. 
The third value determines the size of the bubble.
The fourth, optional value can be used for data bound color for the bubbles. 

## Calendar view
A *calendar view* shows a single value grouped by a single category. The category must be a date data source in order for the visualization to work as intended.

The category groups the value by day, and shows the objects as colorized squares like a calendar. The calendar view shows data up to one year before the reference date.

*A typical use case would be visualizing when tasks are completed.*

## Circle packing
A *circle packing* shows a single value grouped by a single category.

The category objects appear in a layout of circles, where the size of a circle correspond to the aggregated value. As well as setting conditional colors, the color of the circles can be set to correspond to a field of the category data source.

Actions can be applied to header, content, button, and context menu.

*The visualization is particularly useful for identifying deviating values. A typical use case would be identifying outlier branches within a corporation. By showing revenue grouped on branches, and letting the color be set by the size segment, outliers can be identified as circles that differ in size from circles with the same color.*

## Circular distribution
A *circular distribution* shows a single value grouped by one or two categories, in a circular visualization.

The radial category is used to group the value in equal arcs of the circle, while the linear category slices up the arcs inward. 
The value is visualized as the color of each slice, calculated using either a gradient between the minimum and maximum data points or conditional colors.

*A typical use case would be visualizing at what time of the week tasks are being completed. The radial category would then be the hour of the day, and the linear category the day of the week. The color of a slice would represent the number of tasks completed at the corresponding hour and day.*

## Column chart
A *column chart* has the same functionality as a [bar chart](#bar-chart).

The data points are visualized in vertical columns rather than in horizontal bars.

## Combination chart
A *combination chart* visualizes more than one value, grouped by a single category.

Each value in a combination chart can be visualized as a *column*, a *line* or an *area*.

Actions can be applied to header, content, button and context menu. 

## Deviation table
A *deviation table* is used to list a percentage deviation between two values, grouped by a single category.

For all category objects, the table shows the category name and the primary value with its deviation from the comparative value.

The width of the columns can be set by adjusting the *column width* of the category in the format tab of the designer. 
Sorting can be done by category or value.

Actions can be applied to header, content, button and context menu.

*A typical use case would be showing the value of a stock or currency and comparing it to its value the previous day.*

## Doughnut chart
A *doughnut chart* has the same functionality as a [pie chart](#pie-chart).

## Dropdown
A *dropdown* visualizes multiple categories.

It supports N categories. A dropdown containing the category objects is shown for each category.
It supports sorting by state, and selection.

## Full stacked area chart
A *full stacked area chart* has the same functionality as a [stacked area chart](#stacked-area-chart).

The total area will always be the entire area of the tile.

## Full stacked bar chart
A *full stacked bar chart* has the same functionality as a [stacked bar chart](#stacked-bar-chart).

The bars will all be the same height. The chart is not used to compare the total value of objects in the primary category. Instead, it is used to compare the distribution of *auto series* objects or values in them.

## Full stacked column chart
A *full stacked column chart* has the same functionality as a [full stacked bar chart](#full-stacked-bar-chart).

The data points are visualized in vertical columns rather than in horizontal bars.

## Heatmap
A *heatmap* visualizes a single value grouped by two categories.

Actions can be applied to header, content, button and context menu.

## Line chart
A *line chart* can be used in two ways:
* Visualizing one or more values grouped by a category
* Visualizing a single value grouped by two categories where one acts as a *auto series*.

In both cases the primary category will be used to generate lines. 
In the first case, each value will generate a line.
In the second case, each object in the auto series will be a line.

Actions can be applied to header, content, button and context menu.

## Map
A *map* visualizes geospatial data.

They can have one or more layers.
Layers are either map tiles or data layers.
The different layers include:
### OSM
Defaults to Open Street Map tiles, but other sources can be used by providing a server url, e.g.: ``http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png``
### WMS-C
A Web Map Service can be used to provide map tiles.

### Data layers
All data layers (except geoJSON layer) requires a data source with a norhitng and easting property. The available layer type are:
### Point layer
This is the simplest layer.
It shows points on the map and can be configured with a symbol and a symbol color.
### Hotspot layer
This layer shows circle markers that can be configured with data boun size and color.
### Heatmap layer
This layer is a heatmap of points that must have a value representing its intensity. 
Max and min intensity properties are optiononal, if none are set, the intensity will scale from the lowest to the highest value.
### GeoJSON layer
The GeoJSON layer draws GeoJSON features on the map.
The GeoJSON features are provided by a link to a GeoJSON-file. 
The GeoJSON features are mapped to a data source using a property, and only features that are present in both the GeoJSON file and the data source are displayed. 
All GeoJSON properties can be shown in the screen tip, along with values.

## Markdown
A *markdown* visualizes one or more values in a formatted text.

The values are merged into the markdown text definition of the visualization.
To include a value in the markdown, add the value number wrapped in curly brackets. One would, for example, write {2} to include the second value.

## Measure list
A *measure list* visualizes one or more values

The values are listed top down in a two column table.
The label is put left aligned in the first column.
The data is put right aligned in trhe second column.

Actions can be applied to the values.

## Measure
A *measure* visualizes one or more values

The values are listed top down.
The data is put directly after the Label, with no spacing.

Actions can be applied to the values.

## Pie chart
A *pie chart* visualizes a single value grouped by a single category

Actions can be applied to header, content, button and context menu.

## Sankey diagram
A *Sankey diagram* is a flow diagram where the width of the links is proportional to the flow between the nodes.

In the Genus App platform, the diagram is used to present N-1 values grouped pairwise by N categories.
The categories will be distributed along the horizontal axis, and appear as vertically stacked columns of category objects.
Between each pair of adjacent categories, there will be links visualizing the aggregated value between the category objects.

The component accepts 2, 3 or 4 categories (and thus 1, 2 or 3 main values).
In addition to the visualized values, one can specify additional values to be grouped by pairs of adjacent categories.
These values will be displayed in the tooltip.

*A typical use case would be showing how tasks are assigned from customer to employee and further how tasks are distributed between employee and task state. Additional values to be displayed in the tooltip could be the number of hours worked on the tasks or the proportion of tasks completed after deadline*

## Single category field
A *single category field* is a simple comma-separated outlisting of the objects from a category data source.

By default, it uses the naming field(s) of the category data source for naming of the objects, but this can be overriden.  
Sorting and selection is supported.

## Speedometer gauge
A *speedometer gauge* displays a value in a speedometer gauge. 
The first value is the value to be displayed. 
The second and third values are the start and end of the gauge, respectively. 
All additional values are thresholds on the gauge. 

## Stacked area chart
A *stacked area chart* has the same functionality as a [stacked column chart](#normal-stacked-column-chart).

## Stacked bar chart
A *stacked bar chart* can be used in two ways:
* Visualizing a single value grouped by a primary and secondary category. The secondary category is called an *Auto Series*.
* Visualizing two or more values grouped by a single category.

In both cases the primary category will be used to generate *Bars*. 
In the first case, each bar will contain the data value for each object in the *Auto Series*.
In the second case, each bar will contain the data value for each value.

Actions can be applied to header, content, button and context menu. 

## Stacked column chart
A *stacked column chart* has the same functionality as a [stacked bar chart](#normal-stacked-bar-chart).
The data points are visualized in vertical columns rather than in horizontal bars.

## Symbolic distribution
A *symbolic distribution* can be used in two ways:
* Visualizing a single value grouped by a single category
* Visualizing one or more *uncategorized* values

A symbol picker can be applied to choose a symbol to represent the aggregated value(s).
Enabling sorting will only have an effect in the case of categorized data.

*Typical use cases would be showing total revenue grouped on market segments or to show the distribution of project states for current projects.* 

## Table
A *table* presents bound data in a tabular format, where columns represent data fields and rows represent objects. 

Numerous data management and layout customization features are supported. 

## Three dimensional grid
A *three dimensional grid* presents bound data in a tabular format, where columns represent data fields and rows represent objects. 

Numerous data management and layout customization features are supported.

## Ticker
A *ticker* is a moving visualization of a value and its deviation from a comparative value.

It can be used in two ways:
* With one value input, it will compare each element to its predecessor (e.g. change from month to month)
* With two value inputs, it will compare each element in the primary value source to the corresponding element in the comparative value source. A constant value can be used.

In each case, the primary value will be displayed with a colorized symbol indicating whether the value is larger than, smaller than or equal to its comparative value.
A version of the ticker without animation is the [deviation table](#deviation-table).

*Typical use cases would be showing monthly revenue compared to the previous year or showing the development of a stock value.*

## Transposed grid
A *transposed grid* presents bound data in a tabular format, where rows represent data fields and columns represent objects.

Numerous data management and layout customization features are supported.

## Two dimensional grid
A *two dimensional grid* presents bound data in a tabular format, where columns represent data fields and rows represent objects.

Numerous data management and layout customization features are supported.

The values can be grouped by an unlimited number of columns. 
When a grid is grouped by a single column, rows that have identical values in the column are arranged into groups. 
Each group will then be identified by a group row. 
If the grid is grouped by another column, data rows within each group are arranged into second level groups based on the values of the new grouping column, etc.

## Value chips
A *value chip* visualizes one or more values

The values are displayed left to right, then downwards.
The data is put directly after the label, with no spacing, inside a chip.

Actions can be applied to the values.

## Value grid
A *value grid* is a spreadsheet-like component visualized in a tabular form where each cell represents a single value.   

### Filtering rows and columns
Rows and columns in the value Grid can be configured with a [filter](concepts/selection) that will be applied on all the cell values in a row/column, i.e. filtering all the cell values in that row/column.

### Formatting
The value Grid can be formatted in a various of ways, on row level (applied to all cells in that row), column level (applied to all cells in that column) and on cell/value level (applied to a single cell).
Some formatting properties (not exhaustive) are:
* Row height
* Column height
* Border format
* Background color
* Text alignment
