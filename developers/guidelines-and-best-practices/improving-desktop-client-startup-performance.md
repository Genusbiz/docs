## Improving Desktop Client Startup Performance

Windows supports the Web Proxy Auto-Discovery Protocol (WPAD), which is a method used by clients to locate a URL of a configuration file using DHCP and/or DNS discovery methods. The Genus Desktop client [only supports DNS](../installation-and-configuration/system-requirements.md).

If the network is not configured for WPAD, the Genus desktop client may experience a delay in startup, if WPAD is enabled on your computer.

To disable WPAD on your computer, do the following:

1.  In the **Control Panel**, locate and open the **Internet Options**.
2.  Click the **Connections** tab.
3.  In the **Local Area Network (LAN) settings** section, click **LAN settings**<span style="FONT-WEIGHT: normal">.
4.  <span style="FONT-WEIGHT: normal">In the **Automatic Configuration** <span style="FONT-WEIGHT: normal">section, click to clear **Automatically detect settings**<span style="FONT-WEIGHT: normal">.

In Windows 8 it is also possible to do the following:

1.  Go to the start menu, and search by entering <span style="FONT-STYLE: italic">network proxy settings<span style="FONT-WEIGHT: normal">.
2.  Start **Network Proxy Settings**<span style="FONT-WEIGHT: normal">.
3.  <span style="FONT-WEIGHT: normal">In the **Automatic proxy setup** <span style="FONT-WEIGHT: normal">section, c<span style="FONT-WEIGHT: normal">lick to turn off **Automatically detect settings**<span style="FONT-WEIGHT: normal">.