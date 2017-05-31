## Effective Memberships and Permissions

A group or user can be a member of one or more groups. The memberships defined for these groups are inherited by the group or user. When calculating effective memberships for a group or user, both the group which the group or user is a member of, and the memberships inherited from these groups are considered.

When calculating permissions for a group or user, effective memberships are considered. That is, a group or user's effective permissions are the result of combining the permissions assigned to a group or user, and the permissions assigned to any groups that the group or user is a member of.