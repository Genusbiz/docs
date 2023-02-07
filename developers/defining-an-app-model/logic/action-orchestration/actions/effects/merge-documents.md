# Combine documents
Combines two or more documents into a single document. The output document can be saved as a PDF document or a Word document.

The documents which are combined can be stored in different file formats. During the combine operation documents are converted to the selected output format. For example, you can combine a Word document, text document, and a picture, and save the result as a PDF document. Note that some conversions have limitations. For example, there is no easy one-to-one match between features of HTML and Microsoft Word documents. There are no headers/footers, sections, fields and tabs in HTML. Conversely, not all CSS attributes and rules can be mapped to a Microsoft Word document.

## File formats

### Supported input file formats
* Portable Document Format (*.pdf)
* Microsoft Word 97-2003 Document (*.doc)
* Microsoft Word Document (*.docx)
* Microsoft Excel Workbook 97-2003 (*.xls)
* Microsoft Excel Workbook (*.xlsx)
* Rich Text Format (*.rtf)
* Text Document (*.txt)
* HyperText Markup Language (*.html)
* XML Paper Specification (*.xps)
* OpenDocument Text (*.odt)
* JPEG Image (*.jpg)
* Portable Network Graphics (*png)
* Bitmap Image (*.bmp)
* Enhanced Metafile (*.emf)
* Tagged Image File Format (*.tiff)

### Supported output file formats
* Portable Document Format (*.pdf)
* Microsoft Word 97-2003 Document (*.doc)
* Microsoft Word Document (*.docx)

## Input documents
An input document is defined by selecting a data source of type *General File* or a field in a data source containing file data. The file format can be set to one of the supported input file formats listed above, or *Auto*. If the file format is set to *Auto*, the file format is derived from the file name stored in each object in the data source. The file name has to be stored in a field with interpretation *File Name*. Data sources of type *General File* contains by default a file name field.

## The output document
This document contains the result of combining the input documents. The document can be written to a data source of type *General File* or a field in a data source which can store binary data. If data are written to a field, max occurences for the data source has to be one. The file format can be set to one of the supported output file formats listed above.

If the document is written to a data source of type *General File*, a new file object is created and added to the data source.

If the document is written to a field in a data source, a new object is created if the data source is empty. Otherwise, the existing object is updated. Data such as file name, file extension, and file size are automatically updated given that the data source contains fields for storing this type of information.
