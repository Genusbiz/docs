# Groups and Expressions

A condition consists of a sequence of groups and expressions, separated by logical operators (AND/OR). A group also contains a sequence of groups and expressions, separated by logical operators. This is a simplified view of a condition, and for a more complete and technical description see [Condition Syntax Structure](condition-syntax-structure.md).

**Group**

A group represents a set of parentheses which encloses a sequence of expressions (and other groups), and the result of the group evaluates to true or false based on the evaluation of its content.

**Expression**

An expression consists of values (operands) and operators, and the result evaluates to true or false. An expression can be constructed in one of the following ways.

*   Left-Operand
*   Left-Operand Operator
*   Left-Operand Operator Right-Operand

The possible combinations are determined by the type and [cardinality](../../../../terminology.md) of the operands, the operator, and by the context in which the condition is used.

The table below gives a simplified overview of the possible combinations of operands and operators in an expression. For C% more complete and technical description see [Condition Syntax Structure](condition-syntax-structure.md).

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Left Operand Type</th>

<th>Left Operand</th>

<th>Operator</th>

<th>Right Operand</th>

<th>Right Operand Type</th>

</tr>

<tr>

<td>Simple Value Field</td>

<td>

Field,

ActiveObjectSelection,

Formula

</td>

<td>

IsEqualTo, IsNotEqualTo,

IsGreaterThan, IsGreaterThanOrEqual, IsLessThan, IsLessThanOrEqual,

Contains, NotContains, StartsWith, NotStartsWith,

ContainsAllTheWords, ContainsAnyOfTheWords, ContainsNoneOfTheWords,

MatchThePattern, DoesNotMatchThePattern

</td>

<td>

Field,

ActiveObjectSelection,

Formula,

Constant

</td>

<td>

Simple Value Field,

Value

</td>

</tr>

<tr>

<td>Single Object Field</td>

<td>

Field,

ActiveObjectSelection,

Formula

</td>

<td>IsEqualTo, IsNotEqualTo, IsAnyOf, IsNoneOf</td>

<td>

Field,

Lookup,

ActiveObjectSelection,

Formula

</td>

<td>

Single Object Field,

Multiple Object Group

</td>

</tr>

<tr>

<td>Multiple Object Group</td>

<td>

Field,

ActiveObjectSelection,

Formula

</td>

<td>IsAnyOf</td>

<td>

Field,

Lookup,

ActiveObjectSelection,

Formula

</td>

<td>Multiple Object Group</td>

</tr>

<tr>

<td>Multiple Object Group</td>

<td>

Field,

ActiveObjectSelection,

Formula

</td>

<td>ForAll, Exist, NotExist</td>

<td>Expression</td>

<td>Expression</td>

</tr>

<tr>

<td>

Simple Value Field,

Single Object Field

Multiple Object Group

</td>

<td>

Field,

ActiveObjectSelection,

Formula

</td>

<td>HasNoValue, HasValue</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Boolean Value</td>

<td>BooleanExpression</td>

<td></td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

For a description of the types of operands, see Operands. For a description of the operators, see [Condition Syntax Structure](condition-syntax-structure.md).