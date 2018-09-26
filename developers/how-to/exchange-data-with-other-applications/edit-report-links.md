# Edit Report Links

You can define links to Reports as

*   Tab sheets in a Form.
*   Entries in the Task Pane for [forms](../../defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/explore.md) and [tables](../../defining-an-app-model/user-interface/tables/events.md).
*   [Shortcuts in the Navigation Pane](../../defining-an-app-model/user-interface/navigation-pane.md).

A link is defined by specifying a data filter for the data sources provided by the Report. When you define a link as an entry in the **Task Pane** or as a tab sheet in a Form, the object(s) selected by the user in a table or form, are sent as input when the link is opened. These objects can be used for filtering the data sources provided by the Report, and gives you the opportunity to define context sensitive links.

If you define a link as an entry in the **Task Pane**, in the section **Allow opening this link when**, choose if the link can be opened if a) **The user has selected one object**, b) **The user has selected one or more objects** or c) **Always**. These choices are not available when you define links as tabsheets in a Form (always one object selected) or as shortcuts (no objects are selected).

To filter data for a data source provided by the report, click the data source in the **Data Filter** list, and then click **Customize**. If you are defining a link as an entry in the **Task Pane**, or as a tabsheet in a Form, the objects selected from the context are available from the data source named **Context: <type>**, for example, *Context: Customer. For more information on how to filter data for a data source, see the article [Data Sources](../../defining-an-app-model/logic/action-orchestration/data-sources/index.md)*.

Links to not consider the various settings for the filters within the definition of a report, e.g. **Published** is not considered. The only exception is the cardinality set by **Max Occurrences** (**One** or **Many**).  

**Tip**. To prevent that a report can be opened by users from other locations than the link (i.e. to prevent the report to be opened from the **Open** task in the Report **Task Pane**), you can set **Scope** to **Directory** in the properties dialog for the report.