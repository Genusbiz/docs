## Data Calculation

Data Calculation is used to define a **default value**, a **formula** or an **RDBMS expression**.

*   A default value for a property is calculated when an object is created. For example, you may want to set the <span style="FONT-STYLE: italic">state for a <span style="FONT-STYLE: italic">customer to <span style="FONT-STYLE: italic">Active by default when a new <span style="FONT-STYLE: italic">customer is created.
*   A formula is calculated whenever data are read or modified. For example, you can calculate the <span style="FONT-STYLE: italic">age for a <span style="FONT-STYLE: italic">person.
*   An RDBMS expression is calculated when data are read. RDBMS expressions are typically used to calculate measures used when aggregating data.

The available data calculation options for a property depends on the settings for the type and data binding:

<table style="WIDTH: 100%">

<tbody>

<tr>

<td><span style="FONT-WEIGHT: bold; FONT-STYLE: italic">Data Binding / Type</td>

<td>**Data**</td>

<td>**Function**</td>

</tr>

<tr>

<td>**Unbound**</td>

<td>

None

Default

</td>

<td>Formula</td>

</tr>

<tr>

<td>**Bound**</td>

<td>

None

Default

Formula

</td>

<td>RDBMS Expression</td>

</tr>

</tbody>

</table>

Note that you can specify formulas for properties of type Data. This gives you the opportunity to store calculated values, for example to use for searching and in reports. It is however, important to be aware of a specific situation that may occur ff your formula uses properties from other object classes, or properties that are updated outside Genus, for example through a database interface. Since the formula is evaluated whenever the object is read, a user may see a value which is correctly calculated based on current values in the database. The calculated value is however, not stored to the database until the object is explicitly saved.


## Specifying a Default Value or Formula

*   To specify a default value, click **Default Value**, and then in the list, select how to calculate the default value.
*   To specify a formula, click **Formula**, and then in the list, select how to calculate the value.

<table style="WIDTH: 100%"></table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Option</th>

<th>Description</th>

<th>Available in Default Calculation</th>

<th>Available in Formula Calculation</th>

<th>Required Data Type and Interpretation</th>

</tr>

<tr>

<td>Active User Account Stamp</td>

<td>Assign a reference or the name of the currently signed in user account. This value can not be overwritten. If you want to assign a default value which the user can overwrite, click **Select Field or Group**, and then select a field from one of your Account Classes.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Account Class
*   Character or String

</td>

</tr>

<tr>

<td>Custom Id Generator</td>

<td>

Assign a unique id from an Identifier Domain when an object is created. Typically used for properties which represents a code used as part of the visual identification of an object, for example a department code. Note that if the default value for two or more properties are calculated based on an Identifier Domain, each property must calculate its default value based on a different Identifier Domain.

</td>

<td>Yes</td>

<td>No</td>

<td>

*   32-bit Integer (Sequential Counter or Pool)
*   Character or String (Pool)

</td>

</tr>

<tr>

<td>Enter a Conditional Formula</td>

<td>Calculate a value using a [conditional formula](../../define-a-conditional-formula.md "Define a Conditional Formula"). A conditional formula gives you the opportunity to define one or more formulas with a conditional statement. The conditional statement is used to determine which formula to apply when calculating the value.</td>

<td>No</td>

<td>Yes</td>

<td>

*   Any data type

</td>

</tr>

<tr>

<td>Enter a Formula</td>

<td>Calculate a value using a [formula](../../common-concepts/advanced-expressions/formula-editor.md) which combines functions, references to other fields, static values (such as a number) and mathematical operators.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Any data type

</td>

</tr>

<tr>

<td>Enter a Number</td>

<td>Assign a constant numeric value.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Numeric data types

</td>

</tr>

<tr>

<td>Enter a Text</td>

<td>Assign a constant text value.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Character or String
*   Binary data types with interpretation Free Text

</td>

</tr>

<tr>

<td>Enter a Time Function</td>

<td>Assign a date and time relative to the current date and time.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Date
*   Date and Time
*   Integer data types with a date interpretation.

</td>

</tr>

<tr>

<td>GUID</td>

<td>Assign a [Globally Unique Identifier](../../../../terminology.md). If the data type for the property is Character or String, the property must be at least 32 characters long. If the data type for the property is GUID, this option is only available if the property is defined as the primary key in the Object Class.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Character or String
*   GUID

</td>

</tr>

<tr>

<td>Internal Id Generator</td>

<td>Assign a unique numeric id to a property defined as primary key in an Object Class.</td>

<td>Yes</td>

<td>No</td>

<td>

*   32-bit Integer

</td>

</tr>

<tr>

<td>Look Up Objects</td>

<td>Assign an object based on a condition. Not available if the interpretation refers to a Code Domain. Members for Code Domains are expanded in the list. To assign a specific member, click the member in the list.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Any data type with a complex interpretation.

</td>

</tr>

<tr>

<td>Now</td>

<td>Assign the current date and time.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Date
*   Date and Time
*   Integer data types with a date interpretation

</td>

</tr>

<tr>

<td>Select a Date</td>

<td>Assign a specific date and time.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Date
*   Date and Time
*   Integer data types with a date interpretation

</td>

</tr>

<tr>

<td>Select Field or Group</td>

<td>Assign a value from another field.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Any data type

</td>

</tr>

<tr>

<td>Time Stamp</td>

<td>Assign the current date and time. This value can not be overwritten. If you want to assign a default value which the user can overwrite, select the option **Today**, **Now**, **Enter a Time Function** or **Select a Date**.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Date
*   Date and Time
*   Integer data types with a date interpretation

</td>

</tr>

<tr>

<td>Today</td>

<td>Assign the current date.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Date
*   Date and Time
*   Integer data types with a date interpretation

</td>

</tr>

<tr>

<td>True / False</td>

<td>Assign a boolean value.</td>

<td>Yes</td>

<td>Yes</td>

<td>

*   Integer data types with interpretation Boolean.

</td>

</tr>

</tbody>

</table>



## Entering an RDBMS expression

Click **RDBMS Expression**, and enter a valid RDBMS expression returning data of the same data type as specified for the property. An expression is a combination of constants, SQL functions, column names and SQL operators. Please refer to your database vendor documentation for more information on how to write an expression.

If the expression contains references to columns located in other tables, you can use a Class Connection to access the data. In the **Placeholder Data Source** list, select the Class Connection to use. Columns located in the last junction for the the Class Connection, must be prefixed with a question mark and a period, "**?.**". Columns located in any other junction must be prefixed with a question mark, a negative offset indicating the relative position of the junction to the last junction, and a period. For example, "**?-1**.".

For example, if an Object Class contains data for <span style="FONT-STYLE: italic">sales price in different native currencies, you may want to convert the <span style="FONT-STYLE: italic">sales price to a common currency. In order to do this, you need to use a Class Connection which connects your <span style="FONT-STYLE: italic">sales data with an Object Class containing <span style="FONT-STYLE: italic">exchange rates, where the Object Classes are connected by currency and date:

<span style="FONT-STYLE: italic">?-1.sales_price * ?.exchange_rate

Note that properties using RDBMS expressions with a placeholderdata source, can only be used in contexts where SQL queries can be executed. For example, such a property cannot be used to [define the display name for an object class](../../object-class/modify-an-object--or-identifier-domain/display.md).

