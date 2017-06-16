## Function Library Types

### Finance Type

The Finance type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**FV**</td>

<td>

Finance.FV(_rate__, nper__, pmt_ _[, pv]_ _[, paytime]_)

Returns the future value of an investment based on periodic, constant payments and a constant interest rate.

Return Type: Real

<dl>

<dt>rate</dt>

<dd>

Type: Real

The interest rate per period.

</dd>

<dt>nper</dt>

<dd>

Type: Integer

The total number of payment periods in an annuity.

</dd>

<dt>pmt</dt>

<dd>

Type: Real

The payment made each period; it cannot change over the life of the annuity. Typically, pmt contains principal and interest but no other fees or taxes. If pmt is 0 (zero), you must include the pv argument.

</dd>

<dt>pv (Optional)</dt>

<dd>

Type: Real

The present value, or the lump-sum amount that a series of future payments is worth right now. If pv is 0 (zero), you must include the pmt argument.

</dd>

<dt>paytime (Optional)</dt>

<dd>

Type: DueDate

Default Value: DueDate.endOfPeriod

Indicates when payments are due.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**IPMT**</td>

<td>

Finance.IPMT(_rate__, per__, nper__, pv_ _[, fv]_ _[, paytime]_)

Returns the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.

Return Type: Real

<dl>

<dt>rate</dt>

<dd>

Type: Real

The interest rate per period.

</dd>

<dt>per</dt>

<dd>

Type: Integer

The period for which you want to find the interest and must be in the range 1 to nper.

</dd>

<dt>nper</dt>

<dd>

Type: Integer

The total number of payment periods in an annuity.

</dd>

<dt>pv</dt>

<dd>

Type: Real

The present value, or the lump-sum amount that a series of future payments is worth right now.

</dd>

<dt>fv (Optional)</dt>

<dd>

Type: Real

Default Value: 0.0

Future value, or a cash balance you want to attain after the last payment is made. The argument fv may be 0 (the future value of a loan, for example, is 0).

</dd>

<dt>paytime (Optional)</dt>

<dd>

Type: DueDate

Default Value: DueDate.endOfPeriod

Indicates when payments are due.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**IRR**</td>

<td>

Finance.IRR(_values_ _[, guess]_)

Returns the internal rate of return for a series of cash flows represented by the values.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

A list that contain values for which you want to calculate the internal rate of return.

</dd>

<dt>guess (Optional)</dt>

<dd>

Type: Real

A number that you guess is close to the result of IRR.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**NPER**</td>

<td>

Finance.NPER(_rate__, pmt__, pv_ _[, fv]_ _[, paytime]_)

Returns the number of periods for an investment based on periodic, constant payments and a constant interest rate.

Return Type: Real

<dl>

<dt>rate</dt>

<dd>

Type: Real

The interest rate per period.

</dd>

<dt>pmt</dt>

<dd>

Type: Real

The payment made each period; it cannot change over the life of the annuity. Typically, pmt contains principal and interest but no other fees or taxes.

</dd>

<dt>pv</dt>

<dd>

Type: Real

The present value, or the lump-sum amount that a series of future payments is worth right now.

</dd>

<dt>fv (Optional)</dt>

<dd>

Type: Real

Default Value: 0.0

Future value, or a cash balance you want to attain after the last payment is made. The argument fv may be 0 (the future value of a loan, for example, is 0).

</dd>

<dt>paytime (Optional)</dt>

<dd>

Type: DueDate

Default Value: DueDate.endOfPeriod

Indicates when payments are due.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**NPV**</td>

<td>

Finance.NPV(_rate__, values_)

Calculates the net present value of an investment by using a discount rate and a series of future payments (negative values) and income (positive values).

Return Type: Real

<dl>

<dt>rate</dt>

<dd>

Type: Real

The rate of discount over the length of one period.

</dd>

<dt>values</dt>

<dd>

Type: Collection(Real)

A list of values representing the payments and income.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**PMT**</td>

<td>

Finance.PMT(_rate__, nper__, pv_ _[, fv]_ _[, paytime]_)

Calculates the payment for a loan based on constant payments and a constant interest rate.

Return Type: Real

<dl>

<dt>rate</dt>

<dd>

Type: Real

The interest rate per period.

</dd>

<dt>nper</dt>

<dd>

Type: Integer

The total number of payments for the loan.

</dd>

<dt>pv</dt>

<dd>

Type: Real

The present value, or the total amount that a series of future payments is worth now; also known as the principal.

</dd>

<dt>fv (Optional)</dt>

<dd>

Type: Real

Default Value: 0.0

Future value, or a cash balance you want to attain after the last payment is made. The argument fv may be 0 (the future value of a loan, for example, is 0).

</dd>

<dt>paytime (Optional)</dt>

