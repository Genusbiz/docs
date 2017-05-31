## Export and Import Data

Export and Import of data can be used to exchange data between applications, or between an application and a manual process. In most cases it is possible to use [copy and paste](copy-and-paste-data.md "Copy and Paste Data") functionality as an alternative to export and import for manual processes, and the choice it is usually only a matter of preferences and requirements. The basic steps are similar for export/import and copy/paste, the main difference being that while export and import access the file system to exchange files, copy and paste access the system clipboard to exchange files and other data.


## Export Data

Genus allows you to export data from all types of objects to file. The export functionality is provided in Tasks, Agents, Web Services and Rules by the effect **Export data to a file**.

Supported file formats:

*   Text file (delimited and unformatted)
*   XML file
*   MS Excel
*   MS Outlook Mail Message
*   Contact (vCard)
*   Calendar (iCalendar or vCalendar)
*   General File (any file format)
*   File formats supported by Reports (HTML Document, PDF Document, Enhanced Meta File, Comma Separated Values, Bitmap image, JPEG Image, GIF image and more). When you export data to a PDF Document, please note the software requirements described in the article [Export Data to a PDF Document - Software Requirements](../../defining-the-application-model/action-orchestration/actions/effects/export-data-to-a-pdf-document--software-requirements.md "Export Data to a PDF Document - Software Requirements").

In addition you can export binary file data attached to an object using the associated file format.

To learn more, see the [step-by-step procedure on how to define an effect for exporting data](../../defining-the-application-model/action-orchestration/actions/effects/export-data.md).

**Exporting aggregated data from Reports and Searches to a delimited text file**

To export aggregated data from Reports or Searches, you can define a Task for this purpose. To speed up performance, the Task will automatically spool data directly to a delimited text file using the data filter from the Report or the Search. In order to do this, the Task must satisfy the following requirements:

*   The Task is published to a data source.
*   The publication allows running the Task when a) **The user has selected one or more objects**, or b) **Always**.
*   The publication is always enabled, that is, no condition is specified for enabling of the Task.
*   The publication includes **Run** as action.
*   One data source is filtered with the option **Set equal to objects selected from the context**. The option **Run actions repeatedly for one object at a time** can not be selected for the data source.
*   Data filters for other data sources do not refer to the data source filtered by the context.
*   The Task contains one or more effects of type **Export data to a file**, exporting data from the data source filtered by the context to a **delimited text file**.
*   The data source filtered by the context is not referred in any conditions in actions or any other effects than effects of type **Export data to a file**.

If these requirments are satsified, the Task will be available in Reports and Searches which aggregates data from the data source specified in the publication.

Note that you can speed up performance when data are exported from a table too. If the above requirements are satisfied, selected objects in a table will be spooled directly to a delimited text file.



## Import Data

Genus allows you to import data from any type of file to a data source. The import functionality is provided in Tasks, Agents, Web Services and Rules from the use of the effect **Import data from a file**.

Supported file formats:

*   Text file (delimited or fixed width)
*   Text file (unformatted)
*   XML file
*   JSON file
*   MS Outlook Mail Message
*   Contact (vCard, MS Outlook Contact)
*   Calendar (vCalendar or iCalendar, MS Outlook Appointment)
*   MS Project
*   MS Excel
*   General file (any file format)
*   File folder

To learn more, see the [step-by-step procedure on how to define an effect for importing data](../../defining-the-application-model/action-orchestration/actions/effects/import-data.md).

