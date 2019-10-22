# Views

By designing different views of your table, you can offer users different ways to look at data. For example. you might create a special view that is optimized for printing, or you might create a high-level summary view to eliminate some of the details in a complex table.

In a view you can define elements such as:

*   Which row templates and columns to display.
*   Sorting and grouping of data.
*   Various display options for columns, rows and cells.
*   Printing options.
*   Mandatory and default data filters.
*   Search and refinement settings.
*   Filter pane.
*   Reading pane.
*   Legend.
*   Restrict access to a view by granting read permissions to user accounts and groups.


## Add or copy a View

To add a new View, do the following:

1.  In the **Table Description** area, click **Views**.
2.  In the **Task Pane**, click **Add a View**.
3.  In the **Properties** area, configure settings for the view. The different settings are described in the sections below.

A new view can also be created based on an existing view. This can save time when there are many similarities between views. To copy a view, do the following:

1.  Right click the view to copy, and then click **Copy View**.
2.  In the **Properties** area, change the name of the view, and then change any other configuration settings as required. The different settings are described in the sections below.



## General settings

To modify the general settings for a view, click the view in the **Views** list, and then in the **Properties** area, click the **General** tab.

Property             | Description
---------------------|-------------------
Name                 | The display name for the view.
Tip                  | A short description of the purpose and content for the view.
Enabled              | By default a view is enabled. To disable a view, click to clear the **Enabled** check box. When a view is disabled, users can not select the view.
Default              | When a table is opened, users see the view designated as the default view. Only one view can be designated as the default view. However, when you create a shortcut to a table in the [Navigation Pane](../navigation-pane.md "Navigation Pane"), you can change which view that is set as the initial view. You can also choose to create one shortcut for each of the views in the table. For example, if you have a table which contains to-do tasks, you can create different views, such as *Tasks Due this Week*, *Overdue Tasks*, and *Completed Tasks*, and create one shortcut to each of the views.
Enabled for user defined actions  | Check this option to make the table view visible for analysis. See the analysis documentation for how to use a published table.
Symbol               | You can define a symbol for your table view. The symbol will appear as a default symbol in views.
Rows                 | If your table contains more than one row template, you can choose which of the row templates that should be included in the view. By default, data for all row templates are read. To select one or more row templates, do the following:<br><br>1.  Click **Rows**.<br>2.  In the **Available Rows** list, click the row template you want to add, and then click **Add**.<br><br>If no row templates are selected, data for all row templates are read.
Columns              | Determines which columns to display, and the order the columns are displayed in. By default all columns are displayed. To change which columns to display, do the following:<br><br>1.  Click **Columns**.<br>2.  To enable users to select a column, in the **Columns** list, select the **Available** check box.<br>3.  To display a column by default, in the **Columns** list, select the **Visible** check box.<br>4.  To move a column, in the **Columns** list, click the column you want to move, and then click **Move Up** or **Move Down** until the column is in the position you want.
Group By             | A group is a set of objects with one common attribute, for example *products* within a *product category*. When you group objects in a table, the objects are displayed below a shared heading. To group objects, do the following:<br><br>1.  Click **Group By**.<br>2.  In the **Group By** dialog box, click **Add**.<br>3.  Under **Field**, in the **Group By** box, select the column that you want to group.<br>4.  You can enhance grouping by selecting a group interval in the **Group Interval** box. For example, you can group *sales by date* and then include group intervals that show totals for each day, month or year. Intervals are not confined to columns with a calendar time data type, however. You can also use them with columns containing text and numbers as well. For example, a column containing employee names could have intervals that segments results by the first letter of the employee.<br>5.  In the **Initial****Display** box, select if the groups should be expanded or collapsed as default.<br>6.  To group by an additional column, click **Add** and repeat steps 3 through 5.<br><br>If you do not want to allow users to change the grouping, you can specify that grouping not is allowed for a column in the table layout.
Sort                 | Determines how objects are sorted. To sort objects by one or more columns, do the following:<br><br>1.  Click **Sort**.<br>2.  In the **Sort** dialog box, click **Add**.<br>3.  Under **Field**, in the **Sort By** box, select the column that you want to sort.<br>4.  Under Sort Order, select Ascending or Descending sort order.<br>5.  To sort by an additional column, click **Add** and then repeat steps 3 through 4.<br><br>**Note!** If the data type for the column points to a code domain, data are sorted according to the logical sort order defined for the code domain. For example, in a code domain which defines some kind of workflow status, the codes may be specified in the following order: *Not Started*, *In Progress* and *Completed*.<br><br>If you do not want to allow users to change the sort order, you can specify that sorting not is allowed for a column in the table layout.




