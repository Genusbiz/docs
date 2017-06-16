## Consume a REST Service

To consume a REST Service, do the following:

 1.  In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
2.  In the **Description** box, optionally enter a description.
3.  Specify how to make the request in the **Request** section.
4.  For the **Method** option, select one of the option buttons <table>

    <tbody>

    <tr>

    <td>GET</td>

    <td>Requests a specific representation of a resource.</td>

    </tr>

    <tr>

    <td>PUT</td>

    <td>Creates or updates a resource with the supplied representation.</td>

    </tr>

    <tr>

    <td>POST</td>

    <td>Submits data to be processed by the identified resource.</td>

    </tr>

    <tr>

    <td>DELETE</td>

    <td>Deletes the specified resource.</td>

    </tr>

    </tbody>

    </table> 
5.  In the **URL** box specify the address of the REST service. You can compose a URL by typing text, and inserting formulas and fields from your data sources. See the article [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") for more information.
6.  In the **User Name** box enter the user name to use for authentication. You can compose a user name by typing text, and inserting formulas and fields from your data sources. See the article [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") for more information.
7.  In the **Password Box** enter the password to use for authentication. You can compose a password by typing text, and inserting formulas and fields from your data sources. See the article [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") for more information.
8.  Click **Headers** to add header information. You can compose the headers by typing text, and inserting formulas and fields from your data sources. See the article [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") for more information.
9.  Click **OK** to close the Headers window.
10.  Click **Body** to add body information.
11.  To use information in a data source for the body, click **Read from Data Source**.
12.  In the **Format** list select the format for the body when reading it from a data source. Options are **XML**, **JSON** and **File**.
13.  In the Data Source list, select the data source to use. Some data source types must have *Occurrences equal to One. The format defines what data sources are available*. <table>

    <tbody>

    <tr>

    <th>Format</th>

    <th>Data Source Types</th>

    <th>Occurrences</th>

    </tr>

    <tr>

    <td>XML</td>

    <td>XML Document</td>

    <td>One</td>

    </tr>

    <tr>

    <td>JSON</td>

    <td>Object, Local Object</td>

    <td>One or many</td>

    </tr>

    <tr>

    <td>File</td>

    <td>General File</td>

    <td>One</td>

    </tr>

    </tbody>

    </table> 
14.  In the **Encoding** list select the encoding to use. Only applicable for XML format.
15.  in the **Namespace Style** list select the style for namespacing. Only applicable for XML format.
16.  To compose a text for the body, click **Composed Text**. And then compose a body by typing text, and inserting formulas and fields from your data sources. See the article [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") for more information.
17.  Click **OK**, to close the Body window.
18.  Specify how to handle the response in the **Response Handlers** section. Several response handlers can be added, each one with a condition. The response handlers are evaluated in the defined sequence, and the first handler with a condition that is fulfilled, is used to handle the respons. To change the priority of the response handlers, select a handler in the list and click **Move Up** or **Move Down**. To add a response handler, click **Add**.
19.  In the Condition box, click **...** to add a [condition](../../../common-concepts/conditions.md). To create a condition based on the HTTP Status Code of the response, use the field *actionOrchestration.httpStatusCode. If no condition is specified, the handler defaults to handling responses with HTTP Status Code = 200*.
20.  In the **Expected Format** box select the format the service is expected to return. If the content type of the result does not match the expected format, an [On HTTP Content Type Mismatch](../../exception-handling.md) violation is thrown.
21.  In the **Import Format** box select the format you want to use to handle the response. It is possible to import the response in a different format than it is received. <table>

    <tbody>

    <tr>

    <th>Expected Format \ Import Format</th>

    <th>Text</th>

    <th>XML</th>

    <th>JSON</th>

    <th>General File</th>

    </tr>

    <tr>

    <th>Text</th>

    <td>X</td>

    <td></td>

    <td></td>

    <td>X</td>

    </tr>

    <tr>

    <th>XML</th>

    <td>X</td>

    <td>X</td>

    <td></td>

    <td>X</td>

    </tr>

    <tr>

    <th>JSON</th>

    <td>X</td>

    <td></td>

    <td>X</td>

    <td>X</td>

    </tr>

    <tr>

    <th>File</th>

    <td></td>

    <td></td>

    <td></td>

    <td>X</td>

    </tr>

    </tbody>

    </table> 
22.  In the **Data Source** box, select the data source to store the response to. A new object is always created in the selected data source for the response data.
23.  In the **Field** box, select the field in the data source to store the response to. Only applicable for the text response format.
24.  In the **XML Root Path** box, enter an XPath expression to only store a specific part of the XML. Only applicable for XML expected response format.
25.  In the **JSON Root Path** box, enter a path to only store a specific part of the JSON document. Only applicable for JSON expected response format. To access object properties, use the dot-notation *store.name or the bracket-notation store['name']. To access array elements, use the subscript operator store.books[0]. Array indices always start by 0*.
26.  Select **Validate XML Data** to perform a validation of an XML response based on its XML Schema. Only applicable for *XML expected response format and import format*.
27.  Select **Ignore Unexpected Format** to avoid raising the *On HTTP Content Type Mismatch exception if the received format does not correspond to the expected format*.