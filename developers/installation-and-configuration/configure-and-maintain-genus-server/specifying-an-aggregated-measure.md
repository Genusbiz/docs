## Specifying an Aggregated Measure

Applies to fields of type **Function**.

1.  In the **Data Calculation** section, click **Aggregated Measure**, and then click **Modify**.
2.  In the **Base Data Source** box, select the Object Class containing the measure which you want to aggregate. Note that this data source not is a part of the data sources defined in your form or table, and you can choose among all Object Classes defined in your Directory.
3.  In the **Aggregation Method** box, select the statistical function to use for aggregating the measure.
4.  To restrict the amount of data aggregated, click **Modify** to specify a data filter for the base data source. Follow the instructions in the [step-by-step procedure](../../defining-the-app-model/logic/action-orchestration/data-sources/specifying-a-data-filter-for-a-data-source.md "Specifying a Data Filter for a Data Source") on how to specify a data filter for a data source.
5.  By default, an aggregated measure is recalculated when data are reloaded. You can however control when calculation occurs by setting the calculation mode to **Automatic**. For more information, see the **Data Calculation** section below.
6.  Next you have to bind the aggregated measure to objects in your data source. That is, for each object in your data source, a value should be calculated by aggregating the measure along dimensions contained in your data source. For example, in a table presenting products, you can add an aggregated measure summarizing sales year to date. To bind the aggregated value to a given product, in the **Dimensions** list, click the field representing the primary key in the product data source defined in your table, and then click **Modify**. Select a field in the sales data source defined as the base data source pointing to product. Note that you can bind the base data source to any number of dimensions in your data source to change the granularity of the measure.


## Calculation Options

By default, an aggregate is recalculated when data are reloaded. You can however control when calculation occurs. An aggregate has two main calculation modes:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Calculation Mode</th>

<th>Description</th>

</tr>

<tr>

<td>Manual</td>

<td>Data are aggregated only when users request it by refreshing data in a form or table.</td>

</tr>

<tr>

<td>Automatic</td>

<td>Data are aggregated when the value for a specific field in a data source is changed, or any value for an object in a data source is changed.</td>

</tr>

</tbody>

</table>

To change the calculation mode, click **Calculation Options**. Click **Manual** if data should be aggregated only when users request it. Automatic calculation is defined by adding one or more calculation triggers which controls when data are aggregated. To add a calculation trigger, do the following:

1.  Click **Automatic if the value for any of these fields are changed**.
2.  Click **Add**.
3.  In the **Data Source** box, select the data source which triggers a recalculation when changes to objects in the data source occurs.
4.  If data only should be recalculated when the value for a specific field is changed, in the **Field** box, select the field which triggers a recalculation. If no field are specified, data are recalculated when any value is changed for an object in the data source.
5.  If the aggregate for an object is independent of other objects in the data source, you can constrain the recalculation to occur only when values for the bound object are changed. That is, in a table where a data source is bound to a row, the bound object is defined as the object represented by a row. To do this, in the **Triggered By** box, select **Bound Object**. For example, if the aggregate summarizes sales year to date for a product, and the sales amount is changed for a given product and month, the aggregate has to be recalculated whenever the sales amount is changed for the bound product. If the aggregate is dependent of other objects in the data source, in the **Triggered By** box, select **Any Object**. For example, if the aggregate summarizes sales year to date for a product compared to sales year to date for all prodcuts, the aggregate has to be recalculated whenever the sales amount is changed for any product.

