# Transform XML Data

Use this effect to transform XML data to a new format or even to HTML or a text document. The effect outputs a new document by applying an XSLT to an input XML. XSLT stands for EXtensible Stylesheet Language Transformations and is a language for transforming XML documents into other XML documents, text documents or HTML documents.

The effect can be useful for several purposes:

*   Integrate across services by transforming XML returned from one web service to a new format, before calling another web service.
*   Create XML from your data objects, and transform the XML to HTML for use on web pages.
*   Transform XML from your data objects or a web service to HTML or plain text, for a more user friendly presentation.

To transform XML Data, do the following:

1. In the **Name** box, optionally type a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
1. In the **Description** box, optionally type a description.
1. On the **Input XML** tab, do one of the following:
   * If the XML data is located in a data source (General File or XML), in the **Data Source** box, select the data source.
   * If the XML data is located in a field (File Data or String), click **Field**, and then click **[...]** to select a field.
   * If the Xml data is located in a file or an url, click **Url** and enter the url.
1. On the **Transformation Stylesheet (XSLT)** tab, do one of the following:
   * If the XML data is located in a data source (General File or XML), in the **Data Source** box, select the data source.
   * If the XML data is located in a field (File Data or String), click **Field**, and then click **[...]** to select a field.
   * If the Xml data is located in a file or an url, click **Url** and enter the url.
   * If you are defining the XSLT within the effect, click the **Script** box and enter the XSLT as text.
1. On the **Output** tab, do the following:
   * In the **Data Source** box, select the data source (File or XML).
   * Select the proper encoding for the output data.
1. On the **Permissions** tab, it is possible to override some restrictions to allow the stylesheet to access data from external sources. It is recommended to keep these settings off unless required by the specific Xsl stylesheet.  

See Also

*   [W3C - XSL Transformations (XSLT)](http://www.w3.org/TR/xslt)
