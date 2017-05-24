## Special Considerations for Azure SQL

There are certain settings that should be adjusted in the Azure SQL installation in "Genus Configuration"
* Specify "Microsoft SQL Server 2016 as the vendor version.
* Include "Initial Catalog" in the connection string.
* Leave the "Database" field for Active and Descriptive partition blank.
* Fill in "Schema" field for Active and Descriptive partition. Use different names, e.g: g_desc and g_active.

Configure "Physical Database Properties" in the same way as the directory database, by using a schema instead of a database. Check "Delimit Names"

Not supported features:
* Editing of file data.
* Audit trail on modelled classes.
* Multiple databases.
* FILESTREAM data type.