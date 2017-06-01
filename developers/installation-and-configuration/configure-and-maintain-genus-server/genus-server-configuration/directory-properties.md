## Directory Properties

To open the Genus Directory Properties in the **Genus Configuration** application, do the following:

*   In the console tree in the left pane, expand the **Directories** folder, and locate the directory of the application model.
*   Right click the directory, and click **Properties**.

The directory properties are grouped according to area and presented in tabs. For more information on the individual tabs, see the articles below.


## General

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Name**</td>

<td>Name of the directory / application model.</td>

</tr>

<tr>

<td>**Internet Host Name**</td>

<td>

The Internet Host Name is, by default, used to redirect all client requests to an "official" URL.  

When a single application server is used, the Internet Host Name is used as the fully qualified domain name of the application server. When two or more application servers are located behind a load balancer, the Internet Host Name represents the fully qualified domain name of the load balancer.  

The name is typically a combination of the local name for the server and the name for its parent domain.

For example, the Internet hostname yourserver.yourdomain.com consists of a local hostname (yourserver) and the domain name (yourdomain.com). See also [Naming the Virtual Directory](../../../defining-the-application-model/object-class-property/naming-the-virtual-directory.md "Naming the Virtual Directory") for more information.

In a few cases you may want to add an application server that deviates from scenarios above- For more informtion see [Redirect Internet Host Name](options.md).

There are some exceptions from the general rule on how host names are used. For more information, see [Host Name Usage Exceptions](../../../../users/working-in-tables/host-name-usage-exceptions.md "Host Name Usage Exceptions").

</td>

</tr>

<tr>

<td>**Database Connections**</td>

<td>Specifies the connections used to access the two database parts of the directory.</td>

</tr>

<tr>

<td>**Descriptive Partition**</td>

<td>The database connection for the descriptive partition of the directory. The Descriptive Partition contains the definition of Object Classes, Rules, Forms and concepts like Reports, Tasks, Agents and Web Services.</td>

</tr>

<tr>

<td>**Data Link**</td>

<td>The data link string for the descriptive partition connection. Type the string in the box, or click **Edit** to open the **Edit Data Link** window described below.</td>

</tr>

<tr>

<td>

**Database**

</td>

<td>The database for the descriptive partition.</td>

</tr>

<tr>

<td>**Schema**</td>

<td>The schema for the descriptive partition.</td>

</tr>

<tr>

<td>**Active Partition**</td>

<td>The database connection for the active partition of the directory. The Active Partition contains information related to the run-time environment for your application, for example user accounts and audit trails.</td>

</tr>

<tr>

<td>**Data Link**</td>

<td>The data link string for the active partition connection. Type the string in the box, or click **Edit** to open the **Edit Data Link** window described below.</td>

</tr>

<tr>

<td>**Database**</td>

<td>The database for the active partition.</td>

</tr>

<tr>

<td>**Schema**</td>

<td>The schema for the active partition.</td>

</tr>

<tr>

<td>**Vendor Version**</td>

<td>The database vendor version. See [Supported Database System Vendors](../../system-requirements.md) for more information.</td>

</tr>

<tr>

<td>**Database supports case insensitive search**</td>

<td>Specifies that the search operations in the database are case insensitive. If the search is case sensitive, extra case modifers are added to string expressions in the where-clauses.</td>

</tr>

<tr>

<td>**Connect / Disconnect**</td>

<td>Button to connect to, or disconnect from the directory, based on the specified database connections. Disconnect only to modify the database connections.</td>

</tr>

<tr>

<td>**Global Filter Table**</td>

<td>It is possible to have several data sets within the same database. To do this all the object classes must be connected to a common object class which is used as a global filter to split the data. For example, in an economy or accounting system there can be information for several client companies. The Company object class is connected to all object classes containing relevant information, and can therefore be set as a global filter. A [data set](data-set-properties.md) can then be created for each client company.</td>

</tr>

<tr>

