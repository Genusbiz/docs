# Special considerations for Azure SQL Database

> [!NOTE]
> The term directory in this article refers to the usage of the term prior to release 2018.1 of Genus Apps. Both this article and Genus Apps will be updated to reflect the new definition of the term in a later release. See the definition of [directory](../../../terminology.md#directory) and [app model](../../../terminology.md#app-model) for more information.

Prerequisite:
* Make sure the database for the directory (e.g: g_dir) has two schemas for Active and Descriptive partition, e.g: _g_desc_ and _g_active_.

> [!NOTE]
> For Azure SQL Database Managed Instance, follow the standard procedures for Microsoft SQL Server. Vendor Version has to be set to "Microsoft SQL Server 2016".

## There are certain settings that should be adjusted in the Azure SQL installation in "Genus Configuration"
* Specify "Microsoft SQL Server 2016 as the vendor version.
* Include "Initial Catalog" in the connection string.
* Leave the "Database" field for Active and Descriptive partition blank.
* Fill in "Schema" field for Active and Descriptive partition. Use different names, e.g: g_desc and g_active.
* Configure "Physical Database Properties" in the same way as the directory database, by using a schema instead of a database.
* Check "Delimit Names".
* Click "Advanced.." and add name "AZURE" with value "1".
* Create g_lock-table for the schema containing the data (eg. g_data.g_lock).
* If Audit trail/Event log is enabled for Object Classes, create the g_audit_trail-table for the schema containing the data.
* Connection string example:
```
Password=<password>;User ID=<username>@<server name>;Initial Catalog=<database name>;Data Source=tcp:<server name>.database.windows.net
```

## Not supported features:
* Editing of file data.
* Audit trail on modelled classes.
* Multiple databases.
* [FILESTREAM](https://docs.microsoft.com/en-us/sql/relational-databases/blob/filestream-sql-server) data type.


Connection string example
```
Password=<password>;User ID=<username>@<server name>;Initial Catalog=<database name>;Data Source=tcp:<server name>.database.windows.net
```
