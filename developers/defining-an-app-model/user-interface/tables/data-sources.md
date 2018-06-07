# Data sources

All of the data that appears in a form or table are stored in the form or table's data sources. A data source is made up of fields and groups. The kind of data stored in a field or group is defined by the **data type**. Data types are categorized in **simple data types** and **complex data types**. Simple data types include Boolean, Calendar Time, Integer, Integer Date, Integer Time, Internet Address, Large Integer, Real, Stream Data and String. Complex data types are defined in your Directory. For example *Customer* or a Schema. A field can store data for both simple and complex data types. A group is by definition a complex data type. For example, if you add a data source of type *Customer*, the data type for the top-level group in the data source is *Customer*. Within a data source, a group can be defined as **repeating**, meaning that data for the group occurs more than once. For example all *Products* in a given *Product Category*.

To see if a data source is used within the form, right click the data source, and click **Find Local References**. To see if a specific field of a data source is used within the form, click the data source, and then in the list of fields, right click the field, and click **Find Local References**.


## Add a data source

1.  In the **Table Description** area, click **Data Sources**.
2.  In the **Task Pane**, click **Add a Data Source**, and then click the type of data source you want to add; **Object**, **Local Object**, **XML Document**, or **File**.
3.  If you selected Object, XML Document, or File, select the data source you want to add.
4.  In the **Data Source** tab, click the data binding of your choice. The data binding defines the connection between the form or table UI and business logic. For more information, see the **Data Binding** section below.

5.  If multiple occurences of objects are allowed, select **Unbounded**. If only one object can be present, select **One**. This decision is important with respect to how the data source can be accessed in your form or table. If the cardinality is violated when the data source is populated, no objects will be read.

6.  To limit access to the data source, select the **Private** check box. Private data sources can no be accessed from outside the form or table. This is useful to secure that the data filter for the data source are not modified by others, for example when a table is embedded as a control in a form. In addition, information hiding is a fundamental part of designing the public interface for a form or table. A Local Object is always private.

7.  If changes to the objects in the data source should not be saved in the database, click to clear the **Persistable** check box. Applies to data sources of type Object.

8.  By default, objects in a data source are reloaded when data are refreshed. If a data source contains static data, such as the chart of accounts in an accounting system, click to clear the **Reload Objects on Refresh** check box.



## Data binding

The data binding defines the connection between the user interface and the business logic. The data flow can go from the data source to the user interface, for example when data are changed by [Live Update](../../data/object-class/modify-an-object-or-identifier-domain/data-provider.md "Live Update"), and/or from the user interface to the data source, for example when the user edits the content of a table cell.

You may want your form or table to enable users to change the data and propagate it back to the data source. Or you may not want to enable users to update the data source. You can control this by setting the data binding mode of your data source. The following table describes the different data binding modes:

| Data Binding Mode                 | Description                                         |
|-----------------------------------|-----------------------------------------------------|
| **One Time**                      | Updates the user interface with source data when the binding is created. This type of binding is appropriate if you are using data where either a snapshot of the current state is appropriate to use, or the data is truly static. This is essentially a simpler form of **One Way** binding that provides better performance in cases where the source does not change. |
| **One Way**                       | Updates the user interface with source data when the binding is created and anytime the data changes. This type of binding is appropriate for data which are read-only. |
| **Two Way**                       | Updates both the user interface and the source when either changes. This type of binding is appropriate for fully interactive UI-scenarios. |

Bindings that are **One Way** or **Two Way** listen for changes in the data source. **Two Way** bindings listen for changes in the user interface as well, and propagate them back to the data source.


## Add a new field to a data source

A data source in a form or table is based on an [Object Class](../../data/object-class/index.md) defined in your Directory, have fields in the data source that corresponds to [properties](../../data/object-class-property/index.md "Object Class Property") in the Object Class. A data source of the type Local Object, have all the fields defined locally.

To add a new field, do the following:

1.  In the **Data Sources** list, click the data source of your choice.
2.  In the **Task Pane**, click **Add a Field**.

### Field properties

