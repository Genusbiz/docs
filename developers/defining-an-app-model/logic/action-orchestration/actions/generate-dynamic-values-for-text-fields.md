## Generate Dynamic Values for Text Fields

**Inserting a** **[formula](../../../../../terminology.md) **or a field from one of your data sources****

Right-click in the text field, and then in the shortcut menu, click **Insert Field**. In the **Display Name** box, select a field or a group from one of your data sources, or click **Enter a formula**. If the data source is a report, and the field is a file with image format , the size of the image is determined by the report [Page Setup](../../../../../users/analyze-report-and-discover/report/save-to-file-or-print-a-report.md).

**Inserting a hyperlink**

Right-click in the text field, and then in the shortcut menu, click **Insert Hyperlink**. In the **Display Name** box, select a field or a group from one of your data sources, or click **Enter a formula**. In the **URL** box, select a field or a group from one of your data sources, or click **Enter a formula**.

Note: In the **URL** box, you may also click **Select Task.** In the **Shortcut to Task** dialog, select a task and specify the **Data Binding**. This will create a shortcut or link to a task, connected to one or more of your data sources. When your end users open the hyperlink, the task will run towards the bounded data. You may for instance use such hyperlinks in mail messages to ask your users for receipts or modifying specific business objects, like credit checking a specific customer. Keep the number of data bindings to a minimum, since data bindings add to the length of the **URL**, and web browsers have limits to their **URL** lengths. **Inserting a section** 

Inserting a section:

A section is a control that contains other fields and text, and that repeats as needed. There are two types of sections:

*   **Repeating Section**. Use a repeating section when you want to collect multiple instances of the same type of data. For example, in a mail message informing an employee of overdue tasks, you can use a repeating section containing the subject, description and due date for each task.
*   **Embedded Section**. Use an embedded section to insert a list of values in a text. For example, the text *Meeting attendants: Peater Keating, Howard Roark and Guy Francon* would be defined as *Meeting attendants: [Person.FirstName Person.Surname]*, where *[Person.FirstName Person.Surname]* is an embedded section containing two fields.

A section has to be bound to a repeating group in one of your data sources. When the effect runs, the section is repeated for each object in that group.

To insert a repeating section, do the following:

1.  Right-click in the text field, and then on the shortcut menu, click **Insert Repeating Section**.
2.  In the **Data Binding** box, select a group from one of your data sources.

To insert an embedded section, do the following:

1.  Right-click in the text field, and then on the shortcut menu, click **Insert Embedded Section**.
2.  In the **Data Binding** box, select a group from one of your data sources.
3.  In the **Separator** box, type a text for separating each section. For example a comma.
4.  If you want to insert another separator before the last item, click the **Separator before last item** check box, and then type a text. For example the word *and*.

To insert a text or field in the section, click inside the section and type a text or right-click to select a field. You can also insert sections within a section.