# Formula Designer

The Formula Designer is used to create and edit a [Formula](../concepts.md#formula)

The Formula Designer is divided into three sections:
* A Toolbar (top left)
* A Parameter Pane (to the right)
* A Expression Area (the remaining part)

### Toolbar
The Toolbar contains the various operators (addition, subtraction, multiplication etc.), operands (constant, if-then) and group/function nodes that can be added to a formula.  
Upon click on any of the toolbar buttons, the corresponding formula node will be added to the formula.


### Expression Area
The Expression Area contains a visible presentation of the formula's expression.  

You can use the keyboard to select, move and delete nodes in the expression:
* Add node - tap e.g. +, / or ( keys to add addition, division and groupStart nodes, respectively (see complete list below)
* Select nodes - right/left arrow or tap the node. By holding the shift key you can select multiple nodes
* Move nodes - holding ctrl key, tap the right/left arrows to move the selected node
* Delete node - delete key deletes the selected node, backspace deletes the selected node OR the last node, moving backwards

Add node keyboard shortkeys:
* "+" - addition operator
* "-" - subtraction operatorP
* "/" - division operator
* "%" - modulo operator
* ":" - divide operator
* "^" - exponentiation operator
* "(" - groupStart without function
* ")" - groupEnd

#### Formula settings
At the bottom left of the expression area, you can see a summary of formula settings (e.g. "Force calculation: OFF"). By clicking the settings icon you open a dialog where you can edit these settings. These settings are:
* Force caulcation - By default, a formula will not be computed if all its variable operands (counts/field aggregates etc.) has no value. Enabling this will force the formula to always be calculated, ignoring this rule. This can be useful in a case of e.g. a formula taking the form of T-a, where "T" is a constant threshold value, and "a" is a variable that doesn't have a value for some grouping sets, but we still want the formula to be computed, i.e. resulting in T-0=T when a is missing.

### Parameter Pane
The Parameter Pane lists the available parameters for your formula

The paremeters are divided into two groups:
* Tile Values - numeric values defined on and visible on the tile, e.g. the numeric columns defined in a table component
* Formula parameters - parameters shared between formulas and sub expressions (scope: tile) used for partial calculations. These can be added/edited/deleted.

The formula parameters are divided into three types:
* Count - a data source count
* Field aggregate - a data source field aggregate
* Sub expression - can be used to divide a complex formula expression into multiple, composable sub expressions. A sub expression can, as a formula expression, use tile values and formula parameters as variables

#### Formula parameter dimensions and connections
The dimensions of a parameter (count/field aggregate) are determined by the tile values (formulas) that uses it. A parameter can be used by many tile values with different dimensions (e.g. a two dimensional grid with some row category values and some grid (row+column) category values - in this case a paremeter that is used by both these value groups will be calculated for both dimension groups (row only and row+column)).  
  
You can also **override** a parameter's connections to its categories/dimensions (ie. the tile categories) in the "Connect ... by" options when editing a parameter.    
You can **remove** the dimension altogether by choosing the "No Connection" option. This can be useful for e.g. calculating totals and percentage of a total.



<br/>
<br/>

## Validation
A formula has to be well-formed before it can be saved (and computed), e.g. the validation ensures that all operator nodes have left and right nodes, all groupStart nodes have a corresponding groupEnd node etc.  
If there are errors in the formula, these errors are listed at the bottom of the Formula Area. You have to make sure these errors are fixed before you will be allowed to save the formula.