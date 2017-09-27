# Microsoft Outlook Integrations

Genus integrates with Microsoft Outlook on several levels and in different ways, to enhance the experience and offer advanced functionality.

**Send E-mails from the application**

Send E-mails from the application, either directly based on information from an object, or edit the E-mail before sending. E-mails can also be sent automatically from the application server, triggered by rules or a schedule. For more information see: [Create a Mail Message](../../defining-an-app-model/logic/action-orchestration/actions/effects/create-a-mail-message.md), [Tasks](../../defining-an-app-model/logic/tasks.md), [Agents](../../defining-an-app-model/logic/agents.md).

**Store E-mails in the application**

Store E-mails in the application connected to the relevant business data. Define an object in the directory with at least the necessary properties from the [Mail Message Data Source](../../defining-an-app-model/logic/action-orchestration/data-sources/file-data-sources.md), and then also define some of the tasks described in this article to start using the object. For more information on how to store e-mails attached to objects, see [Attach a File or an E-mail To an Object](../attach-a-file-or-an-email-to-an-object.md).

**Reply and Forward to E-mails stored in the application**

Reply and Forward directly to E-mails stored in the application, and make sure the dialog is complete by storing the reply alongside the original. For more information see [Data Exchange settings](../../defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/data-exchange.md) in Object Class.

**Copy and Paste E-mails, Contacts, and Calendar Items**

Copy and Paste E-mails, Contacts, and Calendar Items to and from Outlook or the file system. Let objects in your application model be created from external data, and vice versa. For more information see: [Copy and Paste Data](copy-and-paste-data.md).

**Special considerations when using E-mail integrations**

For E-mail integration to work the application model must meet certain requirements. Each user account must have a valid e-mail address which corresponds to one of the e-mail address aliases available in Active Directory for the user accessing the Exchange Server.  

For more information on requirements, see [System Requirements for the Genus Desktop client](../../installation-and-configuration/system-requirements.md).