# Improving Genus Desktop startup performance

Windows supports the Web Proxy Auto-Discovery Protocol (WPAD), which is a method used by clients to locate a URL of a configuration file using DHCP and/or DNS discovery methods. The Genus Desktop client [only supports DNS](../installation-and-configuration/system-requirements.md).

If the network is not configured for WPAD, the Genus desktop client may experience a delay in startup, if WPAD is enabled on your computer.

To disable WPAD on your computer, do the following:

1.  In the **Control Panel**, locate and open the **Internet Options**.
2.  Click the **Connections** tab.
3.  In the **Local Area Network (LAN) settings** section, click **LAN settings**.
4.  In the **Automatic Configuration** section, click to clear **Automatically detect settings**.

In Windows 8 it is also possible to do the following:

1.  Go to the start menu, and search by entering *network proxy settings*.
2.  Start **Network Proxy Settings**.
3.  In the **Automatic proxy setup** section, click to turn off **Automatically detect settings**.