# Data Provider

## Logical database
The location of the database table associated with the Object Class. Logical databases are defined in [Genus Configuration](../../../../installation-and-configuration/configure-and-maintain-genus-server.md).


## Provider name
The name of the database table associated with the Object Class.


## RDMS naming method
*   **Prefix Table Name with Name of Data Set**. The table name is prefixed with the name of the data set in database queries.
*   **Suffix Table Name with Name of Data Set**. The table name is suffixed with the name of the data set in database queries.

Rarely in use. However, some applications partions data by using this naming method. For example, if your directory contains two or more data sets, each representing a company, sales data for each company may be stored in different sales tables in the same database or schema:

*   (CompanyA)SalesData
*   (CompanyB)SalesData
  
## Aging property
Property used to check if a cached object is outdated, e.g. a property which stores the last date an object was modified. If an object is outdated, the cache is updated with values stored in the database. It is highly recommended to specify an aging property in order to reduce concurrency errors. The cache is always updated before an edit operation is allowed to start.

## Read all on first accesss
Select this option to read all objects from the Object Class into memory in a single operation the first time data are requested. At a later point, if a reference to the object class is found and the referenced object is not in memory, an attempt is made to read the referenced object.

## Read once
Select this option to keep frequently accessed data in memory. All objects from the Object Class are read into memory in a single operation the first time data are requested. This options is best used on Object Classes with a small amount of data which not is frequently updated, for example an Object Class containing the chart of accounts in an accounting system.

## Estimated number of rows
The approximate number of rows stored in a table. The estimate is used for two purposes:

*   To find the most efficient [data aggregate](data-aggregation.md) to minimize the time to answer aggregate queries.
*   To determine if objects can be selected from a drop-down list box in Forms. For example, an *employee* works in a *department*. To change which *department* an *employee* works in, the user can select a *department* from a drop-down list box, or search for an department. If **Estimated Number of Rows** for the *Department Object Class* is less than or equal to the maxium number of objects allowed in drop-down list (100 objects), a department can be selected from a drop-down list box. Otherwise, the user has to search for a *department*.

## Enable live update
Live update is a mechanism which allows you to deploy changes in data to clients connected to your application server. This feature is under construction and will be available in the release following version 2018.2.
