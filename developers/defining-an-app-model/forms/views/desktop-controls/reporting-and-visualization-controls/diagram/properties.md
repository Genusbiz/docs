## Properties

See [Common Control Properties](../../common-control-properties.md), in addition to the control specific properties below.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>

Edges

</td>

<td>

A list of edges, which represent the types of relationships between nodes.

For information on specific properties see Edge Properties below.

</td>

</tr>

<tr>

<td>Layouts</td>

<td>

A list of layouts, where basic settings for displaying nodes and edges are defined.

For information on specific properties see Layout Properties below.

</td>

</tr>

<tr>

<td>

Navigator Position

</td>

<td>

The navigator displays an overview of the diagram, with a rectangle identifying the section that is currently displayed when zooming and scrolling the diagram

**None**

The navigator is not displayed

**Top Left**

The navigator is displayed in the top left of the diagram.

**Top Right**

The navigator is displayed in the top right of the diagram.

**Bottom Left**

The navigator is displayed in the bottom left of the diagram.

**Bottom Right**

The navigator is displayed in the bottom right of the diagram.

</td>

</tr>

<tr>

<td> Nodes </td>

<td>

A list of nodes, which represents the types of objects in the diagram.

For information on specific properties see Node Properties below.

</td>

</tr>

<tr>

<td>Views</td>

<td>

A list of views, that defines which nodes and edges are displayed and which layout is used. The different views can be selected by right clicking in the diagram.

For information on specific properties see View Properties below.

</td>

</tr>

</tbody>

</table>


## Node Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>The data source that contains the data for the nodes. See [Data Binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals").</td>

</tr>

<tr>

<td>Groups</td>

<td>

A list of groups that the node belongs to. Nodes that are part of a group can be visually grouped in the diagram. This means that all nodes belonging to a group, are visually replaced by a group node. Groups can be invidually expanded, which means that the individual nodes are displayed instead of the group node.

For information on specific properties, see Group Properties below.

</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the node. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the node when selecting nodes, for example in edges.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>The screen tip which is displayed when the mouse cursor is moved over the series. Enter a text in the box, or click the "..." button in the box to define an advanced [screen tip](../../common-control-properties.md).</td>

</tr>

<tr>

<td>Styles</td>

<td>

A list of styles which specifies the available appearances of the node.

For information on the specific properties, see Style Properties below.

</td>

</tr>

</tbody>

</table>

## Node Group Properties

**General**

 **

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>Specifies which field in the node data source to use for grouping.</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the group. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the group in a list of groups.</td>

</tr>

</tbody>

</table>

** 



## Node Style Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

Property

</th>

<th>Description</th>

</tr>

<tr>

<td>Captions</td>

<td>

A list of captions that are displayed for a node. Captions are displayed outside and around the node.

For information on specific properties, see Caption Properties below.

</td>

</tr>

<tr>

<td>Fields</td>

<td>A list of fields that are displayed for a node. Fields are displayed inside the node. For information on specific properties, see Field Properties below.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the style in a list of styles. For example in a view.</td>

</tr>

<tr>

<td>Shape</td>

<td>

The shape that is displayed for the node. Select between **Ellipse**, **Rectangle**, **Rounded** **Rectangle**, **Triangle** **Up**, **Triangle** **Down**, **Star**, **Diamond**, **Hexagon**. Only applicable if the type is shape.

</td>

</tr>

<tr>

<td>Type</td>

<td>

The type of style to use.

**Shape**

Displays a shape for the node.

**Fields**

Displays a set of fields for the node.

**Symbo (Object Class)**

Displays a symbol for a node, which is the symbol from the object class of the node data source.

</td>

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

<td>Height</td>

<td>The visual height of the node.</td>

</tr>

<tr>

<td>Width</td>

<td>The visual width of the node.</td>

</tr>

</tbody>

</table>

**Format**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

Property

</th>

<th>Description</th>

</tr>

<tr>

<td>Automatic Formatting</td>

<td></td>

</tr>

<tr>

<td>Background Color</td>

<td>Background color of the node.</td>

</tr>

<tr>

<td>Border Color</td>

<td>Border color for the node.</td>

</tr>

<tr>

<td>Foreground Color</td>

<td>Color of the text in the node.</td>

</tr>

<tr>

<td>Show Border</td>

<td>Displays a border around the node.</td>

</tr>

</tbody>

</table>



## Field Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>Specify where to get the value for the field. See also [Data Binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals").</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the field. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Label - Colon Suffix</td>

<td>Show a colon ":" after the label.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify a field in a list of fields.</td>

</tr>

</tbody>

</table>

**Size and Position**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

Property

</th>

<th>Description</th>

</tr>

<tr>

<td>Horizontal Alignment</td>

<td>

The alignment of the text within the available horizontal space:  

**Left**  
Align the text to the left.  

**Center**  
Align the text to the center.  

**Right**  
Align the text to the right.

**Stretch**

Attempt to stretch the text from left to right.

</td>

</tr>

</tbody>

</table>



## Caption Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Data Binding</td>

<td>Specify the field to get the value for the caption from. See also [Data Binding](../../../../../../../users/search-and-refine/data-binding.md "Data Binding") and [Data Binding Fundamentals](../../data-binding-fundamentals.md "Data Binding Fundamentals").</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the control. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Label - Colon Suffix</td>

<td>Show a colon ":" after the label.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the caption in a list of captions.</td>

