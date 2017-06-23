# Special Considerations for MySQL

There are certain default settings that should be adjusted in the MySQL installation. This can be done in the Options File which is available in MySQL Workbench, under Server Administration in the Configuration section.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Section</th>

<th>Proprty</th>

<th>Description</th>

<th>Required Value</th>

<th></th>

</tr>

<tr>

<td>Advanced</td>

<td>lower_case_table_names</td>

<td>

If set to 1, table names are stored in lowercase on disk, and table names will be case insensitive. Should be set to 2 if you are using a case-insensitive file system.

A value of 2 is required to allow the use of camelcase for table names.

</td>

<td>2</td>

<td></td>

</tr>

<tr>

<td>Networking</td>

<td>max_allowed_packet</td>

<td>

Max packetlength to send/receive to/from server. Value in bytes. Notation allows M to be used for Megabytes.

A value of 16MB or more is required for the Genus help system to be transferred from the application server to the rich clients.

</td>

<td>

16M

(or more)

</td>

<td></td>

</tr>

</tbody>

</table>