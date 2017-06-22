## Attach a File or an E-mail To an Object

It is possible to attach a file or an e-mail to an object defined in the directory, by adding properties for storing file data and file meta-data. This is useful to store documents together with related objects defined in the directory. For example to store the actual contract document together with the contract object, or the project plan togheter with the project object. It is possible to attach files of any type, and when attaching an e-mail, it is actually the e-mail file that is attached.

There are many properties that can be defined for an attached file, where the most important ones are:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property for</th>

<th>Data Type</th>

<th>[Data Interpretation](../defining-an-app-model/simple-data-interpretations-for-a-property.md "Simple Data Interpretations for a Property")</th>

</tr>

<tr>

<td>Content of File</td>

<td>Binary</td>

<td>File Data (*)</td>

</tr>

<tr>

<td>Name of File</td>

<td>String</td>

<td>File Name (*)</td>

</tr>

<tr>

<td>Extension of File</td>

<td>String</td>

<td>File Extension (extension including preceeding punctuation)</td>

</tr>

<tr>

<td>Size of File</td>

<td>Integer</td>

<td>File Size</td>

</tr>

<tr>

<td>Date of creation</td>

<td>Date</td>

<td>Date</td>

</tr>

<tr>

<td>Date of last modification</td>

<td>Date</td>

<td>Date</td>

</tr>

</tbody>

</table>

(*) Required

For a complete list of meaningful file properties, see [General File](../defining-an-app-model/logic/action-orchestration/data-sources/file-data-sources.md "General File"). For more information on defining object class properties see [Object Class Property](../defining-an-app-model/data/object-class-property/index.md "Object Class Property").

It is only possible to attach one file to an object, but a very common approach is to define a File object with the sole purpose of storing a file. Properties referencing other relevant objects are then added to the File object, effectively creating a document archive. Several such document classes can be added, to differentiate between areas of use, types of document, security access, etc. For example it can be useful to keep document templates apart from live documents, or to keep documents and e-mails separated. The figure below shows an example of properties for an object class designed to hold documents connected to a Project, an Activity, a Company or a Contact.

![ID66787811BB5C42B9.ID047707C8B83C4957.jpg](media/ID66787811BB5C42B9.ID047707C8B83C4957.jpg)

By adding tasks for different purposes the users can then be given added functionality to merge, copy, paste, edit, import, export, and remove documents. For more information on how to copy and paste a file, see [Copy and Paste Files and E-mails](exchange-data-with-other-applications/copy-and-paste-data.md "Copy and Paste Files and E-mails").