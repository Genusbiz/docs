## Add a Local Object Data Source

Use a local object as a temporary storage of data when running actions. A local object cannot be populated by using a data filter, but is populated by effects such as [Create a data aggregate](../actions/effects/create-a-data-aggregate.md), [Create object(s)](../actions/effects/create-objects-and-modify-objects.md), [Import data](../actions/effects/import-data.md) and [Open a form](../actions/effects/open-a-form.md). For example, you can use a local object for storing user response during the execution of a Task.

To add a local object, do the following:

1.  Add a data source of type Local Object. For more information see [Add a Data Source](add-a-data-source.md).
2.  Add fields to the data source. For more information, see below.

A group is defined by:

*   **Name**. The name of the group. The name must be unique within the parent group.
*   **Repeating**. Determines whether data for the group can occur more than once.
*   **Cannot be blank**. Determines whether the group must contain a value.

Note that for the top-level group you can only specify a name. **Repeating** and **Cannot be blank** is defined in the property dialog for the data source.

A field is defined by:

1.  **Name**. The name of the field. The name must be unique within the parent group.
2.  **Screen Tip**. Text displayed when the user hovers the mouse over the field.
3.  **Data Type**. The kind of data the field can store.
4.  **Data Interpretation.** The meaning of the value in the field. E.g. a string field is interpreted as an E-mail address.
5.  **Complex Association.** The field can refer to different types of objects. See [Complex Association Data Interpretation](../../forms/views/desktop-controls/tabular-controls/complex-association-data-interpretation-for-a-property.md "Complex Association Data Interpretation for a Property").
6.  **Data Calculation**. The initial value the field has when an object is created.
7.  **Data Filter**. A condition restricting valid values for the field. Only available for complex data types.
8.  **Cannot be blank**. Determines if the field must contain a value.
9.  **Read Only**. Determines if the field value is possible to edit.
10.  [**Data Validations**](../../object-class-property/modify-an-object-class-property/data-validation.md).

To change the order for a field or group, click the field or group and press the key combination **CTRL+Up** or **CTRL+Down**.