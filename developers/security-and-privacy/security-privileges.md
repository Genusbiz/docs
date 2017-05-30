## Security Privileges

A privilege is a users right to perform a specific task, usually one that affects the entire system rather than a particular object. Privileges are assigned by administrators to individual security groups.

To ease the task of user account administration, privileges can only be assigned to security groups. When you assign privileges to a security group, users are automatically assigned those privileges when they become a member of that group. This method of administering privileges is far easier than assigning individual privileges to each user account when the account is created.


## Privileges that can be Granted to a Security Group

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Privilege</th>

<th>Description</th>

</tr>

<tr>

<td>**Combine event history for all users**</td>

<td>

Allows the user to search in the event history across objects for all users. By default, a user can only search for events logged by the user itself.

</td>

</tr>

<tr>

<td>**Sign in as a desktop user**</td>

<td>Allows the user to sign in to the Genus desktop client. This privilege is typically not granted to users representing service users.</td>

</tr>

<tr>

<td>**Sign in as a app user**</td>

<td>Allows the user to sign in to a Genus App client.</td>

</tr>

<tr>

<td>**Sign in as a web service user**</td>

<td>

Allows the user to sign in to a Genus web service.

</td>

</tr>

<tr>

<td>**Manage computers**</td>

<td>Allows the user to create and modify computers as user accounts. Only applicable if users are authenticated using Active Directory.</td>

</tr>

<tr>

<td>**Manage privileges**</td>

<td>Allows the user to grant privileges to other users.</td>

</tr>

<tr>

<td>**Manage search for other users**</td>

<td>Allows the user to create Searches containing criteria with reference to all user classes defined in the Directory. If this privilege is not assigned, the user can only create Searches containing criteria with reference to the user class associated with the user.</td>

</tr>

<tr>

<td>**Manage security groups**</td>

<td>Allows the user to create and modify security groups.</td>

</tr>

<tr>

<td>**Manage users**</td>

<td>Allows the user to create and modify user accounts.</td>

</tr>

<tr>

<td>**Open Studio**</td>

<td>Allows the user to open Genus Studio.</td>

</tr>

<tr>

<td>**View follow up's**</td>

<td>Allows the user to view Reminders and Notifications.</td>

</tr>

</tbody>

<colgroup><col width="30%" style="WIDTH: 30%"><col width="50%" style="WIDTH: 50%"></colgroup></table>

Note that privileges of type **Create and modify...** do not override permissions set on an object. The user must also be granted sufficient permissions for all objects of the given type.



## Grant a Privilege to a Security Group

Required security privilege: **Manage privileges**.

1.  [Open Genus Studio](../defining-the-application-model/genus-studio-basics/how-to-open-genus-studio.md).
2.  In the **Directory** tree, expand the **Security** folder, and then click the **Privileges** folder.
3.  In the table to the right, select the check box for the privilege which you want to grant to a security group.



See Also

*   [Security Permissions](security-permissions.md)