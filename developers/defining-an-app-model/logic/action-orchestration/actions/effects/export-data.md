# Export Data

Use this effect to export data from one of your data sources to a file or a file data source. Available file formats will vary depending on the type of data source exported:

Data Source Type | Supported File Formats                         |
-----------------|------------------------------------------------|
Object           | MS Excel, Text, XML                            |
XML Document     | MS Excel, Text, XML                            |
Report           | Supported file formats provided by the Report. If the file format is an image, the size of the image is determined by the report [Page Setup](../../../../../../users/analyze-report-and-discover/report/save-to-file-or-print-a-report.md). |
Mail Message     | MS Outlook Message (.msg), MS Excel, text, XML |
Contact          | vCard, MS Excel, text, XML                     |
Calendar Item    | vCalendar, iCalendar, MS Excel, text, XML      |
General File     | Associated file format, MS Excel, text, XML    |
File Folder      | File folder, MS Excel, text, XML               |

When you export data to a PDF Document, please note the software requirements described in the article [Export Data to a PDF Document - Software Requirements](export-data-to-a-pdf-document--software-requirements.md "Export Data to a PDF Document - Software Requirements").


## Select a Data Source and Specify a File Format

1.  In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
2.  In the **Description** box, optionally enter a description.
3.  Click the **General** tab.
4.  In the **Data Source** box, select the data source to export data from.
5.  If you want to export a group of objects in the selected data source, select the **Export Data in Group** check box, and in the group box, click **...** to select a group.
6.  In the **File Format** box, select a file format. If you are exporting data to a delimited text file, follow the instructions in step 4-7\. If you are exporting data to an unformatted text file, in the **Field** box, select a field to export data from.
7.  In the **Field Separator** box, specify a character used to separate each field in the file. You can choose between a set of commonly used field separators such as tab, semicolon, comma and space, or use the field separator specified in Regional Settings. To specify any other character, select **Enter a separator** from the drop-down list, and then type a separator. If you use the field separator specified in Regional Settings, the separator will vary depending on the setup on the computer running the effect.
8.  In the **Row Separator** box, select a row separator used to separate each row in the file. You can choose between **Carriage Return + Line Feed (CRLF)** or **Line Feed (LF)**. If the file should be transferred to another operating system, such as Unix or Macintosh which uses LF alone, it is important that the row separator is specified correctly. In Windows you should use CRLF. To specify a custom row separator, select **Enter a separator** from the drop-down list, and then type a separator.
9.  In the **Text Qualifier** box, specify a character used to qualify text. You can choose between double quotation marks ("), single quotation mark (') or no qualifier. A text qualifier encloses values in the file. A value will be enclosed if it contains the character used as field separator or the character(s) used as row separator.
10.  In the **Namespace Style** box select the desired namespace prefix to be used for the exported XML elements. This option is only available when selected File Format is XML File.
11.  Select the **Write Formatted** check box to include indentation and line breaks to make the file more easily readable. Only applicable for XML file format.
12.  Select the **Include field names as first record** check box to add a row at the beginning of the file containing the name for all exported fields. This option is not applicable for all file formats.



## Select which Fields and Groups to Export

Applies to MS Excel, text- and XML file formats.

If you have selected unformatted text file as File Format:

1.  Click the **Data** tab.
2.  In the **Text Field** box, select the text field you want to export. If the data source contains many objects, the value for each object will be separated by a carriage return and a linefeed (CRLF).

Otherwise:

1.  Click the **Data** tab.
2.  To export all fields and groups, click **Export all fields and groups**.
3.  To export only a selection of fields and groups, click **Export selected fields and groups**. To add a field or group, click **Add** in the **Fields** list. Optionally enter a name in the **Custom Name** column. Leave the cell blank if you want to use the default name for the field or group.
4.  If you add a field containing integer, floating-point or date time values, you can optionally specify a data format. To specify a data format, click the field in the **Fields** list, and then click **Format**.
5.  If the field contains integer values, specify the thousand separator and the negative number format. If the field contains floating-point values, you can also specify the decimal separator and a precision. The precision is the maximum number of decimals exported. You can specify a precision of 0 to 10 decimals. Leave the field blank to export data with full precision. For date time values, type a format mask containing the date and time formatting placeholders described in the article [Specifying a Format Mask when Exporting or Importing Date and Time Values](specifying-a-format-mask-when-exporting-or-importing-date-and-time-values.md "Specifying a Format Mask when Exporting or Importing Date and Time Values").

The fields and groups are exported in the order shown. To change the order for a field or group, select the field or group in the list and click **Move Up** or **Move Down**.

Note that repeating groups only will be included when exporting data to an XML file.



## Spool Data Directly to a Delimited Text File

Applies to text file format.

When exporting large volumes of data, you can optimize performance by spooling data directly to a delimited text file using a data filter. The filter is applied the instant the data are exported, and will not affect the filter for the data source. The data source you are exporting data from has to be of type object.

1.  Select the **Spool data directly to file using this data filter** check box.
2.  Click **Change** to specify a [data filter](../../data-sources/specifying-a-data-filter-for-a-data-source.md "Specifying a Data Filter for a Data Source").
3.  If some of the fields in the data source represents a code domain, for example a state, choose if you want to include the code or the name for the value in the output file.

If you expect that the export would exceed the default timeout for your Application Model, you should specify the maximum allowed time the effect can run. To do this, do the following:

1.  Click the **Advanced** tab.
2.  In the **Timeout** section, click **Allow the effect to run for**, and then type the maximum number of seconds the effect is allowed to run.

Note! If the effect is run from an interactive client, the maximum timeout is limited to 300 seconds.



## Defining the Output File

Click the **Output File** tab.

Do one of the following:

*   If you are exporting data to a file, type a filepath and a filename in the **File Name** box. To create the folder if it does not exist, select the **Create folder if it does not exist** check box.
*   If you are exporting data to a file data source, type a filename in the **File Name** box.
*   If you are exporting a file folder, type a filepath in the **File Name** box.

To export data to a file data source, click **File Data Source**, and then select a data source. You can only select data sources of type General File.

To export data to a file, click **File**, and do the following:

1.  Specify what to do if a file with the same name already exist: a) **Overwrite the existing file** b) **Append a unique number suffix to the file name** c) **Keep the existing file** d) **Append data to the existing file** e) **Abort without saving**. If you choose **Abort without saving**, the effect will report an error and no succeeding actions will run. To continue the execution without exporting any data, choose alternative c). If you are exporting data from a File Folder data source and choose to overwrite the existing folder, only files which already exists in the folder are overwritten. No files are deleted.
2.  Specify if empty output should be saved to file.

You can generate dynamic values for the location and file name by [inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") as part of the name. The file location can also include [environment variables](using-environment-variables-as-part-of-a-file-location-in-effects.md "Using Environment Variables as Part of a File Location in Effects"). If you are exporting data from a file data source containing more than one file, you can use the **File Name** field to generate unique file names. If you are exporting data from a File Folder data source containing more than one folder, you can use the **Path** field to generate unique folder names. Since the data source contains more than one object, you have to insert [an embedded section](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") including the **File Name** or **Path** field (or any other field or formula). Set the separator to blank for the section.



See Also

*   [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md)
*   [Using Environment Variables as Part of a File Location in Effects](using-environment-variables-as-part-of-a-file-location-in-effects.md)
*   [Specifying a Data Filter for a Data Source](../../data-sources/specifying-a-data-filter-for-a-data-source.md)
