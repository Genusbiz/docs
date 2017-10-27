# Mapping of Property Data Types and RDBMS Data Types

**ANSI String**

MS SQL Server: *char, varchar*

Oracle: *char, varchar2*

**Unicode String**  
MS SQL Server: *nchar, nvarchar*
Oracle: *nchar, nvarchar2*

**Float**

MS SQL Server: *float, real, decimal, numeric*

Oracle: *number, float*

**16-bit Integer**

MS SQL Server: *tinyint*

Oracle: *number( 1..4, 0 )*

**32-bit Integer**

MS SQL Server: *int*

Oracle: *number( 1..10, 0 )*

Note that Genus Apps  suggests 64-bit integer as data type for table columns in Oracle with a precision equal to 10\. A 32-bit integer has 10 digits of precision, but you can not count on the full 10th digit. The range of a 32-bit integer is -2,147,483,648 to 2,147,483,647, which gives log10 ( 2^31) = 9.3319 digits of precision.

**64-bit Integer**

MS SQL Server: *bigint*

Oracle: *number( 10..18, 0 )*

**Date**

MS SQL Server: *datetime*

Oracle: *date*

**Date and Time**

MS SQL Server: *datetime*

Oracle: *date*

**Binary Fixed**

Fixed-length binary data with a maxium size of 8,000 bytes.

MS SQL Server: *binary*

Oracle: *not supported*

**Binary Variable**

Variable-length binary data with a maximum size of 8,000 bytes.

MS SQL Server: *varbinary*

Oracle: *raw, long raw*

**Binary Large Object**

Variable-length binary data.

MS SQL Server: *image*

Oracle: *blob*

**Textual Large Object (ANSI)**

Variable length non-Unicode character data.

MS SQL Server: *varchar(max)*

Oracle: *clob*

**Textual Large Object (Unicode)**

Variable length Unicode character data.  

MS SQL Server: *nvarchar(max)*
Oracle: *nclob*