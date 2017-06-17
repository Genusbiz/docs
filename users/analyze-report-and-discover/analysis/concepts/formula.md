# Formula

A *Formula* is one of the possible forms a [Value](value.md) can take. It constitutes a user-defined mathematical expression. Upon computation, the result of a formula is a numeric constant (if data is found for the given data bindings and dimensions).

A formula is simply an array of nodes, which together contitutes an expression. A formula can consist of the following node types:
* operand nodes - a numeric constant or a [Value](value.md) reference
* operator node - represents the arithmetic operation (addition, multiplication etc.) that is to be applied to its left and right nodes
* groupStart/function node - represents the start of a group/sub formula and a (optional) function that is to be applied to the result of this sub formula
* groupEnd node - represents the end of a group/sub formula

Example: (2+3)-A  
The above formula consists of 7 nodes; a groupStart, "(", a constant operand, "2", an addition operator, "+", another constant operand, "3", a groupEnd, ")", a subtraction operator, "-", and a value reference operand, "A" (where A is pointing to a [Value](value.md)). Additionaly, (2+3) is a group/sub formula.

### Operand node
An operand node is either a numeric constant or a [Value](value.md) reference. When a formula is computed, a value reference operand will look up the referenced value's current data constant and use this constant upon calculation.

### Operator node
An operator node represents an arithmetic operation that is to be applied on two constants.  
Example: In x+y, "+" is the operator node, denoting that the operands "x" and "y" are to be added. An operator expects its children (i.e. its left and right nodes) to be either operands or groups, i.e. that they will represent numeric constants upon calculation.

### Group nodes
The part between a groupStart node, denoted by a left parenthesis, e.g. "(", and a groupEnd node, denoted by a right parenthesis, i.e. ")", constitutes a sub formula that is to be computed by itself before being applied to the main formula.  

Example: x-(4/2)  
In the above formula, the group (4/2) consitutes a sub formula that will be computed by itself before the rest of the formula can be computed.

A group can (optionally) have a function attached to itself. This function will be applied to the result of the group sub formula.
The available group function types are (where "x" is a sub formula)
* floor, denoted "floor(x)". Returns the largest integer less than or equal to x
* ceil, denoted "ceil(x)". Returns the smallest integer greater than or equal to x
* round, denoted "round(x)". Returns the value of x rounded to the nearest integer
* sqrt, denoted "sqrt(x)". Returns the square root of x
* zeroIfMissing, denoted "zeroIfMissing(x)". Returns 0 if x has no value, otherwise it returns the value of x.