<td>**Default Language**</td>

<td>The default language for the application model. For more information, see [Translate the Application Model to Other Languages](../../../defining-the-application-model/translate-the-application-model-to-other-languages.md).</td>

</tr>

<tr>

<td>**Genus Docs URL**</td>

<td>The URL associated with the online help for Genus App Platform. The default URL is [https://docs.genus.no/](https://docs.genus.no/).  Leave this field blank if you do not need to host the online help on a local web server.</td>

</tr>

</tbody>

</table>

**Edit Data Link**

The edit data link window lets you enter the individual fields, and then constructs the data link string for you.

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Server Name**</td>

<td>Name of the database server.</td>

</tr>

<tr>

<td>**Sign in to the server using**:</td>

<td>Specify how to sign in to the database server.</td>

</tr>

<tr>

<td>

**Windows Authentication**

</td>

<td>Use windows authentication to sign in.</td>

</tr>

<tr>

<td>**Database System Authentication**</td>

<td>Use authentication provided by the database by specifying the two next fields.</td>

</tr>

<tr>

<td>**User Name**</td>

<td>User name for database authentication.</td>

</tr>

<tr>

<td>**Password**</td>

<td>Password for database authentication.</td>

</tr>

</tbody>

</table>

## Database Objects

The list of database objects which are stored in the directory database is populated by quering the database dictionary.

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Name**</td>

<td>Name of the database object</td>

</tr>

<tr>

<td>**Partition**</td>

<td>

Identifies which part of the directory the database objects resides.

*   **Descriptive** - The descriptive part of the directory, which is static during execution.
*   **Active** - The active part of the directory, which may change during execution.

</td>

</tr>

<tr>

<td>**Status**</td>

<td>

The status of the database object. The status of an object is also indicated by the font color of the item.

*   **Ok** (black font)
*   **Not Found** - The database object is required by Genus, but could not be found in the database (blue font)
*   **Unknown** - The database object exists in the database, but is not recognized by Genus (red font)

</td>

</tr>

</tbody>

</table>

To refresh the list of database objects, click **Refresh**.

**Create an Administrator Account**

To create an administrator account, click **Create an administrator account**. For more informations, see [Configure Genus App Services - Step by Step](../configure-genus-server--step-by-step.md).

**Manage Database**

This function simplifies the process of creating or removing database objects, and creating indexes and functions.

To manage the directory database, click **Manage Database**, and then do one of the following:

*   To automatically create the database objects that are missing, select **Create Missing Database Objects**.
*   Click **Next**.
*   In the list of missing database objects, select one or more objects to create.
*   Click **Finish**.

Or

*   To create SQL-scripts for database objects, select **Create SQL-script for database objects**.
*   Click **Next**.
*   In the list of database objects on the left, select the objects to create scripts for, and click **Select**.
*   Click **Next**.
*   Select the check box for each type of script to create:  

    <table>

    <tbody>

    <tr>

    <td>**DROP TABLE**</td>

    <td>Script to drop the selected database objects.</td>

    </tr>

    <tr>

    <td>**CREATE TABLE**</td>

    <td>Script to create the selected database objects.</td>

    </tr>

    <tr>

    <td>**CREATE INDEX**</td>

    <td>Script to create indexes for the columns of the selected database objects.</td>

    </tr>

    <tr>

    <td>**CREATE FUNCTIONS**</td>

    <td>

    Script to create database functions required for the operation of the application.

    Which functions are included in the resulting script depends on the selected database platform.

    For example: for ORACLE platforms, a spesific GUID conversion function is required for certain join operations.

    </td>

    </tr>

    </tbody>

    </table>

*   Click **Next**.
*   Review the generated script, and click **Copy to Clipboard** if you want to paste the script in a SQL tool, or click **Save to File** to save the script to a file.
*   Click **Finish**.



## Authentication

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Active Directory Address**</td>

<td></td>

</tr>

<tr>

<td>**Default LDAP Path**</td>

<td>Use the default LDAP path for Active Directory.</td>

</tr>

<tr>

<td>

**Specified LDAP Path**

</td>

<td>Use this option to limit the scope for LDAP queries, or direct the queries to a specific domain controller. For more information, see [The LDAP URL Format](https://tools.ietf.org/html/rfc2255), and [Object Naming](https://technet.microsoft.com/library/cc977992).</td>

</tr>

<tr>

<td>**Host Name [:Port No]**</td>

<td>Specify the host name, and optionally the port, for the domain controller to use for LDAP queries.</td>

</tr>

<tr>

<td>**Distinguished Name**</td>

<td>Objects are located within Active Directory domains according to a hierarchical path, which includes the labels of the Active Directory domain name and each level of container objects. The full path to the object is defined by the distinguished name (also known as a "DN").</td>

</tr>

<tr>

<td>**Active Directory Identification**</td>

<td></td>

</tr>

<tr>

<td>**Genus accounts are identified using the following Active Directory account field**</td>

<td>

*   **objectGUID** - The unique identifier for the object in Active Directory. This attribute is a Globally Unique Identifier (GUID). When an object is created in the Active Directory, the Active Directory server generates a GUID and assigns it to the object's objectGUID attribute.
*   **objectSID** - The security identifier (SID) of the user. The SID is a unique value used to identify the user as a security principal. Each user has a unique SID issued by a Windows domain and stored in objectSid attribute of the user object in the Active Directory.
*   **sAMAccountName** - The sign in name for the user, used to support clients and servers from a previous version of Windows. The sAMAccountName should be less than 20 characters to support these clients and servers.

For more information, see [User Naming Attributes](https://msdn.microsoft.com/library/ms677605.aspx).

</td>

</tr>

<tr>

<td>**Identity to be used when performing Active Directory queries**</td>

<td>

Specify which identity to use for queries to Active Directory. The chosen identity must have the required privileges and permissions to Active Directory to perform the queries.

</td>

</tr>

<tr>

<td>**IIS Default Application Pool Identity**</td>

<td>

Use the identity of the application pool. For the Genus Server web site the application pool is called **Genus App Service Web Site AppPool** and which by default runs with the Network Service identity.

If, for any reason, this application pool is configured to run with an identity which does not have appropriate access to the Active Directory, another identity with appropriate access must be specified below.

</td>

</tr>

<tr>

<td>**Active Directory Identity**</td>

<td>

Use a specific identity to query Active Directory. Requires values in the fields for User Name and Password.

</td>

</tr>

<tr>

<td>**User Name**</td>

<td>The user name of the identity to use for LDAP queries.</td>

</tr>

<tr>

<td>**Password**</td>

<td>The password for the identity to use for LDAP queries.</td>

</tr>

<tr>

<td>**App Clients**</td>

<td></td>

</tr>

<tr>

<td>**Allow Remember Credentials**</td>

<td>The app clients are offered an option to remember credentials upon sign in.</td>

</tr>

<tr>

<td>**Sign out after n seconds of inactivity**</td>

<td>The app clients without any activity are signed out automatically after the specified number of seconds. If no number is specified the app clients are signed in indefinetely.</td>

</tr>

<tr>

<td>**Allow Reset Password**</td>

<td>

The app clients are offered a link to reset the password from the sign in screen.

</td>

</tr>

<tr>

<td>**Desktop Clients**</td>

<td></td>

</tr>

<tr>

<td>**Desktop Credential Store**</td>

<td>Specify which credential store to use for the desktop client users.</td>

</tr>

<tr>

<td>**Genus Directory**</td>

<td>Use Genus Directory to store credentials for user accounts when signing in to Genus Desktop.</td>

</tr>

<tr>

<td>**Active Directory**</td>

<td>Use Active Directory to store credentials for user accounts when signing in to Genus Desktop.</td>

</tr>

<tr>

<td>**Security Group Administration**</td>

<td>Specifies where the security groupes are managed.</td>

</tr>

<tr>

<td>**Genus Directory**</td>

<td>The security groups are managed in Genus Directory.</td>

</tr>

<tr>

<td>**Active Directory**</td>

<td>The security groups are managed in Active Directory. This option is only available if the Desktop Credential Store is set to Active Directory.</td>

</tr>

</tbody>

</table>



## Logical Databases

The logical databases are used in the application model to [specify the location of object classes](../../../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/data-provider.md). The logical databases are then [mapped](data-set-properties.md) to physical databases depending on which data set the user are signed in.

A logical database can be shared between all data sets, and the mapping to a physical database is then done only once in the logical database itself.

*   To add a logical database, click **Add**.
*   In the **Name** box, enter the name of the logical database.
*   If the logical database is shared between all data sets, select **Data in this logical database are shared between data sets**, and then select a database in the **Physical Database** list.
*   Click **OK**.



## Physical Databases

There are many scenarios where there are several physical databases defined. For example; if the application accesses data from several other solutions, or if there are many data sets.

To add a physical database, click **Add**.

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Name**</td>

<td>The name of the physical database.</td>

</tr>

<tr>

<td>**Data Link**</td>

<td>The data link string for the connection. Type the string in the box, or click **Edit** to open the **Edit Data Link** window described below.</td>

</tr>

<tr>

<td>**Vendor Version**</td>

<td>The vendor and version of the database where the physical database resides.</td>

</tr>

<tr>

<td>**Optionally specify the database and schema**</td>

<td></td>

</tr>

<tr>

<td>**Database**</td>

<td>Name of database.</td>

</tr>

<tr>

<td>**Schema**</td>

<td>Name of schema.</td>

</tr>

<tr>

<td>**Connection is read only**</td>

<td>Specifies that no changes to the data in this database is allowed.</td>

</tr>

<tr>

<td>**Database supports case insensitive search**</td>

<td>Specifies that the search operations in the database are case insensitive. If the search is case sensitive, extra case modifers are added to string expressions in the where-clauses.</td>

</tr>

<tr>

<td>**Delimit names**</td>

<td></td>

</tr>

</tbody>

</table>

To test the connection using the entered settings, click **Test Connection**.

 **Edit Data Link**

The edit data link window lets you enter the individual fields, and then constructs the data link string for you.

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Server Name**</td>

<td>Name of the database server.</td>

</tr>

<tr>

<td>**Sign in to the server using**:</td>

<td>Specify how to sign in to the database server.</td>

</tr>

<tr>

<td>

**Windows Authentication**

</td>

<td>Use windows authentication to sign in.</td>

</tr>

<tr>

<td>**Database System Authentication**</td>

<td>Use authentication provided by the database by specifying the two next fields.</td>

</tr>

<tr>

<td>**User Name**</td>

<td>User name for database authentication.</td>

</tr>

<tr>

<td>**Password**</td>

<td>Password for database authentication.</td>

</tr>

</tbody>

</table>



## Allowed Origins

Cross-origin resource sharing (CORS) is supported, and the list of allowed origins specify the trusted combinations of protocol, host name, and port.

The default is that there are no entries, and origins should be added with caution. The all-domain wildcard, the asterisk "*", should be avoided.

To add an allowed origin, do the following:

*   Click **Add**.
*   In the **Origin** box type the origin as a combination of protocol, host name, and port number.
*   Click **OK**.



See Also

*   [http://en.wikipedia.org/wiki/Cross-origin_resource_sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

## Trusted Users

The trusted users have access to Genus Studio, and can modify and manage the application model in the directory.

To add a trusted user, do the following:

*   Click **Add**.
*   Type the user names of the users to trust, separated by semicolon.
*   Click **Check Names**, and verify that the user was recognized.
*   Click **OK**.

To remove a trusted user, do the following:

*   In the list of trusted users, select the trusted user to remove.
*   Click **Remove**.

