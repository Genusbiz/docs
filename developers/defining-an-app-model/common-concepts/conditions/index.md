# Conditions

A condition consists of comparisons which evaluates to a TRUE or FALSE value. A comparison states a logical relationship between two values, for example *Person.Name = "Peter Keating"*, or *100 > 200*. A condition is often a logical statement about the state or existence of an object, or the relationship between objects.

Conditions are used extensively throughout the application model. Some examples of usages are:


**Data filter for data sources in Form, Tables, and Action Orchestration** 

The condition is applied when data is read into the data source, and only objects which satisfies the condition is added. Data filtering is available on many different levels; for example directly on a data source in a form or a table, on controls in a form or a cell in a table to control available values in a drop down, in a read object effect, in a create object effect, etc.


**Conditional visibility, enabling, formatting in forms and tables**

Controls in forms and columns/rows in tables can be enabled, set visible, and formatted if certain conditions are fulfilled.


**Control flow in action orchestration**

Decision blocks in tasks, web services, rules, etc. are only executed if the condition is fulfilled.


**Conditional formula**

Assignment of values can be dependent on conditions, which allows for an if-elseif-else like mechanism.


**Advanced search**

Conditions are used to give the user powerful and flexible search possibilities.