## Display settings

To modify the display settings for a view, click the view in the **Views** list, and then in the **Properties** area, click the **Display** tab.

### Column options

Property                    | Description
----------------------------|----------------------------
Show Headers                | Displays column headers.
Shade Alternate Columns     | Shades every other column in the table.
Allow Rearrange Columns     | Determines if users are allowed to rearrange the display order of columns.
Sort on All Bound Rows      | Applies to tables where one or more row template are bound to another row template. That is, objects are presented in a hierarchical structure. By default, objects on all levels are sorted. To restrict sorting to objects on the top level, clear this option.
Auto Filter All Bound Rows  | Applies to tables where one or more row template are bound to another row template. That is, objects are presented in a hierarchical structure. By default, objects on all levels are filtred. To restrict filtering to objects on the top level, clear this option.


### Row options

Property                    | Description
----------------------------|----------------------------
Show Indicator              | The row indicator is displayed at the left edge of the table as a solid black triangle, and identifies the active object.
Show Numbers                | Displays a column at the left edge of the table where each row are numbered in sequential order.
Shade Alternate Rows        | Shades every other row in the table.


### Cell options

Property                    | Description
----------------------------|----------------------------
Show Vertical Grid Lines    | Displays vertical grid lines between each row in the table.
Show Horizontal Grid Lines  | Displays horizontal grid lines between each column in the table.


## Print Settings

To modify print settings for a view, click the view in the **Views** list, and then in the **Properties** area, click the **Printing** tab.

Property         | Description
-----------------|----------------------------
Page Orientation | The default page orientation used when printing the contents of a table. By default, the page orientation for a view is **Portrait**.


## Filtering data in a View

To filter data in a view, click the view in the **Views** list, and then in the **Properties** area, click the **Data Filters** tab.

For each data source you can define a mandatory and a default data filter. Users are not allowed to search outside the restriction given by the mandatory data filter. The default data filter is applied when the table is opened. The first time a user searches for data, this filter is overwritten. Data filters for data sources which not are bound to a row template can not be overwritten by users.

For more information on how to define a data filter, see the article [Specifying a Data Filter for a Data Source](../../logic/action-orchestration/data-sources/specifying-a-data-filter-for-a-data-source.md "Specifying a Data Filter for a Data Source").

**Note!** The data filter defined for a data source in the data source setup is appended to the mandatory data filter defined in a view.



## Search settings

To modify search settings, click the view in the **Views** list, and then in the **Properties** area, click the **Search** tab.

To allow users to search for data, select the **Enable Search** check box. To allow users to use this view to search and view search results, select the **Enable as Search View** check box. To allow users to use this view to perform [accelerator searches](../../../../users/search-and-refine/search-with-accelerators.md), select the **Enable as Accelerator Search** check box. If you want to expand the search pane when the table is opened, select the **Expand Search Pane on Open** check box.

You can configure the search pane in two ways:

*   Define which data sources that users are allowed to search in.
*   Define one or more named search fields, and map each search field to fields in your data sources.

### Define which Data Sources that users are allowed to search in

1.  Click **Data Sources**.
2.  In the **Data Sources** list, click **Add**.
3.  Under **Data Source**, select a data source defined in your table.
4.  Under **Name Override**, optionally type a name.
5.  Under **Binding**, optionally specify a binding to another data source defined in your app model. A binding allows user to search for data in the data source selected in step 3 by entering the search criteria on the bound data source. For example, in a multidimensional table presenting budget figures by project and month, you may want to enable users to search for projects based on attributes defined for the employee which is responsible for the project. To do this, add the *Project* data source to the list of available data sources. Under **Name Override**, type *Project Responsible*. Define a binding to the Employee data source in your app model, such as *Project **join with** Employee **By** Employee **is equal to** Project.Responsible*. If a user enters a search criterion such as *Project Responsible.Department = Engineering*, all projects where the responsible is working in the *Engineering department* are displayed.
6.  To add an additional data source, click **Add** and repeat steps 3 through 5.

### Define named search fields

Named search fields are typically used in a table displaying data from two or more data sources. A named search field enables users to enter a search text, and then apply the search to one or more data sources bound to a row template.

To define a named search fields, do the following:

