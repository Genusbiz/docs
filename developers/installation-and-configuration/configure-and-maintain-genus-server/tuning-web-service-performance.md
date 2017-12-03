# Tuning Web Service Performance

Genus Server offers a new Genus Directory preloading feature in order to improve web service performance. If you experience low web service performance on your first web service calls or seemingly random periods of low performance, we recommend to follow the steps in this article.

The Genus Directory preloading feature is <span style="FONT-STYLE: italic">disabled by default and must be manually enabled after installation of Genus Server. Unless otherwise notified by the Genus Server Installation Wizard, your customized Genus Directory preloading settings will be preserved during later upgrades of Genus Server.

It is not possible to install Genus Server with default settings that will satisfy all needs and patterns of use. E.g. enabling the feature by default may demand too much memory if your application server running Genus Server is configured with many data sets. If you choose to enable the feature, please monitor the memory consumption by using the Windows Task Manager, and adjust your settings or available memory accordingly.

**How to Enable and Configure the Genus Directory Preloading Feature**

The Genus Directory preloading feature may be enabled and configured using the procedure described below.

The settings in _web.config_ (_C:\Program Files\Genus\Server\wwwroot\Web.config_) controls this behavior. All the parameters in the _configuration/appSettings_ section should not be modified directly in the web.config file, but overrides should rather be added to the _appSettingsOverrides.config_ file (_C:\Program Files\Genus\Server\wwwroot\appSettingsOverrides.config_).  

The following parameters that control the level of parallelism are from the _web.config_ file. The parameters to adjust are copied to the _appSettingsOverrides.config_ file and modified there:  

```xml
<appSettings>  

. . .  

<!-- The following properties controls background object pool preloading  
and maintenance. Disabling this background worker will lead to a memory  
leak. -->  
<add key="WarmUpController:CoreServiceObjectPoolWorkerEnabled" value="true" />  
<add key="WarmUpController:CoreServiceObjectPoolWorkerPreloadInterval" value="00:00:10" />  

<!-- This property controls the Core Service Pool Size. If set to a  
positive integer value N the system will try to load and maintain at least  
N instances of the Core Service. Default value is 0, meaning no preloading  
will take place. -->  
<add key="WarmUpController:CoreServiceObjectPoolPreloadSize" value="0" />  

<!-- The following property controls the number of concurrent calls to the  
Core Service. Please assign a limit to prevent exhaustion of server  
resources. A value of 0 denotes "no limit". -->  
<add key="CoreService:MaxThreadCount" value="50" />  

. . .  

</appSettings>
```

To preload several instances of the model to achieve better response in a multi parallel request scenario, the following parameters should be adjusted:

| Parameter | Setting |
|-----------|---------|
| WarmUpController:CoreServiceObjectPoolWorkerEnabled         | The default value is _true_, which should normally not be changed. |
| WarmUpController:CoreServiceObjectPoolWorkerPreloadInterval | Controls the amount of time between the loading of new instances are attempted started. The default value is _00:00:10_, which means that it will take (at least) 100 seconds to load 10 instances. If the the load time for each instance is more than 10 seconds the total time is longer. |
| WarmUpController:CoreServiceObjectPoolPreloadSize | Controls the number of instances to preload. The default is _0_, which means no preloading is performed. Adjust this value to, for example 10, to preload 10 instances. |
| CoreService:MaxThreadCount | Limits the level of parallelism. The default value is _50_, which should allow for 50 concurrent requests. This should normally be enough, but it can be wise to experiment slightly to see the effects in your environment. |
