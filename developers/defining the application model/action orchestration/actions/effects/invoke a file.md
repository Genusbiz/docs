## Invoke a File

Invokes a file using the specified action. You can invoke files located in a file data source, a field containing file data, or in a folder on your computer. The action specifies the command to be carried out when the file is invoked. For example, open a file in the associated application or print the contents of a file. You can also open an URL in a browser window.

For example, you could use this effect to display the result of merging data to an MS Office document.

*   In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
*   In the **Description** box, optionally enter a description.
*   In the **Location** section, select one of the following:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>File Location</th>

<th>Description</th>

</tr>

<tr>

<td>File Data Source</td>

<td>A file located in one of your data sources. For example a General File or a Mail Message.</td>

</tr>

<tr>

<td>File Data Field</td>

<td>A file located in a field in one of your data sources. For example an order confirmation attached to an order.</td>

</tr>

<tr>

<td>File Name</td>

<td>A file located on a private or shared resource.</td>

</tr>

<tr>

<td>URL</td>

<td>An Uniform Resource Locator, for example an address to a web page. URL's are opened in the default browser.</td>

</tr>

</tbody>

</table>

You can generate a dynamic file name or URL by [inserting fields from your data sources](../generate dynamic values for text fields.md "Generate Dynamic Values for Text Fields") as part of the name.

*   To invoke the file using the default action associated with the file type, click **Run default action**. Note that the default action specified for a file type can be changed on individual computers. For some file types, the default action may be undesirable, or even dangerous. For example, a registry file (.reg) has the default action **Merge**, which sends the data in the file to the registry, and replaces existing registry values or adds to existing registry values. To invoke the file using a specifed action, click **Run this action**, and then type an action. For example, <span style="FONT-STYLE: italic">open or <span style="FONT-STYLE: italic">print. Please refer to your Windows documentation for more information on actions associated with file types.
*   To invoke the file as read only, select the **Invoke file as read only** check box. Note that if you invoke a file located in a file data field, the file is always opened as read only if the file type not is supported for editing in the Genus desktop client. For more information, see the article [File Types Supported for Editing in Genus Desktop Client](../../file types supported for editing in genus desktop client.md "File Types Supported for Editing in Genus Desktop Client").
*   If the next effect not can run before the file is closed, select the **Wait until the file is closed** check box. This option applies only to file types which can be edited in Genus desktop clients. For more information, see the article [File Types Supported for Editing in Genus Desktop Client](../../file types supported for editing in genus desktop client.md "File Types Supported for Editing in Genus Desktop Client").

Note! Leave the **From** address field blank for mail messages sent from an MS Outlook client. The **From** address i automatically filled out with the correct address when the mail message is opened in the MS Outlook client. Even if you specify a valid SMTP-address, MS Outlook may not be able to look up the address in the address book. You may also experience problems concerning privileges when the mail message is sent.