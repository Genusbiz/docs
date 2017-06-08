## Export or Distribute a Report

It can be useful to export a report, and continue working with it in other applications, or to send a report to other people, maybe with personalized content. See the topics below for more information.


## Export a Report

A Report can be exported to another application, either with formatting and layout, or as base data.

Do one of the following:

*   To open a report with formatting and layout in another application, click the **File** menu, and then click **Open with Default Application**.
*   To export the base data and open it in another application, click the **Data** menu, and then click **Export Data**.

The preferred application is Microsoft Excel, if it is installed on your computer. Otherwise the file is a comma separated file or a plain text file.



## Distribute a Report

 Distribution is the act of scattering or spreading out. Genus App Platform allows you to distribute reports by making or spreading out copies for a selection of data filter objects.

The copies may be printed, saved as files or sent to mail recipients.

The default behaviour is to make one copy of the report, applying a set of objects as one data filter to this one copy. This behaviour is identical to first opening the report, specifying the data filter within the report, and then printing, saving or sending the report.

However, by using distribution, you may make several copies of your report, by iterating over your set of objects one object at a time, i.e. making one copy of the report per data filter object.

If your report has more than one data source, you may even make copies for every combination of objects from the data sources, like making copies of a revenue report for each combination of your departments and each of the last months. In such an example, with 10 departments and 3 months, this would produce 30 copies, each with a different set of data filter objects applied.

To make a report available for distribution, define a link to it by following these steps:

*   [Open the Object Class for modification](../../../developers/defining-the-application-model/data/object-class/modify-an-object-or-identifier-domain.md).
*   Click the **Explore** tab.
*   [Add a link to the report](../../../developers/defining-the-application-model/object-class/modify-an-object--or-identifier-domain/explore.md). 

The steps for [distributing a report](../../../developers/defining-the-application-model/action-orchestration/actions/effects/distribution-of-reports.md "Distribution of Reports") are as follows:

**Step 1.** Start the Distribution Wizard. The wizard is available through the **Distribute** command on the **File** menu. In tables, right-click and locate the **Distribute** command in the shortcut menu.

**Step 2.** In the **Data Source** page, select the Report you want to distribute.

**Step 3.** Click **Next**.

**Step 4.** In the **Copies and** **Data Filters** page, under **Copies**, click **Distribute one copy** if you want to make one copy of your report, applying any set of objects as <span style="FONT-STYLE: italic">one data filter to this one copy. Click **Distribute one copy for each combination of objects from these data sources** if you want to make several copies of your report.

**Step 5.** To filter data for a data source provided by the report, click the data source in the **Data Filters** list, and then click **Modify**. For more information on how to filter data for a data source, see the article [Data Sources](../../../developers/defining-the-application-model/action-orchestration/data-sources/specifying-a-data-filter-for-a-data-source.md). Note that the object(s) selected in a table or form, are sent as input and used as default values.

**Step 6.** Click **Next**.

**Step 7.** In the **Output Destination** page, click **Print** to print your report. Override any printer settings by clicking **Print Setup**.

**Step 8.** Click **Save to File** to save your report to file. Select format in the **File Format** list. In the **Folder** box, type the output file folder. Click **Browse** to select an existing folder. You may generate a dynamic folder name by inserting fields from one of your data sources. To insert a field, click **Insert Field**. Check **Append a unique number suffix to the file name** if you are distributing several copies and want to make sure the names are unique.

**Step 9.** Click **Send to Mail Recipient** to send your report by e-mail. One e-mail will be created with one or more attachments. Select format in the **Attachment Format** list. In the **Attachment Name** box, type the name of the attachment. The name of your report is used as default. You may generate a dynamic name by inserting fields from one of your data sources. To insert a field, click **Insert Field**. Check **Append a unique number suffix to the file name** if you are distributing several copies and want to make sure the names are unique.

**Step 10.** If you are distributing several copies, some data filter objects or combination of data filter objects, may result in empty output. If you do not want to distribute such copies, check **Discard empty output**.

**Step 11.** Click **Next**.

**Step 12.** In the **Summary** page, review your selections to verify that you are distributing the information you want.

**Step 13.** Click **Finish**.

