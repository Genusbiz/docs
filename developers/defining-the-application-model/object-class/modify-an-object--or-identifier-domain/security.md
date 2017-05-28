## Security

Defines the maximum set of permissions that can be granted to any user account to an object, and if permissions can be granted to individual security groups and user accounts.

**Maximum Permissions**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Permission</th>

<th>Description</th>

</tr>

<tr>

<td>Read</td>

<td>Allows a user to read objects of this type.</td>

</tr>

<tr>

<td>Create</td>

<td>Allows a user to create an object of this type.</td>

</tr>

<tr>

<td>Modify</td>

<td>Allows a user to modify an object of this type.</td>

</tr>

<tr>

<td>Delete</td>

<td>Allows a user to delete an object of this type.</td>

</tr>

</tbody>

</table>

**Inherit Permissions from Composition**

If the Object Class i part of a composition, select **Permissions inherited from composition**, to inherit the permissions from the composition.

**Inherit Permissions from Outbound Reference**

If the Object Class has properties referencing other object classes, permissions can be inherited from the referenced object class. Select the **Permissions Inherited from Outbound Reference**, and then in the list, select the outbound reference.

**Granting Permissions to All Objects**

To allow granting of permissions to all objects, select **Allow granting of permissions to**, and then select the **all objects** check box. Only [trusted users](../../../security-and-privacy/trusted-users.md) can grant permissions to all objects. How to grant permissions to all objects is described in the article [Grant Permissions to All Objects to a Security Group](../../../security-and-privacy/security-permissions.md).

**Granting Permissions to All Objects Satisfying Conditions**

To allow granting of permissions to all objects based on a condition, select **Allow granting of permissions to**, and then select the **all objects satisfying conditions** check box. Only [trusted users](../../../security-and-privacy/trusted-users.md) can grant permissions to all objects satisfying conditions. How to grant permissions to all objects satisfying conditions is described in the article [Grant Permissions to All Objects Satisfying Conditions to a Security Group](../../../security-and-privacy/security-permissions.md).

**Granting Permissions to Individual Objects**

To allow granting of permissions to individual objects, select **Allow granting of permissions to**, and then select the **individual objects** check box. If the Object Class is part of a composition, select the **Copy permissions from composition on create** check box, if you want to copy permissions from the composition object when a new object is created. How to grant permissions to individual objects is described in the article [Grant Permissions to an Individual Object to a User](../../../security-and-privacy/security-permissions.md).

**Granting Permissions to All Objects Within Individual Composition**

If the Object Class i part of a composition, select **Allow granting of permissions to**, and then select the **all objects within individual compositions** check box, to allow granting of permissions to all objects for a given composition object.

<span style="FONT-STYLE: italic">Example:

For example, an Object Class Project is composed of two other Object Classes, Activity and Activity Code. Permissions to activities are granted for each activity. However, permissions to add and modify activity codes in a given project, should only be granted to a limited number of users. If a user has sufficient permissions, these permissions should apply to all activity codes in the given project. That is, you do no want to grant permissions for each activity code.

The security setup for the Object Classes in the example above would then be:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Object Class / Allow granting of permissions to</th>

<th>All objects</th>

<th>All objects satisfying conditions</th>

<th>Individual objects</th>

<th>

All objects within individual compositions

</th>

</tr>

<tr>

<td>Project</td>

<td>Optional</td>

<td>No</td>

<td>Yes</td>

<td>N/A</td>

</tr>

<tr>

<td>Activity</td>

<td>No</td>

<td>No</td>

<td>Yes</td>

<td>No</td>

</tr>

<tr>

<td>Activity Code</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>Yes</td>

</tr>

</tbody>

</table>

Note that you must allow granting of permissions to individual objects for the <span style="FONT-STYLE: italic">Project Object Class, since permissions to <span style="FONT-STYLE: italic">activity codes are granted for individual <span style="FONT-STYLE: italic">projects. How to grant permissions to all objects within a composition is described in the article [Grant Permissions to an Individual Object to a User](../../../security-and-privacy/security-permissions.md).

See Also

*   [Security Groups and User Accounts](../../../security-and-privacy/security-groups-and-user-accounts.md)
*   [Security Permissions](../../../security-and-privacy/security-permissions.md)
*   [Trusted Users](../../../security-and-privacy/trusted-users.md)