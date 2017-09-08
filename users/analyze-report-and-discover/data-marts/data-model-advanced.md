# Advanced data-model concepts


## Add a new field to a Data Source

A data source in a data-mart model is based on an [Object Class](../../../../developers/defining-an-app-model/data/object-class/index.md) defined in your Directory, and have fields in the data source that corresponds to [properties](../../../../developers/defining-an-app-model/data/object-class-property/index.md "Object Class Property") in the Object Class. A data source of the type **Local Object**, have all the fields defined locally.

To add a new field, do the following:

1.  In the **Data Sources** list, click the data source of your choice.
2.  In the **Task Pane**, click **Add a Field**.

### Field properties

| Property                         | Description                                          |
|----------------------------------|------------------------------------------------------|
| Name                             | Display name for the field.                          |
| Type                             | A field can be defined as a **Data** or **Function** field. Values for fields of type **Data** can be modified by users in your form or table. Note that changes made to fields of type **Data** not are written to the database, but can be accessed as long as your form or table is open. For example, you could add a field of type **Data** to collect various input parameters from users, and then use these parameters in other calculations. Values for fields of type **Function** are calculated using a formula or an aggregated measure. |
| Data Type                        | Defines the kind of data the field can hold. Data types are categorized in simple- and complex data types. Simple data types include types such as String, Integer and Calendar Time. Complex data types are defined by [Object Classes](../../../../developers/defining-an-app-model/data/object-class/index.md) in your Directory. |
| Data Size                        | The maximum number of characters a field with data type String can hold. |
| Data Interpretation              | Defines how to interpret data of a given type. For example, string data can be interpreted as an e-mail address or a file URL. Most data types have a default interpretation, that is, data are interpreted based on the data type itself. |
| Significant Decimals             | Applies to properties with data type Real. Defines the number of decimals used when comparing floating-point data during concurrency control. Concurrency control is performed when data for an object is updated. |
| Data Encoding                    | Determines how to encode binary data. Supported binary to text encoding schemes are Base64. |
| Data Calculation                 | Data calculation lets you define a default value, a formula or an aggregated measure.<br><br><ul><li>**A default value** for a field is calculated when an object is created. For example, you may want to set the *state* for a *customer* to *Active* by default when a new *customer* is created. For more information on how to specify a default value, see the article [Specifying a Default Value or Formula]</li><li>../../data/object-class-property/modify-an-object-class-property/data-calculation.md "Specifying a Default Value or Formula"). Applies to fields of type **Data**.</li><li>**A formula** is calculated whenever data are read or modified. For example you could calculate the deviation between actual and budget figures. For more information on how to specify a formula, see the article [Specifying a Default Value or Formula](../../../../developers/defining-an-app-model/data/object-class-property/modify-an-object-class-property/data-calculation.md "Specifying a Default Value or Formula"). Applies to fields of type **Data** and **Function**.</li><li>**An aggregated measure** is built by changing the granularity on specific dimensions and aggregating up a measure along these dimensions. For example, in a data source based on the Object Class *Customer*, you could calculate *total sales year to date* or *outstanding debt*. For more information on how to specify an aggregate measure, see the article [Specifying an Aggregated Measure](../../../../installation-and-configuration/configure-and-maintain-genus-server/specifying-an-aggregated-measure.md "Specifying an Aggregated Measure"). Applies to fields of type **Function**.</li></ul> |
| Data Validation                  | Use data validation to ensure that values entered for a field satisfies certain requirements for correctness and accuracy. In addition to data type validation, that is, the value for a field has to be of a particular type, such as a whole number or date, you can make a field required, add condition-based data validations and define restrictions on fields with a complex data type:<br><br><ul><li>**Make a field required**. Click to clear the **Allow blank value** check box.</li><li>**Add a condition-based data validation**. A condition-based data validation is defined by describing a condition which expresses what is regarded as erroneous data. For example that the start date for a project not can occur after the end date. In the **Data Validations** box, click **Modify**, and then in the **Data Validations** dialog box click **Add**. Follow the instructions in the [step-by-step procedure](../../../../developers/defining-an-app-model/data/object-class-property/modify-an-object-class-property/specifying-a-conditionbased-data-validation.md "Specifying a Condition-Based Data Validation") on how to define a condition-based data validation.</li></ul> |
| Screen Tip                        | Text displayed when the user hovers the mouse over a control bound to the field. |
| Case Conversion                   | Applies to fields with data type String. Determines if the text for the field is converted to uppercase or lowercase when displayed in a control. The converted value is stored if the user has access to modify the field. |
| Description                       | Documentation of the purpose and content of the field. |



## Customize a field bound to an object class property

Most property settings for fields which are bound to an [Object Class Property](../../../../developers/defining-an-app-model/data/object-class-property/index.md "Object Class Property") are inherited, and you are only allowed to modify the following properties:

*   **Default Value**. To specify a default value, in the **Data Calculation** section, select the **Override** check box.
*   **Allow Blank Value**. If the bound Property not requires a value, you are allowed to make the field required.
*   **Condition-Based Data Validations**. You can add any number of data validations. Note that data validations defined for a field are evaluated after data validations defined for the bound Property.






## Add a Link Table

Put article content here

