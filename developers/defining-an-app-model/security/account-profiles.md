# Account Profiles

When adding user accounts, you have to select an account profile for the user. The profile describes the account policies for users, and optionally a description on how to associate a user with a business object, such as an employee or a customer.

If users are authenticated by Microsoft Active Directory, the account policies are determined by Active Directory. Genus Apps provides two mechanisms for user authentication: [Custom authentication and Active Directory authentication](../logic/action-orchestration/actions/effects/genus-app-services-user-authentication.md "Genus App Services User Authentication"). How users are authenticated is defined in [Genus App Services Configuration](../../installation-and-configuration/configure-and-maintain-genus-server.md).


## Add an Account Profile

1.  [Open Genus Studio](../getting-started/how-to-open-genus-studio.md).
2.  In the **Directory** tree, expand the **Security** folder, and then click the **Account Profiles** folder.
3.  On the toolbar, click **New**.
4.  In the **Name** box enter the name of the account profile.
5.  In the **Enable Identity Providers** section, select the providers to enable for this account profile. It is possible to enable more than one provider for an account profile, but it is recommended to create one account profile for each provider if possible.
6.  If account is not associated with any objects, click **None**. Note that you can only create one profile of this type. Continue to step 9\.
7.  In the **Self Object Class** section an association can be defined between accounts and business objects defined in your Directory. This is a powerful mechanism which gives you the opportunity to customize which data to present to individual users. For example, you can associate accounts with employees. If you have a table listing to-do tasks, you can apply a filter so that each employee only sees tasks assigned to themselves. In a Report, you can present sales data to product managers, where each product manager only sees the products he or she is responsible for. Note that you can associate more than one account profile with the same object class. For example you can create two profile accounts assosiated with the Object Class Employee with different sign in property and credential store. To associate the accounts with objects, click **Object Class**, and then select an Object Class.
8.  When associating accounts with an Object Class, the sign in name for an account is used to lookup an object in the Object Class. In the **Sign in Name Property** box, select which property in the Object Class that contains the sign in name. The data type for the property has to be **Character or String** with a maximum length of 120 character.
9.  In the **Mail Address Property** box, optionally select which property that contains the mail address.
10.  If accounts are associated with an Object Class, you can optionally enter a sign in condition which must be satisfied to grant an account access. For example, if accounts are associated with employees, the sign in condition may state that the employee currently is employed.
11.  Click the Identiy Settings tab, to configure additional settings for the profile.

**Identity settings**

_Native_

*   **Password will expire in [ ] days**. Type or select the maximum password age in days. This setting determines how long the users can keep a password before they have to change it. The aim is to periodically force users to change their password. When this feature is used, set a value that makes sense for the environment it is being applied to. A value of zero specifies that passwords do not expire.
*   **Password must be at least [ ] characters**. Type or select a minimum password length in characters. A value of zero specifies that empty passwords are allowed. For security reasons, passwords of at least eight characters are recommended. The reason for this is that long passwords are usually harder to crack than short ones.
*   **Account will lock out after [ ] invalid sign in attempts**. Type or select the number of invalid sign in attempts that are allowed before an account is locked out. If lockout control is used, it should be set to a value that balances the need to prevent account cracking against the needs of users who are having difficulty accessing their accounts. A primary reason users may not be able to access their accounts properly the first time, is that they forgot their passwords. If this is the case, it may take them several attempts to sign in properly. If the lockout threshold is set to zero, accounts will not be locked out due to invalid sign in attempts.
*   **Account is locked out for [ ] minutes**. Type or select the length of time an account is locked when the lockout threshold specified above is violated. The best security policy is to lock the account indefinitely by setting the lockout duration to zero. When this is done, only an administrator can unlock the account. This will prevent hackers from trying to access the system again, and will force users who are locked out to seek help from an administrator. By talking to the user, the administrator can determine what the user is doing wrong and help the user avoid problems.
*   **Reset account lockout counter after [ ] minutes**. Every time a sign in attempt fails, the value for the counter that tracks the number of failed sign in attempts is raised. This option determines how long the counter is maintained. This counter is reset in one of two ways. If a user signs in successfully, the counter is reset. If the waiting period has elapsed since the last failed sign in attempt, the counter is also reset. Select a value that balances the security needs against user access needs. A good value is from one to two hours. This waiting period should be long enough to force hackers to wait longer than they want to before trying to access the account again.

_Active Directory_

*   **On missing account.** For a sign in attempt through Active Directory, it is possible to automatically create a new account if one does not already exist. To create an account automatically, select **Automatically create an account**. To reject a sign in attempt with a missing account, select **Reject sign in attempt.**

_ID-porten_

*   **On missing account**. For a sign in attempt through ID-porten, it is possible to automatically create a new account if one does not already exist. To create an account automatically, select **Automatically create an account**. To reject a sign in attempt with a missing account, select **Reject sign in attempt**.

_Common_

*   **Add new accounts to security group**. To add a new account automatically to a security group when the account is created, select the security group. Otherwise leave the box blank.
*   **Display a custom message if an account is disabled**. To display a message upon a sign in attempt that fails due to a disabled account, select the check box, and then write a message.



See Also

* [Genus App Services user authentication](../logic/action-orchestration/actions/effects/genus-app-services-user-authentication.md)
