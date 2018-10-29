---
title: Setting up Directory database connections 
description: An article describing how to setup Genus Directory database connections as part of the installation of an application server. 
author: sverreeh
---

# Genus Directory database settings

You need to supply connection strings for the Active- and Descriptive database-partitions, in addition to database vendor version and search settings, to be able to bootstrap a new or existing Genus appmodel on an app server. These settings are stored in **appSettingsOverrides.config** in the web server application root folder, normally **C:\Program Files\Genus\Server\wwwroot**

When configuring a new application server, these settings needs to be assigned correctly before the null-dataset generation tool [(**Genus.Config.CLI**)](nulldataset-command-file-format.md) can be used.

The following paragraph shows an example of the necessary settings to be able to connect to the appmodel, and may be used as a template. 

```xml
<appSettings>
...
  <add key="AppModelSettings:ActiveDatalink" value="Data Source=myserver;User ID=myuser;Password=mypwd" />
  <add key="AppModelSettings:ActiveDatabase" value="myActiveDB" />
  <add key="AppModelSettings:ActiveSchema" value="" />
  <add key="AppModelSettings:DescriptiveDatalink" value="Data Source=myserver;User ID=myuser;Password=mypwd" />
  <add key="AppModelSettings:DescriptiveDatabase" value="myDescriptiveDB" />
  <add key="AppModelSettings:DescriptiveSchema" value="" />
  <add key="AppModelSettings:VendorVersion" value="Microsoft SQL Server 2016" />
  <add key="AppModelSettings:IsCaseInsensitive" value="false" />
...
</appSettings>
```

Each key presented in the example is required to be available in the file. The following table describes each setting individually:

| **Key** | **Value**
|---------|-----------
| AppModelSettings:ActiveDatalink      | The connection string required to connect to the database server for the Active partition of the given server. The format of the value will be dependent on the requirements of the database engine.
| AppModelSettings:ActiveDatabase      | The name of the database to use for the Active partition on the given server.
| AppModelSettings:ActiveSchema        | The name of the schema to use for the Active partition on the given server. May be an empty string, if appropriate.
| AppModelSettings:DescriptiveDatalink | Similar to the Active partition setting...
| AppModelSettings:DescriptiveDatabase | Similar to the Active partition setting...
| AppModelSettings:DescriptiveSchema   | Similar to the Active partition setting...
| AppModelSettings:VendorVersion       | Indicates the vendor and version of the database engine used. Information about valid vendor version strings may be found in [System requirements](../../system-requirements.md#supported-database-system-vendors "Supported database system vendors").
| AppModelSettings:IsCaseInsensitive   | Indicates if searching in the database is case-sensitive or not (Valid values: **true/false**)
