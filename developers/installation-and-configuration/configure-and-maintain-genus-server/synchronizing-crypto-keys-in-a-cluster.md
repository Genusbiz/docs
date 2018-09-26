# Synchronizing cryptographic keys and settings in an application server cluster

All Genus servers that are part of a load balancing or data mart cluster should accept user session cookies issued across any other server in the cluster. To make this work you must manually copy some settings from one of the servers to the others:

1. Open the file **[\[ProgramFiles\]][1]\Genus\Server\wwwroot\appSettingsOverrides.config** in a text editor and copy the following lines from the file:

    ```xml
    <add key="DefaultCryptoServiceProvider:DecryptionKey" value="some hexadecimal string here" />
    <add key="DefaultCryptoServiceProvider:ValidationKey" value="some other hexadecimal string here" />
    ```

2. Overwrite the corresponding lines in appSettingsOverrides.config at the other servers.
3. Locate file **[\[ProgramData\]][1]\Genus\Server\Config\ServerConfig.xml** on the server from which you copied the **appSettingsOverrides.config** settings, and copy the **ServerConfig.xml** file to the other servers.
4. Open the Genus Configuration application on all Genus servers and perform **Tools** | **Restart Services**.

[1]: ..\installing-genus-desktop\install-genus-special-folders.md
