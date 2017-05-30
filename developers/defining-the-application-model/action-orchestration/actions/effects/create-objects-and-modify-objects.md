## Create Objects and Modify Objects

Use these effects to create new objects or modify existing objects in a data source.

*   In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
*   In the **Description** box, optionally enter a description.
*   In the **Data Source** box, select the data source to create or modify

When you have selected a data source, all fields and groups within that data source are displayed in the **Data Source** list. For any group, you can add other groups, if they have fields referencing the group.

For each field or group you can assign a value, either by typing a formula or a constant value, or by assigning a value from a field located in another data source.

For information on committing changes, adjusting transaction timeouts, running with elevated privileges, and supressing user notifications see [Scope](../blocks/scope.md).


## Add a Group

Additional groups can be added to any group on any level. The group you are adding, must contain a field referencing the group you are adding it to. By adding groups, it is possible to create or modify a complex structure in one step.

To add a group, right-click the group you want to add a group to, and click **Add Group**, and then in the **Group** list select a group. The groups that are added must also be assigned values and filtered. See below for more information.



## Assign a Value to a Group

If a group contains multiple objects, you can bind the group to a group located in another data source. You would typically do this if you are creating or modifying multiple objects based on objects in another data source. For example, if you are filling out XML data for a schema containing a repeating group, where the data should be extracted from another data source containing multiple objects, you would bind the repeating group in the schema to the group in the other data source. You are then allowed to assign values from fields located in the bound group to fields located in the repeating group in the schema.

To bind a group, right-click the group, and then in the shortcut menu, click **Set Value From Field**. In the **Select Field or Group** dialog box, select the group you want to bind to. If you are creating objects, one object would be created for each object in the bound group. To limit the number of objects created, you would specify a data filter for the bound group. If you are modifying objects, you need to provide a data filter used to pair objects in the data source you are modifying with objects in the bound group. Filtering of data is described below.

However, you do not need to bind a group containing multiple objects. For example, if you want to set the same value for a field for all objects.



## Assign a Value to a Field

You can assign a value to a field either by typing a formula or a constant value, or by assigning a value from a field located in another data source.

To assign a value from a field located in another data source, right-click the field, and then in the shortcut menu, click **Set Value From Field**. In the **Select Field or Group** dialog box, select the field you want to assign a value from. You can only select fields located in groups containing a single object, or fields located in the group bound to the group for the field. That is, if you are creating multiple objects based on objects in another data source, you can select fields from the bound group since the assignment are repeated for each object in the bound group.

To assign a value by typing a formula or a constant value, right-click the field, and then in the shortcut menu, click **Properties**. In the **Value** box, do one of the following:

*   To enter a constant value, click the first item in the list (**Enter a text**, **Enter a number** etc.), or press **F2**, and then enter a value. If the field is an outbound reference to a code domain, the list contains one item for each code. In the list, click the code to use.
*   To compose a text, with dynamic values, click **Compose Text**. For more information, see [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields").
*   To enter a formula, in the list click **Enter a formula**. See the article [Enter a Formula in the Formula Editor](../../../common-concepts/advanced-expressions/formula-editor.md) for more information.
*   To enter a conditional formula, in the list click **Use a conditional formula**. See the article [Define a Conditional Formula](../../../define-a-conditional-formula.md "Define a Conditional Formula") for more information.



## Filter Data for a Group

Applies if a group is bound to a group in another data source.

If you are creating new objects, one object would be created for each object in the bound group. To limit the number of objects created, you would define a data filter for the bound group.

If you are modifying objects, you need to provide a data binding to pair objects in the data source you are modifying, with objects in the bound group. For example, if you are updating employee data with data received in an XML, where an employee is identified by an employee number, you would define a data binding such as:

*Employee.Employee Number = EmployeeSchema.Employee.EmployeeNumber*

Data binding can be defined when modifying objects with values from other data sources, in all other cases, a data filter can be defined.

To define a data filter or data binding, do the following:

1.  Right-click the group, and then in the shortcut menu, click **Properties**.
2.  In the **Data Filter** or a **Data Binding** box, click **Modify**.
3.  In the **Filter Data** dialog box, click **Select objects which meet the following condition**. Follow the instructions in the [step-by-step procedure](../../../common-concepts/conditions.md) on how to define a condition.



## Sort Data in a Group

In some cases, the sort order for the objects within a group is important. For example if you are creating objects based on a schema data source where the XML data are returned to an external client or application which expects that data appears in a certain strict order.

To define a sort order for a group, do the following:

1.  Right-click the group, and then in the shortcut menu, click **Properties**.
2.  In the **Sort** box, click **Modify**.
3.  In the **Sort by** list, click a field to sort by.
4.  Click **Ascending** or **Descending** for the sort order.
5.  To sort by an additional field, click a field in the **Then by** list.



## Advanced Options

**Transaction Scope**

Applies to data sources of type object.

A transaction is a unit of work used to ensure data consistency and integrity. If a transaction is successful, all of the data modifications performed during the transaction are committed and made permanent.

By default, all objects are saved in a single transaction.

If you choose to save objects in separate transactions, select the **Stop if an object could not be saved** check box to prevent that successive objects are saved if a transaction fails. The drawback when saving objects in separate transactions, is that each transaction is committed immediately, and a transaction can not be rolled back if a subsequent transaction fails.

**Transaction Timeout**

Applies to data sources of type object. If the effect is run from an interactive client, the maximum timeout is limited to 5 minutes.

To specify a custom timeout, click **Allow transactions to run for** , and then type the maximum number of minutes transactions are allowed to run.

**Security Options**

Select the **Run with Highest Privileges** check box to run the effect with elevated permissions. The effect will be run with administrator rights, which is useful to ensure that the action can be performed disregarding any lack of permissions of the user. For example, this can be used by a task to create or modify a log object that the user should only have read access to.

 ** **

Enable User Notifiation Contstraints**

Enable User Notification Constraints is available for effect in task and data sources of the type Object. To disable evaluation of the [Uniqueness Constraints](../../../object-class/modify-an-object--or-identifier-domain/data-integrity.md) and [Consistency Constraints](../../../object-class/modify-an-object--or-identifier-domain/data-integrity.md), click to clear** Enable User Notification Constraints. Only constraints of the type Notify user and ask for confirmation to proceed will be disable.  

