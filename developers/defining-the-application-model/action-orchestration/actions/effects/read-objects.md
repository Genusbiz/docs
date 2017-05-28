## Read Objects

With this effect you can read objects into a data source restricted by a data filter, and optionally display a dialog where the user can select one or more objects from the read objects (only available for Tasks). You can choose if the objects are added to, kept in or removed from existing objects in the data source, or if existing objects are replaced by the read objects. The objects can be read from the database or from another datasource of the same type.

1.  In the **Name** box, optionally type a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
2.  In the **Description** box, optionally type a description.
3.  Click the **General** tab
4.  In the **Data Source** box, select which data source to read objects into. Only data sources of type **Object**, **File** and **Schema** can be selected. In addition, it is not possible to select a data source that are used in an enumerator, if the effect is within the enumerator, since this would affect the number of iterations. Data sources of type **File** and **Schema** are only available when defining Tasks and Rules, since objects has to be read from the clipboard.
5.  In the **Data Filter** box, click **Modify** to restrict the number of objects read. Follow the instructions in the [step-by-step procedure](../../data-sources/specifying-a-data-filter-for-a-data-source.md) on how to filter data for a data source. If you want to clear all objects in the data source, leave the data filter blank and click **Replace existing objects with read objects**. If the data source is an Account, use the **User Name** box and optionally the **Password** box to specify the criteria to lookup an account. In this case the read object effect returns a maximum of one account matching the user name and password.
6.  If you want to read the objects from another data source instead of from the database, select the **Read Objects from Data Source** check box. In the **Read Objects from Data Source** list, select which data source to read objects from.
7.  When reading objects from another data source you can choose to transfer the objects instead of copying them. To do this, select **Transfer Objects**. This option is only available when the option **Read from Data Source** is selected. For more information on transferring objects, see below.
8.  Choose if the read objects should be added to, kept in or removed from existing objects in the data source, or if existing objects are replaced by the read objects.
9.  Click the **User Interaction** tab.
10.  If you want the user to select one or more objects from the read objects, click the **Prompt users to select objects** check box. This option is only available for data sources of type **Object**. In the **Dialog Title** and **Dialog Prompt** box, type a title and a prompt. You can generate dynamic values for the title and prompt by [inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields").
11.  Click **Fields** to specify the fields to be displayed in the dialog.
12.  Click **Group By** to specify a grouping of the objects displayed in the dialog.
13.  Click **Sort** to specify a sorting of the objects displayed in the dialog.
14.  Select **Allow Select Multiple Objects** if users are allowed to select one or more objects. Clear **Allow Select Multiple Objects** if users are allowed to select only one object.
15.  Select **Mark All Objects as Selected** if you want all objects to be marked as selected when the dialog is displayed.
16.  Select the **Exit Task on cancel** check box if you do not want to execute suceeding effects if the user chooses the **Cancel** or **No** button in the dialog box.
17.  To store which button chosen by the user, click **Set a fields value equal to the exit code**. You can either store the response as a boolean value or an integer value. See the article [Dialog Box Exit Codes](../../../../dialog-box-exit-codes.md "Dialog Box Exit Codes") for an overview of exit codes.
18.  Select which buttons that should appear in the dialog box.

**Transferring Objects**

Normally when data is read from another data source, objects are copied from the source to the target data source. Read objects are marked as synchronized with storage to avoid that uncommitted changes in the source are applied twice. In some cases you may want to move an object from one data source to another and keep the current state of the object (i.e. that the object is in creating or changing state). To do this, select the option "Transfer objects".  

<span style="FONT-STYLE: italic">Example  

**Task 1**  

<span style="TEXT-DECORATION: underline">Data sources:  
1) All Transactions  

<span style="TEXT-DECORATION: underline">Actions:  
1) Scope (with commit)  
1.1) Run a Task: Task 2, two way binding to All Transactions  

**Task 2**  

<span style="TEXT-DECORATION: underline">Data sources:  
1) Single Transaction (private)  
2) All Transactions (public)  

<span style="TEXT-DECORATION: underline">Actions:  
1) Create Objects: Single Transaction  
2)...some logic with the need to access the created object in Single Transaction before it is appended to All Transactions  
3) Read Objects: All Transactions. Read all objects from datasource Single Transaction. Add and transfer objects.  

The created object is not committed by Task 2, but appended to All Transactions which is committed by the scope defined in Task 1.

See Also

*   [Dialog Box Exit Codes](../../../../dialog-box-exit-codes.md)