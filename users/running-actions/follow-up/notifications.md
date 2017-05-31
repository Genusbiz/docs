## Notifications

A notification will send you and/or other users an alert when a specified event occurs for an object.

You can create notifications for the following events:

*   **Read**. Occurs when an object is opened for reading. For example, if an object is opened in a Form or sent to a printer.
*   **Modified**. Occurs when one or more properties for an object have been changed.
*   **Linked/Unlinked**. Occurs when an object is linked/unlinked to/from another object. For example, if an _employee_ is assigned as a key account manager for a _customer_, this will generate a link event on the _employee_ object.
*   **Authorized**. Occurs when permissions are granted/revoked for a security group or a user account on an object.


## Add a Notification

1.  On the toolbar, click **Follow Up**![ID8FB4DDBA6A6D48EE.IDFEB1E4D498394B4A.jpg](media/ID8FB4DDBA6A6D48EE.IDFEB1E4D498394B4A.jpg), and then click **Add Notification**.
2.  Type a subject and/or select a category for the notification.
3.  In the **Event** box, select which event that triggers the notification.
4.  Click **Set Condition** to restrict the number of events that will generate a notification. For example, if the notification should be sent when information for an employee has been modified, you may only want to receive a notification given that the charge rate has been changed for the employee. _NOTE! Not supported in current version._
5.  In the **Description** box, optionally type a description.
6.  In the **Expires** box, optionally type an expire date. If an expire date is entered, the notification will be automatically removed at this date.



## Advanced Options

1.  In the **Notification** dialog box, click **Advanced**.
2.  To temporarily disable a notification, click to clear the **Enabled** check box.
3.  If you have entered an expire date for the notification, select the **Notify owner when this notification is expired** check box, to receive an alert when the notification is expired. This gives you an opportunity to renew the expire date.
4.  To notify other users when the event occurs, select users that should receivee a notification in the **Recipient** box.



## Remove a Notification

1.  On the toolbar, click **Follow Up ![ID0AFAE5AAC3354177.IDB6D0B461FDA34EA3.jpg](media/ID0AFAE5AAC3354177.IDB6D0B461FDA34EA3.jpg)**, and then click **Follow Up View**.
2.  A table showing all follow up's for the object is displayed. Select the notification that should be removed. On the toolbar, click **Delete**![ID0AFAE5AAC3354177.ID830F9521079244D4.JPG](media/ID0AFAE5AAC3354177.ID830F9521079244D4.JPG).



## Modify Notification Categories

1.  On the toolbar, click **Follow** Up ![ID391E4D52CC7F4A48.ID903D69F7E1FB4D20.jpg](media/ID391E4D52CC7F4A48.ID903D69F7E1FB4D20.jpg), and the click **Categories.**
2.  In the **Follow Up Categories** dialog box, click the **Notification Categories** tab.
3.  To add a new category, click **Add**. To modify an existing category, select the category in the list and click **Modify**.
4.  Enter a name for the category.
5.  To disable a category, click to clear the **Enabled** check box. This can be useful if you want to remove a category that still is in use. If the category is in use by any notifications you are not allowed to remove the category. However, when a category is disabled, it is no longer possible for users to select that category when a new notification is added.



See Also

*   [Alerts](alerts.md)