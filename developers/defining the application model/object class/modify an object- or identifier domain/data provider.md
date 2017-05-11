## Data Provider

**Logical Database**

The location of the database table associated with the Object Class. Logical databases are defined in [Genus Configuration](../../../installation and configuration/configure and maintain genus server.md).

**Table Name**

The name of the database table associated with the Object Class.

**RDMS Naming Method**

*   **Prefix Table Name with Name of Data Set**. The table name is prefixed with the name of the data set in database queries.
*   **Suffix Table Name with Name of Data Set**. The table name is suffixed with the name of the data set in database queries.

Rarely in use. However, some applications partions data by using this naming method. For example, if your directory contains two or more data sets, each representing a company, sales data for each company may be stored in different sales tables in the same database or schema:

*   <CompanyA>SalesData
*   <CompanyB>SalesData

**Estimated Number of Rows**

The approximate number of rows stored in a table. The estimate is used for two purposes:

*   To find the most efficient [data aggregate](data aggregation.md) to minimize the time to answer aggregate queries.
*   To determine if objects can be selected from a drop-down list box in Forms. For example, an <span style="FONT-STYLE: italic">employee works in a <span style="FONT-STYLE: italic">department. To change which <span style="FONT-STYLE: italic">department an <span style="FONT-STYLE: italic">employee works in, the user can select a <span style="FONT-STYLE: italic">department from a drop-down list box, or search for an department. If **Estimated Number of Rows** for the <span style="FONT-STYLE: italic">Department Object Class is less than or equal to the maxium number of objects allowed in drop-down list (100 objects), a department can be selected from a drop-down list box. Otherwise, the user has to search for a <span style="FONT-STYLE: italic">department.

**Read all objects on first accesss**  
Select this option to read all objects from the Object Class into memory in a single operation the first time data are requested. At a later point, if a reference to the object class is found and the referenced object is not in memory, an attempt is made to read the referenced object.

**Read once**

Select this option to keep frequently accessed data in memory. All objects from the Object Class are read into memory in a single operation the first time data are requested. This options is best used on Object Classes with a small amount of data which not is frequently updated, for example an Object Class containing the chart of accounts in an accounting system.