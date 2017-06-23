# Data Filtering

**Exact Match**

Exact match of search text occurs whenever a user searches for an object from an Object Class by typing a text. For example, in a text box in a Form containing a reference to an object. For a given Object Class you can select one property to filter on when exact match is used to look up an object from the Object Class. Typically you would select a property that holds few or no duplicate data, for example _Employee Number_. The data type for the property has to be character or string, float, integer, date or date and time.

**Auto Complete**

Auto complete of search text occurs whenever a user searches for an object from an Object Class by typing a text. For example, in a text box in a Form containing a reference to an object. For a given Object Class, you can select one or more properties to filter on when auto complete is used to look up objects from the Object Class. For example, if an Object Class describing a _person_ contains the properties _first name_ and _surname_, you should include both properties in the auto complete filter so that users can search for a _person_ by typing a _firstname_ or a _surname_. If you select a property with a complex data interpretation, data are filtered on the autocomplete properties defined in the referred Object Class.

Note that if the value for one of the properties included in the auto complete filter is satisfied for a given object, the object is suggested as a potential match. Auto complete does not perform an exact match of the search text.

**Auto Filter**

Applies only if a Filter Object Class is defined in your directory, and the Object Class contains a property with a complex data interpretation equal to the Filter Object Class. The Filter Object Class is defined in Genus App Services. A Filter Object Class is typically used when data are partioned on an Object Class. For example, the tables in many ERP systems contains data for several companies.

By default, data for all Object Classes are automatically filtered by the Filter Object Class. In some cases you may want to consolidate data. To remove this filter, click to clear the **Enable Auto Filter** check box.