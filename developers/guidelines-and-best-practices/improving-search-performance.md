## Improving Search Performance

The search functionality in the Genus desktop client is powerful, and easy to use for a large number of users. It is important to ensure good performance when many searches are performed at the same time, or there are large data volumes to search in, or both. There are several considerations to make when addressing this issue. There are no set answeres, and any measures, limits, or other considerations must be evaluated on a case to case basis.

**The Model**

When using the search box to [search for objects](../../users/searching-for-data/search-for-objects.md), a set of relevant fields are searched. To offer wider searches, more fields can be defined as relevant when setting up [search](../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/search.md). If "too many" fields are added, the performance may be affected. Also, adding fields from connected objects can affect performance, for example adding the field <span style="FONT-STYLE: italic">Contact.Company.Name in the search box for <span style="FONT-STYLE: italic">Contact. If the users require many fields to be searched, a useful approach is to search only one large hidden text field, which is populated with the concatenated values of the other fields using [rules](../defining-the-application-model/object-class/modify-an-object--or-identifier-domain/rules.md). This field is then normally searched using full text search. Date properties are not recommended for this approach, as several different date formats may apply.

For properties and when defining named search fields in the search pane, it is possible to set the default search operator. Consider this especially for text fields, and where possible choose the less demanding operators <span style="FONT-STYLE: italic">Equal To and <span style="FONT-STYLE: italic">Starting With over <span style="FONT-STYLE: italic">Containing.

The object model in Genus can be compared to an ER-diagram, and the rules of normalization also applies. A good clean object model is always easier to work with and should be the norm. In some cases however, usually connected to performance issues, it is necessary to have a pragmatic approach to these rules. Denormalization is probably one of the easiest and most efficient ways to improve search performance, when required to search based on related objects.

Properties defined as functions with RDBMS expressions can also be used for searching, but special care should be taken to ensure that the expression does not slow down the database access. The reason is that the normal index is difficult, or impossible, to use. For additional information for Oracle, see below.

**The Database**

Use indexes. A base rule is that all columns used for searching should have an index. In addition there should always be a unique index for the primary key of every table.

Index statistics should be updated regurarly. Newer database versions perform this task automatically, but if not schedule scripts or maintenance plans, usually on a daily or weekly basis.

<span style="FONT-STYLE: italic; FONT-WEIGHT: bold">MSSQL

In certain cases a Clustered Indexe can improve performnce. To put it simply, if a table has a clustered index, the data is ordered physically on disk according to that index. Therefore a table can only have one clustered index. This improves performance in the cases where the result of a search is a sequential set of data, and the clustered index should therefore be for a property which is "always", or at least very often, used in search. Examples can be a <span style="FONT-STYLE: italic">Date column in a <span style="FONT-STYLE: italic">Transaction table, or the Company column of the <span style="FONT-STYLE: italic; FONT-WEIGHT: normal">Contacttable.

It is rarely necessary with more than one column per index for MSSQL, as it seems to be quite efficient at combining them automatically.

<span style="FONT-STYLE: italic; FONT-WEIGHT: bold">Oracle

In the cases where a function property (RDBMS Expression) is required, it is possible to create a function index, or even a function column to improve performance. For more information, follow the link at the bottom of the page.

Concatenated indexes, where two or more columns are combined into one index, can be used in special cases where the same columns very often is used together for searching.

There are different types of indexes that can be used for the same type of data, for example the bitmap index and the B-tree index. There are several considerations when choosing index type. For more information, follow the link at the bottom of the page.

Partitioning and Materialized Views are powerful mechanisms that can improve performance dramatically.

For more information, see [www.oracle.com](http://www.oracle.com/) .