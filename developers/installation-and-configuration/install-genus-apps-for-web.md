---
title: Installing Genus Apps for Web
description: How to install Genus Apps for Web.
author: mja
---

# Installing Genus Apps for Web
When installing Genus Apps for Web some configuration must be selected in the wizard.
1. Select installation folder. If Genus Apps for Web already is installed, this will be prefilled and not editable. Step 2 will be skipped if Genus Apps for Web already is installed.
2. Select configuration method. There are two possible configuration methods:
  * Enter settings manually
    * Application name - Name of application
    * Application server url - url to the application server including protocol and dataset
    * Authentication type: 
      * Anonymous
      * Federated (for IDPorten)
      * Genus (for Genus Native authentication)
      * AD (Active Directory)
      * SSO AD
      * Active Directory also enables a choice for Domain to be attached to username when logging in. This is not required.
    * Sign-in screen settings 
      * Default language on sign in screen
      * User settings:
       * Allow reset password
       * Allow remember user
      * Color settings for loader bar
      * Settings for reset password url, help url for login and Google Analytics ID. These are not required.
  * Import configuration file
    * Select file path to exisiting file from previously installed version
3. Install

# Special configurations for Genus Apps for Web

## Basic configuration of Genus Apps for Web
When installing Genus Apps for Web for the first time, users can choose to either generate a config file, or import one. This file is called **asconfig-web.js** and is located at the root folder of the installastion. 

It is possible to make changes to this file after the installation, but if this is done, it should be configured to never be cached (see the chapter for Cache-Control). 

The file contains these variables that are used by Genus Apps for Web:
* **__GENUS_CONFIG_APPNAME:**
The name of the app server. This is displayed in the app list.
* **__GENUS_CONFIG_LANG:**
Default language of the app server
* **__GENUS_CONFIG_SERVERS:**
Object that contains information regarding the app server. For example the app server url and the auth type.
* **__GENUS_CONFIG_DEFAULTAPP:**
This field can be used to set a default app for a website. This can be used if there are several web sites for one app model, and you wish to bypass the app list. If an app is provided in the url params, this value will be used instead.
* **__GENUS_GA_TRACKING_ID:**
Google analycis tracking id.
* **__GENUS_CONFIG_FOREGROUNDCOLOR:**
Color of the loader bar.
* **__GENUS_CONFIG_BACKGROUNDCOLOR:**
Background color of the loader bar.
* **__GENUS_CONFIG_MAINTENANCEENABLED:**
Set true if there is planned maintenance.
* **__GENUS_CONFIG_MAINTENANCEWARNINGMINUTES:**
Set warning time before the maintenance starts
* **__GENUS_CONFIG_MAINTENANCEFROM:**
Set start time of maintenance
* **__GENUS_CONFIG_MAINTENANCETO:**
Set end time of maintenance.

 
## Domain name and HTTPS

## Reverse Proxy configuration
Install the following module for IIS, if it is not already installed:
http://www.iis.net/downloads/microsoft/application-request-routing

After installation, do the following:
* Open **IIS** and go to ```Application Request Routing Cache```
* Under **Actions** on the right side, select ```Server Proxy Settings```
* Check ```Enable proxy```. If **Reverse rewrite host in response headers** is checked, uncheck this point. Click **Apply**
* Open the IIS site for Genus Apps, and open ```URL Rewrite```
* Right click the **Inbound Rules** field and ```Add Rule(s)```
* Choose **Inbound Rules** -> **Blank rule**
  * Give the rule a name, ie. "Reverse proxy"
  * In the field **Pattern**, enter a regex pattern that matches every path that starts with the dataset name. For example, for Memoria, which uses the dataset "Genus", the pattern should be ```genus/(.*)```.
  * In the field **Rewrite URL**, write the hostname of the app server. This is the same address that are used in Genus Studio shortcuts. The dataset should be included, as well as ```{R:1}``` on the end of the URL. Continuing with the Memoria-example from above, the rewrite URL should be ```https://memoria-desktop.genus.net/genus/{R:1}```
  * Check ```Log rewritten URL```
  * Click **Apply**

