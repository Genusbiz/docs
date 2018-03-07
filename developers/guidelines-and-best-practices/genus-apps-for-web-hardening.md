# Genus Apps for Web hardening

> [!NOTE]
> Go to the last section ([Recommended settings for security headers](#recommended-settings-for-security-headers)) if you want to skip the theory and only want the configuration options for Microsoft Internet Information Services (IIS).

Our web client (Genus Apps for Web) runs completely in the browser. In other words, there are no active components running server side in IIS. The web server is only serving static html, css and JavaScript files to the browser. After these files are loaded by the browser, it will start to communicate with Genus Services to fetch app model and data. This is done with AJAX requests directly from the browser.

This article will cover some possible attack vectors and how you can protect against yourself against them. In the end there is a section that will cover the actual implementation in IIS.


## Attack vectors

### Clickjacking

> Wikipedia: Clickjacking (User Interface redress attack, UI redress attack, UI redressing) is a malicious technique of tricking a Web user into clicking on something different from what the user perceives they are clicking on, thus potentially revealing confidential information or taking control of their computer while clicking on seemingly innocuous web pages."

Luckily it is quite easy to prevent this attack. There are some security headers that can be enabled on the server that will make all normal browsers to refuse running the content in an IFRAME. To protect against clickjacking you can among others enable a header called **X-Frame-Options** or **Content-Security-Policy** header. X-Frame-Options is an older one and will be replaced by CSP, however, it is recommended to use both headers to cover as many browsers as possible.


The following lines can be used to prevent the site from being included in a frame (but see the last section, [Recommended settings for security headers](#recommended-settings-for-security-headers), for recommendations):
```
<system.webserver>
  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="DENY" />
      <add name="Content-Security-Policy" value="frame-ancestors 'none'" />
    </customHeaders>
  </httpProtocol>
</system.webserver>
```

See https://www.owasp.org/index.php/Content_Security_Policy_Cheat_Sheet and https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet for more details.

### Cross site scripting
This is an attack vector where an evil part may run arbitrary code on a legitimate web application. This can potentially be used to steal the user's credentials or any other bad stuff you can think of.

Unfortunately, there are no quick fix or headers that will protect against this type of attack. It is a continuous process to patch these holes as soon as they are discovered. Nevertheless, the current [OWASP recommendation](https://www.owasp.org/index.php/Security_Headers) is to include the following response headers:

```
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
```

**As of today there are no known cross site vulnerabilities present in Genus.** However, the technical nature of Genus may cause penetration testers to flag some APIs as potentially harmful. To mitigate this, it is possible to enable [Base64](https://en.wikipedia.org/wiki/Base64) encoded responses from the server. Enabling this will result in a performance penalty and is only recommended when strictly needed from a security point of view.


### Downgrade attack
#### Problem
Every production systems with HTTPS enable have two endpoints in IIS. One for HTTP on port 80 and one for HTTPS on port 443. All requests for port 80 will be redirected to 443. So far so good, but this means that the first request to the sever will always hit port 80 and thus be unencrypted. Potentially a man in the middle can then do a downgrade attack and force the client to continue the communication unencrypted and he will then be able to listen in on all the traffic between the server and client.

#### Solution - HTTP Strict Transport Security
To mitigate this problem, we can apply a header that will make the browser remember to directly use HTTPS the next time. As you can understand, we are not completely rid of the problem as the browser will send the very first request unencrypted. It does rely on a principle called Trust On First Use, or TOFU. This header will only be effective if the first request is not compromised.

The name of the header used is **Strict-Transport-Security**. It has a value **max-age** that defined how long, in seconds, the browser should remember to only use HTTPS. This is a sliding value, which means that the browser will remember it for as long as the header states in the last request done to the server.

See https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet for more details.

#### Remove the TOFU-problem
There is a way to remove the TOFU problem as well. However, this means registering the domain in a central registry so that future browsers will know that your site is HTTPS only even before it has made any requests. One of the requirements is that all subdomains use HTTPS. The process is therefore out of scope of this article.

### Encrypted man in the middle

#### Problem
In some instances, there may be possible to listen in on a user's traffic even though it is encrypted. One way is if the attacker in the middle has an encrypted connection to the victim and one to the server and just forwards the traffic. From the user, it will still look like the connection is secure.

#### Solution - Public key pinning
To prevent this, the server can send information in the header on which certificate to expect from the server. This method also relies on the TOFU principle to be effective.

If you are to use public key pinning, do the proper research on this matter. Implementing it wrong can lead to your legitimate users being permanently blocked from the site. **Do not rely on a simple copy/paste config from the Internet. Understand what you are actually doing!**


## Recommended settings for security headers

### Normal mode
This is the settings we currently recommend when using Genus Apps for Web.

```
<system.webServer>

  [...]

  <httpProtocol>
    <customHeaders>
      <!-- Prevent clickjacking -->
      <add name="Content-Security-Policy" value="default-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com; connect-src 'self' app.getsentry.com; img-src 'self' data: app.getsentry.com www.google-analytics.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-ancestors 'self';" />
      <add name="X-Frame-Options" value="SAMEORIGIN" />

      <!-- Prevent cross-site scripting -->
      <add name="X-XSS-Protection" value="1; mode=block" />
      <add name="X-Content-Type-Options" value="nosniff" />

      <!-- Prevent downgrade attack (does not apply for non-HTTPS sites) -->
      <add name="Strict-Transport-Security" value="max-age=31536000" />
    </customHeaders>
  </httpProtocol>

  [...]

</system.webServer>
```

### Strict mode
This mode will disable any third party services included in Genus Apps for Web. This mode cannot be used if the customer use the Google Analytics integration in Genus Apps for Web. Sentry, a third party service for automatic crash reporting, will also be disabled if this mode is used.

```
<system.webServer>

  [...]

  <httpProtocol>
    <customHeaders>
      <!-- Prevent clickjacking -->
      <add name="Content-Security-Policy" value="default-src 'none'; script-src 'self' 'unsafe-eval'; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-ancestors 'none';" />
      <add name="X-Frame-Options" value="DENY" />

      <!-- Prevent cross-site scripting -->
      <add name="X-XSS-Protection" value="1; mode=block" />
      <add name="X-Content-Type-Options" value="nosniff" />
      
      <!-- Prevent downgrade attack (does not apply for non-HTTPS sites) -->
      <add name="Strict-Transport-Security" value="max-age=31536000; includeSubDomains" />
    </customHeaders>
  </httpProtocol>

  [...]

</system.webServer>
```