</tr>

<tr>

<td>Position</td>

<td>

The position of the caption outside the node. Select from **Center**, **North**, **North East**, **East**, **South East**, **South**, **South West**, **West**, **North West**.

</td>

</tr>

</tbody>

</table>

**Format**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

Property

</th>

<th>Description</th>

</tr>

<tr>

<td>Background Color</td>

<td>Background color of the caption.</td>

</tr>

<tr>

<td>Border Color</td>

<td>Color of the borderfor the caption. Only applicable if show border is selected.</td>

</tr>

<tr>

<td>Font Size</td>

<td>Size of the caption text.</td>

</tr>

<tr>

<td>Font Style</td>

<td>Style of the caption text: **Normal** or **Italic**.</td>

</tr>

<tr>

<td>Font Weight</td>

<td>Weight of the caption text: **Normal** or **Bold**.</td>

</tr>

<tr>

<td>Foreground Color</td>

<td>Color of the caption text.</td>

</tr>

<tr>

<td>Show Border</td>

<td>Displays a border around the caption.</td>

</tr>

</tbody>

</table>



## Edge Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Caption</td>

<td>The caption for the control. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Connection Path</td>

<td>

The path from the source node to the target node, through zero, one, or more data sources. Edges are drawn between the source node objects and target node objects if the specified path exists in the data.

**Note**: If no connection path is specified, an edge is always drawn between all source node objects and all target node objects.

</td>

</tr>

<tr>

<td>Context</td>

<td>

Specifies which data source to use as the context of the edge. This would otherwise be ambiguous, because the edge is defined by two or more data sources through the start node, end node, and connection path.

This is used whenever a precise context is required, like when defining automatic formatting or when righ clicking an edge in the diagram..

</td>

</tr>

<tr>

<td>Directional</td>

<td>Displays the edge as an arrow from the source node to the target node.</td>

</tr>

<tr>

<td>Label</td>

<td>The label for the control. Enter a text in the box, or click the "..." button in the box to select a field.</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify an edge in a list of edges.</td>

</tr>

<tr>

<td>Screen Tip</td>

<td>The screen tip which is displayed when the mouse cursor is moved over the edge. Enter a text in the box, or click the "..." button in the box to define an [advanced screen tip](../../common-control-properties.md).</td>

</tr>

<tr>

<td>Source Node</td>

<td>Start node for this edge.</td>

</tr>

<tr>

<td>Target Node</td>

<td>End node for this edge.</td>

</tr>

<tr>

<td>Weight</td>

<td>

The weight of the edge when performing calculations, like evaluating the shortest path. Enter a decimal number in the box, or click the "..." button in the box to select a field. If no value is provided, the weight defaults to 1.

</td>

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

<td></td>

</tr>

<tr>

<td>Color</td>

<td>The color of the edge.</td>

</tr>

</tbody>

</table>



## Layout Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Label</td>

<td>The label for the layout.</td>

</tr>

<tr>

<td>Compactness</td>

<td>

Smaller values result in less compact drawings, greater values result in more compact drawings. The value 0.5 is typically considered to be "normal" compactness.

</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify a layout in a list of layouts.</td>

</tr>

<tr>

<td>Orientation</td>

<td>

The orientation to use for the layout. Not applicable for all types of layout. Select from **Top-to-bottom**, **Left-to-right**, **Right-to-left**, **Bottom-to-top**

</td>

</tr>

<tr>

<td>Type</td>

<td>

The type of layout to use for the nodes.

**Circular**

The layout either places all nodes on or inside a circle, or splits them into disjoint node sets each of which will be laid out separately.

**Hierarchical**

An Hierarchical layout is used.

**Organic**

The layout is based on a force directed model.

**Orthogonal**

The layout of the edges is made up of vertical and horizontal segments only.

**Tree**

The layout arranges the nodes and edges as a tree.

</td>

</tr>

</tbody>

</table>



## View Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Label</td>

<td>The label for the view.</td>

</tr>

<tr>

<td>Hidden Edges</td>

<td>A list of edges that can be excluded from the view. Select the edges you do not want to display. The available edges are defined in the [diagram](properties.md "Diagram Properties"), and connect the nodes added to this view.</td>

</tr>

<tr>

<td>Is Default</td>

<td>Specifies that this view is the default view for the diagram. Only one view can be the default view, and when this option is selected, the option is cleared for any other view with this option previously selected.</td>

</tr>

<tr>

<td>Layout</td>

<td>The layout to be used for this view. The available layouts are defined in the [diagram](properties.md "Diagram Properties").</td>

</tr>

<tr>

<td>Name</td>

<td>Used to identify the view in a list of views.</td>

</tr>

<tr>

<td>Nodes</td>

<td>

A list of nodes to include in the view.

For information on specific properties, see View Node Properties below.

</td>

</tr>

</tbody>

</table>



## View Node Properties

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Default Grouping</td>

<td>The grouping to initially use for this node. The available groups are defined on the selected node.</td>

</tr>

<tr>

<td>Default Hidden</td>

<td>Initially hides the nodes.</td>

</tr>

<tr>

<td>Node</td>

<td>

A node to include in the view. The available nodes are defined in the [diagram](properties.md).

</td>

</tr>

<tr>

<td>Node Style</td>

<td>The node style to use for the node in this view. The available node styles are defined on the selected node.</td>

</tr>

</tbody>

</table>

