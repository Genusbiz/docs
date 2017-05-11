## Condition Syntax Structure

A condition evaluates to a logical true value or logical false value, according to the structure described below.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

<span style="TEXT-DECORATION: underline">Condition

- is defined as one of the following

</th>

<th></th>

</tr>

<tr>

<td>Group</td>

<td></td>

</tr>

<tr>

<td>Condition LogicalOperator Condition</td>

<td>Two conditions separated by a logical operator.</td>

</tr>

<tr>

<td>Expression</td>

<td></td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">Group  
- is defined as</th>

<th></th>

</tr>

<tr>

<td>( Condition )</td>

<td>A condition inside parentheses.</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">LogicalOperator  
- is defined as one of the following  
(listed in order of precedence)</th>

<th></th>

</tr>

<tr>

<td>And</td>

<td>

Logical AND used between expressions to evaluate the combined result.

Evaluates to true only if both expressions are true, otherwise the result is false.

</td>

</tr>

<tr>

<td>Or</td>

<td>

Logical OR used between expressions to evaluate the combined result.

Evaluates to true if either of the expressions are true, otherwise the result is false.

</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">Expression  
- is defined as one of the following</th>

<th></th>

</tr>

<tr>

<td>Operand UnaryOperator</td>

<td>One operand and an operator</td>

</tr>

<tr>

<td>Operand BinaryOperator Operand</td>

<td>Two operands connected by an operator.</td>

</tr>

<tr>

<td>Operand SetOperation</td>

<td>One operand and a set operation</td>

</tr>

<tr>

<td>BooleanExpression</td>

<td></td>

</tr>

</tbody>

</table>

<span style="FONT-STYLE: italic">Not all combinations of operands and operators are applicable.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

<span style="TEXT-DECORATION: underline">BooleanExpression

- is defined as

</th>

<th></th>

</tr>

<tr>

<td>Formula (= True / False)</td>

<td>A formula that returns a boolean value.</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">Operand  
- is defined as one of the following</th>

<th></th>

</tr>

<tr>

<td>Field</td>

<td></td>

</tr>

<tr>

<td>Lookup</td>

<td></td>

</tr>

<tr>

<td>ActiveObjectSelection</td>

<td></td>

</tr>

<tr>

<td>Formula</td>

<td></td>

</tr>

<tr>

<td>Constant</td>

<td></td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">Field - is defined as</th>

<th></th>

</tr>

<tr>

<td>A field in a data source</td>

<td>For example: Activity.Estimate, Invoice.Amount</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">Lookup - is defined as</th>

<th></th>

</tr>

<tr>

<td>Read from a data source using a Condition</td>

<td></td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

<span style="TEXT-DECORATION: underline">ActiveObjectSelection

- is defined as

</th>

<th></th>

</tr>

<tr>

<td>An [active object selection](../active object.md)</td>

<td>For example: Employees.Single Selected Object.Actual Sales.Selected Objects</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">Formula - is defined as</th>

<th></th>

</tr>

<tr>

<td>An [advanced expression](../advanced expressions.md)</td>

<td>For example: Activity.Estimate * 1,5</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">Constant - is defined as</th>

<th></th>

</tr>

<tr>

<td>A constant value</td>

<td>For example: 123, "Yellow", "01.01.2001", etc.</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">SetOperation - is defined as</th>

<th></th>

</tr>

<tr>

<td>SetOperator Expression</td>

<td>An expression preceeded by a set operator.</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">SetOperator  
- is defined as one of the following</th>

<th></th>

</tr>

<tr>

<td>ForAll</td>

<td>

Set operator which evaluates an expression for the members of a set.

Evaluates to true if the expression evaluates to true for every member of the set.

</td>

</tr>

<tr>

<td>Exists</td>

<td>

Set operator which evaluates an expression for the members of a set.

Evaluates to true if the expression evaluates to true for any member of the set.

</td>

</tr>

<tr>

<td>NotExists</td>

<td>

Set operator which evaluates an expression for the members of a set.

Evaluates to true if the expression evaluates to false for every member of the set.

</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th><span style="TEXT-DECORATION: underline">UnaryOperator  
- is defined as one of the following</th>

