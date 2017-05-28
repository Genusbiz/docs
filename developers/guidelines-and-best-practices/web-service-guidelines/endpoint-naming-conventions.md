## Endpoint Naming Conventions

Each endpoint should be given a name that is unique within a web service. Further, the name should only contain letters, numbers and the underscore character (_).

The unique name could be built by concatenating the characteristics of the endpoint and then add the web service name.

E.g. an endpoint within the Product Web Service with the following features could be named: **basicHttpBinding_basicAuth_ActiveDirectory_SOAP11_Product**

Or just **basicHttpBinding_ActiveDirectory_Product**  

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Value</th>

</tr>

<tr>

<td>Binding</td>

<td>basicHttpBinding</td>

</tr>

<tr>

<td>Credential Type</td>

<td>Basic</td>

</tr>

<tr>

<td>Credential Store</td>

<td>Active Directory</td>

</tr>

<tr>

<td>SOAP Version</td>

<td>Soap1.1</td>

</tr>

</tbody>

</table>