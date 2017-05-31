# Action

An *Action* is a list of *Commands* that can be attatched to various parts of a [Tile](tile.md) or a [Visualization](../visualizations/index.md).

An *Action* can be attached to:
* The header area of a [Tile](tile.md)
* The body area of a [Tile](tile.md)
* A button in the footer area of a [Tile](tile.md)
* The *Context Menu* that can be invoked when clicking on a part of a [Visualization](../visualizations/index.md) that represents an object in the data source of that [Category](category.md).
* A [Value](valus.md) in the [Visualization](../visualizations/index.md).

Various [Visualizations](../visualizations/index.md) support different attachments of *Actions*.

An *Action* is composed of a list of *Commands*. A *Command* can be of the following types:
* History Go Back
* History Go Forward
* Open Analysis (in same data mart) with current selection
* Open Analysis (in any data mart) with selection mapping
* Reset All Selections
* Switch View