1.  Click **Named Search Fields**.
2.  In the **Fields** list, click **Add**.
3.  In the **Name** box, enter a name for the search field.
4.  In the **Screen Tip** box, optionally enter a short description.
5.  In the **Data Type** box, select the kind of data to search for.
6.  In the **Filter Method** box, select which search operators that are available to users when filtering data. Available filter methods vary based on the data type for the search field. For more information about available filter methods, see the article [Filter Methods](../../../../users/navigate-view-modify-and-control/working-in-tables/filter-methods.md "Filter Methods").
7.  In the **Default Operator** box, select the search operator which should be selected as default in the search pane.
8.  When users enter a search text in the search box located at the top-right corner of a table, all search fields where the **Allow Generic Search** option is selected, are included when searching for data. Typically you would select this option for columns containing data which identifies an object in some way, such as the name of a customer or the number for an invoice.
9.  For search fields where the **Allow Generic Search** option is selected, you may not want to add the field to the search pane. To do this, click to clear the **Enable as Search Field** check box.
10.  If you do not want to display the search field by default, click to clear the **Default Visible** check box.
11.  To map the search field to a field in one of your data sources, in the **Mapped Fields** list, click **Add**, and then select a field from one of your data sources bound to a row template. The data type for the field has to correspond with the data type for the search field. You can map multiple fields to a single search field.

To change the display order for a search field, click the field in the list, and then click **Move Up** or **Move Down** until the field is in the position you want.



## Refiners

[Refiners](../../../../users/search-and-refine/refiners.md "Refiners") enables users to narrow broad searches and get to the right content faster. You can choose to include all refiners enabled for the data sources defined in your table, or select a specific set of refiners defined in your app model.

1.  Click the view in the **Views** list.
2.  In the **Properties** area, click the **Refiners** tab.
3.  If you want to include all refiners enabled for the data sources defined in your table, click **Inherit Enabled Refiners from Data Sources**. Note that this option not is available in tables with a multidimensional layout. To select a specific set of refiners defined in your app model, click **Select Refiners**, and then click **Add**.

To show the refiner pane by default when a table is opened, select the **Show Refiner Pane** check box.



## Summarize applied data filters in the Filter Pane

The filter pane is displayed at the bottom of the table, and presents a summary of the current data filters applied to the data sources included in the table.

To show the filter pane by default when a table is opened, select the **Show Filter Pane** check box.

In the data sources list, select which data sources to include in the filter summary. To change the order in which the filters are displayed, click a data source, and then click **Move Up** or **Move Down** until the data source is in the position you want.



## Define a Reading Pane to preview objects

To enable users to preview objects in a table without opening them, you can turn on the reading pane feature for the view:

1.  In the **Views** list, click the view.
2.  In the **Properties** area, click the **Reading Pane** tab.
3.  Select the **Enable Reading Pane** check box.
4.  If the reading pane by default not should be displayed, in the **Layout** section, click **Off**. To turn on the reading pane, click **Right** or **Bottom**.
5.  For each data source bound to a row template, select which form and view to use for previewing objects. Only forms where the data source is a master data source can be selected, and only views with reading pane style can be selected. If only some of the data sources in the table should have a reading pane, select **None** for the ones that should not.



## Identify icons and colors by using a Legend

A legend identifies the icons or colors assigned to rows and cells in a table. For example, in a table presenting customers, you can use an icon as the display value to visualize the credit rating for a given customer. To describe the meaning of the icon, you can add a legend to the table. Each entry in the legend is displayed using an icon or color, followed by a short description.

To define a legend, do the following:

1.  In the **Views** list, click the view.
2.  In the **Properties** area, click the **Legend** tab.
3.  Select the **Enable Legend** check box.
4.  Choose if the legend is displayed at the top, bottom, left, or right, or if the legend by default is hidden.
5.  Legend entries are defined by a code domain. In the **Entries** list, click **Add**.
6.  Under **Code Domain**, select a code domain defined in your app model.
7.  Under **Name Override**, optionally enter a name for the entries.
8.  Under **Symbol**, choose if the entries displays the icon or the color associated with the values in the code domain.
9.  To add another set of entries, click **Add** and repeat steps 6 through 8.

To change the display order for an entry, click the entry in the list, and then click **Move Up** or **Move Down** until the entry is in the position you want.



## Grant permissions to a View

To restrict access to a view, you can grant read permissions to individual user accounts and security groups. To do this, follow these steps:

1.  Click the view in the **Views** list, and then in the **Property** area, click the **Security** tab.
2.  Click **Select Users or Groups**.
3.  Click **Add**.
4.  Type thename of the group or user you want to grant permissions to.
5.  Click **Check Names**.
6.  If the group or user not could be found, click **Advanced** to select a group or user, or type another name.