| Property                         | Description                                          |
|----------------------------------|------------------------------------------------------|
| Name                             | Display name for the field.                          |
| Type                             | A field can be defined as a **Data** or **Function** field. Values for fields of type **Data** can be modified by users in your form or table. Note that changes made to fields of type **Data** not are written to the database, but can be accessed as long as your form or table is open. For example, you could add a field of type **Data** to collect various input parameters from users, and then use these parameters in other calculations. Values for fields of type **Function** are calculated using a formula or an aggregated measure. |
| Data Type                        | Defines the kind of data the field can hold. Data types are categorized in simple- and complex data types. Simple data types include types such as String, Integer and Calendar Time. Complex data types are defined by [Object Classes](../../data/object-class/index.md) in your Directory. |
| Data Size                        | The maximum number of characters a field with data type String can hold. |
| Data Interpretation              | Defines how to interpret data of a given type. For example, string data can be interpreted as an e-mail address or a file URL. Most data types have a default interpretation, that is, data are interpreted based on the data type itself. |
| Significant Decimals             | Applies to properties with data type Real. Defines the number of decimals used when comparing floating-point data during concurrency control. Concurrency control is performed when data for an object is updated. |
| Data Encoding                    | Determines how to encode binary data. Supported binary to text encoding schemes are Base64. |
| Data Calculation                 | Data calculation lets you define a default value, a formula or an aggregated measure.<br><br><ul><li>**A default value** for a field is calculated when an object is created. For example, you may want to set the *state* for a *customer* to *Active* by default when a new *customer* is created. For more information on how to specify a default value, see the article [Specifying a Default Value or Formula]</li><li>../../data/object-class-property/modify-an-object-class-property/data-calculation.md "Specifying a Default Value or Formula"). Applies to fields of type **Data**.</li><li>**A formula** is calculated whenever data are read or modified. For example you could calculate the deviation between actual and budget figures. For more information on how to specify a formula, see the article [Specifying a Default Value or Formula](../../data/object-class-property/modify-an-object-class-property/data-calculation.md "Specifying a Default Value or Formula"). Applies to fields of type **Data** and **Function**.</li><li>**An aggregated measure** is built by changing the granularity on specific dimensions and aggregating up a measure along these dimensions. For example, in a data source based on the Object Class *Customer*, you could calculate *total sales year to date* or *outstanding debt*. For more information on how to specify an aggregate measure, see the article [Specifying an Aggregated Measure](../../../installation-and-configuration/configure-and-maintain-genus-server/specifying-an-aggregated-measure.md "Specifying an Aggregated Measure"). Applies to fields of type **Function**.</li></ul> |
| Data Validation                  | Use data validation to ensure that values entered for a field satisfies certain requirements for correctness and accuracy. In addition to data type validation, that is, the value for a field has to be of a particular type, such as a whole number or date, you can make a field required, add condition-based data validations and define restrictions on fields with a complex data type:<br><br><ul><li>**Make a field required**. Click to clear the **Allow blank value** check box.</li><li>**Add a condition-based data validation**. A condition-based data validation is defined by describing a condition which expresses what is regarded as erroneous data. For example that the start date for a project not can occur after the end date. In the **Data Validations** box, click **Modify**, and then in the **Data Validations** dialog box click **Add**. Follow the instructions in the [step-by-step procedure](../../data/object-class-property/modify-an-object-class-property/specifying-a-conditionbased-data-validation.md "Specifying a Condition-Based Data Validation") on how to define a condition-based data validation.</li></ul> |
| Screen Tip                        | Text displayed when the user hovers the mouse over a control bound to the field. |
| Case Conversion                   | Applies to fields with data type String. Determines if the text for the field is converted to uppercase or lowercase when displayed in a control. The converted value is stored if the user has access to modify the field. |
| Description                       | Documentation of the purpose and content of the field. |



## Customize a field bound to an object class property

Most property settings for fields which are bound to an [Object Class Property](../../data/object-class-property/index.md "Object Class Property") are inherited, and you are only allowed to modify the following properties:

*   **Default Value**. To specify a default value, in the **Data Calculation** section, select the **Override** check box.
*   **Allow Blank Value**. If the bound Property not requires a value, you are allowed to make the field required.
*   **Condition-Based Data Validations**. You can add any number of data validations. Note that data validations defined for a field are evaluated after data validations defined for the bound Property.



## Add a rule to a data source

Applicable to data sources of type Object or Local Object.

Rules enables you to define a rule base for a data source which contains the knowledge on how to respond to different events. When an event occurs, e.g. when the value for a field is modified, the Rule is triggered and all actions specified are carried out. For more information on how to define a rule, see the article [Rules](../../data/object-class/modify-an-object-or-identifier-domain/rules.md "Rules") which describes the setup for an Object Class rule.

Note that Rules defined in the Object Class which the data source is based on, are evaluated before any rules specified in the data source.  

