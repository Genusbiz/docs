# Analysis concepts

An Analysis consists of one or more Views, and every View has a set of Tiles that displays data using one of many [Visualizations](visualizations.md). These concepts, and other common Analysis concepts, are explained in this article.


## View
An Analysis is composed of *Views*, and every View is composed of a set of Tiles.

Only one View is visible in an Analysis at any time. By default, the [Default view](designer/index.md#how-to-set-default-view) is shown when opening an Analysis. Other Views can be opened manually from the Toolbar (if enabled), or via an [Action](#action).  

A View can be formatted with a background.


## Tile
A *Tile* is a layout item which has the following parts:
* A *Header* area with a Title, Subtitle, and/or a Background. Note that the Header only is displayed if one or more of these are set.
* A *Body* area with a [Visualization](visualizations.md) displaying data.
* A *Footer* area with [Action](#action) buttons. Note that the footer is only displayed if there are any Action Buttons on the Tile.

All of these can be formatted with e.g. backgrounds, font sizes, font colors etc.

Tiles are placed by the analysis designer. The tiles has a snapping algorithm to the right border, and a wrapping algorithm relative to the width of the analysis.  
Tiles can be maximized design time or runtime.


## Category
A Tile can have zero or more *Categories*, and the number of allowed Categories are determined by the Tile's [Visualization](visualizations.md).  
A Category is a data source binding, and it defined how the data displayed on the Tile should be grouped. 

Examples:
* In a [Table](visualizations.md#table) with a single category, *Company*, each row of the Table will represent one Company.
* In a [Bars](visualizations.md#bars) with two categories, *Company* and *Year*, the bars will be grouped by both Company and Year.

Visualizations that use Categories have different options for controlling them:

* *Allow User Selection* toggles selection functionality (e.g. if you can select rows in a Table).
* *Hide Excluded* toggles hiding of category objects that are not qualified in the current selection.
* *Trim* toggles hiding of category objects that has no data values.
* *Naming* can be used to name the Category objects, i.e. define which field in the Category data source that should be used as a naming field.
* *Sorting* can be used to sort the Category objects by defining which field(s) ([Values](#value)) from the Category data soure it should be sorted by
* *Limit to first n values* can be used to restrict the output to a subset of the objects in the Category data source


## Value
A Tile can have zero or more *Values*, determined by the Tile's [Visualization](visualizations.md).  
Values represents data, and they can be:
* a count of objects in a data source
* a field (or function) of an object in a data source
* an aggregated numeric property of a set of objects
* the result of a [Formula](designer/formula-designer.md)

If the Tile has defined [Categories](#category), the Values are grouped by these Categories. E.g. for a [Table](visualizations.md#table) with the Category *Company* and the Values *Name* and *Employees*, each row will represent a Company, with two columns - the name of the Company and the number of employees. 

*Values* can e.g. be pies in a [Pie](visualizations.md#pie), bars in a [Bars](visualizations.md#bars), or simply a numeric measure in a [Measure](visualizations.md#measure). I.e., it depends on the Visualization.  
Some Visualizations use a different names for Values. E.g. a [Table](visualizations.md#table) calls them *Columns*.  
Values have multiple options available in the [value designer](designer/data-pane/value-overview.md).

## Data types and aggregates
Values can be numerics, strings, dates, etc.
Only numeric *Values* can be aggregated. If a non-numeric field of an object is used in e.g. a [Measure](visualizations.md#measure) it uses a *single-or-nothing* algorithm, meaning if there is a single qualified object in the data source of the value, then the data element of that object is used, otherwise nothing is used.


## Action
An *Action* is a list of *Commands* that can be attached to various parts of a [Tile](#tile) or a [Visualization](visualizations.md).

An *Action* can be attached to:
* The header area of a Tile
* The body area of a Tile
* A button in the footer area of a Tile
* The *Context Menu* that can be invoked when clicking on a part of a [Visualization](visualizations.md) that represents an object in the data source of that [Category](#category).
* A [Value](#value) in the [Visualization](visualizations.md), e.g. a pie in a [Pie Chart](visualizations.md#pie)

Various [Visualizations](visualizations.md) support different attachments of *Actions*.

An *Action* is composed of a list of *Commands*. A *Command* can be of the following types:
* Apply Filter
* History Go Back
* History Go Forward
* Open a Form (desktop client)
* Open a Table (desktop client)
* Open Analysis with new selection
* Open Analysis with same selection
* Reset All Selections
* Switch [View](#view)

## Formula

A *Formula* is one of the possible forms a [Value](#value) can take. It constitutes a user-defined mathematical expression. Upon computation, the result of a formula is a numeric constant (if data is found for the given data bindings and dimensions).

A formula is simply an array of nodes, which together contitutes an expression. A formula can consist of the following node types:
* operand nodes - a numeric constant or a [Value](#value) reference
* operator node - represents the arithmetic operation (addition, multiplication etc.) that is to be applied to its left and right nodes
* group start node - represents the start of a group (e.g. `(`, or with an optional function, `floor(`)
* group end node - represents the end of a group

Example: `(2+3)-A`  
The above formula consists of 7 nodes; a groupStart, `(`, a constant operand, `2`, an addition operator, `+`, another constant operand, `3`, a groupEnd, `)`, a subtraction operator, `-`, and a value reference operand, `A` (where `A` is pointing to a [Value](#value). Additionaly, `(2+3)` is a group that will be calculated by itself.

### Operand node
An operand node can be either of these:
* a numeric constant
* a [Value](#value) reference - upon calculation, it gets the actual data value of the referenced Value - if no data was found it will resolve to zero (0) by default (decided by the "Zero if missing" option). You can change this setting per operand by clicking the edit icon or double clicking the operand node
* an *If...then* statement, where a condition (comparing [Value](#value) references and/or constants) is tested. If the condition is true, it returns one Value or constant, else it return another Value or constant.

### Operator node
An operator node represents an arithmetic operation that is to be applied on two constants.  
Example: In `x+y`, `+` is the operator node, denoting that the operands `x` and `y` are to be added. An operator expects its children (i.e. its left and right nodes) to be either operands or groups, i.e. that they will represent numeric constants upon calculation.

### Group nodes
The part between a groupStart node, denoted by a left parenthesis, e.g. `(`, and a groupEnd node, denoted by a right parenthesis, i.e. `)`, constitutes a node group that is to be computed by itself before being applied to the main formula.  

Example: `x-(4/2)`  
In the above formula, the group `(4/2)` consitutes a group that will be computed by itself before the rest of the formula can be computed.

A group can also have a function attached to itself. This function will be applied to the result of the group. The available group function types are:
* ***floor***, denoted `floor(x+y)`. Returns the largest integer less than or equal to `x+y`
* ***ceil***, denoted `ceil(x+y)`. Returns the smallest integer greater than or equal to `x+y`
* ***round***, denoted `round(x+y)`. Returns the value of `x+y` rounded to the nearest integer
* ***sqrt***, denoted `sqrt(x+y)`. Returns the square root of `x+y`
* ***zeroIfMissing***, denoted `zeroIfMissing(x+y)`. Returns 0 if `x+y` has no value, otherwise it returns the value of `x+y`.
