## Security Permissions

A permission regulates which users that can gain access to an object and in what manner. Permissions are granted to individual user accounts or security groups. Permissions can be granted to all objects of a given type, to individual objects and to object properties.

In this article

* * *

*   [Object Permissions that can be Granted to a User](#object-permissions-that-can-be-granted-to-a-user)

*   [Grant Permissions to All Objects to a Security Group](#grant-permissions-to-all-objects-to-a-security-group)

*   [Grant Permissions to All Objects Satisfying Conditions to a Security Group](#grant-permissions-to-all-objects-satisfying-conditions-to-a-security-group)

*   [Grant Permissions to an Individual Object to a User](#grant-permissions-to-an-individual-object-to-a-user)

*   [Property Permissions that can be Granted to a Security Group](#property-permissions-that-can-be-granted-to-a-security-group)

*   [Grant Permissions to a Property to a Security Group](#grant-permissions-to-a-property-to-a-security-group)

* * *

## Object Permissions that can be Granted to a User

The number of permissions that can be granted to a user is determined by the [security setup](../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/security.md "Security") for the Object Class.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Permission</th>

<th>Description</th>

</tr>

<tr>

<td>**Find And List**</td>

<td>Allows the user to find an object and view it in lists. Detailed information about the object can not be accessed.</td>

</tr>

<tr>

<td>**Read and Execute**</td>

<td>Allows the user detailed reading access to an object. If the object has active content, it can also be executed.</td>

</tr>

<tr>

<td>**Set Search Criteria**</td>

<td>Allows the user to search for objects using advanced search. Can only be granted to all objects.</td>

</tr>

<tr>

<td>**Create**</td>

<td>Allows the user to create an object. Can only be granted to all objects.</td>

</tr>

<tr>

<td>**Modify**</td>

<td>Allows the user to modify an object.</td>

</tr>

<tr>

<td>**Delete**</td>

<td>Allows the user to delete an object.</td>

</tr>

<tr>

<td>**Read Event History**</td>

<td>

Allows the user to read the Event History for an object. Can only be granted if [auditing is activated for the Object Class](../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/events.md "Events").

</td>

</tr>

<tr>

<td>**Modify Auditing**</td>

<td>

Allows the user to modify the auditing setup for an object. Can only be granted if [auditing is activated for the Object Class](../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/events.md "Events"), and users are allowed to modify auditing on individual objects.

</td>

</tr>

<tr>

<td>**Insert Objects In Folders**</td>

<td>Allows the user to insert mail, files and folders in an object.</td>

</tr>

<tr>

<td>**Read Permissions**</td>

<td>Allows the user to read permissions for an object.</td>

</tr>

<tr>

<td>**Modify Permissions**</td>

<td>Allows the user to modify permissions for an object.</td>

</tr>

<tr>

<td>**Set Ownership**</td>

<td>Allows the user to take ownership for an object, or to transfer the ownership to another user. This permission can not be granted to all objects unless users are allowed to grant permissions to individual objects.</td>

</tr>

</tbody>

</table>



## Grant Permissions to All Objects to a Security Group

Only [trusted users](trusted-users.md) have access to grant permissions to all objects.

To grant permissions to all objects, the option **Allow granting of permissions to all objects** has to be selected in the [security setup](../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/security.md) for the Object Class. Permissions can only be granted to security groups and not individual user accounts.

1.  [Open Genus Studio](../defining-the-application-model/genus-studio-basics/how-to-open-genus-studio.md).
2.  In the **Directory** tree, expand the **Security** folder, and then click the **Permissions** folder.
3.  In the table to the right, right-click the Object Class which you want to grant permissions to, and then in the shortcut menu, click **Properties**.
4.  Click the **Security** tab.
5.  To set permissions for a group that does not appear in the **Group names** box, click **Add**. In the **Select Groups** dialog box, type the name of the group you want to set permissions for and then click **Check Names**. To allow or withdraw permissions from an existing group, click the name of the group.
6.  To allow a permission, in the **Permissions** box, select the **Allow** check box. To withdraw a permission, clear the **Allow** check box.
7.  To withdraw all permissions from an existing group, click **Remove**.

To view the [effective permissions](../defining-the-application-model/forms/views/desktop-controls/tabular-controls/effective-memberships-and-permissions.md "Effective Memberships and Permissions") granted to a group, click **Advanced**, and then click **Effective Permissions**.

## Grant Permissions to All Objects Satisfying Conditions to a Security Group

Only [trusted users](trusted-users.md) have access to grant permissions to all objects satisfying conditions.

To grant permissions to all objects satisfying conditions, the option **Allow granting of permissions to all objects satisfying conditions** has to be selected in the [security setup](../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/security.md) for the Object Class. Permissions can only be granted to security groups and not individual user accounts.

1.  [Open Genus Studio](../defining-the-application-model/genus-studio-basics/how-to-open-genus-studio.md).
2.  In the **Directory** tree, expand the **Security** folder, and then click the **Permissions** folder.
3.  In the table to the right, right-click the Object Class which you want to grant permissions to, and then in the shortcut menu, click **Open**.
4.  To set permissions for a group that does not appear in the **Group names** box, click **Add**. In the **Select Groups** dialog box, type the name of the group you want to set permissions for and then click **Check Names**. To allow or withdraw permissions from an existing group, click the name of the group.
5.  To allow a permission, in the **Permissions** box, select the **Allow** check box. To withdraw a permission, clear the **Allow** check box.
6.  To specify a condition for a permission, in the **Condition** column, click **...** and enter the condition. If no condition is given, the permission is always granted.
7.  To withdraw all permissions from an existing group, click **Remove**.

To view the [effective permissions](../defining-the-application-model/forms/views/desktop-controls/tabular-controls/effective-memberships-and-permissions.md "Effective Memberships and Permissions") granted to a group, click **Advanced**, and then click **Effective Permissions**.

## Grant Permissions to an Individual Object to a User

Required [security permission](security-permissions.md "Object Permissions that can be Granted to a User"): **Modify Permissions**

To grant permissions to an individual object, the option **Allow granting of permissions to individual objects** has to be selected in the [security setup](../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/security.md "Security") for the Object Class.

1.  Select the object you want to grant permissions to.
2.  In the **File** menu, click **Properties**.
3.  Click the **Security** tab.
4.  To set permissions for a group or user that does not appear in the **Group or user names box**, click **Add**. Type the name of the group or user you want to set permissions for and then click **Check Names**. To allow or withdraw permissions from an existing group or user, click the name of the group or user.
5.  To allow a permission, in the **Permissions** box, select the **Allow** check box. To withdraw a permission, clear the **Allow** check box.
6.  To withdraw all permissions from an existing group or user, click **Remove**.

To change the ownership of the object, click **Advanced**. To take ownership, click **Take Ownership**. To transfer the ownership to another user, click **Set Ownership**. Type the name of the user you want to set as owner for the object and then click **OK**. The owner of an object can always change permissions on it, regardless of any existing permissions that protect the object. If you are not the owner of the object, you need the permission **Set Ownership** to change the ownership of the object.

If the current object represents a [composition](../installation-and-configuration/composition.md "Composition"), that is, an object composed of objects from one or more Object Classes, you can grant permissions to all objects within the composition. For example, an Object Class _Project_ is composed of two other Object Classes, _Activity_ and _Activity Code_. Permissions to _activities_ are granted for each _activity_. However, permissions to add and modify _activity codes_ in a given _project_, should only be granted to a limited number of users. If a user has sufficient permissions, these permissions should apply to all _activity codes_ in the given _project_. That is, you do no want to grant permissions for each _activity code_. To grant permissions to all objects within a composition, the option **Allow granting permissions to all objects within composition** has to be selected in the [security setup](../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/security.md "Security") for the Object Classes which is part of the composition (in the example above, this option should be selected for the Object Class _Activity Code_). To grant permissions to all objects within a composition, do the following:

1.  Click **Advanced**.
2.  In the **Permissions** list, click the Object Class which you want to grant permissions to, and then click **Modify**.
3.  To set permissions for a group or user that does not appear in the **Group or user names box**, click **Add**. Type the name of the group or user you want to set permissions for and then click **OK**. To allow or withdraw permissions from an existing group or user, click the name of the group or user.
4.  To allow a permission, in the **Permissions** box, select the **Allow** check box. To withdraw a permission, clear the **Allow** check box.
5.  To withdraw all permissions from an existing group or user, click **Remove**.

To view the [effective permissions](../defining-the-application-model/forms/views/desktop-controls/tabular-controls/effective-memberships-and-permissions.md "Effective Memberships and Permissions") granted to a group or user, click **Advanced**, and the click **Effective Permissions**.



## Property Permissions that can be Granted to a Security Group

The number of permissions that can be granted to a security group is determined by the [security setup](../defining-the-application-model/object-class-property/modify-an-object-class-property/security.md "Security") for the property.

*   **Read**. Allows the user to read data for the property.
*   **Create**. Allows the user to modify data for the property when creating a new object.
*   **Modify**. Allows the user to modify data for the property for an existing object.



## Grant Permissions to a Property to a Security Group

Only [trusted users](trusted-users.md) have access to grant permissions to a property.

To grant permissions to a property, the option **Allow granting of permissions to property** has to be selected in the [security setup](../defining-the-application-model/object-class-property/modify-an-object-class-property/security.md) for the property. Permissions can only be granted to security groups and not individual user accounts.

1.  [Open Genus Studio](../defining-the-application-model/genus-studio-basics/how-to-open-genus-studio.md).
2.  In the **Directory** tree, expand the **Security** folder, and then click the **Permissions** folder.
3.  In the table to the right, find the Object Class containing the property you want to grant permissions to. Click ![ID91A35E9DF27F4D29.ID9EA9F9ECB2394D0B.jpg](media/ID91A35E9DF27F4D29.ID9EA9F9ECB2394D0B.jpg) to view all properties which allows permissions to be granted to a security group.
4.  Right-click the property which you want to grant permissions to, and then in the shortcut menu, click **Properties**.
5.  Click the **Security** tab.
6.  To set permissions for a group that does not appear in the **Group names** box, click **Add**. In the **Select Groups** dialog box, type the name of the group you want to set permissions for, and then click **Check Names**. To allow or withdraw permissions from an exisiting group, click the name of the group.
7.  To allow a permission, in the **Permissions** box, select the **Allow** check box. To withdraw a permission, clear the **Allow** check box.
8.  To withdraw all permissions from an existing group, click **Remove**.

To view the [effective permissions](../defining-the-application-model/forms/views/desktop-controls/tabular-controls/effective-memberships-and-permissions.md "Effective Memberships and Permissions") granted to a group, click **Advanced**, and then click **Effective Permissions**.

See Also

*   [Effective Memberships and Permissions](../defining-the-application-model/forms/views/desktop-controls/tabular-controls/effective-memberships-and-permissions.md)
*   [Security Privileges](security-privileges.md)