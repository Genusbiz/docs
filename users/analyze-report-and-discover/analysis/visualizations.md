# Analysis visualizations

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

## Barrel roll
Takes a single category as input and loops over the category data. 

## Bubble chart
A *bubble chart* vizualies three of four values grouped on a single category. 

The first and second value represents the bubbles position on the x and y axis. 
The third value determines the size of the bubble.
The fourth, optional value can be used for data bound color for the bubbles. 

## Calendar heatmap
A *calendar heatmap* shows a single value grouped by a single category. The category must be a date data source in order for the visualization to work as intended.

The category groups the value by day, and shows the objects as colorized squares like a calendar. The calendar view shows data up to one year before the reference date.

Selection can be done either by clicking on individual day squares or month labels.

*A typical use case would be visualizing when tasks are completed.*

## Category list
A *Category list* is a simple comma-separated outlisting of the objects from a category data source.

By default, it uses the naming field(s) of the category data source for naming of the objects, but this can be overriden.  
Sorting and selection is supported.

## Change list
A *change list* is used to list a percentage deviation between two values, grouped by a single category.

For all category objects, the table shows the category name and the primary value with its deviation from the comparative value.

The width of the columns can be set by adjusting the *column width* of the category in the format tab of the designer. 
Sorting can be done by category or value.

Actions can be applied to header, content, button and context menu.

*A typical use case would be showing the value of a stock or currency and comparing it to its value the previous day.*

## Circle packing
A *circle packing* shows a single value grouped by a single category.

The category objects appear in a layout of circles, where the size of a circle correspond to the aggregated value. As well as setting conditional colors, the color of the circles can be set to correspond to a field of the category data source.

Actions can be applied to header, content, button, and context menu.

*The visualization is particularly useful for identifying deviating values. A typical use case would be identifying outlier branches within a corporation. By showing revenue grouped on branches, and letting the color be set by the size segment, outliers can be identified as circles that differ in size from circles with the same color.*

## Circular heatmap
A *circular heatmap* shows a single value grouped by one or two categories, in a circular visualization.

The radial category is used to group the value in equal arcs of the circle, while the linear category slices up the arcs inward. 
The value is visualized as the color of each slice, calculated using either a gradient between the minimum and maximum data points or conditional colors.

*A typical use case would be visualizing at what time of the week tasks are being completed. The radial category would then be the hour of the day, and the linear category the day of the week. The color of a slice would represent the number of tasks completed at the corresponding hour and day.*

## Circular progress
A *circular progress* shows one or two values grouped by a single category. 

The category objects appear in a layout of circular arcs. The graph is used to show progress towards a maximum value/goal. Only a single value has to be set to use the visualization, but a total of four values can be set: 
* Angle: Dictates the angle measure of the arc. Color can be bound to this value.
* Color: Value with sole purpose of setting color of the arcs, either conditional or a linear gradient.
* Min value: Category object with an aggregated value below this will be pruned. This must be a consant.
* Max value: The aggregated values will be compared to this. All values exceeding this will be capped at the maximum angle measure (270 degrees). This must be a constant.

