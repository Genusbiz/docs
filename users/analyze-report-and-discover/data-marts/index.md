# Data marts

The main idea of the data mart is to simplify access to enterprise data, for different purposes and users, by reducing data complexity and volume. An app model will typically have several data marts, each of which serves a specific and focused purpose for a group of users, through [Analyses](../analysis/index.md).

The data mart reduces the data volume by defining a subset of all the data available in your solution. Only the data sources and fields that are relevant to the purpose of the data mart are added. For example; in a data mart focusing on sales we add data sources for sales representatives, product hierarchies, and actual sales with fields like names, amounts and dates. In addition, data filters are defined for the data sources to include only data that is relevant. For example; only sales for the last 12 months for a specific product category.

The complexity is reduced, not only indirectly by reducing the data volume, but more importantly by explicitly specifying which connections to use between data sources. In enterprise data there are very often many connections available between two data sources. For example; an invoice is connected to the month data source through the invoice date, the due date, and the payment received date fields.

The data mart also provides the possibility to define new supplements to the existing data. Fields and data sources that do not exist in the enterprise data can be added by defining how the values are calculated when the data mart is loaded. For example, an aggregate of the sales data can be created to improve performance for the users, or an extra field calculating the number of days between the order date and shipping date can be added to the internet sales data source.

To get started with data marts, see  [here](getting-started.md). After having defined a data mart, you may want to define an analysis, see [here](../analysis/getting-started.md) for how to get going.
