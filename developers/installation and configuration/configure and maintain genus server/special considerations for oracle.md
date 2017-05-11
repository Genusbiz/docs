## Special Considerations for Oracle

Reading large objects, for example BLOB or CLOB, from the database can be memory intensive operations, and sometimes performance can be improved by reading the data in chunks. Reading large objects in chunks, on the other hand, can lead to an increase in connections to the database, especially if there are many concurrent users. The optimal behaviour is therefore different from solution to solution, and this behaviour can therefore be modified by defining certain properties in the app.config or web.config files.

Genus attempts to determine the best way to read large objects in each case; and large objects are then read, either in one operation, or in chunks. If the object is read in chunks, Genus looks for relevant settings in the configuration files and uses these, or applies the default values if no such settings are defined.

The settings also applies to write operations.

 <table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Values</th>

<th>Description</th>

<th>

Default

(if not defined in config file)

</th>

</tr>

<tr>

<td>**OracleOverrideFetchSize**</td>

<td>True / False</td>

<td>

**False**: Let Genus decide when to read large objects in one operation, and when to use the settings defined in the configuration file.

**True**: Always use the settings in the configuration file.

</td>

<td>False</td>

</tr>

<tr>

<td>**OracleInitialLOBFetchSize**</td>

<td>

Integer Number

</td>

<td>

The number of bytes or characters to read of LOB data types during first read operation.

**0**: Do not read LOB data types during first read. This means that all other data types are read first, and LOB data types are read in subsequent read operations.

**-1**: Read LOB data types in full during first read operation. This means that the LOB data types are read toghether with all the other data types.

For more information, see [InitialLOBFetchSize](http://docs.oracle.com/cd/E11882_01/win.112/e23174/OracleCommandClass.htm#BABEGDHA)  and [Obtaining LOB Data](http://docs.oracle.com/cd/E11882_01/win.112/e23174/featData.htm#BABFGDGJ)in the Oracle documentation.

</td>

<td>-1</td>

</tr>

<tr>

<td>**OracleInitialLONGFetchSize**</td>

<td>Integer Number</td>

<td>

The number of bytes or characters to read of LONG data types during first read operation.

**0**: Do not read LONG data types during first read. This means that all other data types are read first, and LONG data types are read in subsequent read operations.

**-1**: Read LONG data types in full during first read operation. This means that the LONG data types are read toghether with all the other data types.

For more information, see [InitialLONGFetchSize](http://docs.oracle.com/cd/E11882_01/win.112/e23174/OracleCommandClass.htm#BABCBFFB)  and [Obtaining LONG and LONG RAW Data](http://docs.oracle.com/cd/E11882_01/win.112/e23174/featData.htm#i1007197)  in the Oracle documentation.

</td>

<td>-1</td>

</tr>

<tr>

<td>**OracleFetchBufferSize**</td>

<td>Integer Number</td>

<td>

The number of bytes or characters to be read at a time of LOB and LONG datatypes, after the first read operation.

This setting is not used for LOB data types if the OracleInitialLOBFetchSize is -1, or for LONG data types if the OracleInitialLONGFetchSize is -1.

</td>

<td>

131072

(128KB)

</td>

</tr>

</tbody>

</table> 

The settings are defined as key/value pairs in the appSettings section of the app.config file or the web.config file.

For example:

<appSettings>  
...  
<add key="OracleOverrideFetchSize" value="True"/>  
<add key="OracleInitialLOBFetchSize" value="500000"/>  
<add key="OracleInitialLONGFetchSize" value="500000"/>  
<add key="OracleFetchBufferSize" value="200000"/>

...

</appSettings>