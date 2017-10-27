# Operators and precedence

Unary operator expressions:

<operator> <operand>

Binary operator expressions:

<operand1> <operator> <operand2>

**Arithmetic operators**

<table>

<tbody>

<tr>

<td>** * **</td>

<td>Multiplication</td>

<td>a * b</td>

<td>Multiply the two operands.</td>

</tr>

<tr>

<td>** / **</td>

<td>Division</td>

<td>a / b</td>

<td>Divide the first operand by the second operand.</td>

</tr>

<tr>

<td>**+**</td>

<td>Addition</td>

<td>a + b</td>

<td>Add the two operands.</td>

</tr>

<tr>

<td>**-**</td>

<td>Subtraction</td>

<td>a - b</td>

<td>Subract the second operand from the first operand.</td>

</tr>

<tr>

<td>**-**</td>

<td>Unary minus, negation</td>

<td>-a</td>

<td>Negates the operand</td>

</tr>

</tbody>

</table>

**Logical operators**

<table>

<tbody>

<tr>

<td>**not**</td>

<td>Logical negation</td>

<td>not a</td>

<td>Negates the boolean operand.</td>

</tr>

<tr>

<td>**and**</td>

<td>Logical AND</td>

<td>a and b</td>

<td>Performs a logical-AND of two bool operands. The second operand is only evaluated if necessary, which is when the first operand is true.</td>

</tr>

<tr>

<td>**or**</td>

<td>Logical OR</td>

<td>a or b</td>

<td>Performs a logical-OR of the two bool operands. The second operand is only evaluated if necessary, which is when the first operand is false.</td>

</tr>

</tbody>

</table>

**Relational operators**

<table>

<tbody>

<tr>

<td>**<**</td>

<td>Less than</td>

<td>a < b</td>

<td>Returns true if the first operand is less than the second operand.</td>

</tr>

<tr>

<td>**>**</td>

<td>Greater than</td>

<td>a > b</td>

<td>Returns true if the first operand is greater than the second operand.</td>

</tr>

<tr>

<td>**<=**</td>

<td>Less than or equal to</td>

<td>a <= b</td>

<td>Returns true if the first operand is less than or equal to the second operand.</td>

</tr>

<tr>

<td>**>=**</td>

<td>Greater than or equal to</td>

<td>a >= b</td>

<td>Returns true if the first operand is greater than or equal to the second operand.</td>

</tr>

</tbody>

</table>

**Equality operators**

<table>

<tbody>

<tr>

<td>**=**</td>

<td>Equal to</td>

<td>a = b</td>

<td>Returns true if the two operands are equal.</td>

</tr>

<tr>

<td>**<>**</td>

<td>Not equal to</td>

<td>a <> b</td>

<td>Returns true if the two operands are not equal.</td>

</tr>

</tbody>

</table>

**Null coalescing operators**

<table>

<tbody>

<tr>

<td>**??**</td>

<td>Null coalescing operator</td>

<td>a ?? b</td>

<td>Returns the first operand if it is not null, otherwise it returns the second operand.</td>

</tr>

<tr>

<td>**!??**</td>

<td>Not null coalescing operator</td>

<td>a !?? b</td>

<td>Returns the second operand if the first operand is not null, otherwise it returns null.</td>

</tr>

</tbody>

</table>

**Operator precedence**

The operators are grouped in order of precedence. Operators within the same group have the same precedence.

 <table style="WIDTH: 100%">

<tbody>

<tr>

<td>Unary</td>

<td>

-

not

</td>

</tr>

<tr>

<td>Multiplicative</td>

<td>

*

/

</td>

</tr>

<tr>

<td>Additive</td>

<td>

+

-

</td>

</tr>

<tr>

<td>Relational</td>

<td>

<

>

<=

>=

</td>

</tr>

<tr>

<td>Equality</td>

<td>

=

<>

</td>

</tr>

<tr>

<td>Logical AND</td>

<td>and</td>

</tr>

<tr>

<td>Logical OR</td>

<td>or</td>

</tr>

<tr>

<td>Null Coalescing</td>

<td>

??

!??

</td>

</tr>

</tbody>

</table>
