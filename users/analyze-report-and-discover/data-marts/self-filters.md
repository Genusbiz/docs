# Self filters in data marts

Some analyses may only be meaningful when filtered on the current users identity, called self. E.g: a district manager should only see data for stores within his district. Such self-filters are imposed on the data sources in the data mart, where one data source is marked as the "self data source", while other sources may be filtered on self. The filtering dimensions (the connections between the self data source and the filtered sources) may be different from the connections made for selection-propagation. Even though self filters limits the amount of data the user may see, they should not be considered security measures.


## Understanding self and self filters

Self is a representation of the currently logged in user. To use self filtering, a data source with the self data type needs to be included in the data mart. Add this data source as described in [Data-model view](data-model.md), if necessary. All data sources needed for the self connections needs to be added in the **Data-model**-view.

Self connections and -filters are managed in the **Self-filter**-view. You can add data sources to this view from the data sources already added to the data model. Adding data sources to this view is similar to adding datasources to the **Data-model**. Right-click in the view and click **Insert -> Data Sources...**. Add the data source representing the logged in user, and check the option **Use as self**. 

Add any data sources that needs to be limited by self in the same way. Check the option **Filter on Self** on each filtered data source.


## Self connections

Filtering data sources on self requires a filtering dimension. This connection is created in a similar way as in the **Data-model**-view, but may use other paths between data sources. 