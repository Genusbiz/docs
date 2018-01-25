# Data mart subsets

Subsets are filters that can be used to access only a part of the whole data source. For example to display only some of the data, or aggregate a subgroup of the values, etc. Subsets can be used in the definition of Calculated Fields in the data mart, or to filter categories or values in an analysis.

The effect of using a subset, can be compared to the effect of making the same selections in an analysis. For example; a subset filter is defined as *State = Active*, and this subset is used with a value that counts projects. This will give the same result in an analysis as counting projects without any subset, and then selecting *Active* in a list of states. Similarly a subset can consist of filters for several data sources at the same time. For example *Sales Region = East* and *Customer Segment = Small Businesses*. 

Often there can be more than one way to set the filter in a subset. From a performance point of view, it is better to apply the filter on the data source with fewer members. For example: when a subset should filter active projects, set the filter *Project State = Active* in stead of *Project.Project State = Active*.