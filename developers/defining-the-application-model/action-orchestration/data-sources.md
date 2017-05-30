## Data Sources

Data sources are used by forms, tables and actions as sources of information. A data source is made up of fields and groups. The kind of data stored in a field or group is defined by the **data type**. Data types are categorized in **simple data types** and **complex data types**. Simple data types include Boolean, Calendar Time, Integer, Integer Date, Integer Time, Internet Address, Large Integer, Real, Stream Data and String. Complex data types are defined in your Directory. For example *Customer or a Schema*. A field can store data for both simple and complex data types. A group is by definition a complex data type. For example, if you add a data source of type *Customer*, the data type for the top-level group in the data source is *Customer*. Within a data source, a group can be defined as **repeating**, meaning that data for the group occurs more than once. For example all *Products* in a given *Product Category*.

The different types of data sources are:

*   **Object**. An object defined in the Directory; for example *Customer*. Also includes the Account data source and local Custom data sources.
*   **Local Object**. An object defined within a form, table, task, agent, rule, or web service.
*   **XML Document**. A Schema defined in the Directory.
*   **Report**. A Report defined in the Directory.
*   **File**. File Folder, General File, Mail Message, Contact, Calendar Item, or Microsoft Project.
*   **System**. Print Settings.

**Topics in "Data Sources"**
* [Add a Data Source](data-sources/add-a-data-source.md)
* [Add a Local Object Data Source](data-sources/add-a-local-object-data-source.md)
* [Specifying a Data Filter for a Data Source](data-sources/specifying-a-data-filter-for-a-data-source.md)
* [The Account Data Source](data-sources/the-account-data-source.md)
* [File Data Sources](data-sources/file-data-sources.md)