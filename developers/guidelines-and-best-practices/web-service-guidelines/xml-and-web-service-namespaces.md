## XML and Web Service Namespaces

XML schemas and web services are defined within a namespace. The namespace may be any valid URI, i.e. an URL like _http://www.w3.org/2001/XMLSchema_ or an URN like _urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66_. The namespace URI is simply a name, not an address of a document on the web.

We recommend using namespace URIs on an URL format like "http://" Unique-Customer-Domain-Name "/" Application-Or-Area "/" ... "/" Year "/" Month "/"; e.g. "_http://schemas.genus.net/SomeApplication/SomeWebServices/2010/10/"._   
By adding date information, this naming pattern provides a simple way of versioning the WSDL or XML Schema document. You should not change this namespace during a development phase, but after web service is deployed in a production environment, the namespace should be updated whenever the definition of the web service (WSDL) or the XML schema is modified. Remember to keep WSDL and XML Schema namespaces in sync.

Note that it is recommended to use the same namespace for the XML schema, as the the Web Service it is used with.