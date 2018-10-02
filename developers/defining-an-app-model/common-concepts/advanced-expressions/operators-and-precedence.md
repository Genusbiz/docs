# Operators and precedence

Unary operator expressions:
```
<operator> <operand>
```
Binary operator expressions:
```
<operand1> <operator> <operand2>
```

## Arithmetic operators

Operator | Function              | Example | Description                                        |
---------|-----------------------|---------|----------------------------------------------------|
**\***   | Multiplication        | a \* b  | Multiply the two operands.                         |
**/**    | Division              | a / b   | Divide the first operand by the second operand.    |
**+**    | Addition              | a + b   | Add the two operands.                              |
**-**    | Subtraction           | a - b   | Subract the second operand from the first operand. |
**-**    | Unary minus, negation | -a      | Negates the operand                                |

## Logical operators

Operator | Function         | Example | Description                                                                                                                                  |
---------|------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
**not**  | Logical negation | not a   | Negates the boolean operand.                                                                                                                 |
**and**  | Logical AND      | a and b | Performs a logical-AND of two bool operands. The second operand is only evaluated if necessary, which is when the first operand is true.     |
**or**   | Logical OR       | a or b  | Performs a logical-OR of the two bool operands. The second operand is only evaluated if necessary, which is when the first operand is false. |

## Relational operators

Operator | Function                 | Example | Description                                                                       |
---------|--------------------------|---------|-----------------------------------------------------------------------------------|
**<**    | Less than                | a < b   | Returns true if the first operand is less than the second operand.                |
**>**    | Greater than             | a > b   | Returns true if the first operand is greater than the second operand.             |
**<=**   | Less than or equal to    | a <= b  | Returns true if the first operand is less than or equal to the second operand.    |
**>=**   | Greater than or equal to | a >= b  | Returns true if the first operand is greater than or equal to the second operand. |

## Equality operators

Operator | Function     | Example | Description                                     |
---------|--------------|---------|-------------------------------------------------|
**=**    | Equal to     | a = b   | Returns true if the two operands are equal.     |
**<>**   | Not equal to | a <> b  | Returns true if the two operands are not equal. |

## Null coalescing operators

Operator | Function                     | Example | Description                                                                             |
---------|------------------------------|---------|-----------------------------------------------------------------------------------------|
**??**   | Null coalescing operator     | a ?? b  | Returns the first operand if it is not null, otherwise it returns the second operand.   |
**!??**  | Not null coalescing operator | a !?? b | Returns the second operand if the first operand is not null, otherwise it returns null. |

## Operator precedence

The operators are grouped in order of precedence. Operators within the same group have the same precedence.

Operator type   | Example   |
----------------|-----------|
Unary           | - not     |
Multiplicative  | * /       |
Additive        | + -       |
Relational      | < > <= >= |
Equality        | = <>      |
Logical AND     | and       |
Logical OR      | or        |
Null Coalescing | ?? !??    |

