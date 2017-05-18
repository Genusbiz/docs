## Examples

###Calculate VAT amount
```php
charge.amount * charge.vat.rate
```

###Calculate invoice no of days overdue, if applicable
```php
if invoice.state <> InvoiceState.settled then (CalendarTime.now - invoice.dueDate).days else null
```

###Concatenate employee name
```php
employee.firstName + ( if employee.middleName = null then "" else ( if employee.middleName.trim = "" then "" else " " + employee.middleName)) + " " + employee.lastName
```

###Find the largest value
```php
order.amount.asOrderedSet().Sort(true).last()
```

###Select female employees
```php
employees.select( e | e.gender = Gender.female and EmploymentState.engaged)
```

###Find birthdate of the youngest male employee
```php
employees.select( e | e.gender = Gender.male and EmploymentState.engaged).asOrderedSet().sort(false).first()  
```

###Create a comma separated list of regions
```php
String.join(",", regions.name, false)
```

###Validate IBAN format
```php
CheckSum.ibanValidate( transaction.recipientIBAN )
```