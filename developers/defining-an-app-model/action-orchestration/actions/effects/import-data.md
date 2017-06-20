## Import Data

Use this effect to import data from a file or folder into one of your data sources. You can import files located in a folder on your computer, or from a field in one of your data sources containing file data.

Supported file formats:

*   Text file (delimited or fixed width)
*   Text file (unformatted)
*   XML file
*   JSON file
*   MS Outlook Message
*   Contact (vCard, MS Outlook Contact)
*   Calendar (vCalendar, iCalendar, MS Outlook Appointment)
*   MS Project
*   MS Excel
*   General file (any file format)
*   File folder


## Select an Input Data File and a Data Source to Import Data into

*   In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
*   In the **Description** box, optionally enter a description.
*   Click the **General** tab.

Then do one of the following:

*   Import data from a file. Click **File Name**, and then type a file name. Click **Browse** to select an existing file.
*   Import data from a file folder. Click **File Folder**, and then type a folder name. Click **Browse** to select an existing folder.
*   Import data from a field containing file data. Click **File Data** Field, and then click [...] to select a field.

Then do the following:

*   In the **File Format** box, select the format for the input data file.
*   If the selected format is Text File, in the **Encoding** box, select the character encoding used by the text file.
*   Choose how to handle that the file or folder does not exist. If you choose to abort execution of succeeding actions, the effect throws an exception of type *On File not Found* or *On Path not Found*.
*   In the **Data Source** box, select the data source to import data into.
*   If you are importing unformatted text, in the **Field** box, select a field to import data into.

