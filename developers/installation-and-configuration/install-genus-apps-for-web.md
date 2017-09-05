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
