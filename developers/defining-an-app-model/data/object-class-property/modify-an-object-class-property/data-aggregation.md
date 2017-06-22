## Data Aggregation

Applies to bound properties with data type **Float** and **Integer** data types, and properties with a complex data interpretation.

Aggregations are built by changing the granularity on specific dimensions and aggregating up measures along these dimensions. Dimensions in an Object Class are represented by properties with a complex data interpretation. Measures are represented by numeric properties with a simple data interpretation.


## Setup for Properties with a Simple Data Interpretation

**Enable as Measure in Reports**

Select the **Enable as Measure in Reports** check box if the property should be available as a measure when defining Reports that aggregates data from the Object Class.

**Enable Series Calculation at Detailed Level**  
To aggregate data for the property, select the **Enable Series Calculation at Detailed Level**. This option will take effects for the property in Basic View.

To read more about Basic View, see [View](../../object-class/modify-an-object-or-identifier-domain/explore.md).

**Aggregation Method**

Select the function to use as default when data are aggregated for the property. Note that you can change the aggregation method for a property in individual Report, except for the custom aggregation method which is not interchangable.

The following aggregation methods are supported:

*   Sum
*   Average
*   Max
*   Min
*   Count
*   Standard Deviation
*   Median
*   Custom

For all aggregation methods, except Custom, the aggregation expression is added automatically when used. For example. the property Amount can have a aggregation method Sum, which means that the "SUM( )" function is added to the column name "amount", resulting in the RDBMS expression "SUM(amount)".

The Custom aggregation method, on the other hand, does not add any aggregation function to the expression, but the RDBMS expression is then expected to represent a complete self contained aggregation expression. For example. the percentile function in ORACLE can be used by entering the expression "PERCENTILE_CONT(0.8) WITHIN GROUP (ORDER BY ?.amount ASC)".



## Setup for Properties with a Complex Data Interpretation

**Object Set Size**

This information is used when aggregating data in a Report. The set size determines how to split the database queries when aggregating data on the dimension represented by the property. If the Object Class contains large volumes of data, you can speed up performance by splitting an aggregation query into queries requesting a smaller amount of data.

*   **Max Group Set**. The number of objects included in each request when data are grouped on the property. For example, when aggregating _sales volume_ by _product category_. If a max group set is defined, and number of _product categories_ included in the aggregation exceeds this limit, the query is split into two or more queries.
*   **Max Filter Set**. The number of objects included in each request when data are filtered on the property. For example, when aggregating _sales volume_ for a given set of _product categories_.
*   **Min Having Set**. When data are grouped on the property, and number of objects included in an aggregation exceeds this limit, the criterion for selecting the objects is converted from a SQL WHERE clause to a SQL HAVING clause. This limit can be useful if the property represents a dimension with a small number of members, and queries frequently involve most of the members. For example, a dimension containing the members _Male, Female_ and _Unknown._ Queries aggregating data on this dimensions will frequently involve all members except _Unknown_. A WHERE clause restricts the number of rows that the computer has to aggregate. A HAVING clause aggregates all the rows in the table, then discards aggregations which not should be included in the result set.

