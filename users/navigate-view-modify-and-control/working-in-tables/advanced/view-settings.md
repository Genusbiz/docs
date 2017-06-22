## View Settings

A table displays its objects in a layout called a view.

A view is composed of <span style="FONT-STYLE: italic">columns, which also are called <span style="FONT-STYLE: italic">fields. A view controls the way objects are sorted and grouped, which objects (rows) are displayed on so on.

You may personalize your views and save your settings. The settings are automatically remembered and used the next time you start your Genus application. In the table, right-click the column headings, and then click **View Settings**. You can reset your personlize view to default view. In The table, right-click the column headings, and then click **Reset View**.

Alternatively, on the **View** menu, click **View Setting** to set your personlize view or click**Reset** **View** to reset the view to default.

![IDC956C6E520DC420B.ID5BE7BC2A22F947E1.png](media/IDC956C6E520DC420B.ID5BE7BC2A22F947E1.png) ![IDC956C6E520DC420B.ID173AB1CFD9AA4EDD.png](media/IDC956C6E520DC420B.ID173AB1CFD9AA4EDD.png)

The dialog box below will appear.

![IDC956C6E520DC420B.ID8FB3EA37EA0242AC.png](media/IDC956C6E520DC420B.ID8FB3EA37EA0242AC.png)


## Add, Remove or Move a Field <a name="add-remove-or-move-a-field"/>

1.  In the table, right-click the column headings, and then click **View Settings**.
2.  Click **Fields**.
3.  In the **Field Chooser** dialog box, to add a field, select the field you want to add.
4.  In the **Field Chooser** dialog box, to remove a field, clear the field you want to remove.
5.  In the **Field Chooser** dialog box, to move a field, click the field you want to move, and then click **Move Up** or **Move Down** until the field is in the position that you want**.**

![IDA0C69FE9FE2D449A.IDFEB920E2EAAE4879.png](media/IDA0C69FE9FE2D449A.IDFEB920E2EAAE4879.png)



## Group Objects

A group is a set of objects with one common attribute, for example <span style="FONT-STYLE: italic">employees within a <span style="FONT-STYLE: italic">department. When you group objects in a table, the objects are displayed below a shared heading.

![IDE5E8EB415CB3434D.ID738C12F36630432B.png](media/IDE5E8EB415CB3434D.ID738C12F36630432B.png)

1.  In the table, right-click the column headings, and then click **View Settings**.
2.  Click **Group By**.
3.  Click **Add** to add a row to the field list.
4.  In the newly added row, in the **Group By** box, select a field.
5.  You can enhance grouping by selecting a group interval in the **Group Interval** box. For example, you can group <span style="FONT-STYLE: italic">purchases by date and then include group intervals that show totals for each day, month, or year. Intervals are not confined to fields with the date/time data type, however. You can also use them with text and number fields as well. For example, a <span style="FONT-STYLE: italic">Company Namefield could have intervals that segment results by the first letter of the company.
6.  In the **Initial Display** box, select if the groups should be expanded or collapsed as default.
7.  To group by an additonal field, click **Add** again.
8.  To remove fields, select a field row and click **Remove**.
9.  If you have grouped on additional fields, select a row and click **Move Up** or **Move Down** to change grouping order.

![IDE5E8EB415CB3434D.ID5EC77140660849AA.png](media/IDE5E8EB415CB3434D.ID5EC77140660849AA.png)



## Sort Objects

1.  In the table, right-click the column headings, and then click **View Settings**.
2.  Click **Sort**.
3.  Click **Add** to add a row to the field list.
4.  To sort in ascending alphanumeric order, click **Ascending**. To sort in descending alphanumeric order, click **Descending**.
5.  To sort by additional fields, click **Add** again.

**![ID79E7CB9C84804014.IDE76C08B82D964027.png](media/ID79E7CB9C84804014.IDE76C08B82D964027.png)**

**Note**. If a field is a reference to a [code domain](../../../../terminology.md), data are sorted according to the logical sort order defined for the code domain, which not necessarily equals the alphanumeric order. For example, in a code domain which defines some kind of workflow status, the codes may be specified in the following sort order: <span style="FONT-STYLE: italic">Not Started, <span style="FONT-STYLE: italic">In Progress and <span style="FONT-STYLE: italic">Completed.



## Other Settings

If you double-click an object in a table, the contents of the object are displayed in a form. You can specify if forms by default should be opened in the same window or in a new window:

1.  In the table, right-click the column headings, and then click **View Settings**.
2.  Click **Other Settings**.
3.  To open forms in the same window, click **Open forms in the same window**. When a form is opened, the window containing the table is added to your browsing history. To switch back to the table, click the **Back** button on the toolbar.
4.  To open forms in a new window, click **Open forms in a new window**. When a form is opened, the table still appears in a different window, so you can switch between the windows.
5.  To use the settings recommended by your system administrator, click **Use default settings**.

![ID5B31A26D64494494.IDB7D6358CA84349E4.png](media/ID5B31A26D64494494.IDB7D6358CA84349E4.png)



## Filter Data

A filter is an easy way to see only those objects that meets the conditions you specify. When you filter objects, you selectively choose which objects that should appear in the table.

1.  In the table, right-click the column headings, and then click **View Settings**.
2.  Click **Filter**.
3.  In the **Filter** dialog box, specify a [condition](../../../../developers/defining-the-app-model/common-concepts/conditions.md "Conditions") stating which objects to display, for example, _timesheets submitted by employees this week which not have been approved_.

