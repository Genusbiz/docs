## Data Validation

Use data validation to ensure that values entered for a Property satisfies certain requirements for correctness and accuracy.

Several types of data validation are supported:

*   **Data type validation**. The value for a Property has to be of a particular type, such as a whole number or a date.
*   **Required value**. The value for a Property can not be blank.
*   **Condition-based validation**. Defined by describing a condition which expresses what is regarded as erroneous data. For example that the start date for a project not can occur after the end date.

In this article

* * *

*   [Data Type Validation](#data-type-validation)

*   [Make a Property Required](#make-a-property-required)

*   [Add a Condition-Based Data Validation](#add-a-condition-based-data-validation)

* * *

## Data Type Validation

Data type validation for a property is performed by validating a value against the [data type and data interpretation](general-settings.md "General Settings") for the property. This type of validation will always be performed.



## Make a Property Required

1.  Select the Property for which you want to require a value.
2.  Right-click the Property, and then on the shortcut menu, click **Open**.
3.  Click the **Data Validation** tab.
4.  Click to clear the **Allow blank value** check box. If the **Allow null in database column** check box is cleared, the **Allow blank value** check box will automatically be cleared and disabled.



## Add a Condition-Based Data Validation

1.  Select the Property for which you want the validation to occur.
2.  Right-click the Property, and then in the shortcut menu, click **Open**.
3.  Click the **Data Validation** tab.
4.  Click **Add**.
5.  Follow the instructions in the [step-by-step procedure](../../tables/specifying-a-conditionbased-data-validation.md "Specifying a Condition-Based Data Validation") on how to define a condition-based data validation.

