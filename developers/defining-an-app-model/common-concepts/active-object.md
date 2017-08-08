---
title: Active object
description: The set of objects selected in the user interface in Genus App Platform
author: jtroset
---

# Active object

*Active object* is a term that denotes the object, or set of objects, in a data source, that are selected in the user interface at a given time. The concept is used in conditions and data filters to let the app react to selections the user makes.

For example, in a form with one list of customers, and one list of customer contacts, the list of customer contacts can be filtered on the selected customer or customers.

| Data filter for contact                            | Description                                                                |
| ---------------------------------------------------|----------------------------------------------------------------------------|
| Contact.Customer = Customer.SingleSelectedObject   | Contacts for a customer are shown if one and only one customer is selected.|
| Contact.Customer IsAnyOf Customer.SelectedObjects  | Contacts for a customer are shown if one or more customers are selected.   |
