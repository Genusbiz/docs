# Set a Field's Value

Use this effect to set the value for a field in one of your data sources equal to a specified value, a value from another field or a calculated value. This effect is commonly used in [Rules](../../../../data/object-class/modify-an-object-or-identifier-domain/rules.md) to set the value for a field based on the value for another field. For example, when a user enters a *ZIP code*, the *State field* is automatically populated with the correct state.

1.  In the **Name** box, optionally type a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
2.  In the **Description** box, optionally type a description.
3.  In the **Field** box, select the field whose value you want to set. To set a constant value, collect a value from another field or compute a value using a formula, click **Value** and do one of the following:

*   To enter a constant value, click the first item in the **Value** box (**Enter a text**, **Enter a number** etc.), or press **F2**, and then enter a value. If the field is an outbound reference to a code domain, the list contains one item for each code. In the list, click the code to use.
*   To select a field from one of your data sources, in the **Value** box, click **Select field or group**. In the **Select Field or Group** dialog box, select a field with the same data type as the field whose value you want to set.
*   To enter a formula, in the **Value** box, click **Enter a formula**. See the article [Enter a Formula in the Formula Editor](../../../../common-concepts/advanced-expressions/formula-editor.md) for more information.

If the selected field contains text data, you can compose a text by typing text, and inserting formulas and fields from your data sources. The text can contain line breaks and sections used for collecting data from repeating groups. To compose a text, click **Composed Text**. See the article [Generate Dynamic Values for Text Fields](../../../../../defining-the-application-model/action-orchestration/actions/effects/mk:@MSITStore:D:/WSRoot/Genus/Evolution/doc/Help/generate-dynamic-values-for-text-fields.md) for more information.

See Also

*   [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md)