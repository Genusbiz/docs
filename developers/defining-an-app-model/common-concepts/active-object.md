# Active Object

Active Object is a term that denotes the object, or set of objects, in a data source, that are selected in the user interface at a given time. The concept is used in conditions and data filters to let the application react to selections the user makes.

For example, in a form with one list of customers, and one listi of customer contacts, the list of customer contacts can be filtered on the selected customer or customers.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Data Filter for Contact</th>

<th>Description</th>

</tr>

<tr>

<td>Contact.Customer = Customer.SingleSelectedObject</td>

<td>Contacts for a customer are shown if one and only one customer is selected.</td>

</tr>

<tr>

<td>Contact.Customer IsAnyOf Customer.SelectedObjects</td>

<td>Contacts ofr a customer are shown if one or more customers are selected.</td>

</tr>

</tbody>

</table>