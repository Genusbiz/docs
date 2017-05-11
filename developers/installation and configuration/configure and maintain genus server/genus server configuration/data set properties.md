## Data Set Properties

To open the Genus Data Set Properties in the Genus Configuration Application, do the following:  

In the console tree in the left pane, expand the **Directories** folder, locate and expand the directory of the application model. Click the **Data Sets** folder, and in the list of data sets locate the data set to open. Right click the data set, and click Properties.  

The data set properties are grouped according to area and presented in tabs. For more information on the individual tabs, see the articles below.

In this article

* * *

*   [General](#general)

*   [Database Connections](#database-connections)

*   [Services](#services)

*   [Automatic Updates](#automatic-updates)

*   [Help and Support](#help-and-support)

* * *

## General

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Name**</td>

<td>Name of the data set. This name is also shown in brackets, [ ], in the window title of the application.</td>

</tr>

<tr>

<td>**Virtual Directory**</td>

<td>Name of virtual directory used as part of the address to access the application and data set. See also, [Naming the Virtual Directory](../../../defining the application model/object class property/naming the virtual directory.md "Naming the Virtual Directory").</td>

</tr>

<tr>

<td>**Global Filter Table**</td>

<td>The [global filter](directory properties.md) object class specified for the directory.</td>

</tr>

<tr>

<td>**Filter on identifying value**</td>

<td>

Specifies the global filter to use for this data set. The value is the primary key value for the object of the global filter object class to filter by. Only available if the Global Filter Table is specified.

</td>

</tr>

</tbody>

</table>

## Database Connections

The database connections specify how the [logical databases](directory properties.md "Logical Databases") are mapped to the [physical databases](directory properties.md "Physical Databases"). The logical databases and the physical databases are both defined in the directory properties, but how they are mapped is specific for individual data sets.

All the logical databases should be mapped to physical databases for all data sets, the application to work.

For each logical database in the list, click the down arrow in the **Physical Database** column, and select the physical database to connect.



## Services

Enable execution of specific services for the data set on this application server.

*   **Web Service**
*   ****Agent Service****



## Automatic Updates

Determines how new versions of Genus Desktop Clients are installed

*   **Automatically download new versions** - When a new version is installed on the application server, the desktop clients automatically detect the upgrade, and downloads and installs the new version.
*   **New versions are installed and managed by a network administrator** - New versions of the Genus Desktop Client must be distributed manually, or by third party software.



## Help and Support

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Reset Password**</td>

<td>

Specify the sender e-mail details to enable the reset password functionality for this data set.

The functionality is currently only available for app clients.

See also the app client options in [Authentication](directory properties.md "Authentication").

</td>

</tr>

<tr>

<td>**Sender E-Mail Address**</td>

<td>The e-mail address used as the senders address when sending reset password e-mails.</td>

</tr>

<tr>

<td>**Sender Display Name**</td>

<td>The display name used for the sender when sending reset password e-mails.</td>

</tr>

<tr>

<td>**Custom Help Pages**</td>

<td></td>

</tr>

<tr>

<td>**URL**</td>

<td>URL to help pages that are specific for this application model and data set.</td>

</tr>

<tr>

<td>**Help Request**</td>

<td></td>

</tr>

<tr>

<td>**Recipient E-Mail Address**</td>

<td>

E-mail address for sending error reporting and support e-mails.

See also, [Genus Desktop Client Error Reporting](../../../../users/getting started/error handling and support mail/genus desktop client error reporting.md "Genus Desktop Client Error Reporting").

</td>

</tr>

</tbody>

</table>

