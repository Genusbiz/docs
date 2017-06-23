# Exchange Data with Other Applications

Exchanging data with other applications can often be an important part of the functionality of an application, and there are different ways to achieve this.

**Export and Import**

Export and import can be performed both by a [Task](../defining-an-app-model/logic/tasks.md) by an interactive clients as a part of a manual process, or by an [Agent](../defining-an-app-model/logic/agents.md) on a server as part of an automated exchange of data. The operations uses the Windows file system to exchange data in the form of files. Define a Task or an Agent to perform

**Copy and Paste**

Copy and paste is an intuitive and useful feature for exchanging data between applications, and is defined in a [Task](../defining-an-app-model/logic/tasks.md). The operations are only meaningful for interactive clients, and is often performed as a drag and drop operation by the user. Copy and paste uses the Windows system clipboard to exchange data in the form of files or other formats. The copy operation places data on the clipboard where it is available for other applications. The paste operations retrieves data from the clipboard where it may have been placed by another application.

In many cases it is possible to use both export/import and copy/paste for the same exchange of data, and the coice is a matter of preference and functional requirements.

**Web Services**

Web services is mostly used for system-to-system communication over the network or internet using the HTTP protocol. For more information see [Web Services](../defining-an-app-model/services/web-services/index.md).

**Database**

When using the database to exchange data between applications, the actual exchange is performed by a database system or a third party application, and is therefore transparent to Genus. Data from another application is available in a database table that Genus can access, or Genus will populate a table with data that another application can access. For more information on defining objecst to access data in database tables, see [Object Class](../defining-an-app-model/data/object-class/index.md).

**Topics in "Exchange Data with Other Applications"**
* [Exchanging Files and Objects](exchange-data-with-other-applications/exchanging-files-and-objects.md)
* [Export and Import Data](exchange-data-with-other-applications/export-and-import-data.md)
* [Copy and Paste Data](exchange-data-with-other-applications/copy-and-paste-data.md)
* [Microsoft Outlook Integrations](exchange-data-with-other-applications/microsoft-outlook-integrations.md)