# Run a Program

With this task you can run any script, program or document.

1.  In the **Name** box, optionally type a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
2.  In the **Description** box, optionally type a description.
3.  In the **Program** box, type the location and the name for the program, file or Internet resource you want to run. You can generate dynamic values for the location and file name by [inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") as part of the name. The file location can also include [environment variables](../../../../user-interface/forms/using-environment-variables-as-part-of-a-file-location-in-effects.md "Using Environment Variables as Part of a File Location in Effects").
4.  If the program requires any parameters, type the parameters in the **Parameters** box. You can generate dynamic values for the parameters by [inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields").
5.  Sometimes, a program need to use files from other locations. In the **Start in** box, you can enter the name of the folder where these files are located.
6.  If you want to open a file or Internet resource, select the **Run as Command** check box.
7.  If you do not want to display the the program window when the program is run, select the **Hide program window** check box. For example, if you run a batch file (*.bat) you can hide the **Command** window.
8.  To prevent that succeeding effects are executed before the program has finished, select the **Wait for the program to complete** check box. This option is not available if the program is run as a command.
9.  Choose how to respond to the result of running the program. If the execution always should be considered successful, click **Ignore the result**. To specify return codes and/or program output indicating that the program has run successfully, click **The program has run successfully if**. Select the appropriate check box to enter return codes and/or program output text. If you enter more than one return code, separate the values with semicolon, **;**. The effect will report an error if an unexpected code or program output is returned, and succeeding actions will not run.
10.  You can save the return code, the output and the error messages reported by the program in one of your data sources. This information can be used when executing succeeding actions. Note that the data source used for saving this information only can contain one object. In the **Return Code** box, select a field for saving the return code. The data type for the field has to be integer. In the **Program Output** box, select a field with data type string for saving the program output (standard output). Note that not all programs generate output. In the **Program Error** box, select a field with data type string for saving any error messages reported by the program (standard error).

See Also

*   [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md)
*   [Using Environment Variables as Part of a File Location in Effects](../../../../user-interface/forms/using-environment-variables-as-part-of-a-file-location-in-effects.md)