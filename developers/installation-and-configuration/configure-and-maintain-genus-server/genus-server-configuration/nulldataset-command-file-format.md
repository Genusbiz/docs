---
title: Genus AppModelConfig file format
description: An article describing the format of the command file used for bootstrapping an empty app model for use in Genus
author: sverreeh
---

# The AppModelConfig file format

When bootstrapping a new Genus-solution, you will need to use Genus.Config.CLI. This is a command line interface tool that reads and executes one or more commands from a command file. The tool is normally installed in **C:\Program Files\Genus\Server\Bin\Genus.Config.CLI**

The command file is a JSON-formatted file containing some or all of the sections described in this article. There is a [sample file](#sample-command-file) towards the end of this article. To execute the commands in a command file you need to call the CLI-tool with the filename as a parameter like this:

```cmd
C:\path\to\Genus.Config.CLI.exe /c c:\path\to\commandfile.json
```

The [**Genus Directory database connections**](preparing-appmodel-settings.md) needs to be assigned correctly before this tool may be executed. 

## Sections

| Section name  |   Sample Value   |   Description |
|---------------|------------------|---------------|
|   **directoryName**   |   "My directory"         |   The name of the directory. Will become part of the caption for Genus Desktop |
|   **internetHostName**|   "my-host.genus.no"     | The DNS-name of the app server. |
|   **defaultLanguage** |   "en-US"                | Defines the default language for the solution. This language will be used when the user has not explicitly selected another language. |
|   **tasks**           |   {}                     |   These are the commands that should be performed by the tool. Refer to [Creating tasks](#tasks) later in this article. |

## Tasks

Tasks defines one or more operations that should be performed on the directory databases as a result of calling the configuration executable passing this command-file as a parameter. Each task is defined by a required **operation**-property. 

Multiple tasks may be defined in a single command file. The **createMissingTables**-commands will be executed first, if it is included in the command file. Then the remaining operations are executed in the order they are defined. The **restartServices** operation executes last.

Valid operation are:

|   Operation   |   Description
|---|---
|   **createMissingTables**    |    Scans the databases identified by the connection strings in the system configuration, and creates any missing app model tables. Some tables will be initialized with necessary data to be able to start Genus Studio and start configuring the new solution. This operation will also add missing user-scripts on relevant database versions. 
|   **createDefaultAccounts**    |  Generates default user accounts in the app model database. These include the default administrator, guest and service accounts. This operation needs a correctly formatted app model administrators password included in the **adminPassword**-property.
|   **generateScript**    | Generates DDL scripts as defined by a required **action**-property. Please see the [following section](#actions-for-generatescript) for information about valid actions. This operation may be limited to operate only on a number of tables listed in the **tables**-array. The resulting script is returned on standard out.
|   **listTables**    | Lists the names of tables that are either missing or unknown, depending on the value of the **kind**-property. Valid values are:<br/>  **missing** - Lists tables required by the app model that does not exist in the app model databases.<br/>  **unknown** - List unknown tables found in the app model databases. These may include tables from older versions of the app model that should be removed. 
|   **restartServices**  | Calls Genus.Service.Web.Administration.CLI to reconfigure IIS. This operation creates a virtual directory named **defaultdir**, allowing you to start Genus Studio via the temporary URL **http://your-server/defaultdir**. You should change the dataset name and the virtual directory name to more descriptive names from Genus Studio.

## Actions for generateScript

The following table lists all valid actions that may be included in a **generateScript** operation. None of these will change the app model databases in any way.

|   Action name    |   Description 
|-----------|---------------
|   **create**  |   Outputs scripts for creating the tables listed in the **tables**-array. This action will also generate scripts for the required indexes on these tables. Generates scripts for all tables defined in Genus if the **tables**-array is empty.
|   **drop**    |   Generates scripts for dropping the tables listed in the **tables**-array. Generates scripts for all tables defined in Genus if the **tables**-array is empty.
|   **createindex** |   Outputs scripts for generating indexes on the tables listed in the **tables**-array. Generates scripts for all tables defined in Genus if the **tables**-array is empty.
|   **createuserfunctions** |   Outputs scripts for generating all user scripts on relevant database engines. Nothing will be returned if the user scripts already exists.  

## Sample command file

The following is a sample command file that will generate CREATE TABLE scripts for the table-names "g_agent" and "g_agent_execution":

```json
    {
        "directoryName": "My Genus Directory",
        "internetHostName": "test.mydomain.com",
        "defaultLanguage": "en-US",
        "tasks":[
             {
                "operation": "generateScript",
                "action": "create",
                "tables": ["g_agent", "g_agent_execution"]
            }
        ]
    }
```


The following fragment is a sample command file that could be used to prepare a new solution for Genus Services. The empty system databases (active/descriptive) must be created before running this command file, and the connection settings must already be entered into **appSettingsOverrides.config**. See [Genus Directory database settings](preparing-appmodel-settings.md) for more information on appSettingsOverrides.config

```json
{
    "directoryName": "My Genus Directory",
    "internetHostName": "test.mydomain.com",
    "defaultLanguage": "en-US",
    "tasks":[
        {
            "operation": "createMissingTables"
        },
        {
            "operation": "restartServices"
        },
        {
            "operation": "createDefaultAccounts",
            "adminPassword": "admins_topsecret_password"
        }
    ]
}
```