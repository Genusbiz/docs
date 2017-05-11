## Save to File or Print a Report

In this article

* * *

*   [Save to File](#save-to-file)

*   [Print](#print)

*   [Page Setup](#page-setup)

* * *

## Save to File

Reports can be saved to file in various formats, which is useful for distribution or archiving.

To save a report to file:

*   Click the **File** menu, and select **Save to File**.
*   Select a folder to save the file to.
*   In the **File name** box, enter a file name for the file.
*   In the **Save as Type** box, select the format for the file.
*   Click **Save**.

A report can also be saved to file as a step in a [task](../../../developers/defining the application model/tasks.md), [agent](../../../developers/defining the application model/agents.md), [web service](../../../developers/defining the application model/web services.md) or [rule](../../../developers/defining the application model/object class/modify an object- or identifier domain/rules.md).  

The following formats are available:

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>Excel Workbook</td>

<td>*.xlsx</td>

</tr>

<tr>

<td>Excel 97-2003 Workbook</td>

<td>*.xls</td>

</tr>

<tr>

<td>Comma Separated Values</td>

<td>*.csv</td>

</tr>

<tr>

<td>Text Document</td>

<td>*.txt</td>

</tr>

<tr>

<td>HTML Document</td>

<td>*.htm</td>

</tr>

<tr>

<td>Bitmap Image</td>

<td>*.bmp</td>

</tr>

<tr>

<td>Jpeg Image</td>

<td>*.jpg</td>

</tr>

<tr>

<td>Portable Networks Graphics</td>

<td>*.png</td>

</tr>

<tr>

<td>GIF Image</td>

<td>*.gif</td>

</tr>

<tr>

<td>Enhanced Meta File</td>

<td>*.emf</td>

</tr>

<tr>

<td>PDF Document</td>

<td>*.pdf</td>

</tr>

</tbody>

</table>

When saving to one of the image formats, the size of the resulting image is determined by the image dimensions in [Page Setup](save to file or print a report.md).

## Print

To print a Report, do one of the following:

*   In the toolbar, click the **Print** button, to print the report using the default printer.
*   Click the **File** menu, and select **Print**, to open the print window.
*   Press **CTRL+P**, to open the print window.

In the print window:

*   Select the printer to use
*   Adjust printer specific settings
*   Set the number of copies to print
*   Click **Print**



## Page Setup

Page setup lets you adjust settings for the report before printing or saving to file.

To modify page setup, do the following:

*   In the menu, click **File**, and select **Page Setup**.
*   Adjust the settings you want; the settings are grouped and located in different tabs.
*   Click **OK** to accept the new settings.

**Layout**

Define layout options.

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>Orientation</td>

<td>

Follow Printer

Portrait

Landscape

</td>

<td>Only applicable when printing.</td>

</tr>

<tr>

<td>Coloring</td>

<td>

Default

Black and White

Grayscale

Color

</td>

<td>

Use color, grayscale or black and white for the report. A default setting is defined for your application. Contact your system administrator for more information.

</td>

</tr>

<tr>

<td>Paper Color</td>

<td></td>

<td>The background color.</td>

</tr>

<tr>

<td>Ordering</td>

<td>

Down then Right

Right then down

</td>

<td>

When a report spans several pages in both directions, the pages are produced in the specified order.

Only applicable when printing.

</td>

</tr>

<tr>

<td>Paper Size</td>

<td>

Not Specified

A4

A3

A5

Letter

Legal

Screen

Custom

</td>

<td>Only applicable when printing.</td>

</tr>

<tr>

<td>Width</td>

<td>cm</td>

<td>Width of page in cm. Only applicable for Custom Paper Size</td>

</tr>

<tr>

<td>Height</td>

<td>cm</td>

<td>Height of page in cm. Only applicable for Custom Paper Size</td>

</tr>

</tbody>

</table>

To specify the header and footer, click **Header and Footer**<span style="FONT-WEIGHT: normal">, and then in both the header and footer section select the values to be displayed. In both sections, for each of the positions; left, center, and right, select from the pre-defined values below:

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>(Blank)</td>

<td>Do not show any value at this position.</td>

</tr>

<tr>

<td>Date</td>

<td>Current date.</td>

</tr>

<tr>

<td>User Name</td>

<td>User name of the user that is currently signed in.</td>

</tr>

<tr>

<td>Object Name</td>

<td>The name of the report.</td>

</tr>

<tr>

<td>Page X of Y</td>

<td>The current page and the total number of pages.</td>

</tr>

<tr>

<td>Data Filter</td>

<td>The filter information for the report.</td>

</tr>

<tr>

<td>Edit Text...</td>

<td>

Edit the current value to customize it.

Write text, or right click, and select **Insert**, to add any of the following elements:

*   Date
*   User Name
*   Object Name
*   Page Number
*   Page Count
*   Data Filter
*   Version

For example: The predefined value "Page X of Y" is a combination of text "Page " and " of ", and the elements Page Number and Page Count.

<span style="FONT-STYLE: italic">"Page "<span style="FONT-WEIGHT: bold; FONT-STYLE: italic">Page Number<span style="FONT-STYLE: italic">" of "<span style="FONT-WEIGHT: bold; FONT-STYLE: italic">Page Count

</td>

</tr>

</tbody>

</table>

**Margins**

Set the margins for printing.

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>Left</td>

<td>cm</td>

<td>The distance from the left edge.</td>

</tr>

<tr>

<td>Top</td>

<td>cm</td>

<td>The distance from the top edge.</td>

</tr>

<tr>

<td>Right</td>

<td>cm</td>

<td>The distance from the right edge.</td>

</tr>

<tr>

<td>Bottom</td>

<td>cm</td>

<td>The distance from the bottom edge.</td>

</tr>

</tbody>

</table>

**Alignment**

Set the alignment on the page for print.

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>Vertical</td>

<td>

Top (cm)

Center

</td>

<td>

Align to the top within the margins.

Align to the center within the margins.

</td>

</tr>

<tr>

<td>Horizontal</td>

<td>

Left (cm)

Center

</td>

<td>Align to the left within the margins.  
Align to the center within the margins.</td>

</tr>

<tr>

<td>Fit to Page</td>

<td>

Height and Width

Width

Height

</td>

<td>

Fit to one page.

Fit to page width, but allow more pages for height.

Fit to page height, but allow more pages for width.

</td>

</tr>

</tbody>

</table>

**Content**

Choose which elements to show or hide.

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>Description Area</td>

<td>

Not Visible

Bottom

</td>

<td>

Do not show the description.

Show the description at the bottom.

</td>

</tr>

<tr>

<td>Filter Area</td>

<td>

Not Visible

Bottom

</td>

<td>Do not show the filters.  
Show the filters at the bottom.</td>

</tr>

<tr>

<td>Context</td>

<td>

Yes

No

</td>

<td>

Show context information.

Hide context information.

</td>

</tr>

</tbody>

</table>

**Image Dimensions**

Set the size of the image when saving to file using an image format.

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>Width</td>

<td>px</td>

<td>The width of the image.</td>

</tr>

<tr>

<td>Height</td>

<td>px</td>

<td>The height of the image.</td>

</tr>

</tbody>

</table>

To reset to default values, click **Reset**.

