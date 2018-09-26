# Operands

The operands are key elements to build [expressions](groups-and-expressions.md), and there are many different types of operands to choose from. Which operands are available depends on the context in an expression it is used. For a simplified overview of the possible combinations of operands and operators, see [Groups and Expressions](groups-and-expressions.md). For ? more complete and technical description see [Condition Syntax Structure](condition-syntax-structure.md).

The different operand types are described below. For further information on how to use them in the [Condition Editor](condition-editor/index.md), see [Defining Operands](condition-editor/defining-operands.md).

## Field or Group
A field or a group can be selected from the data sources which are available in the current context. The cardinality of the selected item is determined by the cardinality of the data source and the type of field or group that is selected.

A field represents a simple value or a reference to a single object, and a group represents a single object or a [bag](../advanced-expressions/collection-types.md) of objects.

Data Source Cardinality | Selected Item           | Result Cardinality | Description                     |
------------------------|-------------------------|--------------------|---------------------------------|
One                     | Field                   | One                | Simple value or single object   |
One                     | Group (Cardinality=One) | One                | Single object                   |
One                     | Group                   | Many               | Bag of objects                  |
Many                    | Field                   | Many               | Bag of simple values or objects |
Many                    | Group (Cardinality=One) | Many               | Bag of objects                  |
Many                    | Group                   | Many               | Bag of objects                  |


## Active User Account

In most application models, the user accounts are associated with an object class, which might be called something like; Person, Employee, User, External System, or Member. It is possible to access the object associated with the currently signed in user account by using the **Active User Account**. This is useful to retrieve only the data that is relevant for the active user, or to enable certain functions only if the signed in user is accessing the object associated with the account.

The application model supports several account types at the same time, for example the application requires employees, customer contacts and external systems to sign in. In this case all the account types are available as Active User Account operands.

For example:

*Employee = Active User Account(Employee)*

## Active Object Selection

A condition defined inside a [Table](../../user-interface/tables/index.md) or a [Form](../../user-interface/forms/index.md) can access data sources and fields based on [Active Object Selection](../active-object.md), which are objects selected by the user in the user interface. This is useful to create interactive functionality where for example visibility of certain elements or enabling of buttons, depend on specific properties of the selected object(s) in a table or a list.

For example:

In a form there is a list of applicants and hired employees, and a button "Hire Applicant".

The button is enabled if a condition is fulfilled.

*Applicants.SingleSelectedObject.State = EmployeeState.Applicant*

The Active Object Selection consists of three elements:

*   **Group**: A data source or a group in a data source. This is the group of objects of which zero, one, or more objects can be selected in the user interface.
*   **Selection**: **Single Selected Object** defines that the active object selection is only valid if one object in the group is selected. **Selected Objects** defines that the active object selection is valid if one or more objects in the group are selected.
*   **Field**: A field (or a group) in the data source or group specified in the **Group** box.

The number of objects found in an Active Object Selection depends on the combination of the specified selection and the [cardinality](../../../../terminology.md) of the specified field.

## Code Domain

A code domain contains a set of code values that can be used directly as an operand in an expression.

For example:

*Employee.State = EmployeeState.Applicant*

*Employee.Gender = Gender.Female*

## Lookup

A lookup is used to find a set of objects based on a separate condition, and the result is then used as an operand in the condition.  

For Example:

*// find orders where the responsible is no longer employed*

*Orders.Responsible = Lookup Employee where (Employee_Lookup.State = EmployeeState.Inactive)*

## Time Function

A condition may use fields containing time, and in most cases you do not want to express comparisons to constant dates. It is more useful to express comparisons relative to the current time, or relative to another date or time in the application model.

A time function consists of a Time Reference and a list of Time Offsets. The time reference is the starting point for the time function, and the time offsets are then applied in the given sequence to produce a result.

A time offset does one of the following:

*   Shifts a number of periods (year, month, week, day, etc) back or forward
*   Shifts to the start or end of a period (year, month, week, day, etc)

For example:

*Time Reference: Today*

*Time Offset 1: Shift 14 Days Back*

*Time Offset 2: Shift to First in Month*

This can also be expressed as a formula:

*CalendarTime.now(TimeResolution.day).addDays(-14 ).firstInMonth*

## Formula

A formula can contain simple calculations or advanced functions.

For example:

*Box.Volume = box.width * box.length * box.height*

*Summary.MaxAmount = transactions.amount.asOrderedSet().sort(true).last*

For more information on formulas, see [Advanced Expressions](../advanced-expressions/index.md).

## Constant 

A constant can be used as an operand when the data type for the other operand is a simple value, like a number, a date, or a text.

For example:

*Person.Age >=18*

*Order.DiscountCode = "XMAS2014"*

*Vehicle.RegisteredDate < 01.01.2000*