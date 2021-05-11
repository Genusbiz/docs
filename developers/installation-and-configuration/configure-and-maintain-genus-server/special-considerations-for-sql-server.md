# Special considerations for Microsoft SQL Server

## We recommend using the READ_COMMITTED_SNAPSHOT database option

An isolation level defines how a transaction can access or use the data and resources which are being modified by other transactions. For more background on isolation levels, please refer to Microsoft's SQL Server documentation pages.

Genus uses the READ UNCOMMITTED ("dirty read") transaction isolation level on all reads (SELECTs), except when a read is part of an ongoing transaction. In such cases Genus defaults to READ COMMITTED during (inside) such transactions.

In its default behavior READ COMMITTED results in shared locks, which prevent other transactions from modifying rows being read by the current transaction, thus increasing the chance of deadlocks and thereby decreasing concurrency.

The READ_COMMITTED_SNAPSHOT database option changes the behavior of transactions running under the READ COMMITTED transaction isolation level. Now row versioning is used instead of locking, thereby reducing the chance of deadlocks and increasing concurrency.

If your application involves a high amount of transactions containing reads (SELECT) towards the same tables, and you experience failed (deadlocked) transactions, we recommend turning READ_COMMITTED_SNAPSHOT on.

Our tests show that this should not hurt your application's overall database performance, but we nevertheless recommend you to test and check for any performance changes before and after you turn this option on.

```
ALTER DATABASE YourDatabaseName SET READ_COMMITTED_SNAPSHOT ON
```
