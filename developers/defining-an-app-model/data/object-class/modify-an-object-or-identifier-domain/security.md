# Security

Defines the maximum set of permissions that can be granted to any user account to an object, and if permissions can be granted to individual security groups.

## Maximum permissions

Permission | Description
---------- | -----------
Read       | Allows a user to read objects of this type.
Create     | Allows a user to create an object of this type.
Modify     | Allows a user to modify an object of this type.
Delete     | Allows a user to delete an object of this type.

## Inherit permissions from composition

If the Object Class i part of a composition, select **Permissions inherited from composition**, to inherit the permissions from the composition.

## Inherit permissions from outbound reference

If the Object Class has properties referencing other object classes, permissions can be inherited from the referenced object class. Select the **Permissions inherited from outbound reference**, and then in the list, select the outbound reference.

## Granting permissions to all objects

To allow granting of permissions to all objects, select **Allow granting of permissions to all objects**. Only [trusted users](../../../security/trusted-users.md) can grant permissions to all objects. How to grant permissions to all objects is described in the article [Grant Permissions to All Objects to a Security Group](../../../security/security-permissions.md).

## Granting permissions to all objects satisfying conditions

To allow granting of permissions to all objects based on a condition, select **Allow granting of permissions to all objects**, and then select the **allow using conditions** check box. Only [trusted users](../../../security/trusted-users.md) can grant permissions to all objects satisfying conditions. How to grant permissions to all objects satisfying conditions is described in the article [Grant Permissions to All Objects Satisfying Conditions to a Security Group](../../../security/security-permissions.md).


