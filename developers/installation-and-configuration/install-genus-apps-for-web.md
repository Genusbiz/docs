---
title: Installing Genus Apps for Web
description: How to install Genus Apps for Web.
author: mja
---

# Installing Genus Apps for Web

1. Select installation folder
2. Select configuration method
  * Enter settings manually
    * Application name, server url and authentication type
    * Sign in settings (language, color, settings)
  * Import configuration file
    * Select file path to exisiting file
3. Install

# Special configurations for Genus Apps for Web

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

## Anti-clickjacking
To prevent clickjacking (UI readress attacks) the following must be added to web.config under the <system.webServer> node:
```xml
<httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
</httpProtocol>
```

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
