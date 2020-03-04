# Install License on Genus Server

A license file is required in order to start the Genus Apps. If you do not have a valid license file, please contact Genus AS.

The license is installed by saving the file on each of your Genus application servers, at this exact location:

*   _[CommonAppData]\Genus\Server\Config\GenusLicense.xml_

The placeholder _[CommonAppData]_ normally resolves to _C:\ProgramData_ for all currently supported Microsoft Windows Server editions and versions, resulting in:

*   _C:\ProgramData\Genus\Server\Config\GenusLicense.xml_

If you suspect that _[CommonAppData]_ resolves to another location for your Windows Server, you can check the Windows Server registry key:

*   _HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders_

Important information:

*   License files are issued per customer (owner) and not per application model, production environment, test environment or similar.
*   The license file is a signed and readable XML file. Changing the license file without re-signing it, will make the license file useless and the Genus Apps will not start.
*   New license files are distributed by email from Genus AS when the expiry date approaches and if license fee payment has been received.
*   License files do not need to be activated over Internet.
*   License files usually have long validity, typically about 400 days.
*   A license file contains the name of the owner (a Genus AS customer) of the license file and is tied to that owner.
*   License files are traceable to the source (by reading the customer name inside the XML file) and is not to be distributed outside the owner's environment.
*   Lost or misplaced license files may be blacklisted by Genus AS. Blacklisted license files will not be usable, i.e. your Genus Apps will not start. So keep your Genus License files private to your organization.
*   We recommend saving a copy of your license file in a safe location (other than your Genus Services application server).
*   The license file must be installed on all your Genus Services application servers following the simple procedure below. This includes any development and test environments or similar.
