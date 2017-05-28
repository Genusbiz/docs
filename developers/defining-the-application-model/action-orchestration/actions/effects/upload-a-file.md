## Upload a File

Use this effect to resource efficiently transfer large files from the client to the server. The effect supports uploading of files of tens to hundreds of megabytes. Downloading large files is also supported, for more information see [How To - Upload and Download Large Files](../../../../how-to/upload-and-download-large-files.md).

Uploading is supported by the new effect Upload a File. The file can be uploaded to a new or an existing object. If the file is uploaded to a new object, you can define default values as part of the setup. Known properties, such as file name, file type, and file size, are updated automatically by the Application Server when the file has been successfully uploaded and should not be assigned in the default values setup.

1.  In the **File Name** box, enter the full path to the file to upload. You can [compose](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") a file name by typing text, and inserting formulas and fields from your data sources.
2.  In the Data Source box, select the data source to upload the file to. It is only possible to select a data source that fulfills certain requirements, for more information see <span style="FONT-STYLE: italic">Requirements and considerations for uploading a file below.
3.  To create a new object for the uploaded file, click **Create a new object**, and then click **Default Values** to enter default values for the new object.
4.  To upload the file to an existing object, click **Modify existing object**. This option is only available if the data source can only hold one object.

**Requirements and considerations for uploading a file**

In order to upload a file to a data source, the underlying Object Class has to define a GUID property with the data interpretation: **File Upload Tag**. This property is used internally to address the object which should receive the file, and is automatically set when the effect initiates an upload.

![ID991E9FAD3CB841DF.jpg](media/ID991E9FAD3CB841DF.jpg)  

The object that the file is uploaded to is automatically committed before the upload is started, regardless of the commit settings of any scope the effect is defined within. This means that known properties updated by the Application Server, such as file name, file type, and file size, have to allow blank values. If the file is uploaded to a new object, the object is deleted if the user cancels the upload, or the upload fails.