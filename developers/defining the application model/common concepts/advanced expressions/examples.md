## Examples

**// Calculate VAT amount**

charge.amount * charge.vat.rate

**// Calculate invoice no of days overdue, if applicable**

if invoice.state <> InvoiceState.settled then (CalendarTime.now - invoice.dueDate).days else null

**// Concatenate employee name**

employee.firstName

+ ( if employee.middleName = null then "" else ( if employee.middleName.trim = "" then "" else " " + employee.middleName))

+ " " + employee.lastName

**// Find the largest value**

order.amount.asOrderedSet().Sort(true).last()

**// Select female employees**

employees.select( e | e.gender = Gender.female and EmploymentState.engaged)

**// Find birthdate of the youngest male employee**  
employees.select( e | e.gender = Gender.male and EmploymentState.engaged).asOrderedSet().sort(false).first()  

**// Create a comma separated list of regions**

String.join(",", regions.name, false)

**// Validate IBAN format**

CheckSum.ibanValidate( transaction.recipientIBAN )