# Formula Designer

The Formula Designer is used to create and edit a [Formula](../concepts/index.md#formula)

The Formula Designer is divided into three sections:
* A Parameter Pane (to the left)
* A Toolbar (at the top, to the right)
* A Formula Area (the remaining part)

### Parameter Pane
The Parameter Pane contains the available [Values](../concepts/index.md#value) that can be used as operand nodes in the Formula.

The parameters are divided into three types:
* Tile Values - the (visible) values defined on the tile, e.g. columns defined for a table.
* Local Values - local (hidden) values (scope: tile) to be used by formulas. These can be added/edited/deleted.
* Local Formulas - local formulas (scope: tile) to be used by formulas. These can be added/edited/deleted.

As such, Local Values and Formulas can be reused by multiple formulas. Local Formulas can also be used to e.g. divide a complex, long formula in to multiple maintainable sub formulas.

To add a parameter/value to the formula, you just have to click the desired parameter/value, and a corresponding value reference operand node will be added to the formula.

### Toolbar
The Toolbar contains the various operators (addition, subtraction, multiplication etc.), operands (constant, if-then) and group/function nodes that can be added to a formula.  
Upon click on any of the toolbar buttons, the corresponding formula node will be added to the formula.


### Formula Area
The Formula Area contains a visible presentation of the Formula beinged edited.  
You can use the keyboard to select, move and delete nodes in the formula:
* Add node - tap e.g. +, / or ( keys to add addition, division and groupStart nodes, respectively (see complete list below)
* Select nodes - right/left arrow or tap the node. By holding the shift key you can select multiple nodes
* Move nodes - holding ctrl key, tap the right/left arrows to move the selected node
* Delete node - delete key deletes the selected node, backspace deletes the selected node OR the last node, moving backwards

Add node shortkeys:
* "+" - addition operator
* "-" - subtraction operator
* "/" - division operator
* "%" - modulo operator
* ":" - divide operator
* "^" - exponentiation operator
* "(" - groupStart without function
* ")" - groupEnd


<br/>
<br/>

## Validation
A formula has to be well-formed before it can be saved (and computed), e.g. the validation ensures that all operator nodes have left and right nodes, all groupStart nodes have a corresponding groupEnd node etc.  
If there are errors in the formula, these errors are listed at the bottom of the Formula Area. You have to make sure these errors are fixed before you will be allowed to save the formula.