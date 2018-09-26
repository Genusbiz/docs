# Tree Map

The TreeMap control can effortlessly turn hierarchical or grouped data into meaningful representations that are colorized and visualized to suit your needs.  

Treemaps display data as a set of nested rectangles, where the size of each rectangle corresponds to the size of the data value. The data can be organized in a hierarchy (as a tree), or simply grouped by specific values. Each branch/group is represented by a rectangle, which is then tiled with smaller rectangles representing sub-branches/groups. A leaf node's rectangle has an area proportional to a specified dimension on the data.  

When the color and size dimensions are correlated in some way with the tree structure or groups, one can often more easily see patterns that would be difficult to spot in other ways. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.

**Single Level Data Structure**

For single level data structures define the data binding to the data, and then identify the fields that contains the value (Value Field) and the label (Label Field). Optionally, create groups to group and colorize the boxes.

**Nested Levels Data Structure**

For nested levels data structures, create one or more root levels with one or more sublevels. For each level define the data binding to the data, and then identify the fields that contains the value (Value Field) and the label (Label Field). For all the sub levels make sure to identify the field that contains the connection to the parent (Parent Binding). Optionally, define a colorizer to improve the visualization of the data.

**Topics in "Tree Map"**
* [Examples / How To](examples--how-to.md)
* [Properties](properties.md)