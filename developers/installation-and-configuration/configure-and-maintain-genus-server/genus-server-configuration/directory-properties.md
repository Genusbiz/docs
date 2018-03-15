# Directory properties

> [!NOTE]
> The term directory in this article refers to the usage of the term prior to release 2018.1 of Genus Apps. Both this article and Genus Apps will be updated to reflect the new definition of the term in a later release. See the definition of [directory](../../../../terminology.md#directory) and [app model](../../../../terminology.md#app-model) for more information.

To open the Genus Directory Properties in the **Genus Configuration** application, do the following:

*   In the console tree in the left pane, expand the **Directories** folder, and locate the directory of the application model.
*   Right click the directory, and click **Properties**.

The directory properties are grouped according to area and presented in tabs. For more information on the individual tabs, see the articles below.


## General

| Property | Description |
|--|--|
| **Name** | Name of the directory / application model. |
| **Internet Host Name** | The Internet Host Name is, by default, used to redirect all client requests to an "official" URL. When a single application server is used, the Internet Host Name is used as the fully qualified domain name of the application server. When two or more application servers are located behind a load balancer, the Internet Host Name represents the fully qualified domain name of the load balancer. The name is typically a combination of the local name for the server and the name for its parent domain. For example, the Internet hostname yourserver.yourdomain.com consists of a local hostname (yourserver) and the domain name (yourdomain.com). See also [Naming the Virtual Directory](../../../defining-an-app-model/data/object-class-property/naming-the-virtual-directory.md "Naming the Virtual Directory") for more information. In a few cases you may want to add an application server that deviates from scenarios above- For more information see [Redirect Internet Host Name](options.md). There are some exceptions from the general rule on how host names are used. For more information, see [Host Name Usage Exceptions](../../../../users/navigate-view-modify-and-control/working-in-tables/host-name-usage-exceptions.md "Host Name Usage Exceptions"). |
| **Database Connections** | Specifies the connections used to access the two database parts of the directory. |
| **Descriptive Partition** | The database connection for the descriptive partition of the directory. The Descriptive Partition contains the definition of Object Classes, Rules, Forms and concepts like Reports, Tasks, Agents and Web Services. |
| **Data Link** | The data link string for the descriptive partition connection. Type the string in the box, or click **Edit** to open the **Edit Data Link** window described below. | 
| **Database** | The database for the descriptive partition. |
| **Schema** | The schema for the descriptive partition. |
| **Active Partition** | The database connection for the active partition of the directory. The Active Partition contains information related to the run-time environment for your application, for example user accounts and audit trails. | 
| **Data Link** | The data link string for the active partition connection. Type the string in the box, or click **Edit** to open the **Edit Data Link** window described below. |
| **Database** | The database for the active partition. |
| **Schema** | The schema for the active partition. |
| **Vendor Version** | The database vendor version. See [Supported Database System Vendors](../../system-requirements.md) for more information. |
| **Database supports case insensitive search** | Specifies that the search operations in the database are case insensitive. If the search is case sensitive, extra case modifers are added to string expressions in the where-clauses. |
| **Connect / Disconnect** | Button to connect to, or disconnect from the directory, based on the specified database connections. Disconnect only to modify the database connections. |
| **Global Filter Table** | It is possible to have several data sets within the same database. To do this all the object classes must be connected to a common object class which is used as a global filter to split the data. For example, in an economy or accounting system there can be information for several client companies. The Company object class is connected to all object classes containing relevant information, and can therefore be set as a global filter. A [data set](data-set-properties.md) can then be created for each client company. |
| **Default Language** | The default language for the application model. For more information, see [Translate the Application Model to Other Languages](../../../how-to/translate-the-application-model-to-other-languages.md). |
| **Genus Docs URL** | The URL associated with the online help for Genus Apps. The default URL is [https://docs.genus.no/](https://docs.genus.no/).  Leave this field blank if you do not need to host the online help on a local web server. |


**Edit Data Link**

The edit data link window lets you enter the individual fields, and then constructs the data link string for you.

| Property | Description |
|--|--|
| **Server Name** | Property of the database server. |
| **Sign in to the server using** | Specify how to sign in to the database server. |
| **Windows Authentication** | Use windows authentication to sign in. |
| **Database System Authentication** | Use authentication provided by the database using the following credential values:<ul><li>**User Name** - User name for database authentication.</li><li>**Password** - Password for database authentication.</li></ul> |


## Database Objects

The list of database objects which are stored in the directory database is populated by quering the database dictionary.

| Property | Description |
|--|--|
| **Name** | Name of the database object |
| **Partition** | Identifies which part of the directory the database objects resides. <ul><li>**Descriptive** - The descriptive part of the directory, which is static during execution.</li><li>**Active** - The active part of the directory, which may change during execution.</li></ul> |
| **Status** | The status of the database object. The status of an object is also indicated by the font color of the item.<ul><li>**Ok** (black font)</li><li>**Not Found** - The database object is required by Genus, but could not be found in the database (blue font)</li><li>**Unknown** - The database object exists in the database, but is not recognized by Genus (red font)</li></ul> |


To refresh the list of database objects, click **Refresh**.

**Create an Administrator Account**

To create an administrator account, click **Create an administrator account**. For more informations, see [Configure Genus Services - Step by Step](../configure-genus-server--step-by-step.md).

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

    | SQL Statement | Description |
    |--|--|
    | **DROP TABLE** | Script to drop the selected database objects. |
    | **CREATE TABLE** | Script to create the selected database objects. |
    | **CREATE INDEX** | Script to create indexes for the columns of the selected database objects. |
    | **CREATE FUNCTIONS** | Script to create database functions required for the operation of the application. Which functions are included in the resulting script depends on the selected database platform. For example: for ORACLE platforms, a spesific GUID conversion function is required for certain join operations. |

*  Click **Next**.
*   Review the generated script, and click **Copy to Clipboard** if you want to paste the script in a SQL tool, or click **Save to File** to save the script to a file.
*   Click **Finish**.



## Authentication

### Active Directory Address
| Property | Description |
|--|--|
| **Default LDAP Path** | Use the default LDAP path for Active Directory. |
| **Specified LDAP Path** | Use this option to limit the scope for LDAP queries, or direct the queries to a specific domain controller. For more information, see [The LDAP URL Format](https://tools.ietf.org/html/rfc2255), and [Object Naming](https://technet.microsoft.com/library/cc977992). |
| **Host Name [:Port No]** | Specify the host name, and optionally the port, for the domain controller to use for LDAP queries. |
| **Distinguished Name** | Objects are located within Active Directory domains according to a hierarchical path, which includes the labels of the Active Directory domain name and each level of container objects. The full path to the object is defined by the distinguished name (also known as a "DN"). |
### Active Directory Identification
| Property | Description |
|--|--|
| **Genus accounts are identified using the following Active Directory account field** | The following options are available:<ul><li>**objectGUID** - The unique identifier for the object in Active Directory. This attribute is a Globally Unique Identifier (GUID). When an object is created in the Active Directory, the Active Directory server generates a GUID and assigns it to the object's objectGUID attribute.</li><li>**objectSID** - The security identifier (SID) of the user. The SID is a unique value used to identify the user as a security principal. Each user has a unique SID issued by a Windows domain and stored in objectSid attribute of the user object in the Active Directory.</li><li>**sAMAccountName** - The sign in name for the user, used to support clients and servers from a previous version of Windows. The sAMAccountName should be less than 20 characters to support these clients and servers. For more information, see [User Naming Attributes](https://msdn.microsoft.com/library/ms677605.aspx).</li></ul> |
| **Identity to be used when performing Active Directory queries** | Specify which identity to use for queries to Active Directory. The chosen identity must have the required privileges and permissions to Active Directory to perform the queries. |
| **IIS Default Application Pool Identity** | Use the identity of the application pool. For the Genus Server web site the application pool is called **Genus Services Web Site AppPool** and which by default runs with the Network Service identity. If, for any reason, this application pool is configured to run with an identity which does not have appropriate access to the Active Directory, another identity with appropriate access must be specified below. |
| **Active Directory Identity** | Use a specific identity to query Active Directory. Requires values in the fields for User Name and Password. |
| **User Name** | The user name of the identity to use for LDAP queries. |
| **Password** | The password for the identity to use for LDAP queries. |

### App Clients
| Property | Description |
|--|--|
| **Sign out after n seconds of inactivity** | The app clients without any activity are signed out automatically after the specified number of seconds. If no number is specified the app clients are signed in indefinetely. |
| **Allow Remember Credentials** | The app clients are offered an option to remember credentials upon sign-in. |
| **Token expires after** | (Only available if "Allow Remember Credentials" is selected). This option will limit how long the client is allowed to remember the credentials. If no value (days and hours) is specified a default of 30 days will be applied. The value is a trade-off between security and convenience. |
| **Token Decryption Phrase** |(Only available if "Allow Remember Credentials" is selected). If an unprotected device is lost and the user has selected "Remember me" during the sign-in process an administrator may invalidate **all** remembered credentials on all devices by entering any random string in this text box. By design this is to be considered as a "security emergency break", as all this will have an impact on all users. |
| **Allow Reset Password** | The app clients are offered a link to reset the password from the sign in screen. | 

### Desktop Clients
| Property | Description |
|--|--|
| **Credential Store** | Specify which credential store to use for the desktop client users. The following options are available: <ul><li>**Genus Directory** - Use Genus Directory to store credentials for user accounts when signing in to Genus Desktop.</li><li>**Active Directory** - Use Active Directory to store credentials for user accounts when signing in to Genus Desktop.</li></ul> |

### Security Group Administration


| Property | Description |
|--|--|
| **Security Group Administration** | Specifies where the security groupes are managed. The following options are available:<ul><li>**Genus Directory** - The security groups are managed in Genus Directory.</li><li>**Active Directory** - The security groups are managed in Active Directory. This option is only available if the Desktop Credential Store is set to Active Directory.</li></ul> | 


## Logical Databases

The logical databases are used in the application model to [specify the location of object classes](../../../defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/data-provider.md). The logical databases are then [mapped](data-set-properties.md) to physical databases depending on which data set the user are signed in.

A logical database can be shared between all data sets, and the mapping to a physical database is then done only once in the logical database itself.

*   To add a logical database, click **Add**.
*   In the **Name** box, enter the name of the logical database.
*   If the logical database is shared between all data sets, select **Data in this logical database are shared between data sets**, and then select a database in the **Physical Database** list.
*   Click **OK**.



## Physical Databases

There are many scenarios where there are several physical databases defined. For example; if the application accesses data from several other solutions, or if there are many data sets.

To add a physical database, click **Add**.

| Property | Description |
|--|--|
| **Name** | The name of the physical database. |
| **Data Link** | The data link string for the connection. Type the string in the box, or click **Edit** to open the **Edit Data Link** window described below. |
| **Vendor Version** |The vendor and version of the database where the physical database resides. |
| **Optionally specify the database and schema** | |
| **Database** | Property of database. |
| **Schema** | Property of schema. |
| **Connection is read only** | Specifies that no changes to the data in this database is allowed. |
| **Database supports case insensitive search** | Specifies that the search operations in the database are case insensitive. If the search is case sensitive, extra case modifers are added to string expressions in the where-clauses. |
| **Delimit names** | |

To test the connection using the entered settings, click **Test Connection**.

 ### Edit Data Link

The edit data link window lets you enter the individual fields, and then constructs the data link string for you.

| Property                           | Description |
|------------------------------------|-------------|
| **Server Name**                    | Property of the database server. |
| **Sign in to the server using**    | Specify how to sign in to the database server. |
| **Windows Authentication**         | Use windows authentication to sign in. |
| **Database System Authentication** | Use authentication provided by the database by specifying the two next fields. |
| **User Name**                      | User name for database authentication. |
| **Password**                       | Password for database authentication. |


## Allowed Origins

Cross-origin resource sharing (CORS) is supported, and the list of allowed origins specify the trusted combinations of scheme, host name, and port, as defined by av [RFC 6454, Section 7.1](https://tools.ietf.org/html/rfc6454#section-7.1).

The default is that there are no entries, and origins should be added with caution. The all-domain wildcard, the asterisk "*", should be avoided.

The following are examples of valid origins. In each case, at least one of the scheme, host, and port component will differ from the others in the list.

```
   http://example.com
   http://example.com:8080
   http://www.example.com
   https://example.com:80
   https://example.com
   http://example.org
   http://ietf.org
```
To add an allowed origin, do the following:

*   Click **Add**.
*   In the **Origin** box type the origin as a combination of protocol, host name, and port number.
*   Click **OK**.



### See Also

* http://en.wikipedia.org/wiki/Cross-origin_resource_sharing
* https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

## Trusted Users
> [!NOTE]
> Access given to trusted users is replaced by [app model admin rights](../../../defining-an-app-model/security/app-model-administrators.md) in version 2018.2.

The trusted users have access to Genus Studio, and can modify and manage the application model in the directory.

To add a trusted user, do the following:

*   Click **Add**.
*   Type the user names of the users to trust, separated by semicolon.
*   Click **Check Names**, and verify that the user was recognized.
*   Click **OK**.

To remove a trusted user, do the following:

*   In the list of trusted users, select the trusted user to remove.
*   Click **Remove**.

