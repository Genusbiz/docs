# Formula Designer

The Formula Designer is used to create and edit a [Formula](../concepts/index.md#formula)

The Formula Designer is divided into three sections:
* A Toolbar (top left)
* A Parameter Pane (to the right)
* A Formula Area (the remaining part)

### Toolbar
The Toolbar contains the various operators (addition, subtraction, multiplication etc.), some operands (constant, if-then) and group/function (parenthesis, floor, ceil, etc.) nodes that can be added to a formula.  
Upon click on any of the toolbar buttons, the corresponding formula node will be added to the formula.


### Formula Area
The Formula Area contains a visible presentation of the formula expression.  

You can use keyboard shortcuts to select, move and delete nodes in the expression:
* Add node - tap e.g. `+`, `/` or `(` keys to add addition, division and groupStart nodes, respectively (see complete list below)
* Select nodes - click node or use `←` or `→` to select a node. By holding the `⇧` (SHIFT) key you can select multiple nodes
* Move nodes - drag and drop node, or push e.g. `Ctrl`+`→` to move the selected node
* Delete node - The `Delete` key deletes the selected node, `backspace` deletes the selected node or the last node, moving backwards

Add node keyboard shortkeys:
* `+` - addition operator
* `-` - subtraction operatorP
* `/` - division operator
* `%` - modulo operator
* `:` - divide operator
* `^` - exponentiation operator
* `(` - groupStart without function
* `)` - groupEnd

#### Formula settings
At the bottom left of the formula area, you can see a summary of formula settings (e.g. "Force calculation: OFF"). By clicking the settings icon you open a dialog where you can edit these settings. These settings are:
* **Force caulcation** - By default, a formula will not be computed if all its variable operands (tile and formula values) has no value. Enabling this will force the formula to always be calculated, ignoring this rule. This can be useful in a case of e.g. a formula taking the form of `T-a`, where `T` is a constant threshold value, and `a` is a variable that doesn't have a value for all objects, but we still want the formula to be computed, i.e. resulting in `T-0=T` when `a` is missing.

### Parameter Pane
The Parameter Pane lists the available parameters for your formula

The paremeters are divided into two groups:
* Tile Values - numeric values defined on and visible on the tile, e.g. the numeric columns defined in a table component
* Formula values - values shared between formulas (scope: tile) used for partial calculations. These can only be added/edited/deleted from the formula designer

The formula values are divided into two types:
* Field - a data source count or a data source field aggregate
* Sub formula - can be used to divide a complex formula into multiple, composable sub formulas

#### Formula value dimensions and connections
The dimensions of a formula value parameter (count/field aggregate) are determined by the tile values (formulas) that uses it. A parameter can be used by many tile values with different dimensions (e.g. a two dimensional grid with some row category values and some grid (row+column) category values - in this case a paremeter that is used by both these value groups will be calculated for both dimension groups (row only and row+column)).  
  
You can **override** a parameter's connections to its categories/dimensions (ie. the tile categories) in the "Connect ... by" options when editing a value.    
You can **remove** dimensions altogether by choosing the "No Connection" option. This can be useful for e.g. calculating totals and percentage of a total.



<br/>
<br/>

## Validation
A formula has to be well-formed before it can be saved (and computed), e.g. the validation ensures that all operator nodes have left and right nodes, all groupStart nodes have a corresponding groupEnd node etc.  
If there are errors in the formula, these errors are listed at the bottom of the Formula Area. You have to make sure these errors are fixed before you will be allowed to save the formula.