## Data View

The data view shows a visual diagram of the data sources, properties and connections added to the data mart. The data view helps improve the understanding of the data mart model while it is being built, and the diagram is also available in [Analyses](../../../users/reporting-on-data/analysis.md) and [Data Extracts](../../../users/reporting-on-data/data-extract.md) to provide information on the content of the data mart.

For more information on the features of the data view, see the articles below.

In this article

* * *

*   [Add a Data Source](#add-a-data-source)

*   [Publish Fields for a Data Source](#publish-fields-for-a-data-source)

*   [Connect Two Data Sources](#connect-two-data-sources)

*   [Add a Local Object Data Source](#add-a-local-object-data-source)

*   [Add a Link Table](#add-a-link-table)

*   [Add a Text or a Container](#add-a-text-or-a-container)

*   [Format and Layout the Data View](#format-and-layout-the-data-view)

* * *

## Add a Data Source

To add a data source in the data view, do the following:

*   Right click in the diagram.
*   In the menu, click **New**, and then select **Data Source**.
*   In the **Select Data Source Type** window, select **Object**<span style="FONT-WEIGHT: normal">, and click **OK**<span style="FONT-WEIGHT: normal">.
*   <span style="FONT-WEIGHT: normal">In the list, select one or more Object Classes, and then click **OK**<span style="FONT-WEIGHT: normal">.

A data source added this way has no fields published, and no connections to other data sources.

In the data view It is also possible to add data sources based on its connection an existing data source. This is useful and efficient when creating the data mart since it is very easy to see the available connections and add relevant data sources. It is possible to add data sources based on both outbound and inbound connections.

To add new data sources based on connections to an existing data source, do the following:

*   Right click on a data source in the diagram.
*   In the menu click **New**, and then select **Outbound Data Sources** to add data sources referenced in this data source, or select **Inbound Data Sources** to add data sources with references to this data source.
*   In the list of data sources, select one or more data sources to add, and then click **Add**. The name of the connection is displayed In parentheses after the data source name. Some data sources may be listed more than once, if there are more than one connection between the data sources.
*   Repeat the previous step to add more data sources as necessary.
*   Click **OK**.

A data source added this way has no fields published, and only one connection to the originating data source.

The added data sources are initially placed in the top left corner, and should be moved to the appropriate place in the diagram.



## Publish Fields for a Data Source

Fields that are published are available in the data mart. To keep the data mart as small and focused as possible, it is a good rule of thumb to only publish the fields required to fulfil the purpose of the data mart.

To specify which fields are published, do the following:

*   In the Data View
*   Select the data source to change, and then in the **Properties** area locate the **Published Fields** property, and click **[...]** <span style="FONT-WEIGHT: normal">OR  
    Right click the data source to change, and select **Published Fields**
*   To add a published field, in the **Select Fields** window, in the **Available Fields** list, select a field and click **Add**.
*   To remove a published field, in the **Select Fields** window, in the **Published Fields** list, select a field and click **Remove**.
*   Click **OK**.

Fields do not need to be published to be used in the data filter for the data source, or to be used in other fields, for example in a formula.



## Connect Two Data Sources

The connections must be unambiguous, which means that there cannot be connections in the data mart that makes it possible to find two paths between any two data sources. For more information, see [Data Mart Fundamentals](data-mart-fundamentals.md).

## Add a Local Object Data Source

Put article content here



## Add a Link Table

Put article content here



## Add a Text or a Container

Put article content here



## Format and Layout the Data View

Put article content here