<dd>

Type: DueDate

Default Value: DueDate.endOfPeriod

Indicates when payments are due.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**PPMT**</td>

<td>

Finance.PPMT(_rate__, per__, nper__, pv_ _[, fv]_ _[, paytime]_)

Returns the payment on the principal for a given period for an investment based on periodic, constant payments and a constant interest rate.

Return Type: Real

<dl>

<dt>rate</dt>

<dd>

Type: Real

The interest rate per period.

</dd>

<dt>per</dt>

<dd>

Type: Integer

The period for which you want to find the interest and must be in the range 1 to nper.

</dd>

<dt>nper</dt>

<dd>

Type: Integer

The total number of payment periods in an annuity.

</dd>

<dt>pv</dt>

<dd>

Type: Real

The present value, or the lump-sum amount that a series of future payments is worth right now.

</dd>

<dt>fv (Optional)</dt>

<dd>

Type: Real

Default Value: 0.0

Future value, or a cash balance you want to attain after the last payment is made. The argument fv may be 0 (the future value of a loan, for example, is 0).

</dd>

<dt>paytime (Optional)</dt>

<dd>

Type: DueDate

Default Value: DueDate.endOfPeriod

Indicates when payments are due.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**PV**</td>

<td>

Finance.PV(_rate__, nper__, pmt_ _[, fv]_ _[, paytime]_)

Returns the present value of an investment. The present value is the total amount that a series of future payments is worth now.

Return Type: Real

<dl>

<dt>rate</dt>

<dd>

Type: Real

The interest rate per period.

</dd>

<dt>nper</dt>

<dd>

Type: Integer

The total number of payment periods in an annuity.

</dd>

<dt>pmt</dt>

<dd>

Type: Real

The payment made each period; it cannot change over the life of the annuity. Typically, pmt contains principal and interest but no other fees or taxes.

</dd>

<dt>fv (Optional)</dt>

<dd>

Type: Real

Default Value: 0.0

Future value, or a cash balance you want to attain after the last payment is made. The argument fv may be 0 (the future value of a loan, for example, is 0).

</dd>

<dt>paytime (Optional)</dt>

<dd>

Type: DueDate

Default Value: DueDate.endOfPeriod

Indicates when payments are due.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**rate**</td>

<td>

Finance.rate(_nper__, pmt__, pv_ _[, fv]_ _[, paytime]_)

Returns the interest rate per period of an annuity.

Return Type: Real

<dl>

<dt>nper</dt>

<dd>

Type: Integer

The total number of payment periods in an annuity.

</dd>

<dt>pmt</dt>

<dd>

Type: Real

The payment made each period; it cannot change over the life of the annuity. Typically, pmt contains principal and interest but no other fees or taxes. If pmt is 0 (zero), you must include the fv argument.

</dd>

<dt>pv</dt>

<dd>

Type: Real

The present value, or the lump-sum amount that a series of future payments is worth right now.

</dd>

<dt>fv (Optional)</dt>

<dd>

Type: Real

Default Value: 0.0

Future value, or a cash balance you want to attain after the last payment is made. The argument fv may be 0 (the future value of a loan, for example, is 0).

</dd>

<dt>paytime (Optional)</dt>

<dd>

Type: DueDate

Default Value: DueDate.endOfPeriod

Indicates when payments are due.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

### Math Type

The Math type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**abs**</td>

<td>

Math.abs(_value_)

Returns the absolute value of a number. The absolute value of a number is the number without its sign.

Return Type: Integer

<dl>

<dt>value</dt>

<dd>

Type: Integer

The number of which you want the absolute value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**abs**</td>

<td>

Math.abs(_value_)

Returns the absolute value of a number. The absolute value of a number is the number without its sign.

Return Type: Real

<dl>

<dt>value</dt>

<dd>

Type: Real

The number of which you want the absolute value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**ceiling**</td>

<td>

Math.ceiling(_number_)

Returns the smallest whole number (64 bit integer) greater than or equal to the specified number.

Return Type: LargeInteger

The smallest whole number (64 bit integer) greater than or equal to number.

<dl>

<dt>number</dt>

<dd>

Type: Real

A number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**ceilingInteger**</td>

<td>

Math.ceilingInteger(_number_)

Returns the smallest whole number (32 bit integer) greater than or equal to the specified number. WARNING: Please consider potential integer overflow.

Return Type: Integer

The smallest whole number (32 bit integer) greater than or equal to number.

<dl>

<dt>number</dt>

<dd>

Type: Real

A number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**e**</td>

<td>

Math.e

Represents the natural logarithmic base, specified by the constant, e.

Return Type: Real

</td>

</tr>

<tr>

<td>**exp**</td>

<td>

Math.exp(_number_)

Returns e raised to the specified power.

