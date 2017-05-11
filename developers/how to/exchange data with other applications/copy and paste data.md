## Copy and Paste Data

Copy and Paste of is an intuitive and useful feature for exchanging data between applications, and it can be used for almost any type of data, like contacts, calendar items, e-mails, files, folders, xml data.

In many casese it is also possible to [export and import](export and import data.md "Export and Import Data") these data, and the coice is a matter of preference and requirements. The basic steps are similar for export/import and copy/paste, the main difference being that while export and import access the file system to exchange files, copy and paste access the system clipboard to exchange files and other data.

In this article

* * *

*   [Copy and Paste an Object as a Business Card or a Calendar Item](#copy-and-paste-an-object-as-a-business-card-or-a-calendar-item)

*   [Copy and Paste Files and E-mails](#copy-and-paste-files-and-e-mails)

*   [Copy and Paste Data Between Two Genus Desktop Applications](#copy-and-paste-data-between-two-genus-desktop-applications)

*   [Copy an Object as a Shortcut](#copy-an-object-as-a-shortcut)

* * *

## Copy and Paste an Object as a Business Card or a Calendar Item

vCard serves as an electronic business card. It is a convenient way of exchanging personal information such as name, address, phone number and mail address. With iCalendar you can exchange meeting requests and task.

In this article you will learn how to exchange data with other applications supporting the vCard or iCalendar format by copying and pasting data. For example, Microsoft Outlook can automatically convert a vCard that was received from an external source to an Outlook Contact record. You can also [import data from a file](export and import data.md "Import Data") and [export data to a file](export and import data.md "Export Data") using the vCard and iCalendar file formats.

The examples below shows how to exchange contact information with Microsoft Outlook. The procedure is the same if you want to copy or paste calendar items.

**To copy an object as a vCard, do the following:**

1.  Create a Task that should be used for copying data. Follow the instructions in the [step-by-step procedure](../../defining the application model/tasks.md "Tasks") on how to create a Task.
2.  Add a data source for the object you want to copy data from, for example a customer contact.
3.  Add a file data source of type **Contact**.
4.  Add an action.
5.  Add an effect of type [Create object(s)](../../defining the application model/action orchestration/actions/effects/create objects and modify objects.md "Create Objects and Modify Objects") to the action. In the list **Select the data source to use for creating new objects**, select the contact data source. Populate the contact data source with data from the data source you are copying data from.
6.  Publish the Task to a data source of the same type as the data source you are copying data from. Select **Copy** as action for the publication. In the data filter for the data source you are copying data from, select **Set equal to objects selected from the context**. See also the [step-by-step procedure](../../defining the application model/tasks.md "Publish a Task") on how to publish a Task.

To copy data from the context for the publication, in the **File** menu, click **Copy**. The object is placed on the clipboard as a vCard. To paste the object as a Outlook Contact record, open Microsoft Outlook, and then in the **Edit** menu click **Paste**.

Note! If you have published more than one Task for copying objects to a given context, the Tasks are displayed as separate commands in the **Copy** menu.

**To create an object from a vCard, do the following:**

1.  Create a task that should be used for pasting data. Follow the instructions in the [step-by-step procedure](../../defining the application model/tasks.md "Tasks") on how to create a Task.
2.  Add a data source for the object you want to create, for example a customer contact.
3.  Add a file data source of type **Contact**.
4.  Add an action.
5.  Add an effect of type [Create object(s)](../../defining the application model/action orchestration/actions/effects/create objects and modify objects.md "Create Objects and Modify Objects") to the action. In the list **Select the data source to use for creating new objects**, select the data source added in step 2\. Populate the data source with data from the contact data source.
6.  Add an publication.
7.  Publish the Task to a data source of the same type as the data source for the object you want to create. Select **Paste Special** as action for the publication. To populate the contact data source with data placed on the clipboard, select **Get object(s) from the clipboard** as data filter. See also the [step-by-step procedure](../../defining the application model/tasks.md "Publish a Task") on how to publish a Task.

Select a contact in Microsoft Outlook. In the **Edit** menu click **Copy**. To paste data in the context for the publication, in the Edit menu, click **Paste Special**. In the **Paste Special** dialog box click the Task. Note that the **Paste Special** dialog box only is displayed if you have published more than one Task for pasting data to the given context.

If you only want to update contact information for an existing object, use an effect of type [Modify object(s)](../../defining the application model/action orchestration/actions/effects/create objects and modify objects.md "Create Objects and Modify Objects") in step 5.



## Copy and Paste Files and E-mails

Attached object files is provided by objects containing a property for storing file data. For example documents related to a given project or customer.

By using a Task you can

*   Copy file data for an object to the clipboard
*   Update file data on an object by pasting a file placed on the clipboard
*   Create object(s) by pasting file(s) placed on the clipboard

To exchange information with the clipboard, the Task uses a data source of type **General File** or **Mail Message**. Both data sources provides extensive information about the content of the file. This information can be used to update other properties than the file data property on the object. For example, you can access the recipients, subject and body of a mail. A general file contains information such as file name, size, title, subject, category and when the file was modified. Attachments in a mail message can be accessed as general files. For example, when pasting a mail you can create separate objects for each attachment.

The procedure for copying and pasting data using a general file or a mail message as a data source is the same as described in the article _"Exchange an object as a business card or a calendar item"_ above. The only difference is that instead of using a data source of type **Contact** or **Calendar Item** for exchanging data, you use a **General File** or a **Mail Message**.

You can also [import data from a file](export and import data.md "Import Data") and [export data to a file](export and import data.md "Export Data") using a data source of type **General File** or **Mail Message**.

Note! If the only purpose of The task is to copy attached files to the clipboard, you can simply publish the Task to the data source containing the attached files, and then select **Copy** as action for the publication. That is, you do not need to define any data sources or actions. This speeds up performance too, which is especially important when dragging files.



## Copy and Paste Data Between Two Genus Desktop Applications

To copy and paste data between two Genus desktop applications, you define a Schema used for exchanging data, and Tasks used for performing the copy and paste operations.

**To copy data, do the following:**

1.  Create the schema that should be used for exchanging data. Follow the instructions in the [step-by-step procedure](../../defining the application model/schemas.md) on how to create a Schema. It is important that you specify a namespace for the Schema. The namespace is used by the other application to identify data placed on the clipboard.
2.  Create a Task that should be used for copying data. Follow the instructions in the [step-by-step procedure](../../defining the application model/tasks.md) on how to create a Task.
3.  Add the Schema created in step 1 as a data source in the Task.
4.  Add a data source for the object(s) you want to copy data from.
5.  Add an action.
6.  Add an effect of type [Create Object(s)](../../defining the application model/action orchestration/actions/effects/create objects and modify objects.md) to the action. Select the Schema used for exchanging data as the source for the XML document. Populate the XML document with data from the data source containing the object(s) you want to copy data from.
7.  Publish the Task to a data source of the same type as the data source you are copying object(s) from. Select **Copy** as action for the publication. In the data filter for the data source you are copying data from, select **Set equal to objects from the context**. See also the [step-by-step procedure](../../defining the application model/tasks.md) on how to publish a Task.

When the task is run, information that XML data based on the selected Schema is available, will be placed on the clipboard. The actual data will not be placed on the clipboard until someone requests access to the data. To copy data from the context for the publication, in the **File** menu, click **Copy**.

Note! If you have published more than one Task for copying objects to a given context, the Tasks are displayed as separate commands in the **Copy** menu.

**To paste data, do the following:**

1.  Create a Schema with the same structure and namespace as in step 1 above.
2.  Create a Task that should be used for pasting data. Follow the instructions in the [step-by-step procedure](../../defining the application model/tasks.md) on how to create a Task.
3.  Add the Schema created in step 1 as a data source in the Task.
4.  Add a data source for the object(s) you want to create.
5.  Add an action.
6.  Add an effect of type [Create object(s)](../../defining the application model/action orchestration/actions/effects/create objects and modify objects.md) to the action. In the drop-down list **Select the data source to use for creating new objects**, select the data source added in step 4\. Populate the objects with data from the Schema used for exchanging data.
7.  Publish the Task to a data source of the same type as the data source for the object(s) you want to create. Select **Paste Special** as action for the publication. To populate the Schema with data placed on the clipboard, select **Get object(s) from the clipboard** in the data filter for the Schema. See also the [step-by-step procedure](../../defining the application model/tasks.md) on how to publish a Task.

To paste data in the context for the publication, click **Paste Special**. In the **Paste Special** dialog box click the Task. Note that the **Paste Special** dialog box only is displayed if you have published more than one Task for pasting data to the given context.



## Copy an Object as a Shortcut

To create a shortcut to an object, for example on your desktop, right-click the object, and then in the shortcut menu, click **Copy Shortcut**. On the desktop, press CTRL+V.

A shortcut to an object in a Genus desktop application is a Uniform Resource Locator (URL). An URL is an address that specifies a protocol (such as HTTP or FTP) and a location of an object, document, World Wide Web page, or other destination on the Internet or an intranet.

An URL to an object in a Genus desktop application is defined by the protocol **genuslink** followed by the URL to your application server, the type of object to open, for example a person (ClassId), and which object to open (ObjectId).

**genuslink:_<application-server-url>_?LinkType=OpenLink&Verb=open&ClassId=_<a-class-id>_&ObjectId=_<an-object-id>_**

To change what happens when opening a link, see [Change What Happens When Opening a Link](../../personalize.md).

