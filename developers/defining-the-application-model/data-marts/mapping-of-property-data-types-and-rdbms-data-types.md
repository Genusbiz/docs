## Mapping of Property Data Types and RDBMS Data Types

**ANSI String**

MS SQL Server: <span style="FONT-STYLE: italic">char, varchar

Oracle: <span style="FONT-STYLE: italic">char, varchar2

**Unicode String**  
MS SQL Server: <span style="FONT-STYLE: italic">nchar, nvarchar  
Oracle: <span style="FONT-STYLE: italic">nchar, nvarchar2

**Float**

MS SQL Server: <span style="FONT-STYLE: italic">float, real, decimal, numeric

Oracle: <span style="FONT-STYLE: italic">number, float

**16-bit Integer**

MS SQL Server: <span style="FONT-STYLE: italic">tinyint

Oracle: <span style="FONT-STYLE: italic">number( 1..4, 0 )

**32-bit Integer**

MS SQL Server: <span style="FONT-STYLE: italic">int

Oracle: <span style="FONT-STYLE: italic">number( 1..10, 0 )

Note that Genus App Platform suggests 64-bit integer as data type for table columns in Oracle with a precision equal to 10\. A 32-bit integer has 10 digits of precision, but you can not count on the full 10th digit. The range of a 32-bit integer is -2,147,483,648 to 2,147,483,647, which gives log10 ( 2^31) = 9.3319 digits of precision.

**64-bit Integer**

MS SQL Server: <span style="FONT-STYLE: italic">bigint

Oracle: <span style="FONT-STYLE: italic">number( 10..18, 0 )

**Date**

MS SQL Server: <span style="FONT-STYLE: italic">datetime

Oracle: <span style="FONT-STYLE: italic">date

**Date and Time**

MS SQL Server: <span style="FONT-STYLE: italic">datetime

Oracle: <span style="FONT-STYLE: italic">date

**Binary Fixed**

Fixed-length binary data with a maxium size of 8,000 bytes.

MS SQL Server: <span style="FONT-STYLE: italic">binary

Oracle: <span style="FONT-STYLE: italic">not supported

**Binary Variable**

Variable-length binary data with a maximum size of 8,000 bytes.

MS SQL Server: <span style="FONT-STYLE: italic">varbinary

Oracle: <span style="FONT-STYLE: italic">raw, long raw

**Binary Large Object**

Variable-length binary data.

MS SQL Server: <span style="FONT-STYLE: italic">image

Oracle: <span style="FONT-STYLE: italic">blob

**Textual Large Object (ANSI)**

Variable length non-Unicode character data.

MS SQL Server: <span style="FONT-STYLE: italic">varchar(max)

Oracle: <span style="FONT-STYLE: italic">clob

**Textual Large Object (Unicode)**

Variable length Unicode character data.  

MS SQL Server: <span style="FONT-STYLE: italic">nvarchar(max)  
Oracle: <span style="FONT-STYLE: italic">nclob