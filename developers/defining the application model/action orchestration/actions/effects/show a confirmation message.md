## Show a Confirmation Message

Displays a modal dialog box that contains a brief confirmation message and two or three buttons giving the user a choice to respond to the message. The button chosen by the user can be stored as a boolean or integer value that can be stored in a field from one of your data sources.

1.  In the **Name** box, optionally type a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
2.  In the **Description** box, optionally type a description.
3.  In the **Message** box, type a message. You can generate a dynamic message by [inserting fields from your data sources](../generate dynamic values for text fields.md "Generate Dynamic Values for Text Fields") as part of the text.
4.  Select the **Exit Task on cancel** check box if you do not want to execute suceeding effects if the user chooses the **Cancel** or **No** button in the dialog box.
5.  To store which button chosen by the user, click **Set a fields value equal to the exit code**. You can either store the response as a boolean value or an integer value. See the article [Dialog Box Exit Codes](../../../../dialog box exit codes.md "Dialog Box Exit Codes") for an overview of exit codes.
6.  Select which buttons that should appear in the dialog box.
7.  In the **Default Button** list, optionally select a default button. The default button gets clicked when the user presses the ENTER key.

See Also

*   [Dialog Box Exit Codes](../../../../dialog box exit codes.md)
*   [Show a Message](show a message.md)