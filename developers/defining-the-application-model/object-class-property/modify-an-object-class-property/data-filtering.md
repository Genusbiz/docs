## Data Filtering

Applies to bound properties of type **Data**, and properties of type **Function** where the value is calculated using an RDBMS expression. The data type for the property can not be a binary data type.

When filtering data for an Object Class, the user enters one or more search criteria for the properties provided by the Object Class. For each object, the search criteria is compared to the values stored in the properties for the object. The values are compared using a search operator, such as, _equal to_ or _greater than_. To make a property searchable, you must specify a filter method for the property.

**Filter Method**

Determines which search operators that are available to the user when filtering data. Available filter methods vary based on the data type for the property. If the data interpretation for the property is of a complex type, the filter method **Object Selection** is provided for all data types. When filtering data, the user can select an object from the Object Class the property refers to.

For more information about available filter methods, see the article [Filter Methods](../../../../users/navigate-view-modify-and-control/working-in-tables/filter-methods.md "Filter Methods").

**Default Operator**

The operator which is selected as default in search dialog boxes.

**Case Sensitive**

Applies to properties with data type **Character or String**. By default, this option is selected, and text searches are case sensitive. If case should be ignored when filtering data, click the **Case Sensitive** check box to clear this option. Note that this can have a negative impact on the performance if your database not is indexed properly.

If the table associated with the Object Class is located in a database supporting case insensitive search, all text searches are by default case insensitive, and the setting for this option will not affect the search result. Whether the database supports cases insensitive search is defined in the [physical database setup in Genus Configuration](../../../installation-and-configuration/configure-and-maintain-genus-server.md).