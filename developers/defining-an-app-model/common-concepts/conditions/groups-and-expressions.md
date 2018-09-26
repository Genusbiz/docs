# Groups and Expressions

A condition consists of a sequence of groups and expressions, separated by logical operators (AND/OR). A group also contains a sequence of groups and expressions, separated by logical operators. This is a simplified view of a condition, and for a more complete and technical description see [Condition Syntax Structure](condition-syntax-structure.md).

## Group

A group represents a set of parentheses which encloses a sequence of expressions (and other groups), and the result of the group evaluates to true or false based on the evaluation of its content.

## Expression

An expression consists of values (operands) and operators, and the result evaluates to true or false. An expression can be constructed in one of the following ways.

*   Left-Operand
*   Left-Operand Operator
*   Left-Operand Operator Right-Operand

The possible combinations are determined by the type and [cardinality](../../../../terminology.md) of the operands, the operator, and by the context in which the condition is used.

The table below gives a simplified overview of the possible combinations of operands and operators in an expression. For C% more complete and technical description see [Condition Syntax Structure](condition-syntax-structure.md).

Left Operand Type | Left Operand | Operator | Right Operand | Right Operand Type |
------------------|--------------|----------|---------------|--------------------|
Simple Value Field | Field,<br>ActiveObjectSelection,<br>Formula | IsEqualTo,<br>IsNotEqualTo,<br>IsGreaterThan,<br>IsGreaterThanOrEqual,<br>IsLessThan,<br>IsLessThanOrEqual,<br>Contains,<br>NotContains,<br>StartsWith,<br>NotStartsWith,<br>ContainsAllTheWords,<br>ContainsAnyOfTheWords,<br>ContainsNoneOfTheWords,<br>MatchThePattern,<br>DoesNotMatchThePattern | Field,<br>ActiveObjectSelection,<br>Formula,<br>Constant | Simple Value Field,<br>Value |
Single Object Field | Field,<br>ActiveObjectSelection,<br>Formula | IsEqualTo,<br>IsNotEqualTo,<br>IsAnyOf,<br>IsNoneOf | Field,<br>Lookup,<br>ActiveObjectSelection,<br>Formula | Single Object Field,<br>Multiple Object Group |
Multiple Object Group | Field,<br>ActiveObjectSelection,<br>Formula | IsAnyOf | Field,<br>Lookup,<br>ActiveObjectSelection,<br>Formula | Multiple Object Group |
Multiple Object Group | Field,<br>ActiveObjectSelection,<br>Formula | ForAll,<br>Exist,<br>NotExist | Expression | Expression |
Simple Value Field,<br>Single Object Field,<br>Multiple Object Group | Field,<br>ActiveObjectSelection,<br>Formula | HasNoValue,<br>HasValue | | |
Boolean Value | BooleanExpression | | | |


For a description of the types of operands, see Operands. For a description of the operators, see [Condition Syntax Structure](condition-syntax-structure.md).