## Column chart
A *column chart* has the same functionality as a [bar chart](#bar-chart).

The data points are visualized in vertical columns rather than in horizontal bars.

## Combination chart
A *combination chart* visualizes more than one value, grouped by a single category.

Each value in a combination chart can be visualized as a *column*, a *line* or an *area*.

Actions can be applied to header, content, button and context menu. 

## Doughnut chart
A *doughnut chart* has the same functionality as a [pie chart](#pie-chart).

## Dropdown
A *dropdown* visualizes multiple categories.

It supports N categories. A dropdown containing the category objects is shown for each category.
It supports sorting by state, and selection.

## Event line
An *event line* is a [bubble chart](#bubble-chart) with a time-based x-axis. It has the following values:

* X-value: This must be of a date data type.
* Y-value, Radius and Color: These must be numerical.
* Remaining values will show up in the tooltip with their label and value. These can be any data type.

By clicking and dragging in the graph, the user can select a zoomed in area to display. A double-click will zoom back.

*A typical use case would be showing customers; when they were registered on the x-axis, valuation on the y-axis, number of employees as radius and color according to the customer's field of business*

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
### Map
This layer provides the base map. 
Two server types can be specified:
#### OSM
Defaults to Open Street Map tiles, but other sources can be used by providing a server url.
Some examples are:
* [Stamen](http://maps.stamen.com/)
  * ``http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg`` 
* [Cartocdn](https://carto.com/location-data-services/basemaps/)
  * ``http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png``


Please note, that while some these map resources are freely available online, some of them require attribution to be used. To attribute map tile sources, use the Attribution field.

#### WMS-C
A Web Map Service can be used to provide map tiles.

### Data layers
All data layers (except geoJSON layer) requires a data source with a northing and easting property. The available layer type are:
### Point layer
This is the simplest layer.
It shows points on the map and can be configured with a symbol and a symbol color.
### Hotspot layer
This layer shows circle markers that can be configured with data boun size and color.
### Vector layer
The layer accepts two data sources and one value.  Both data sources need to have a northing and a easting property. The value is used to determine the width of the connections between the data inside the data sources. This will then correspond to a geospatial version of the [Sankey diagram](#sankey). One can also style the connection lines, and show the direction of the links.
### Heatmap layer
This layer is a heatmap of points that must have a value representing its intensity. 
Max and min intensity properties are optiononal, if none are set, the intensity will scale from the lowest to the highest value.
### GeoJSON layer
The GeoJSON layer draws GeoJSON features on the map.
The GeoJSON features are provided by a link to a GeoJSON-file. 
The GeoJSON features are mapped to a data source using a property, and only features that are present in both the GeoJSON file and the data source are displayed. 
All GeoJSON properties can be shown in the screen tip, along with values.

## Markdown
*Markdown* visualizes a text written in markup language that is converted to HTML.  
We use [react-markdown](https://github.com/rexxars/react-markdown) which follows the [CommonMark](http://commonmark.org/) spec. For a quick CommonMark reference, see [here](http://commonmark.org/help/). 

It is possible to merge values into the markdown by adding the value number wrapped in curly brackets. For example, you can write {2} to include the second value.

It is possible to merge known values into the markdown by adding an identifier wrapped in curly brackets. For example, you can write {loadtime} to include the time thge data mart was loaded.
Available identifiers are:
* loadtime: TRhe time the data mart was loaded.
* refdate: The current reference date.

## Measure
A *measure* visualizes one or more values

The values are listed top down.
The data is put directly after the Label, with no spacing.

Actions can be applied to the values.

## Measure chips
A *measure chip* visualizes one or more values

The values are displayed left to right, then downwards.
The data is put directly after the label, with no spacing, inside a chip.

Actions can be applied to the values.

## Measure list
A *measure list* visualizes one or more values

The values are listed top down in a two column table.
The label is put left aligned in the first column.
The data is put right aligned in trhe second column.

Actions can be applied to the values.

## Pie chart
A *pie chart* visualizes a single value grouped by a single category

Actions can be applied to header, content, button and context menu.

## Report grid
A *report grid* is a spreadsheet-like component visualized in a tabular form where each cell represents a single value. 

### Filtering rows and columns
Rows and columns in the value Grid can be configured with a filter that will be applied on all the cell values in a row/column, i.e. filtering all the cell values in that row/column.

### Formatting
The value Grid can be formatted in a various of ways, on row level (applied to all cells in that row), column level (applied to all cells in that column) and on cell/value level (applied to a single cell).
Some formatting properties (not exhaustive) are:
* Row height
* Column height
* Border format
* Background color
* Text alignment

## Sankey
A *Sankey* diagram is a flow diagram where the width of the links is proportional to the flow between the nodes.

In Genus App Platform, the diagram is used to present N-1 values grouped pairwise by N categories.
The categories will be distributed along the horizontal axis, and appear as vertically stacked columns of category objects.
Between each pair of adjacent categories, there will be links visualizing the aggregated value between the category objects.

The component accepts 2, 3 or 4 categories (and thus 1, 2 or 3 main values).
In addition to the visualized values, one can specify additional values to be grouped by pairs of adjacent categories.
These values will be displayed in the tooltip.

*A typical use case would be showing how tasks are assigned from customer to employee and further how tasks are distributed between employee and task state. Additional values to be displayed in the tooltip could be the number of hours worked on the tasks or the proportion of tasks completed after deadline*

## Summary
A *Summary* presents a summary of the active data source selections in the analysis.  
For each category data source in use by the analysis, the number of selected/qualified items are listed. If there are 10 or less qualified or selected items, these will be listed by name. Additionally, a bar that displays the size of the selected/qualified items relative to the total amount of items is displayed.  

You have the possibility to lock/unlock and clear the selection for each category data source by clicking on the corresponding icons upon hovering.

## Speedometer gauge
A *speedometer gauge* displays a value in a speedometer gauge. 
The first value is the value to be displayed. 
The second and third values are the start and end of the gauge, respectively. 
All additional values are thresholds on the gauge. 

## Stacked area chart
A *stacked area chart* has the same functionality as a [stacked column chart](#stacked-column-chart).

## Stacked bar chart
A *stacked bar chart* can be used in two ways:
* Visualizing a single value grouped by a primary and secondary category. The secondary category is called an *Auto Series*.
* Visualizing two or more values grouped by a single category.

In both cases the primary category will be used to generate *Bars*. 
In the first case, each bar will contain the data value for each object in the *Auto Series*.
In the second case, each bar will contain the data value for each value.

Actions can be applied to header, content, button and context menu. 

## Stacked column chart
A *stacked column chart* has the same functionality as a [stacked bar chart](#stacked-bar-chart).
The data points are visualized in vertical columns rather than in horizontal bars.

## Symbol chart
A *symbol chart* can be used in two ways:
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
A *ticker* is an animated visualization of a value and its relation to a comparative value.

It can be used in three ways:
* With no value inputs, it will display the name of all the items in the set category. This is the same information as in a [category list](#category-list).
* With one value input, it will display the name and value of the chosen items. This is the same information as in a [table](#table).
* With two value inputs, it will compare each element to the corresponding element in the other input, and display the difference with a symbol. This is the same information as in a [change list](#change-list). 

Constant values can be used. 

*A typical use case would be showing the value of a stock and comparing it to its value the previous day.*

## Timer
A digital display that counts down.  Upon reaching zero, the analysis will be updated and the timer will be reset. 

## Transposed table
A *transposed table* presents bound data in a tabular format, where rows represent data fields and columns represent objects.

Numerous data management and layout customization features are supported.

## Two dimensional grid
A *two dimensional grid* presents bound data in a tabular format, where columns represent data fields and rows represent objects.

Numerous data management and layout customization features are supported.

The values can be grouped by an unlimited number of columns. 
When a grid is grouped by a single column, rows that have identical values in the column are arranged into groups. 
Each group will then be identified by a group row. 
If the grid is grouped by another column, data rows within each group are arranged into second level groups based on the values of the new grouping column, etc.

## Word cloud
A *word cloud* shows all object in a category with their size based on a connected value

Colors can either follow the value, or be based on a secondary value.

*A typical use case would be visualizing the revenue of a set of companies, with solid colors showing their field or a gradient color for number of employees*
