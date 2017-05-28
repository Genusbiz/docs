## Identifying and Naming the Web Service Operations

A Web Service offers a set of operations. These operations can be implemented in the same way as functions are implemented in common programming languages.

E.g. <span style="FONT-STYLE: italic">public ProductList GetProductList( integer ProductCategory )

The operation GetProductList returns a list of products (ProductList) based on the input parameter ProductCategory.

**Identifying the service operations (Finding the right granularity of the operations**)

Deciding the granularity of the Web Service interface can be a challenging part of service design.

Consider the GetProductList example above being implemented as an operation within a Web Service named Product and invoked by a thin client (e.g. web or apps).

On the thin client, the user is presented with a list of product names with the option to inspect each product one by one.

Consider the following approaches:

1.  Create one coarse-grained operation; returning all product- details for all products.
2.  Create two fine-grained operations; one operation providing the product names for a product- listing, and one returning the product details for a product selected in the product- list.

The first approach requires only one service operation request, but if the user only inspects details on 1 out of 10 products, then the request ends up in returns more information than what is actually needed by the client.  

The second approach requires invoking more operations, but returned data is more tailored.  
Finding the right level of granularity can be time consuming, but the time spent designing the service operations, is time well spent.

**Naming the service operations**

The naming of the service itself should influence how the individual operations are labeled. Because a good service name will already establish a meaning and a context, operation names should be streamlined to avoid the use of redundant wording.

E.g. an operation that retrieves invoice history data for a service named Invoice. This operation does not need to be labeled GetInvoiceHistory, because the invoice context is already established by the service name. GetHistory would be sufficient.

Another consideration for labeling operations is the potential reusability of the logic encapsulated by the operation and the service itself. If there is reuse potential, names that tie the operation's functions to a particular activity or task should be avoided.

In other words, it is often wise to choose generic operation names to allow future re-use. For example, it may be appropriate to reduce an operation initially named GetCurrentWidgetPrice to GetCurrentPrice or even just GetPrice.