# Sankey diagram

A **Sankey diagram** is a flow diagram where the width of the links is proportional to the flow between the nodes.

In the Genus App platform, the diagram is used to present N-1 [values](../concepts/value.md) grouped pairwise by N [categories](../concepts/category.md). The categories will be distributed along the horizontal axis, and appear as vertically stacked columns of category objects. Between each pair of adjacent categories, there will be links visualizing the aggregated value between the category objects.

The component accepts 2, 3 or 4 categories (and thus 1, 2 or 3 main values). In addition to the visualized values, one can specify additional values to be grouped by pairs of adjacent categories. These values will be displayed in the tooltip.

*A typical use case would be to show the flow of tasks from customer to employee and further from employee to task state. Additional values to be displayed in the tooltip could be the number of hours worked on the tasks or the proportion of tasks completed after deadline*
