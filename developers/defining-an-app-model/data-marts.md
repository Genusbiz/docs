## Data Marts

The main idea of the data mart is to simplify access to enterprise data, for different purposes and users, by reducing data complexity and volume. An application model will typically have several data marts, each of which serves a specific and focused purpose for a group of users, through [Analyses](../../users/reporting-on-data/analysis.md) and [Data Extracts](../../users/reporting-on-data/data-extract.md).

The data mart reduces the data volume by defining a subset of the data in the application. Only the data sources and fields that are relevant to the purpose of the data mart are added. For example; in a data mart focusing on sales we add data sources for sales representatives, product hierarchies, and actual sales with fields like names, amounts and dates. In addition, data filters are defined for the data sources to include only data that is relevant. For example; only sales for the last 12 months for a specific product category.

The complexity is reduced, not only indirectly by reducing the data volume, but more importantly by explicitly specifying which connections to use between data sources. In enterprise data there are very often many connections available between two data sources. For example; an invoice is connected to the month data source through the invoice date, the due date, and the payment received date fields.

The data mart also provides the possibility to enrich the existing data by defining new supplements to the data. Fields and data sources that do not exist in the enterprise data can be added by defining how the values are calculated when the data mart is loaded. For example, an aggregate of the sales data can be created to improve performance for the users, or an extra field calculating the number of days between the order date and shipping date can be added to the internet sales data source.

**Topics in "Data Marts"**
* [Data Mart Fundamentals](data-marts/data-mart-fundamentals.md)
* [Data Sources](data-marts/data-sources.md)
* [Data View](data-marts/data-view.md)
* [Tasks](data-marts/tasks.md)
* [Loading and Scheduling Strategies](data-marts/data-mart-loading.md)