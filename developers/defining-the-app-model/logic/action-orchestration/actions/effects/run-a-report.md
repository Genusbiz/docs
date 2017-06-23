# Run a Report

Use this effect to populate a report data source with data. This is useful when using reports in action orchestration, and data filtering is not possible when defining the data source, at publication, or when calling a sub task, e.g. due to a combination of iterations and data source cardinality.

To run a report , do the following:

1.  In the **Name** box, optionally type a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
2.  In the **Description** box, optionally type a description.
3.  Click the **General** tab
4.  In the Report box select a data source. Only data sources of type **[Report**](../../../../../../users/analyze-report-and-discover/report.md) are available.
5.  In the Data Filters table, data sources for the published filters of the selected report are listed. Specify a data filter by selecting the data source and clicking **Modify**. The data sources are populated according to the data filters when the selected task is executed.
6.  If the user should to be able to change the data filters before running the report, click the User Interaction tab
7.  Select **Promt users to filter data**. This option is only available if the effect is included in a Task which not is constrained to run on the Application Server.
8.  In the Dialog Title and **Dialog Prompt** box, type a title and a prompt. You can generate dynamic values for the title and prompt by [inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields").
9.  The Data Sources table lists the data sources that are available to the user. To add or remove data sources from the list, click **Modify**.
10.  Select the Exit Task on cancel check box if you do not want to execute suceeding effects if the user chooses the **Cancel** button in the dialog box.
11.  To store which button chosen by the user, click Set a fields value equal to the exit code. You can either store the response as a boolean value or an integer value. See the article [Dialog Box Exit Codes](../../../../../dialog-box-exit-codes.md "Dialog Box Exit Codes") for an overview of exit codes.
12.  Select which buttons that should appear in the dialog box. Only the **Ok and Cancel** button is available in this dialog.