Return Type: Real

The number e raised to the power number.

<dl>

<dt>number</dt>

<dd>

Type: Real

The exponent applied to the base e.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**floor**</td>

<td>

Math.floor(_number_)

Returns the largest whole number (64 bit integer) less than or equal to the specified number.

Return Type: LargeInteger

The largest whole number (64 bit integer) less than or equal to number.

<dl>

<dt>number</dt>

<dd>

Type: Real

A number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**floorInteger**</td>

<td>

Math.floorInteger(_number_)

Returns the largest whole number (32 bit integer) less than or equal to the specified number. WARNING: Please consider potential integer overflow.

Return Type: Integer

The largest whole number (32 bit integer) less than or equal to number.

<dl>

<dt>number</dt>

<dd>

Type: Real

A number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**ln**</td>

<td>

Math.ln(_number_)

Returns the natural logarithm of a number. Natural logarithms are based on the constant e (2.71828182845904).

Return Type: Real

<dl>

<dt>number</dt>

<dd>

Type: Real

The positive real number for which you want the natural logarithm.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**log**</td>

<td>

Math.log(_number_ _[, base]_)

Returns the logarithm of a number to the base you specify.

Return Type: Real

<dl>

<dt>number</dt>

<dd>

Type: Real

The positive real number for which you want the logarithm.

</dd>

<dt>base (Optional)</dt>

<dd>

Type: Real

The base of the logarithm. If base is omitted, it is assumed to be 10.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**log10**</td>

<td>

Math.log10(_number_)

Returns the base-10 logarithm of a number.

Return Type: Real

<dl>

<dt>number</dt>

<dd>

Type: Real

The positive real number for which you want the base-10 logarithm.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**pi**</td>

<td>

Math.pi

Returns the ratio of the circumference of a circle to its diameter, specified by the constant PI.

Return Type: Real

</td>

</tr>

<tr>

<td>**power**</td>

<td>

Math.power(_number__, power_)

Returns a specified number raised to the specified power.

Return Type: Real

<dl>

<dt>number</dt>

<dd>

Type: Real

The base number.

</dd>

<dt>power</dt>

<dd>

Type: Real

The exponent to which the base number is raised.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**round**</td>

<td>

Math.round(_number_ _[, numDigits]_)

Rounds a number to a specified number of decimal places.

Return Type: Real

<dl>

<dt>number</dt>

<dd>

Type: Real

The number you want to round.

</dd>

<dt>numDigits (Optional)</dt>

<dd>

Type: Integer

Specifies the number of decimal places to which you want to round number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**roundDown**</td>

<td>

Math.roundDown(_number_ _[, numDigits]_)

Rounds a number down, toward zero.

Return Type: Real

<dl>

<dt>number</dt>

<dd>

Type: Real

The number you want to round.

</dd>

<dt>numDigits (Optional)</dt>

<dd>

Type: Integer

Specifies the number of decimal places to which you want to round number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**roundUp**</td>

<td>

Math.roundUp(_number_ _[, numDigits]_)

Rounds a number up, away from zero.

Return Type: Real

<dl>

<dt>number</dt>

<dd>

Type: Real

The number you want to round.

</dd>

<dt>numDigits (Optional)</dt>

<dd>

Type: Integer

Specifies the number of decimal places to which you want to round number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**sqrt**</td>

<td>

Math.sqrt(_number_)

Returns a positive square root.

Return Type: Real

<dl>

<dt>number</dt>

<dd>

Type: Real

A number.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

### Regex Type

Represents a regular expression.

The Regex type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**isMatch**</td>

<td>

Regex.isMatch(_input__, pattern_)

Indicates whether the regular expression finds a match in the input string using the regular expression specified in the pattern parameter.

Return Type: Boolean

TRUE if the regular expression finds a match; otherwise, FALSE.

<dl>

<dt>input</dt>

<dd>

Type: String

The string to search for a match.

</dd>

<dt>pattern</dt>

<dd>

Type: String

The regular expression pattern to match.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**replace**</td>

<td>

Regex.replace(_input__, pattern__, replaceMask_)

If the regular expression finds a match in the input string using the regular expression specified in the pattern parameter, the replace mask is used to return a parsed result string.

Return Type: String

a string with values based on the format mask, or empty if no match is found.

<dl>

<dt>input</dt>

<dd>

Type: String

The string to search for a match.

</dd>

<dt>pattern</dt>

<dd>

Type: String

The regular expression pattern to match.

</dd>

<dt>replaceMask</dt>

<dd>

Type: String

The mask used to format the result.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

### Statistics Type

The Statistics type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**average**</td>

<td>

Statistics.average(_values_)

Returns the average (arithmetic mean) of a collection of values.

Return Type: CalendarTimeSpan

