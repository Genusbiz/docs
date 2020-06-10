# Improving analysis performance

The analysis functionality in Genus is based on calculating numeric Values aggregated over Categories.

In an analysis, all Categories are loaded into the client when loading an analysis.

In many cases, not all objects in a Category will be applicable to the user.

Imagine a sales analysis where Sales are aggregated over Shops. For a user only responsible for Shops in a Region, the other Shops are not interesting. If this is true for all uses of the underlying data mart,  a self, which is a filtering method relative to the current user, can be used.

See [Self filters in data marts](../data-marts/self-filters.md).
