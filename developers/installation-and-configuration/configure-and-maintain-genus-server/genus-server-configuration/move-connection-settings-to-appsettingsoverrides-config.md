---
title: Migrate connection-settings to appSettingsOverrides.config 
description: An article describing how to migrate Genus Directory database connections into appSettingsOverrides.config due to the retirement of Genus Configuration
author: sverreeh
---

# Migrate Genus Directory database settings


Previously, the database connections for a Genus Appmodel were described interactively in Genus Configuration on the application server. The connection strings and some other settings produced by this tool were stored in **ServerConfig.xml**, normally located in **C:\ProgramData\Genus\Server\Config**.

The connection settings for the Genus Directory databases provided by a given application server has now been moved into **appSettingsOverrides.config**, normally located in the folder **C:\Program Files\Genus\Server\wwwroot**. The following paragraphs lists the steps necessary to upgrade your solution to use the new connection settings. This should preferably be done before running the new installation file on the application server.


1. Make a recording of your existing directory connection settings (PS: This can only be done before you run the new installation. Genus Configuration will be removed by the latest installation. See point 2 if you have already run the installation.):
    - Start Genus Configuration, and view the Properties of your Directory
    - Make a copy of the text in the Data Link-, Database- and Schema text editors for both partitions (Active and Descriptive)
    - Take note of the text in the field "Vendor Version". (This field does not allow select/copy)
    - Take note of the setting of the "Database supports case insensitive search"-checkbox.

2. (OPTIONAL): If you have already removed the old version of Genus Configuration by running the installer, the settings may be found in ServerConfig.xml.
    - DataLink is an encrypted value, but can be copied as is. Copy the entire value, including "enc:". Alternatively, a proper value must be entered manually into the new location as required by your database engine.
    - The field Catalog in ServerConfig.xml holds the value for Database.
    - Owner in ServerConfig.xml corresponds to Schema.
    - The field DatabaseVendorVersion can't be copied directly from ServerConfig.xml. The value must be set manually to a valid string as described in [System requirements](../../system-requirements.md#supported-database-system-vendors "Supported database system vendors")
    - If the field IsCaseInsensitive is not present in ServerConfig.xml, the default value is false.

3. Modify **appSettingsOverrides.config** as described in [Setting up database connections](preparing-appmodel-settings.md) using the values you recorded in step 1 or 2.

4. Run the installation program for Genus Services as usual.
    - This will remove the old Genus Configuration tool, and install the Genus.Config.CLI and Genus.Web.Administration.CLI tools.
    - The installation will also restart the website.
    - If you need to restart the website after running database scripts, use the description in point 5 below.
    - Remember to start Studio and run "Deploy the App Model to all..."

5. If you later needs to restart the website, corresponding to the "Restart Services" operation previously available in Genus Configuration, you can use the Genus.Web.Administration.CLI-tool:
    - **Genus.Services.Web.Administration.CLI.exe** is normally located in its own folder under **C:\\Program Files\\Genus\\Server\\Bin\\Genus.Config.CLI**. Navigate to this folder (as Administrator).
    - Run the tool using this command: **Genus.Services.Web.Administration.CLI.exe /reconfigure**
    - All virtual directories defined in the Appmodel will now be removed and recreated.