<dl>

<dt>values</dt>

<dd>

Type: Collection(CalendarTimeSpan)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**average**</td>

<td>

Statistics.average(_values_)

Returns the average (arithmetic mean) of a collection of values.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**count**</td>

<td>

Statistics.count(_values_)

Returns the number of data values.

Return Type: Integer

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**max**</td>

<td>

Statistics.max(_values_)

Returns the largest value in a collection of values.

Return Type: CalendarTimeSpan

<dl>

<dt>values</dt>

<dd>

Type: Collection(CalendarTimeSpan)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**max**</td>

<td>

Statistics.max(_values_)

Returns the largest value in a collection of values.

Return Type: Integer

<dl>

<dt>values</dt>

<dd>

Type: Collection(Integer)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**max**</td>

<td>

Statistics.max(_values_)

Returns the largest value in a collection of values.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**median**</td>

<td>

Statistics.median(_values_)

Returns the median of the given values. The median is the value in the middle of a collection of values; that is, half the values are greater than the median, and half are less.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**min**</td>

<td>

Statistics.min(_values_)

Returns the smallest value in a collection of values.

Return Type: CalendarTimeSpan

<dl>

<dt>values</dt>

<dd>

Type: Collection(CalendarTimeSpan)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**min**</td>

<td>

Statistics.min(_values_)

Returns the smallest value in a collection of values.

Return Type: Integer

<dl>

<dt>values</dt>

<dd>

Type: Collection(Integer)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**min**</td>

<td>

Statistics.min(_values_)

Returns the smallest value in a collection of values.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**norm**</td>

<td>

Statistics.norm(_values_)

Returns the Euclidean "L-2" norm for the data values (the square root of the sum of squares).

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**percentileCont**</td>

<td>

Statistics.percentileCont(_values__, percentile__, sortOrder_)

Returns the percentile based on a continuous distribution of the data values. The result is interpolated and might not be equal to any of the specific data values.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Integer)

Values to be used for the calculation.

</dd>

<dt>percentile</dt>

<dd>

Type: Real

The percentile to compute. The value must range between 0.0 and 1.0.

</dd>

<dt>sortOrder</dt>

<dd>

Type: SortOrder

The order applied when data values are sorted (ascending or descending).

</dd>

</dl>

</td>

</tr>

<tr>

<td>**percentileCont**</td>

<td>

Statistics.percentileCont(_values__, percentile__, sortOrder_)

Returns the percentile based on a continuous distribution of the data values. The result is interpolated and might not be equal to any of the specific data values.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

<dt>percentile</dt>

<dd>

Type: Real

The percentile to compute. The value must range between 0.0 and 1.0.

</dd>

<dt>sortOrder</dt>

<dd>

Type: SortOrder

The order applied when data values are sorted (ascending or descending).

</dd>

</dl>

</td>

</tr>

<tr>

<td>**stdev**</td>

<td>

Statistics.stdev(_values_)

Estimates standard deviation based on a sample. The standard deviation is a measure of how widely values are dispersed from the average value (the mean).

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**stdevp**</td>

<td>

Statistics.stdevp(_values_)

Calculates standard deviation based on the entire population given as arguments. The standard deviation is a measure of how widely values are dispersed from the average value (the mean).

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**sum**</td>

<td>

Statistics.sum(_values_)

Returns the sum of a collection of values.

Return Type: CalendarTimeSpan

<dl>

<dt>values</dt>

<dd>

Type: Collection(CalendarTimeSpan)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**sum**</td>

<td>

Statistics.sum(_values_)

Returns the sum of a collection of values.

Return Type: Integer

<dl>

<dt>values</dt>

<dd>

Type: Collection(Integer)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**sum**</td>

<td>

Statistics.sum(_values_)

Returns the sum of a collection of values.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**sumsq**</td>

<td>

Statistics.sumsq(_values_)

Returns the sum of the squares of a collection of values.

Return Type: Integer

<dl>

<dt>values</dt>

<dd>

Type: Collection(Integer)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**sumsq**</td>

<td>

Statistics.sumsq(_values_)

Returns the sum of the squares of a collection of values.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**var**</td>

<td>

Statistics.var(_values_)

Estimates variance based on a sample. Var assumes that its arguments are a sample of the population. If your data represents the entire population, then compute the variance using Varp.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**varp**</td>

<td>

Statistics.varp(_values_)

Calculates variance based on the entire population. Varp assumes that its arguments are the entire population. If your data represents a sample of the population, then compute the variance using Var.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**vart**</td>

<td>

Statistics.vart(_values_)

Returns the sum of the squares of the difference between each data value and the mean of the data values.

Return Type: Real

<dl>

<dt>values</dt>

<dd>

Type: Collection(Real)

Values to be used for the calculation.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>