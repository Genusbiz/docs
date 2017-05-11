## Data Aggregation

Aggregations are built by changing the granularity on specific dimensions and aggregating up measures along these dimensions. Dimensions in an Object Class are represented by properties with a complex data interpretation. Measures are represented by numeric properties with a simple data interpretation.

To allow users to aggregate data from other Object Classes along objects from this Object Class in reports, select the **Enable as dimension in reports** check box.

In this article

* * *

*   [Data Paths](#data-paths)

*   [Data Aggregates](#data-aggregates)

* * *

## Data Paths

When data are aggregated along a dimension, there may be more than one possible way to aggregate data. For example, in a project based organization where employees and projects are organized in departments, an employee may work on projects across departments. When analyzing sales data by department, the data can either be aggregated along the department for the employee, or the department for the project.

The **Data Paths** list contains one item for each Object Class which can be used for aggregating data from this Object Class. To select a default path for an Object Class, click the arrow in the **Path** cell. In the list, select a property or a connection to the Object Class.



## Data Aggregates

An important mechanism to minimize the time to answer aggregate queries is the use of data aggregates. The combination of all possible aggregations and the base data contain the answers to every query which can be answered from the data. Due to the potentially large number of aggregations to be calculated, often only a predetermined number are fully calculated, while the remainder are solved on demand.

When aggregating data from an Object Class, Genus looks for a data aggregate which contains all the dimensions and measures involved in the query. If more than one aggregate is found, the aggregate with the lowest estimated number of rows is selected. This estimate is specified as part of the [general settings](general settings.md) for an Object Class.

A data aggregate is defined by associating an Object Class with another Object Class containing the aggregated data. To add a new association, do the following:

1.  In the **Data Aggregates** list, click **Add**.
2.  In the **Data Aggregate** dialog box, select the Object Class containing the aggregated data in the **Aggregate Object Class** box.
3.  In the list below, associate properties and connections in the Object Class (**Base Property**) with a property or connection in the aggregate Object Class (**Aggregate Property**). Since you are defining an association to aggregated data with a lower granularity, some **Base Properties** with a complex data interpretation would not be associated with an **Aggregate Property**.

The following rules applies for associating properties and connections:

*   Available **Base Properties** are restricted to properties with a complex data interpretation, numeric properties with a simple data interpretation [enabled as measures](../../object class property/modify an object class property/data aggregation.md), and connections.
*   If the **Base Property** is a property, the associated **Aggregate Property** has to be a property.
*   If the **Base Property** is a connection, the associated **Aggregate Property** can be either a property or a connection.
*   The data interpretation for the **Base Property** and the **Aggregate Property** has to be the same.

