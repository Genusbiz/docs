# Search Across Many Data Sources

Genus allows you to search across many data sources. Sometimes is it useful to search in many data sources in one operation. If your model contains data sources with properties with the same data type, you can bind the properties to the same search field. This gives you a more complex and efficient search.

The picture below show search for data in data sources Resellers Sales and Internet Sales. The search fields are bound to several properties in different data source. For example, the search field Product is bound to the product name property through both the Internet Sales and the Reseller Sales data sources. You can type in text in the Product field, and the search will search across the data sources Resellers Sales and Internet Sales that satisfied the given criteria. The search result will present the result from both data sources in same view.

To search across many data sources, the fields have to be defined in Named Search Field in Table View like the example below for Product field. For more information on how to set this up, see [Search Settings](../defining-an-app-model/user-interface/tables/views.md).

![IDF980C10475F24EB6.png](media/IDF980C10475F24EB6.png)