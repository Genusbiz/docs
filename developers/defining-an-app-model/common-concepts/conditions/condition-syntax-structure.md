# Condition syntax structure

A condition evaluates to a logical true value or logical false value, according to the structure described below.

Condition - _is defined as one of the following_ |                                                 |
-------------------------------------------------|-------------------------------------------------|
Group                                            |                                                 |
Condition LogicalOperator Condition              | Two conditions separated by a logical operator. |
Expression                                       |                                                 |


Group - _is defined as_                          |                                                 |
-------------------------------------------------|-------------------------------------------------|
( Condition )                                    | A condition inside parentheses.                 |

LogicalOperator - _is defined as one of the following (listed in order of precedence)_ |           |
-------------------------------------------------|-------------------------------------------------|
And                                              | Logical AND used between expressions to evaluate the combined result. Evaluates to true only if both expressions are true, otherwise the result is false. |
Or                                               | Logical OR used between expressions to evaluate the combined result. Evaluates to true if either of the expressions are true, otherwise the result is false. |


Expression - _is defined as one of the following_ |                                                |
-------------------------------------------------|-------------------------------------------------|
Operand UnaryOperator                            | One operand and an operator                     |
Operand BinaryOperator Operand                   | Two operands connected by an operator.          |
Operand SetOperation                             | One operand and a set operation                 |
BooleanExpression                                |                                                 |


_Not all combinations of operands and operators are applicable._


BooleanExpression - _is defined as_              |                                                 |
-------------------------------------------------|-------------------------------------------------|
Formula (= True / False)                         | A formula that returns a boolean value.         |


Operand - _is defined as one of the following_   |                                                 |
-------------------------------------------------|-------------------------------------------------|
Field                                            |                                                 |
Lookup                                           |                                                 |
ActiveObjectSelection                            |                                                 |
Formula                                          |                                                 |
Constant                                         |                                                 |


Field - _is defined as_                          |                                                 |
-------------------------------------------------|-------------------------------------------------|
A field in a data source                         | For example: Activity.Estimate, Invoice.Amount  |


Lookup - _is defined as_                         |                                                 |
-------------------------------------------------|-------------------------------------------------|
Read from a data source using a Condition        |                                                 |


ActiveObjectSelection - _is defined as_          |                                                 |
-------------------------------------------------|-------------------------------------------------|
An [active object selection](../active-object.md) | For example: Employees.Single Selected Object.Actual Sales.Selected Objects |


Formula - _is defined as_                        |                                                 |
-------------------------------------------------|-------------------------------------------------|
An [advanced expression](../advanced-expressions.md) | For example: Activity.Estimate * 1,5        |


Constant - _is defined as_                       |                                                 |
-------------------------------------------------|-------------------------------------------------|
A constant value                                 | For example: 123, "Yellow", "01.01.2001", etc.  |


SetOperation - _is defined as_                   |                                                 |
-------------------------------------------------|-------------------------------------------------|
SetOperator Expression                           | An expression preceeded by a set operator.      |


SetOperator - _is defined as one of the following_ |                                               |
-------------------------------------------------|-------------------------------------------------|
ForAll                                           | Set operator which evaluates an expression for the members of a set. Evaluates to true if the expression evaluates to true for every member of the set. |
Exists                                           | Set operator which evaluates an expression for the members of a set. Evaluates to true if the expression evaluates to true for any member of the set. |
NotExists                                        | Set operator which evaluates an expression for the members of a set. Evaluates to true if the expression evaluates to false for every member of the set. |


UnaryOperator - _is defined as one of the following_ |                                             |
-------------------------------------------------|-------------------------------------------------|
HasAnyValue                                      | Evaluates to true if the operand contains at least one value. |
HasNoValue                                       | Evaluates to true if the operand contains no values. |


BinaryOperator - _is defined as one of the following_ |                                                                                                 |                                  |
------------------------------------------------------|-------------------------------------------------------------------------------------------------|----------------------------------|
IsEqualTo                     | Evaluates to true if the first operand (1) is equal to the second operand (1).                                          |                                  |
IsNotEqualTo                  | Evaluates to true if the first operand (1) is not equal to the second operand (1).                                      |                                  |
IsGreaterThan                 | Evaluates to true if the first operand (1) is greater than the second operand (1).                                      |                                  |
IsGreaterThanOrEqual          | Evaluates to true if the first operand (1) is greater than or equal to the second operand (1).                          |                                  |
IsLessThan                    | Evaluates to true if the first operand (1) is less than the second operand (1).                                         |                                  |
IsLessThanOrEqual             | Evaluates to true if the first operand (1) is less than or equal to the second operand (1).                             |                                  |
IsAnyOf                       | Evaluates to true if the first operand (1) is found in the second operand (n).                                          |                                  |
IsNoneOf                      | Evaluates to true if the first operand (1) is not found in the second operand (n).                                      |                                  |
Contains                      | Evaluates to true if the text in the second operand (1) is found in the text of the first operand (1).                  | Text operator                    |
NotContains                   | Evaluates to true if the text of the second operand (1) is not found in the text of the first operand (1).              | Text operator                    |
StartsWith                    | Evaluates to true if the first operand (1) starts with the text of the second operand (1).                              | Full Text operator               |
NotStartsWith                 | Evaluates to true if the first operand (1) does not start with the text of the second operand (1).                      | Full Text operator               |
ContainsAllTheWords           | Evaluates to true if all the words of the second operand (n) are found as the start of words in the first operand (1).  | Full Text operator               |
ContainsAnyOfTheWords         | Evaluates to true if any the words of the second operand (n) are found as the start of words in the first operand (1).  | Full Text operator               |
ContainsNoneOfTheWords        | Evaluates to true if none the words of the second operand (n) are found as the start of words in the first operand (1). | Full Text operator               |
ContainsAllWords(Exact)       | Evaluates to true if the first operand (1) contains all of the words of the second operand (n).                         | Full Text operator               |
ContainsAnyOfTheWords(Exact)  | Evaluates to true if the first operand (1) contains any of the words of the second operand (n).                         | Full Text operator               |
ContainsNoneOfTheWords(Exact) |Evaluates to true if the first operand (1) does not contain any of the words of the second operand (n).                  | Full Text operator               |
MatchThePattern               | Evaluates to true if the pattern defined in the second operand (1) is found in the first operand (1).                   | Regular expression text operator |
DoesNotMatchThePattern        | Evaluates to true if the pattern defined in the second operand (1) is not found in the first operand (1).               | Regular expression text operator |