**Auto Delete** If Auto delete objects when these fields are clear is selected, an object will automatically be deleted when the specified fields are cleared. In a multidimensional table layout where changes to objects are automatically saved, you can enable this option to simplify the data entry task. For example, in a table used for entering budget figures for a predefined set of accounts and periods, you might want to automatically delete a budget entry when the amount for a given account and period is cleared. 

1\. Select the **Auto delete objects when these fields are clear** check box.  
2\. Click Modify.  
3\. In the **Fields** list box, click the field of your choice. Hold down CTRL and click, if you want to choose more than one field.  
4\. Click **Add**, and then **OK**.  

![data-source-auto-delete.png](media/data-source-auto-delete.png)



## Reading data into a data source

One of the most common way to read data into a data sources is by filtering data. Another way is by aggregating data. Applicable to data sources of type Object.  

### Filter data for a data source

1.  In the **Data Sources** list, click the data source of your choice.
2.  In the **Properties** area, click the **Data Filter** tab.
3.  [Define a data filter](../../logic/action-orchestration/data-sources/specifying-a-data-filter-for-a-data-source.md) using one of the filter methods provided.

It is possible to define filters for selected groups in the data source. These group filters are not dynamic, in the sense that they are not re-evaluated after objects are loaded into the groups. To define an initial filter for groups in the data source, do the following:

1.  In the **Data Filter** tab, click **Initial Group Filters**.
2.  Click **Add**, and in the **Group** column, click **[...]** to select the group
3.  In the **Data Filter** column, click **[...]**, to define a data filter.
4.  Repeat steps 2 and 3 for every group you want to filter.

You can also [define a mandatory and default data filter for a data source in a view](views.md). Note that the data filter defined here is appended to the mandatory data filter defined in a view. Users are not allowed to search outside the restriction given by the data filter defined for a data source or a mandatory data filter defined in a view.

### Aggregating Data

Aggregations are built from a base data source by changing the granularity on specific dimensions and aggregating measures along these dimensions. The base data source consists of measurements or metrics of a business process, such as *sales volume* by *day* and *product*. The measures act as independent variables by which dimensional attributes are analyzed.

Data can be aggregated into data sources of type **Custom**. To create a custom data source, do the following:

1.  In the **Table Description** area, click **Data Sources**.
2.  In the **Task Pane**, click **Add a Data Source**.
3.  In the **Select Data Source** list, click **<Custom>**.
4.  Specify data binding (typically **One Way**).
5.  Specify occurences (typically **Allow Many Objects**).
6.  Add one or more fields representing the dimensions which measures are aggregated along, such as *Day* and *Product*.
7.  Add one or more fields representing the measures, such as *Sales Volume*.

The next step is to specify how data are aggregated into your data source:

1.  In the **Properties** area, click the **Data Aggregate** tab.
2.  In the **Base Data Source** box, select the Object Class containing the measures which you want to aggregate, such as *Sales*. Note that this data source not is a part of the data sources defined in your form or table. You can choose among all Object Classes defined in your Directory.
3.  To restrict the amount of data aggregated, in the **Data Filter** box, click **Modify** to specify a data filter for the base data source. For example a filter restricting data to sales year to date. Follow the instructions [step-by-step procedure](../../logic/action-orchestration/data-sources/specifying-a-data-filter-for-a-data-source.md) on how to specify a data filter for a data source.
4.  By default, data are aggregated when users requests a reload of data. You can however control when calculation occurs by setting the calculation mode to **Automatic**. To do this, click [**Calculation Options**](../../../installation-and-configuration/calculation-options.md "Calculation Options").
5.  For each measure in your data source, such as *Sales Volume*, you must bind the field to a field in the base data source. In the **Measures** list, click the measure you want to bind, and then click **Modify**. In the **Value** list, click **Select Field or Group**, and then select a field from the base data source. In the **Aggregation Function** list, select the statistical function to use when aggregating data for the selected field.
6.  For each dimension defined in your data source, such as *Day* and *Product*, you must bind the field to a field in the base data source. This binding is used to control which dimensions the measures are aggregated along. In the **Dimensions** list, click the dimension you want to bind, and then click **Modify.** Select a field from the base data source. The data type for the field in the base data source has to match the data type for the field in your data source. Note that you can select fields located in other data sources referred by the base data source. For example, the base data source contains fields for *Sales Volume*, *Day* and *Product*. Your data source contains *Sales Volume*, *Day* and *Product Category*. To aggregate data along the *Product Category* dimension, expand the *Product* field in the base data source, and then select the *Product Category* field. Calendar dimensions, such as year, quarter, month and day, can be bound to fields in the base data source with data type Calendar Time.