At this point, it should work. However, there are some considerations that must be taken in production settings. This setup opens for connection between Genus Apps for Desktop and the server, via Genus Apps for Web. If there are requirements for stricter security in regards to which adress Genus should be able to be opened from, the content of the **Pattern** and the **Rewrite URL** fields can be changed to only allow the calls used by Genus Apps. Depending on the authentication type, **Pattern** can be any of the following: 

* Anonymous: ```[DATASET]/api/public```
* Genus Auth: ```[DATASET]/api/genus```
* Active Directory: ```[DATASET]/api/domain/basic```
* Single Sign on: ```[DATASET]/api/domain```
* External Auth (IdPorten): ```[DATASET]/api/federated```

* To allow for reset password: ```[DATASET]/account```
  
Additionally, the following must be allowed through: ```[DATASET]/?User-Agent=E348BD64-7590-4451-B51F-F94B414A7405```
  
## Forgotten password

## Single sign on
To use single sign on, the authentication type must be **ssoAD**. 

For Internet Explorer, Microsoft Edge, Google Chrome, and Chromium *Intranet Zone* needs to be enabled and set to the Genus Apps for Web url. This can either be done by group policy or with **Internet Options**. 

For Firefox *Integrated Windows Authentication* needs to be enabled.

## Uploading of large files
If it is needed to upload large files through Genus Apps for Web, the web.config file must include the following to avoid an error of type "404 - File or directory not found.": 
```xml
<location path="[NAME OF DATASET]/api/session/filedata">
    <system.web>
      <!-- Increasing executionTimeout to allow for streaming of videos. -->
      <!-- Setting maxRequestLength to 2GB (measured in KB), which is the absolute maximum allowed by IIS integrated mode. -->
      <httpRuntime maxRequestLength="2097151" executionTimeout="600" />
    </system.web>
    <system.webServer>
      <security>
        <requestFiltering>
          <!-- Setting maxAllowedContentLength to 2GB (measured in number of bytes), which is the absolute maximum allowed by IIS integrated mode. -->
          <requestLimits maxAllowedContentLength="2147483647" />
        </requestFiltering>
      </security>
    </system.webServer>
  </location>
```

# Security settings
The following settings is default when installing a new version of Genus Apps for Web. However, when upgrading the web.config file is not changed because of local editing of the file (rewrite rules, etc.). See [Genus Apps for Web hardening](../guidelines-and-best-practices/genus-apps-for-web-hardening.md) for more information.

## Anti-clickjacking
To prevent clickjacking (UI readress attacks) the following must be added to web.config inside the <system.webServer> node:
```xml
<httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
</httpProtocol>
```

## Cross site scripting
To prevent an evil part may run arbitrary code on Genus Apps for web, add the following to web.config under the <customHeaders> node:
```xml
 <add name="X-XSS-Protection" value="1; mode=block" />
 <add name="X-Content-Type-Options" value="nosniff"/>
```

## Charset for html files
To set the default charset for html files, add the following to the web.config file inside the <system.webServer> node:
```xml
<staticContent>
	<remove fileExtension=".html" />
	<mimeMap fileExtension=".html" mimeType="text/html; charset=utf-8" />
</staticContent>
```

## Cache-Control 
To avoid caching problems with html-files after upgrading, add the following to the web.config file inside the <configuration> node:
```xml
<location path="web/index.html">
    <system.webServer>
        <httpProtocol>
            <customHeaders>
                <add name="Cache-Control" value="no-store" />
            </customHeaders>
        </httpProtocol>
    </system.webServer>
</location>
<location path="index.html">
    <system.webServer>
        <httpProtocol>
            <customHeaders>
                 <add name="Cache-Control" value="no-store" />
            </customHeaders>
        </httpProtocol>
    </system.webServer>
</location>
```
