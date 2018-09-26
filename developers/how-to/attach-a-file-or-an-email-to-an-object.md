# Attach a file or an e-mail to an object

It is possible to attach a file or an e-mail to an object defined in the directory, by adding properties for storing file data and file meta-data. This is useful to store documents together with related objects defined in the directory. For example to store the actual contract document together with the contract object, or the project plan togheter with the project object. It is possible to attach files of any type, and when attaching an e-mail, it is actually the e-mail file that is attached.

There are many properties that can be defined for an attached file, where the most important ones are:


Property for              | Data Type | [Data Interpretation](../defining-an-app-model/data/object-class-property/simple-data-interpretations-for-a-property.md "Simple Data Interpretations for a Property") |
--------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
Content of File           | Binary    | File Data (*) |
Name of File              | String    | File Name (*) |
Extension of File         | String    | File Extension (extension including preceeding punctuation) |
Size of File              | Integer   | File Size |
Date of creation          | Date      | Date |
Date of last modification | Date      | Date |

(*) Required

For a complete list of meaningful file properties, see [General File](../defining-an-app-model/logic/action-orchestration/data-sources/file-data-sources.md "General File"). For more information on defining object class properties see [Object Class Property](../defining-an-app-model/data/object-class-property/index.md "Object Class Property").

It is only possible to attach one file to an object, but a very common approach is to define a File object with the sole purpose of storing a file. Properties referencing other relevant objects are then added to the File object, effectively creating a document archive. Several such document classes can be added, to differentiate between areas of use, types of document, security access, etc. For example it can be useful to keep document templates apart from live documents, or to keep documents and e-mails separated. The figure below shows an example of properties for an object class designed to hold documents connected to a Project, an Activity, a Company or a Contact.

![ID66787811BB5C42B9.ID047707C8B83C4957.jpg](media/ID66787811BB5C42B9.ID047707C8B83C4957.jpg)

By adding tasks for different purposes the users can then be given added functionality to merge, copy, paste, edit, import, export, and remove documents. For more information on how to copy and paste a file, see [Copy and Paste Files and E-mails](exchange-data-with-other-applications/copy-and-paste-data.md "Copy and Paste Files and E-mails").
