## Tuning Web Service Performance

? <meta content="text/html; charset=utf-8" http-equiv="Content-Type"> <meta name="GENERATOR" content="MSHTML 11.00.10570.1001"> <meta name="GENERATOR" content="MSHTML 11.00.10570.1001">

Genus Server offers a new Genus Directory preloading feature in order to improve web service performance. If you experience low web service performance on your first web service calls or seemingly random periods of low performance, we recommend to follow the steps in this article.

The Genus Directory preloading feature is <span style="FONT-STYLE: italic">disabled by default and must be manually enabled after installation of Genus Server. Unless otherwise notified by the Genus Server Installation Wizard, your customized Genus Directory preloading settings will be preserved during later upgrades of Genus Server.

It is not possible to install Genus Server with default settings that will satisfy all needs and patterns of use. E.g. enabling the feature by default may demand too much memory if your application server running Genus Server is configured with many data sets. If you choose to enable the feature, please monitor the memory consumption by using the Windows Task Manager, and adjust your settings or available memory accordingly.

**How to Enable and Configure the Genus Directory Preloading Feature**

The Genus Directory preloading feature may be enabled and configured using the procedure described below.

The settings in <span style="FONT-STYLE: italic">web.config (<span style="FONT-STYLE: italic">C:\Program Files\Genus\Server\wwwroot\Web.config) controls this behaviour. All the parameters in the <span style="FONT-STYLE: italic">configuration/appSettings section should not be modified directly in the web.config file, but overrides shoud rather be added to the <span style="FONT-STYLE: italic">appSettingsOverrides.config file (<span style="FONT-STYLE: italic">C:\Program Files\Genus\Server\wwwroot\appSettingsOverrides.config).  

The following parameters that control the level of parallelism are from the <span style="FONT-STYLE: italic">web.config file. The parameters to adjust are copied to the <span style="FONT-STYLE: italic">appSettingsOverrides.config file and modified there:  

<table>

<tbody>

<tr>

<td style="PADDING-BOTTOM: 20px; PADDING-TOP: 20px; PADDING-LEFT: 40px; PADDING-RIGHT: 40px">

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

</td>

</tr>

</tbody>

</table>

To preload several instances of the model to achieve better response in a multi parallel request scenario, the following parameters should be adjusted:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Parameter</th>

<th>Setting</th>

</tr>

<tr>

<td>WarmUpController:CoreServiceObjectPoolWorkerEnabled</td>

<td>The default value is <span style="FONT-STYLE: italic">true, which should normally not be changed.</td>

</tr>

<tr>

<td>WarmUpController:CoreServiceObjectPoolWorkerPreloadInterval</td>

<td>

Controls the amount of time between the loading of new instances are attempted started. The default value is <span style="FONT-STYLE: italic">00:00:10, which means that it will take (at least) 100 seconds to load 10 instances. If the the load time for each instance is more than 10 seconds the total time is longer.

</td>

</tr>

<tr>

<td>WarmUpController:CoreServiceObjectPoolPreloadSize</td>

<td>Controls the number of instances to preload. The default is <span style="FONT-STYLE: italic">0, which means no preloading is performed. Adjust this value to, for example 10, to preload 10 instances.</td>

</tr>

<tr>

<td>CoreService:MaxThreadCount</td>

<td>

Limits the level of parallelism. The default value is <span style="FONT-STYLE: italic">50, which should allow for 50 concurrent requests. This should normally be enough, but it can be wise to experiment slightly to see the effects in your environment.

</td>

</tr>

</tbody>

</table>