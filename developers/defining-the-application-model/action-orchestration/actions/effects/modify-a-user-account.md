## Modify a User Account

Use this effect to hide or automate funcationality related to user administration. For example tasks can be tailor made for advanced rich client user administrators, or accounts can be automatically created in web services, for people registering on thin clients. The effect modifies an existing user account or creates a new user account.  

To create or modify a user account, do the following:

*   In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
*   In the **Description** box, optionally enter a description.

In **General** tab:

*   In the **Account Profile** list, select the account profile you want to work on.
*   If the In the **Data Set** list, select the data set you want to access.
*   In the **User Name** box, type the name of the user account. This is the sign in name, and is used to match the account with an object, if the user profile is associated with an object class.
*   Select **Change User Name** and type the new user name if you want to change user name for an existing user. This option is only available when selected Account Profile is of type Genus Directory.
*   To assign a value to full name, select the **Full Name** check box, and then select **Default** to use the default value as defined in the Account Profile, or select **Override** and enter a value. If the account profile is not associated with an object class, the **Default** option is not available.
*   To assign a value to mail address, select the **Mail** check box, and then select **Default** to use the default value as defined in the Account Profile, or select **Override** and enter a value. If the account profile is not associated with an object class, the **Default** option is not available.
*   To assign a value to password, select the **Password** check box and enter a value.
*   The effect attempts to find an existing user account by looking up the User Name. **If the account does not exist**, one of the following three options can be selected: <span style="FONT-WEIGHT: normal"><table style="WIDTH: 100%">

    <tbody>

    <tr>

    <td>Create New Account</td>

    <td>The account is created with the specified properties.</td>

    </tr>

    <tr>

    <td>Ignore and Continue</td>

    <td>The account is ignored and execution of the task continues.</td>

    </tr>

    <tr>

    <td>Abort (succeeding actions will not be executed)</td>

    <td>A On Modify User Account Error [exception](../../exception-handling.md) is thrown.</td>

    </tr>

    </tbody>

    </table> 

<span style="FONT-WEIGHT: normal">In **Memberships** <span style="FONT-WEIGHT: normal">tab:

*   Select **Grant or withdraw memberships** to modify the existing memberships, or select **Replace existing memberships** to remove existing memberships before adding new.
*   Click the **Add** button, to add a new security group to the list.
*   If you selected **Grant or withdraw memberships**, for each security group in the list, select either **Grant** to add the membership, or **Withdraw** to remove the membership.

<span style="FONT-WEIGHT: normal">In **Advanced** <span style="FONT-WEIGHT: normal">tab:

*   <span style="FONT-WEIGHT: normal">To assign a value to language, select the **Language** <span style="FONT-WEIGHT: normal">check box, and then from the list select a language.
*   <span style="FONT-WEIGHT: normal">To assign a start page, select the **Start Page** <span style="FONT-WEIGHT: normal">check box, and then from the list select a short cut.
*   <span style="FONT-WEIGHT: normal">To set the state, select the **State** <span style="FONT-WEIGHT: normal">check box, and then select **Enabled** <span style="FONT-WEIGHT: normal">or **Disabled**<span style="FONT-WEIGHT: normal">.
*   <span style="FONT-WEIGHT: normal">To unlock the account if it is locked, select **Unlock Account**<span style="FONT-WEIGHT: normal">.
*   <span style="FONT-WEIGHT: normal">Select the **Run with Highest Privileges** <span style="FONT-WEIGHT: normal">check box to run the effect with elevated permissions. The effect will be run with administrator rights, which is useful to ensure that the action can be performed disregarding any lack of permissions of the user.

When modifying a user account, all values that are not assigned a value will be left unchanged. If the user account does not exist, and a new is created, default values are assigned to fields without assignment. The Password field requires a value when creating a new account.

In the User Name, Full Name Override, Mail Override, and Password fields, you can generate values dynamically by <span style="FONT-WEIGHT: normal">[inserting fields from your data sources](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") as part of the field.