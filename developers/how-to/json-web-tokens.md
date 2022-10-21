# JSON Web Tokens
This is a "how to" describing the process of generating a JSON Web Token (JWT) in Genus using the RSA256 encryption algorithm.

## A little intro to JWT
As per OpenID Standard:
> JSON Web Token (JWT) is a means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS) and/or encrypted using JSON Web Encryption (JWE).

A JWT Token consists of 3 parts:

- Header
- Payload
- Signature

## JWT in Genus
JsonWebToken has been introduced as a class in the Genus Expression Language with the following function members: createFromToken and createToken.

When using the createToken function in the  you'll need to provide the following items: private key for the certificate, and if required, the root CA certificate that issued the certificate.

If you have been provided a p12-file containing the certificate itself and the private key, you'll need to convert it to obtain the RSA private key. See the next section, else skip to the Create token section.

## .p12 file bundle to RSA private key


Download openssl.exe and run the following commands:

1. openssl pkcs12 -in certificate.p12 -nocerts -out certificate.key.pem -nodes
2. openssl pkcs12 -in certificate.p12 -nokeys -out certificate.cert.pem -nodes
3. openssl rsa -in certificate.key.pem -out certificate.key.rsa.pem

As the result you will get three files, and in certificate.key.rsa.pem you'll find the following section:

-----BEGIN RSA PRIVATE KEY-----<br>
.....<br>
-----END RSA PRIVATE KEY-----<br>

Copy the whole block and use it as the private key.

## Create token
Use the JsonWebToken class and createToken function.

<b>createToken(headerAsJsonString, claimsAsJsonString, signatureAlgorithm, privateKey, expandKeyFromEnvironment)</b>

### Headers


#### What is x5c
The "x5c" (X.509 certificate chain) Header Parameter contains the X.509 public key certificate or certificate chain [RFC5280] corresponding to the key used to digitally sign the JWS. The certificate or certificate chain is represented as a JSON array of certificate value strings.

### Claims
The payload of the JWT contains claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

#### Registered claims
These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of them are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and [others](https://www.rfc-editor.org/rfc/rfc7519#section-4.1).

Notice that the claim names are only three characters long as JWT is meant to be compact.

#### Public claims
These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace.

#### Private claims
These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.


## Example
The following example creates a JWT to use towards Maskinporten:

JsonWebToken.createToken("{\"x5c\": [\"" + localObject.certificate + "\"]}" , "{\"aud\": \"https://ver2.maskinporten.no/\", \"iss\": \"a42439c8-8f07-4754-aa72-21b153bf65f5\",\"scope\": \"svv:kjoretoy/periodiskkontroll\", \"exp\":"+ CalendarTime.now().addSeconds(120).toUnixTime(false).toString() +",\"iat\":"+ CalendarTime.now().toUnixTime(false).toString() +", \"jti\": \"E9BF7EBA-F120-4B4A-8C02-8BE07CB309E7\", \"resource\": \"https://www.test.vegvesen.no\"}", "RS256", localObject.privateKey, false).toString()
