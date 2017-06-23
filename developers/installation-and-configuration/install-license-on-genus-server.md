# Install License on Genus Server

A license file is required in order to start the Genus App Platform. If you do not have a valid license file, please contact Genus AS.

The license is installed by saving the file on each of your Genus application servers, at this exact location:

*   <span style="FONT-STYLE: italic">[CommonAppDataFolder]\Genus\Server\Config\GenusLicense.xml

The placeholder <span style="FONT-STYLE: italic">[CommonAppDataFolder] normally resolves to <span style="FONT-STYLE: italic">C:\ProgramData for all currently supported Microsoft Windows Server editions and versions, resulting in:

*   <span style="FONT-STYLE: italic">C:\ProgramData\Genus\Server\Config\GenusLicense.xml

If you suspect that <span style="FONT-STYLE: italic">[CommonAppDataFolder] resolves to another location for your Windows Server, you can check the Windows Server registry key :

*   <span style="FONT-STYLE: italic">HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders

Important information:

*   License files are issued per customer (owner) and not per application model, production environment, test environment or similar.
*   The license file is a signed and readable XML file. Changing the license file without re-signing it, will make the license file useless and the Genus App Platform will not start.
*   New license files are distributed by email from Genus AS when the expiry date approaches and if license fee payment has been received.
*   License files do not need to be activated over Internet.
*   License files usually have long validity, typically about 400 days.
*   A license file contains the name of the owner (a Genus AS customer) of the license file and is tied to that owner.
*   License files are traceable to the source (by reading the customer name inside the XML file) and is not to be distributed outside the owner's environment.
*   Lost or misplaced license files may be blacklisted by Genus AS. Blacklisted license files will not be usable, i.e. your Genus App Platform will not start. So keep your Genus License files private to your organization.
*   We recommend saving a copy of your license file in a safe location (other than your Genus App Services application server).
*   License files are not required and not used for Genus releases prior to 2014.1\.
*   The license file must be installed on all your Genus App Services application servers following the simple procedure below. This includes any development and test environments or similar.