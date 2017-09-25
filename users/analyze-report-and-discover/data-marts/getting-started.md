# Getting started

The main idea of the data mart is to simplify access to enterprise data, for different purposes and users, by reducing data complexity and volume. 

To create a data mart:
* Open Genus Desktop
* Open the **Discovery portal** by clicking on **Discovery** in the bottom left menu
* Click on **Data Marts** in the **Discovery** portal menu
* Create a new data mart by clicking **New** in the toolbar, or by right-clicking in the list of data marts and clicking **New**.
* Before the data mart can be used, it needs to be loaded. See [Data mart loading and scheduling](./data-mart-loading.md) for more information. **Note:** Data mart loading and scheduling needs to be configured in Genus Studio.

In order to access data inside the analysis you will also need to do the following inside the [Data-model view](./data-model.md) : 
* Add data sources.
    - Right click in the view.
    - In the menu, click **New**, and then select **Data Source**.
    - In the **Select Data Source Type window**, select **Object**, and click **OK**.
    - In the list, select one or more **Object Classes**, and then click **OK**.
* Publish fields for the data sources.
    - In the view select one data source, and then in the **Properties** area locate the **Published Fields** property, and click [...] OR
    - Right click the data source to change, and select **Published Fields**.
* Define connections between data sources.
    - It is possible to add data sources based on both outbound and inbound connections. See [Data-model view](./data-model.md#add-a-data-source) for more information
* Add any local fields or data sources to enrich the data mart.

See [Data mart concepts](./data-mart-concepts.md) for more information.
 
If you are having trouble with your data mart, see [Data mart troubleshooting FAQ](./data-mart-problemsolving-faq.md).