<th></th>

</tr>

<tr>

<td>HasAnyValue</td>

<td>Evaluates to true if the operand contains at least one value.</td>

</tr>

<tr>

<td>HasNoValue</td>

<td>Evaluates to true if the operand contains no values.</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>

<span style="TEXT-DECORATION: underline">BinaryOperator

- is defined as one of the following

</th>

<th></th>

<th></th>

</tr>

<tr>

<td>IsEqualTo</td>

<td>Evaluates to true if the first operand (1) is equal to the second operand (1).</td>

<td></td>

</tr>

<tr>

<td>IsNotEqualTo</td>

<td>Evaluates to true if the first operand (1) is not equal to the second operand (1).</td>

<td></td>

</tr>

<tr>

<td>IsGreaterThan</td>

<td>Evaluates to true if the first operand (1) is greater than the second operand (1).</td>

<td></td>

</tr>

<tr>

<td>IsGreaterThanOrEqual</td>

<td>Evaluates to true if the first operand (1) is greater than or equal to the second operand (1).</td>

<td></td>

</tr>

<tr>

<td>IsLessThan</td>

<td>Evaluates to true if the first operand (1) is less than the second operand (1).</td>

<td></td>

</tr>

<tr>

<td>IsLessThanOrEqual</td>

<td>Evaluates to true if the first operand (1) is less than or equal to the second operand (1).</td>

<td></td>

</tr>

<tr>

<td>IsAnyOf</td>

<td>

Evaluates to true if the first operand (1) is found in the second operand (n).

</td>

<td></td>

</tr>

<tr>

<td>IsNoneOf</td>

<td>Evaluates to true if the first operand (1) is not found in the second operand (n).</td>

<td></td>

</tr>

<tr>

<td>Contains</td>

<td>Evaluates to true if the text in the second operand (1) is found in the text of the first operand (1).</td>

<td>Text operator</td>

</tr>

<tr>

<td>NotContains</td>

<td>Evaluates to true if the text of the second operand (1) is not found in the text of the first operand (1).</td>

<td>Text operator</td>

</tr>

<tr>

<td>StartsWith</td>

<td>Evaluates to true if the first operand (1) starts with the text of the second operand (1).</td>

<td>Full Text operator</td>

</tr>

<tr>

<td>NotStartsWith</td>

<td>Evaluates to true if the first operand (1) does not start with the text of the second operand (1).</td>

<td>Full Text operator</td>

</tr>

<tr>

<td>ContainsAllTheWords</td>

<td>

Evaluates to true if all the words of the second operand (n) are found as the start of words in the first operand (1).

</td>

<td>Full Text operator</td>

</tr>

<tr>

<td>ContainsAnyOfTheWords</td>

<td>Evaluates to true if any the words of the second operand (n) are found as the start of words in the first operand (1).</td>

<td>Full Text operator</td>

</tr>

<tr>

<td>ContainsNoneOfTheWords</td>

<td>Evaluates to true if none the words of the second operand (n) are found as the start of words in the first operand (1).</td>

<td>Full Text operator</td>

</tr>

<tr>

<td>ContainsAllWords(Exact)</td>

<td>Evaluates to true if the first operand (1) contains all of the words of the second operand (n).</td>

<td>Full Text operator</td>

</tr>

<tr>

<td>ContainsAnyOfTheWords(Exact)</td>

<td>Evaluates to true if the first operand (1) contains any of the words of the second operand (n).</td>

<td>Full Text operator</td>

</tr>

<tr>

<td>ContainsNoneOfTheWords(Exact)</td>

<td>Evaluates to true if the first operand (1) does not contain any of the words of the second operand (n).</td>

<td>Full Text operator</td>

</tr>

<tr>

<td>MatchThePattern</td>

<td>Evaluates to true if the pattern defined in the second operand (1) is found in the first operand (1).</td>

<td>Regular expression text operator</td>

</tr>

<tr>

<td>DoesNotMatchThePattern</td>

<td>Evaluates to true if the pattern defined in the second operand (1) is not found in the first operand (1).</td>

<td>Regular expression text operator</td>

</tr>

</tbody>

</table>