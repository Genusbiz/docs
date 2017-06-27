# Specifying a Condition-Based Data Validation

1.  In the **If this condition is true** boxes enter the [condition](../../../common-concepts/conditions.md "Conditions") which expresses what is regarded as erroneous data for the Property or Field.
2.  Choose if the validation is a constraint or a check. A constraint enforces rules for maintaining data integrity. Any attempt to save an object which violates the constraint will be denied. A check will inform the user, but does not prevent the user from saving the object. That is, constraints are to be satisfied, while checks only express a preference of some kind.
3.  If you want to display a message to the end user when the condition is satisfied, select the **Display a message** check box and type a text in the message box.
4.  To display the message in a dialog box, select the **Show in dialog box** check box.
5.  To display the message in the screen tip, select the **Show in screen tip** check box.
6.  To mark the visual control associated with the property with a flag, select the **Display flag** check box.
7.  By default the validation is enabled. To disable the validation, click to clear the **Enabled** check box.

The data validation is added to the end of the list displaying data validations for the Property or Field. Data validations are evaluated in the order shown. Note that constraints are evaluated before checks. If the condition for a data validation is satisifed, succeeding data validations will not be evaluated. To change the evaluation order for a data validation, click the data validation in the list, and then click **Move Up** or **Move Down**.