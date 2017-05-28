## Specifying a Database and a Schema for a Data Link

Microsoft SQL Server:

*   **Database**: Your Microsoft SQL Server database (required)
*   **Schema**: A Microsoft SQL Server schema (optional)
*   The queries produced by Genus will adhere to the format in the following example: _SELECT * FROM <database>.<schema>.<table name>_, where _<table name>_ is one of your database's tables.

Oracle:

*   **Database**: Not applicable
*   **Schema**: An Oracle schema (required)
*   The queries produced by Genus will adhere to the format in the following example: _SELECT * FROM <schema>.<table name>_, where _<table name>_ is one of your database's tables.

See [here](system-requirements.md) for more information about supported database system vendors and versions.