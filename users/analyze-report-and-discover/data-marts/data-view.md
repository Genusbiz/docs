# Data view

The data view shows a visual diagram of the data sources, properties and connections added to the data mart. The data view helps improve the understanding of the data mart model while it is being built, and the diagram is also available in [Analyses](../analysis.md) and [Data Extracts](../data-extract.md) to provide information on the content of the data mart.

## Add a data source

To add a data source in the data view, do the following:

*   Right click in the diagram.
*   In the menu, click **New**, and then select **Data Source**.
*   In the **Select Data Source Type** window, select **Object**, and click **OK**.
*   In the list, select one or more object classes, and then click **OK**.

A data source added this way has no fields published, and no connections to other data sources. 

In the data view it is also possible to add data sources based on their connection to an existing data source. This is useful and efficient when creating the data mart since it is very easy to see the available connections and add relevant data sources. It is possible to add data sources based on both outbound and inbound connections.

To add new data sources based on connections to an existing data source, do the following:

*   Right click on a data source in the diagram.
*   In the menu click **New**, and then select **Outbound Data Sources** to add data sources referenced in this data source, or select **Inbound Data Sources** to add data sources with references to this data source.
*   In the list of data sources, select one or more data sources to add, and then click **Add**. The name of the connection is displayed In parentheses after the data source name. Some data sources may be listed more than once, if there are more than one connection between the data sources.
*   Repeat the previous step to add more data sources as necessary.
*   Click **OK**.

A data source added this way has no fields published, and only one connection to the originating data source.

The added data sources are initially placed in the top left corner, and should be moved to the appropriate place in the diagram.

## Data source properties

| Property                         | Description                                          |
|----------------------------------|------------------------------------------------------|
| Private                          | Use this for data sources that are only used temporarily when loading. The data source will not be accessible in any analysis. |
| Allow aggregate requests only    | Use to restrict usage of this data source to aggregated values. The objects in the data source will not be accessible in analysis. This will speed up the analysis since objects in the data source will not be transferred to the client. |
| Max Occurences                   | Set to One if there will be exactly one object in the data source. This will affect the cardinality in functions accessing the data source. |


## Publish fields for a data source

Only published fields are available in analyses based on this data mart. To keep the data mart as small and focused as possible, it is a good rule of thumb to only publish the fields required to fulfil the purpose of the data mart.

To specify which fields are published, do the following:

*   In the data view
*   Select the data source to change, and then in the **Properties** area locate the **Published Fields** property, and click **[...]** OR  
    Right click the data source to change, and select **Published Fields**
*   To add a published field, in the **Select Fields** window, in the **Available Fields** list, select a field and click **Add**.
*   To remove a published field, in the **Select Fields** window, in the **Published Fields** list, select a field and click **Remove**.
*   Click **OK**.

Fields do not need to be published to be used in the data filter for the data source, or to be used in other fields, for example in a formula.



## Connect two data sources

A connection is used for two things; propagating selections between two data sources, and as default grouping when aggregating data. 

To change the connection between two data sources, select the data source to change, and then in the **Properties** area open the **Connections** property, or simply right click the data source to change, and select **Connections**. For each data source in the data mart a connection can then be defined by selecting the property to use. In the **Selection Filtering** field, there is the option to select how the selection filtering should be propagated betweeh the two data sources. 

A connection must be defined from the data source that contains the reference property to the other data source, but the selection filtering direction is independent of this.

The connections must be unambiguous, which means that there cannot be connections in the data mart that makes it possible to find two paths between any two data sources when following the directions of the connections. 

For more information, see [Data mart concepts](data-mart-concepts.md).



## Multiple instances of a data source

The fact that connections are used to propagate selections, can sometimes lead to undesired effects. For example, consider a case where the *Month* data source is connected to both *Invoice.DueDate* and *Sales.Date*. When a month is selected, the invoices that are due that month are qualified, and the sales transactions performed that month are qualified. Unfortunately sales performed at the end of one month will often be invoiced with a due date the month after, which can lead to inconsistent data.

This is easily solved by adding the month data source twice, and connecting them to one of the other data sources each. This way a selection of an invoice due month will not affect the sales month, and vice versa. Remember to rename the data sources to ensure unambiguous names and avoid misunderstandings.