**Tip.** You can generate a dynamic file- or folder name by [inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") as part of the name.

Available data sources you can import data into are restricted by the selected file format. The table below provides an overview of file formats supported by the the different types of data sources:

<table>

<tbody>

<tr>

<th>Type of Data Source</th>

<th>Any File Format</th>

<th>FileFolder</th>

<th>iCalendar</th>

<th>MS Excel</th>

<th>MS Outlook Appointment</th>

<th>MS Outlook Contact</th>

<th>MS Outlook Message</th>

<th>MS Project</th>

<th>Text</th>

<th>vCalendar</th>

<th>vCard</th>

<th>XML</th>

</tr>

<tr>

<td>Calendar Item</td>

<td></td>

<td></td>

<td>X</td>

<td></td>

<td>X</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td>X</td>

<td></td>

<td>X</td>

</tr>

<tr>

<td>Contact</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td>X</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td>X</td>

<td>X</td>

</tr>

<tr>

<td>File Folder</td>

<td></td>

<td>X</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>General File</td>

<td>X</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Mail Message</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td>X</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td>X</td>

</tr>

<tr>

<td>Microsoft Project</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td>X</td>

<td></td>

<td></td>

<td></td>

<td>X</td>

</tr>

<tr>

<td>Object</td>

<td></td>

<td></td>

<td></td>

<td>X</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td>X</td>

<td></td>

<td></td>

<td>X</td>

</tr>

<tr>

<td>XML Document</td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

<td>X</td>

</tr>

</tbody>

</table>

Note. If you are importing file data from a field located in one of your data sources, the data can only be imported into a data source of type file.



## Specifying a Log File

The log file records all events during import.

1.  Click the **Event Handling** tab.
2.  In the **Log File** section, type a name for the log file. Click **Browse** to select an existing file. You can generate a dynamic file name by [inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") and [environment variables](../../../user-interface/forms/using-environment-variables-as-part-of-a-file-location-in-effects.md "Using Environment Variables as Part of a File Location in Effects") as part of the name.



## Specifying an Error File

The error file contains records rejected due to a mismatch in the specification of the data format and the actual data.

1.  Click the **Event Handling** tab.
2.  In the **Error File** section, type a name for the error file. Click **Browse** to select an existing file. You can generate a dynamic file name by [inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") and [environment variables](../../../user-interface/forms/using-environment-variables-as-part-of-a-file-location-in-effects.md "Using Environment Variables as Part of a File Location in Effects") as part of the name.
3.  Click **Stop import if any records contains errors** to force the import to halt if an error is encountered. If this option not is selected, the record is rejected and the import continues to the next record.



## Specifying a Discard File

The discard file contains records that do not satisfy the requirements imposed by data validations defined in the import data source.

1.  Click the **Event Handling** tab.
2.  In the **Discard File** section, type a name for the discard file. Click **Browse** to select an existing file. You can generate a dynamic file name by [inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") and [environment variables](../../../user-interface/forms/using-environment-variables-as-part-of-a-file-location-in-effects.md "Using Environment Variables as Part of a File Location in Effects") as part of the name.
3.  Click **Stop import if any records are discarded** to force the import to halt if a record is discarded. If this option not is selected, the record is rejected and the import continues to the next record.



## Specifying the Row- and Column Format for a Text File

Click the **Settings** tab.

**Row format**:

1.  If values in the text file are separated by tabs, colons, semicolons, spaces or another character, click **Delimited** and follow the instructions in step 2-5\. If all of the values in the text file are the same length, select **Fixed Width**. Continue to step 6\.
2.  Select the character that separates values in the text file. If the character not is listed, click **Other** and type a character.
3.  If the data contains a delimiter of more than one character between data fields, or if it contains multiple custom delimiters, select the **Treat consecutive delimiters as one** check box.
4.  Select the character that encloses values in the text file. When a text qualifier is encountered during import, all of the text that follows that character and precedes the next occurence of that character is imported as one value, even if the text contains a delimiter character. For example, if the delimiter is a comma (,), and the text qualifier is a double quotation mark ("), _"Paris, France"_ would be imported as one value. If no qualifier or if the single quotation mark (') qualifier were specified, _"Paris, France"_ would be imported in two fields as _"Paris_ and _France"_. The qualifier is always omitted in the imported value.
5.  Select the **Allow trailing null columns** check box if missing values not are included as consecutive delimiters at the end of each row.
6.  In the **First Data Row** box, type or select a number to specify the first row of the data that you want to import. This is useful if the text file includes one or more header rows.
7.  Select the character set used in the text file. In most cases, you can leave this setting at its default (**Automatic**). _Not supported in current version_.

**Column format**:

1.  Click **Add**.
2.  Select which field in the data source to import data into. The data type for the column is derived from the selected field. If you do not want to import the column, click **Do not import column (skip)**. If you have selected **Delimited** as row format, you must specify a column format for all columns in the text file, even if you do not want to import data for the column. For **Fixed Width** row format you should only specify the column format for columns you want to import data from.
3.  If you have selected **Fixed Width** as row format, type or select the character position for the column in the **From Position** and **To Position** box.
4.  If a specific value should be interpreted as an empty value (null value), click **Value is empty if equal to** and type a value. For example, you may want that an integer value of 0 should be interpreted as an empty value.
5.  To remove leading and trailing spaces, click **Trim leading and trailing spaces**.
6.  If the column contains integer, floating-point or date time values, you must specify the data format so that the values are converted correctly. To specify the data format, click the **Format** tab.
7.  If the column contains integer values, specify the thousand separator and a negative number format. If the column contains floating-point values you must also specify the decimal separator. For date time values, type a format mask containing the date and time formatting placeholders described in the article [Specifying a Format Mask when Exporting or Importing Date and Time Values](specifying-a-format-mask-when-exporting-or-importing-date-and-time-values.md "Specifying a Format Mask when Exporting or Importing Date and Time Values").
8.  Repeat step 1-7 for all columns in the text file.

The column is added to the end of the list. If the values in the text file is separated by a delimiter, data for each column is imported in the order shown. To change the order for a column, select the column in the list and click **Move Up** or **Move Down**.



## Specifying the Source Data and Column Mappings for an MS Excel File

Click the **Settings** tab.

**Source Data**

The **Source Data** list contains the worksheets to be imported from the MS Excel file. Click **Add** to open a dialog to add a new worksheet.

In the **Worksheet** section, first do one of the following:

*   Click **Name** to identify one worksheet by name, and in the **Name** box enter a text or select a field or group containing the name of the worksheet in the MS Excel file.
*   Click **Number** to identify one worksheet by its order, and in the **Number** box enter a number or select a field or group containing the number of the worksheet in the MS Excel file.
*   Click **All** **Sheets** **in Workbook** to import all worksheets in the MS Excel file.

Then select what to do **If the worksheet does not exist**.

*   Click **Ignore** and continue to ignore missing worksheets and continue performing the succeding actions.
*   Click **Abort** to stop execution of the succeding actions if the worksheet cannot be found.

In the **Range** section do the following:

In the **First Data Row** box enter a number for the first row of data or select a field or group containing the number.

For the **Last Data Row** option select one of the following:

*   Click **Dynamic to import all rows** containing data from the worksheet.
*   Click **Fixed** to import a specific number of rows from the worksheet. In the Fixed box enter the number of the last data row or select a field or group containing the last row number to import.
*   Click **Next** **row contains value** to specify a value indicates the end of the data range. in the **Next row contains value** box enter a text or select a field or group containing the text to look for, and in the in **column** box enter a letter for the column to look for the value in.

**Column Mappings**

The Column Mappings list contains the mapping of values from the worksheet to the data source the data is imported into. The list default contains all the fields of the date source with simple types in alphabetic order, mapped to the columns of the worksheet in ascending order.

Select an item in the list and click **Modify** to change the mapping, or click **Add** to add a new mapping.

*   In the **Field** box select the field in the data source to map to a column.
*   The **Data Type** box displays the data type of the selected field.
*   In the **Column** box type the label of the column to get the value for the field from.

Fields that are not mapped to a column will not be assigned a value, and columns that are not mapped will not be imported from the worksheet.



## Options for an XML File

Click the **Settings** tab.

* Validation of an XML document based on its XML schema is enabled by default. To disable validation, click to clear the **Validate XML Data** check box.
* In the **XML Root Path** box, enter an XPath expression to only store a specific part of the XML.



## Options for a JSON File

Click the **Settings** tab.

*   In the **JSON Root Path** box, enter a path to only store a specific part of the JSON document. To access object properties, use the dot-notation *store.name or the bracket-notation store['name']. To access array elements, use the subscript operator store.books[0]. Array indices always start by 0*.



See Also

*   [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md)
*   [Using Environment Variables as Part of a File Location in Effects](../../../user-interface/forms/using-environment-variables-as-part-of-a-file-location-in-effects.md)