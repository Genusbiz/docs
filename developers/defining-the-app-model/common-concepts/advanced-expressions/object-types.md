# Object Types

## Account Type

The Account type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**accountProfile**</td>

<td>

_instance._accountProfile

Return Type: String

</td>

</tr>

<tr>

<td>**disabled**</td>

<td>

_instance._disabled

Return Type: Boolean

</td>

</tr>

<tr>

<td>**fullName**</td>

<td>

_instance._fullName

Return Type: String

</td>

</tr>

<tr>

<td>**language**</td>

<td>

_instance._language

Return Type: String

</td>

</tr>

<tr>

<td>**lastPasswordChange**</td>

<td>

_instance._lastPasswordChange

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**lockedOut**</td>

<td>

_instance._lockedOut

Return Type: Boolean

</td>

</tr>

<tr>

<td>**mailAddress**</td>

<td>

_instance._mailAddress

Return Type: String

</td>

</tr>

<tr>

<td>**securityGroupMemberships**</td>

<td>

_instance._securityGroupMemberships

Return Type: Bag(SecurityGroup)

</td>

</tr>

<tr>

<td>**userName**</td>

<td>

_instance._userName

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## ActionOrchestrator Type

The ActionOrchestrator type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**command**</td>

<td>

_instance._command

Return Type: ActionCommandType

</td>

</tr>

<tr>

<td>**currentEnumeration**</td>

<td>

_instance._currentEnumeration

Return Type: Integer

</td>

</tr>

<tr>

<td>**errorCode**</td>

<td>

_instance._errorCode

Return Type: Integer

</td>

</tr>

<tr>

<td>**errorDetails**</td>

<td>

_instance._errorDetails

Return Type: String

</td>

</tr>

<tr>

<td>**errorMessage**</td>

<td>

_instance._errorMessage

Return Type: String

</td>

</tr>

<tr>

<td>**httpStatusCode**</td>

<td>

_instance._httpStatusCode

Return Type: Integer

</td>

</tr>

<tr>

<td>**scheduledStartTime**</td>

<td>

_instance._scheduledStartTime

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**startTime**</td>

<td>

_instance._startTime

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**thrownExceptionCode**</td>

<td>

_instance._thrownExceptionCode

Return Type: ActionExceptionType

</td>

</tr>

<tr>

<td>**thrownExceptionName**</td>

<td>

_instance._thrownExceptionName

Return Type: String

</td>

</tr>

<tr>

<td>**totalNumberOfEnumerations**</td>

<td>

_instance._totalNumberOfEnumerations

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

## CalendarItem Type

The CalendarItem type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**allDayEvent**</td>

<td>

_instance._allDayEvent

Return Type: Boolean

</td>

</tr>

<tr>

<td>**attendees**</td>

<td>

_instance._attendees

Return Type: Bag(MailAddressee)

</td>

</tr>

<tr>

<td>**categories**</td>

<td>

_instance._categories

Return Type: Bag(String)

</td>

</tr>

<tr>

<td>**contentID**</td>

<td>

_instance._contentID

Return Type: Guid

</td>

</tr>

<tr>

<td>**description**</td>

<td>

_instance._description

Return Type: String

</td>

</tr>

<tr>

<td>**endTime**</td>

<td>

_instance._endTime

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**file**</td>

<td>

_instance._file

Return Type: GeneralFile

</td>

</tr>

<tr>

<td>**geographicPosition**</td>

<td>

_instance._geographicPosition

Return Type: GeographicPosition

</td>

</tr>

<tr>

<td>**importance**</td>

<td>

_instance._importance

Return Type: Integer

</td>

</tr>

<tr>

<td>**location**</td>

<td>

_instance._location

Return Type: String

</td>

</tr>

<tr>

<td>**organizer**</td>

<td>

_instance._organizer

Return Type: MailAddressee

</td>

</tr>

<tr>

<td>**sensitivity**</td>

<td>

_instance._sensitivity

Return Type: CalendarItemSensitivity

</td>

</tr>

<tr>

<td>**startTime**</td>

<td>

_instance._startTime

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**subject**</td>

<td>

_instance._subject

Return Type: String

</td>

</tr>

<tr>

<td>**uniqueIdentifier**</td>

<td>

_instance._uniqueIdentifier

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## Checksum Type

Contains functions for calculating and validating checksums.

The Checksum type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**ibanCalculate**</td>

<td>

Checksum.ibanCalculate(_digits_)

Calculates a string that is valid according to the IBAN format as defined by ISO 13616-1:2007, based on a template string where the check digits will be replaced. The function does not validate the country-specific properties (including length) of the IBAN code.

Return Type: String

The same string as specified by the input parameter, but with two check digits in the 3rd and 4th position replaced with calculated check digits. Returns null if the function was unable to calculate a result based on the input.

<dl>

<dt>digits</dt>

<dd>

Type: String

A string containing the template for the IBAN code to be calculated represented by characters in the value range between '0' and '9', 'A' and 'Z', and the space character. The string must start with a two-digit country code, followed by two check digits (may be e.g. '00', but any two digits will do as they will be replaced in the return value anyway), followed by a country-specific number of characters.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**ibanValidate**</td>

<td>

Checksum.ibanValidate(_digits_)

Verifies that a string is valid according to the IBAN format as defined by ISO 13616-1:2007\. The function does not validate the country-specific properties (including length) of the IBAN code.

Return Type: Boolean

TRUE if the string is valid; otherwise, FALSE.

<dl>

<dt>digits</dt>

<dd>

Type: String

A string containing an IBAN code to be validated represented by characters in the value range between '0' and '9', 'A' and 'Z', and the space character. The string must start with a two-digit country code, followed by two check digits, then followed by a country-specific number of characters.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**mod10Calculate**</td>

<td>

Checksum.mod10Calculate(_digits_)

Calculates the control digit for a string of numerical digits, according to the Luhn algorithm, also called the "modulus 10" or "mod 10" algorithm.

Return Type: String

A string containing a single character in the value range between '0' and '9'.

<dl>

<dt>digits</dt>

<dd>

Type: String

A string containing characters in the value range between '0' and '9'.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**mod10Validate**</td>

<td>

Checksum.mod10Validate(_digits_)

Verifies that a string of numerical digits contains a valid control digit, according to the Luhn algorithm, also called the "modulus 10" or "mod 10" algorithm.

Return Type: Boolean

TRUE if the string is valid; otherwise, FALSE.

<dl>

<dt>digits</dt>

<dd>

Type: String

A string containing characters in the value range between '0' and '9'.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**mod11Calculate**</td>

<td>

Checksum.mod11Calculate(_digits_ _[, weights]_ _[, reverseOrder]_)

Calculates the control digit for a string of numerical digits, according to the MOD11 algorithm.

Return Type: String

A string containing a single character in the value range between '0' and '9'.

<dl>

<dt>digits</dt>

<dd>

Type: String

A string containing characters in the value range between '0' and '9'.

</dd>

<dt>weights (Optional)</dt>

<dd>

Type: String

Default Value: "234567"

A string used as weigths during calculation, containing characters in the value range between '0' and '9'.

</dd>

<dt>reverseOrder (Optional)</dt>

<dd>

Type: Boolean

Default Value: true

TRUE if the checksum should be calculated based on digits weighted in a right to left order (default); otherwise, FALSE.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**mod11Validate**</td>

<td>

Checksum.mod11Validate(_digits_ _[, weights]_ _[, reverseOrder]_)

Verifies that a string of numerical digits contains a valid control digit, according to the MOD11 algorithm.

Return Type: Boolean

TRUE if the string is valid; otherwise, FALSE.

<dl>

<dt>digits</dt>

<dd>

Type: String

A string containing characters in the value range between '0' and '9'.

</dd>

<dt>weights (Optional)</dt>

<dd>

Type: String

Default Value: "234567"

A string used as weigths during calculation, containing characters in the value range between '0' and '9'.

</dd>

<dt>reverseOrder (Optional)</dt>

<dd>

Type: Boolean

Default Value: true

TRUE if the checksum should be calculated based on digits weighted in a right to left order (default); otherwise, FALSE.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

## Collection Type

The Collection type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**isNullOrEmpty**</td>

<td>

Collection.isNullOrEmpty(_collection_)

Indicates whether the specified collection of objects is null or an empty collection.

Return Type: Boolean

TRUE if the parameter is null or an empty collection; otherwise, FALSE.

<dl>

<dt>collection</dt>

<dd>

Type: Collection(Object)

The collection to test.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**isNullOrEmpty**</td>

<td>

Collection.isNullOrEmpty(_collection_)

Indicates whether the specified collection of values is null or an empty collection.

Return Type: Boolean

TRUE if the parameter is null or an empty collection; otherwise, FALSE.

<dl>

<dt>collection</dt>

<dd>

Type: Collection(Value)

The collection to test.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

## Contact Type

The Contact type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**addresses**</td>

<td>

_instance._addresses

Return Type: Addresses

</td>

</tr>

<tr>

<td>**company**</td>

<td>

_instance._company

Return Type: String

</td>

</tr>

<tr>

<td>**contentID**</td>

<td>

_instance._contentID

Return Type: Guid

</td>

</tr>

<tr>

<td>**file**</td>

<td>

_instance._file

Return Type: GeneralFile

</td>

</tr>

<tr>

<td>**geographicPosition**</td>

<td>

_instance._geographicPosition

Return Type: GeographicPosition

</td>

</tr>

<tr>

<td>**jobTitle**</td>

<td>

_instance._jobTitle

Return Type: String

</td>

</tr>

<tr>

<td>**mail**</td>

<td>

_instance._mail

Return Type: String

</td>

</tr>

<tr>

<td>**name**</td>

<td>

_instance._name

Return Type: Name

</td>

</tr>

<tr>

<td>**phoneNumbers**</td>

<td>

_instance._phoneNumbers

Return Type: ContactPhoneNumbers

</td>

</tr>

<tr>

<td>**photo**</td>

<td>

_instance._photo

Return Type: GeneralFile

</td>

</tr>

<tr>

<td>**webPage**</td>

<td>

_instance._webPage

Return Type: Url

</td>

</tr>

</tbody>

</table>

* * *

## ContactAddress Type

The ContactAddress type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**city**</td>

<td>

_instance._city

Return Type: String

</td>

</tr>

<tr>

<td>**country_Region**</td>

<td>

_instance._country_Region

Return Type: String

</td>

</tr>

<tr>

<td>**state_Province**</td>

<td>

_instance._state_Province

Return Type: String

</td>

</tr>

<tr>

<td>**street**</td>

<td>

_instance._street

Return Type: String

</td>

</tr>

<tr>

<td>**zipCode**</td>

<td>

_instance._zipCode

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## ContactPhoneNumbers Type

The ContactPhoneNumbers type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**business**</td>

<td>

_instance._business

Return Type: ContactPhoneNumbersLocation

</td>

</tr>

<tr>

<td>**home**</td>

<td>

_instance._home

Return Type: ContactPhoneNumbersLocation

</td>

</tr>

<tr>

<td>**mobile**</td>

<td>

_instance._mobile

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## ContactPhoneNumbersLocation Type

The ContactPhoneNumbersLocation type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**fax**</td>

<td>

_instance._fax

Return Type: String

</td>

</tr>

<tr>

<td>**phone**</td>

<td>

_instance._phone

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## DataSet Type

The DataSet type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**activeDataSet**</td>

<td>

DataSet.activeDataSet

Returns the active data set.

Return Type: DataSet

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**currentFolder**</td>

<td>

_instance._currentFolder

Return Type: String

</td>

</tr>

<tr>

<td>**name**</td>

<td>

_instance._name

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## Directory Type

The Directory type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**currentLanguage**</td>

<td>

Directory.currentLanguage

Returns the current language in use by the running Genus session.

Return Type: NaturalLanguage

</td>

</tr>

<tr>

<td>**name**</td>

<td>

Directory.name

Return Type: String

</td>

</tr>

<tr>

<td>**shortcutToTask**</td>

<td>

Directory.shortcutToTask(_taskId__, dataSourceBindings_)

Return Type: Url

<dl>

<dt>taskId</dt>

<dd>

Type: String

</dd>

<dt>dataSourceBindings</dt>

<dd>

Type: Bag(String)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**temporaryFolder**</td>

<td>

Directory.temporaryFolder

Returns the location of the temporary folder used by Genus. Note that the folder and all its contents are removed when you exit Genus.

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## Environment Type

The Environment type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**msOutlookInstalled**</td>

<td>

Environment.msOutlookInstalled

Returns TRUE if Microsoft Outlook is installed on the current computer.

Return Type: Boolean

</td>

</tr>

</tbody>

</table>

* * *

## FileFolder Type

The FileFolder type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**contentID**</td>

<td>

_instance._contentID

Return Type: Guid

</td>

</tr>

<tr>

<td>**createdDate**</td>

<td>

_instance._createdDate

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**drive**</td>

<td>

_instance._drive

Return Type: String

</td>

</tr>

<tr>

<td>**files**</td>

<td>

_instance._files

Return Type: Bag(Files)

</td>

</tr>

<tr>

<td>**modifiedDate**</td>

<td>

_instance._modifiedDate

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**name**</td>

<td>

_instance._name

Return Type: String

</td>

</tr>

<tr>

<td>**path**</td>

<td>

_instance._path

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## GanttTaskDependency Type

The GanttTaskDependency type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**allObjects**</td>

<td>

GanttTaskDependency.allObjects

Return Type: Bag(GanttTaskDependency)

</td>

</tr>

<tr>

<td>**finish_to_Finish_FF**</td>

<td>

GanttTaskDependency.finish_to_Finish_FF

Return Type: GanttTaskDependency

</td>

</tr>

<tr>

<td>**finish_to_Start_FS**</td>

<td>

GanttTaskDependency.finish_to_Start_FS

Return Type: GanttTaskDependency

</td>

</tr>

<tr>

<td>**lookupObject**</td>

<td>

GanttTaskDependency.lookupObject(_condition_)

Return Type: GanttTaskDependency

<dl>

<dt>condition</dt>

<dd>

Type: Boolean

</dd>

</dl>

</td>

</tr>

<tr>

<td>**lookupObjects**</td>

<td>

GanttTaskDependency.lookupObjects(_condition_)

Return Type: Bag(GanttTaskDependency)

<dl>

<dt>condition</dt>

<dd>

Type: Boolean

</dd>

</dl>

</td>

</tr>

<tr>

<td>**ocGroup**</td>

<td>

GanttTaskDependency.ocGroup

Return Type: String

</td>

</tr>

<tr>

<td>**ocName**</td>

<td>

GanttTaskDependency.ocName

Return Type: String

</td>

</tr>

<tr>

<td>**selectObject**</td>

<td>

GanttTaskDependency.selectObject(_objectIdentifier_)

Return Type: GanttTaskDependency

<dl>

<dt>objectIdentifier</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**selectObjects**</td>

<td>

GanttTaskDependency.selectObjects(_objectIdentifiers_)

Return Type: Bag(GanttTaskDependency)

<dl>

<dt>objectIdentifiers</dt>

<dd>

Type: Collection(String)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**start_to_Finish_SF**</td>

<td>

GanttTaskDependency.start_to_Finish_SF

Return Type: GanttTaskDependency

</td>

</tr>

<tr>

<td>**start_to_Start_SS**</td>

<td>

GanttTaskDependency.start_to_Start_SS

Return Type: GanttTaskDependency

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**allObjects**</td>

<td>

_instance._allObjects

Return Type: Set(GanttTaskDependency)

</td>

</tr>

<tr>

<td>**hasDeletePermissions**</td>

<td>

_instance._hasDeletePermissions

Return Type: Boolean

</td>

</tr>

<tr>

<td>**hasModifyPermissions**</td>

<td>

_instance._hasModifyPermissions

Return Type: Boolean

</td>

</tr>

<tr>

<td>**id**</td>

<td>

_instance._id

Return Type: Integer

</td>

</tr>

<tr>

<td>**isModified**</td>

<td>

_instance._isModified

Return Type: Boolean

</td>

</tr>

<tr>

<td>**isPersisted**</td>

<td>

_instance._isPersisted

Return Type: Boolean

</td>

</tr>

<tr>

<td>**isValid**</td>

<td>

_instance._isValid

Return Type: Boolean

</td>

</tr>

<tr>

<td>**name**</td>

<td>

_instance._name

Return Type: String

</td>

</tr>

<tr>

<td>**orderIndex**</td>

<td>

_instance._orderIndex

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

## GeneralFile Type

The GeneralFile type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**attachment_ContentID**</td>

<td>

_instance._attachment_ContentID

Return Type: String

</td>

</tr>

<tr>

<td>**attachment_ContentLocation**</td>

<td>

_instance._attachment_ContentLocation

Return Type: String

</td>

</tr>

<tr>

<td>**attachment_DisplayName**</td>

<td>

_instance._attachment_DisplayName

Return Type: String

</td>

</tr>

<tr>

<td>**attachment_Embedded**</td>

<td>

_instance._attachment_Embedded

Return Type: Boolean

</td>

</tr>

<tr>

<td>**attachment_Type**</td>

<td>

_instance._attachment_Type

Return Type: MessageAttachmentType

</td>

</tr>

<tr>

<td>**author**</td>

<td>

_instance._author

Return Type: String

</td>

</tr>

<tr>

<td>**bitDepth**</td>

<td>

_instance._bitDepth

Return Type: Integer

</td>

</tr>

<tr>

<td>**category**</td>

<td>

_instance._category

Return Type: String

</td>

</tr>

<tr>

<td>**comments**</td>

<td>

_instance._comments

Return Type: String

</td>

</tr>

<tr>

<td>**contentID**</td>

<td>

_instance._contentID

Return Type: Guid

</td>

</tr>

<tr>

<td>**createdDate**</td>

<td>

_instance._createdDate

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**data**</td>

<td>

_instance._data

Return Type: StreamData

</td>

</tr>

<tr>

<td>**duration**</td>

<td>

_instance._duration

Return Type: Integer

</td>

</tr>

<tr>

<td>**fileExtension**</td>

<td>

_instance._fileExtension

Return Type: String

</td>

</tr>

<tr>

<td>**fileName**</td>

<td>

_instance._fileName

Return Type: String

</td>

</tr>

<tr>

<td>**geographicPosition**</td>

<td>

_instance._geographicPosition

Return Type: GeographicPosition

</td>

</tr>

<tr>

<td>**height**</td>

<td>

_instance._height

Return Type: Integer

</td>

</tr>

<tr>

<td>**keywords**</td>

<td>

_instance._keywords

Return Type: String

</td>

</tr>

<tr>

<td>**modifiedBy**</td>

<td>

_instance._modifiedBy

Return Type: String

</td>

</tr>

<tr>

<td>**modifiedDate**</td>

<td>

_instance._modifiedDate

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**numberOfCharacters**</td>

<td>

_instance._numberOfCharacters

Return Type: Integer

</td>

</tr>

<tr>

<td>**numberOfPages**</td>

<td>

_instance._numberOfPages

Return Type: Integer

</td>

</tr>

<tr>

<td>**numberOfWords**</td>

<td>

_instance._numberOfWords

Return Type: Integer

</td>

</tr>

<tr>

<td>**read_Only**</td>

<td>

_instance._read_Only

Return Type: Boolean

</td>

</tr>

<tr>

<td>**revisionNumber**</td>

<td>

_instance._revisionNumber

Return Type: String

</td>

</tr>

<tr>

<td>**size**</td>

<td>

_instance._size

Return Type: Integer

</td>

</tr>

<tr>

<td>**subject**</td>

<td>

_instance._subject

Return Type: String

</td>

</tr>

<tr>

<td>**title**</td>

<td>

_instance._title

Return Type: String

</td>

</tr>

<tr>

<td>**width**</td>

<td>

_instance._width

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

## GeographicPosition Type

The GeographicPosition type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**latitude**</td>

<td>

_instance._latitude

Return Type: Real

</td>

</tr>

<tr>

<td>**longitude**</td>

<td>

_instance._longitude

Return Type: Real

</td>

</tr>

</tbody>

</table>

* * *

## HashAlgorithm Type

Represents a hash algorithm.

The HashAlgorithm type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**create**</td>

<td>

HashAlgorithm.create(_hashName_)

Creates an instance of the specified implementation of a hash algorithm.

Return Type: HashAlgorithm

A new instance of the specified hash algorithm, or null if hashName is not a valid hash algorithm.

<dl>

<dt>hashName</dt>

<dd>

Type: String

The hash algorithm implementation to use. One of the following values: "SHA1", "MD5", "SHA256", "SHA384", or "SHA512".

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**computeHash**</td>

<td>

_instance._computeHash(_inputStream_)

Computes the hash value for the specified StreamData object.

Return Type: StreamData

The computed hash code.

<dl>

<dt>inputStream</dt>

<dd>

Type: StreamData

The input data for which to compute the hash code.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

## HtmlDocument Type

Represents an HTML document.

The HtmlDocument type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**createFromPlainText**</td>

<td>

HtmlDocument.createFromPlainText(_value_)

Creates an HTML document from plain text.

Return Type: HtmlDocument

An HTML document with a body that contains the original plain text, without original indentation, but with line breaks.

<dl>

<dt>value</dt>

<dd>

Type: String

The string containing the plain text.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

HtmlDocument.new(_value_)

Returns a new instance of HtmlDocument.

Return Type: HtmlDocument

<dl>

<dt>value</dt>

<dd>

Type: StreamData

The binary stream containing the HTML formatted data.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**getBodyAsXmlElement**</td>

<td>

_instance._getBodyAsXmlElement

Returns the body element in this document as an XML-element.

Return Type: XmlNode

An XmlNode instance representing the body element in the HTML document, or null if no body element was found.

</td>

</tr>

<tr>

<td>**getBodyInnerHtml**</td>

<td>

_instance._getBodyInnerHtml

Returns the contents of the body element in this document as a string.

Return Type: String

A string representing the contents of the body element in the HTML document, or null if no body element was found.

</td>

</tr>

<tr>

<td>**getStream**</td>

<td>

_instance._getStream

Gets the HTML document as binary stream data.

Return Type: StreamData

A StreamData instance containing binary data representing the HTML document.

</td>

</tr>

<tr>

<td>**toPlainText**</td>

<td>

_instance._toPlainText

Converts the HTML document to plain text.

Return Type: String

A string containing the text from the HTML document, but without the original formatting.

</td>

</tr>

</tbody>

</table>

* * *

## IntegerCounterDomain Type

Used to assign a unique identifier to an object. Generates a unique numeric identifier which is incremented by one each time an identifier is assigned to an object.

The IntegerCounterDomain type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**lastUsedIdentifier**</td>

<td>

IntegerCounterDomain.lastUsedIdentifier

Returns the last used identifier.

Return Type: Integer

</td>

</tr>

<tr>

<td>**lastUsedIdentifier**</td>

<td>

IntegerCounterDomain.lastUsedIdentifier(_filterObject_)

Returns the last used identifier.

Return Type: Integer

<dl>

<dt>filterObject</dt>

<dd>

Type: ObjectDomain

An object which indicates the counter to use. Applies to counter domains containing multiple counters, where each counter is uniquely identified by a primary key.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**newIdentifier**</td>

<td>

IntegerCounterDomain.newIdentifier

Reserves and returns the next available identifier.

Return Type: Integer

</td>

</tr>

<tr>

<td>**newIdentifier**</td>

<td>

IntegerCounterDomain.newIdentifier(_filterObject_)

Reserves and returns the next available identifier.

Return Type: Integer

<dl>

<dt>filterObject</dt>

<dd>

Type: ObjectDomain

An object which indicates the counter to use. Applies to counter domains containing multiple counters, where each counter is uniquely identified by a primary key.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

## IntegerIdentifierDomain Type

Used to assign a unique identifier to an object. Contains a finite set of identifiers.

The IntegerIdentifierDomain type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**newIdentifier**</td>

<td>

IntegerIdentifierDomain.newIdentifier

Reserves and returns the next available identifier.

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

## MailAddressee Type

The MailAddressee type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**displayName**</td>

<td>

_instance._displayName

Return Type: String

</td>

</tr>

<tr>

<td>**mailAddress**</td>

<td>

_instance._mailAddress

Return Type: String

</td>

</tr>

<tr>

<td>**mailAddressFormat**</td>

<td>

_instance._mailAddressFormat

Return Type: AddressFormat

</td>

</tr>

</tbody>

</table>

* * *

## MailMessage Type

The MailMessage type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**attachments**</td>

<td>

_instance._attachments

Return Type: Bag(GeneralFile)

</td>

</tr>

<tr>

<td>**bcc**</td>

<td>

_instance._bcc

Return Type: Bag(MailAddressee)

</td>

</tr>

<tr>

<td>**cc**</td>

<td>

_instance._cc

Return Type: Bag(MailAddressee)

</td>

</tr>

<tr>

<td>**contentID**</td>

<td>

_instance._contentID

Return Type: Guid

</td>

</tr>

<tr>

<td>**deliveryReceipt**</td>

<td>

_instance._deliveryReceipt

Return Type: Boolean

</td>

</tr>

<tr>

<td>**file**</td>

<td>

_instance._file

Return Type: GeneralFile

</td>

</tr>

<tr>

<td>**from**</td>

<td>

_instance._from

Return Type: MailAddressee

</td>

</tr>

<tr>

<td>**importance**</td>

<td>

_instance._importance

Return Type: MessageImportance

</td>

</tr>

<tr>

<td>**messageBody**</td>

<td>

_instance._messageBody

Return Type: String

</td>

</tr>

<tr>

<td>**messageBody_PlainText**</td>

<td>

_instance._messageBody_PlainText

Return Type: String

</td>

</tr>

<tr>

<td>**messageBodyFormat**</td>

<td>

_instance._messageBodyFormat

Return Type: MessageBodyFormat

</td>

</tr>

<tr>

<td>**read**</td>

<td>

_instance._read

Return Type: Boolean

</td>

</tr>

<tr>

<td>**readReceipt**</td>

<td>

_instance._readReceipt

Return Type: Boolean

</td>

</tr>

<tr>

<td>**received**</td>

<td>

_instance._received

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**replyTo**</td>

<td>

_instance._replyTo

Return Type: MailAddressee

</td>

</tr>

<tr>

<td>**sensitivity**</td>

<td>

_instance._sensitivity

Return Type: MessageSensitivity

</td>

</tr>

<tr>

<td>**sent**</td>

<td>

_instance._sent

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**subject**</td>

<td>

_instance._subject

Return Type: String

</td>

</tr>

<tr>

<td>**to**</td>

<td>

_instance._to

Return Type: Bag(MailAddressee)

</td>

</tr>

</tbody>

</table>

* * *

## MicrosoftProject Type

The MicrosoftProject type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**file**</td>

<td>

_instance._file

Return Type: GeneralFile

</td>

</tr>

<tr>

<td>**finish**</td>

<td>

_instance._finish

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**notes**</td>

<td>

_instance._notes

Return Type: String

</td>

</tr>

<tr>

<td>**start**</td>

<td>

_instance._start

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**tasks**</td>

<td>

_instance._tasks

Return Type: Bag(Task)

</td>

</tr>

</tbody>

</table>

* * *

## Object Type

This is the ultimate base class of all classes; it is the root of the type hierarchy. Because all classes are derived from this class, every function defined here is also available all classes.

* * *

## PrintSettings Type

The PrintSettings type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**collate**</td>

<td>

_instance._collate

Return Type: Boolean

</td>

</tr>

<tr>

<td>**identifier**</td>

<td>

_instance._identifier

Return Type: Guid

</td>

</tr>

<tr>

<td>**numberOfCopies**</td>

<td>

_instance._numberOfCopies

Return Type: Integer

</td>

</tr>

<tr>

<td>**paperSource**</td>

<td>

_instance._paperSource

Return Type: String

</td>

</tr>

<tr>

<td>**printer**</td>

<td>

_instance._printer

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## RichTextDocument Type

Represents a Rich Text document (RTF).

The RichTextDocument type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**new**</td>

<td>

RichTextDocument.new(_value_)

Returns a new instance of RichTextDocument.

Return Type: RichTextDocument

<dl>

<dt>value</dt>

<dd>

Type: StreamData

The binary stream containing the Rich Text formatted data.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**toPlainText**</td>

<td>

_instance._toPlainText

Converts the Rich Text document to plain text.

Return Type: String

A string containing the text from the Rich Text document, but without the original formatting.

</td>

</tr>

</tbody>

</table>

* * *

## SecurityGroup Type

The SecurityGroup type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**description**</td>

<td>

_instance._description

Return Type: String

</td>

</tr>

<tr>

<td>**identifier**</td>

<td>

_instance._identifier

Return Type: String

</td>

</tr>

<tr>

<td>**name**</td>

<td>

_instance._name

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## StreamData Type

Provides a generic view of a sequence of bytes.

The StreamData type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**fromBase64String**</td>

<td>

StreamData.fromBase64String(_value_)

Converts the specified string, which encodes binary data as base-64 digits, to an equivalent StreamData instance containing the decoded binary data.

Return Type: StreamData

<dl>

<dt>value</dt>

<dd>

Type: String

The string to convert.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**fromBase64UrlString**</td>

<td>

StreamData.fromBase64UrlString(_value_)

Converts the specified string, which encodes binary data as base-64 URL digits, to an equivalent StreamData instance containing the decoded binary data.

Return Type: StreamData

<dl>

<dt>value</dt>

<dd>

Type: String

A string that has been previously encoded as Base64URL. (Like base-64, except for special characters +, /, and =).

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

StreamData.new(_value__, encoding_)

Creates a new instance of the class encoding the specified string into a sequence of bytes.

Return Type: StreamData

<dl>

<dt>value</dt>

<dd>

Type: String

The string to be encoded.

</dd>

<dt>encoding</dt>

<dd>

Type: Encoding

The encoding to be used to translate the string into a sequence of bytes.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**containsAllWords**</td>

<td>

_instance._containsAllWords(_words__, fileType_)

Checks if the stream contains all of the supplied words.

Return Type: Boolean

A boolean value indicating whether or not all the words were found in the stream.

<dl>

<dt>words</dt>

<dd>

Type: Collection(String)

</dd>

<dt>fileType</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsAllWords**</td>

<td>

_instance._containsAllWords(_words__, fileType_)

Checks if the stream contains all of the supplied words.

Return Type: Boolean

A boolean value indicating whether or not all the words were found in the string.

<dl>

<dt>words</dt>

<dd>

Type: String

</dd>

<dt>fileType</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsAnyWords**</td>

<td>

_instance._containsAnyWords(_words__, fileType_)

Checks if the stream contains any of the supplied words.

Return Type: Boolean

A boolean value indicating whether or not any the words were found in the stream.

<dl>

<dt>words</dt>

<dd>

Type: Collection(String)

</dd>

<dt>fileType</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsAnyWords**</td>

<td>

_instance._containsAnyWords(_words__, fileType_)

Checks if the stream contains any of the supplied words.

Return Type: Boolean

A boolean value indicating whether or not any the words were found in the stream.

<dl>

<dt>words</dt>

<dd>

Type: String

</dd>

<dt>fileType</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsNearWords**</td>

<td>

_instance._containsNearWords(_words_ _[, maxSpan]_ _[, ordered]_)

Checks if the string contains all of the supplied words within a range of the number of words specified by "maxSpan".

Return Type: Boolean

A boolean value indicating whether or not the words were found in the string.

<dl>

<dt>words</dt>

<dd>

Type: Collection(String)

Collection of search terms. The order in which the search terms are specified will only have significance if specified by "ordered" and the collection of search terms is inherently ordered.

</dd>

<dt>maxSpan (Optional)</dt>

<dd>

Type: Integer

Limits the smallest group of words in which all query terms occurs. The number of words in such a group may not exceed the specified value.

</dd>

<dt>ordered (Optional)</dt>

<dd>

Type: Boolean

A boolean value indicating whether the words must be found in the order in which the search terms are specified.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsNearWords**</td>

<td>

_instance._containsNearWords(_words_ _[, maxSpan]_ _[, ordered]_)

Checks if the string contains all of the supplied words within a range of the number of words specified by "maxSpan".

Return Type: Boolean

A boolean value indicating whether or not the words were found in the string.

<dl>

<dt>words</dt>

<dd>

Type: String

The search terms separated by space. Double quotes may be used to group several words. (Double quote characters may need to be escaped with backslash (\)).

</dd>

<dt>maxSpan (Optional)</dt>

<dd>

Type: Integer

Limits the smallest group of words in which all query terms occurs. The number of words in such a group may not exceed the specified value.

</dd>

<dt>ordered (Optional)</dt>

<dd>

Type: Boolean

A boolean value indicating whether the words must be found in the order in which the search terms are specified.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsWildcardText**</td>

<td>

_instance._containsWildcardText(_expression_)

Checks if the string contains text matching a wildcard expression.

Return Type: Boolean

A boolean value indicating whether the string matches the wildcard expression.

<dl>

<dt>expression</dt>

<dd>

Type: String

Contains the text to search for and may include "?" and "*" wildcard charracters. "?" matches one arbitrary character whereas "*" matches any number (including 0) of characters. Examples: G?nus, G*us, Gen*.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**getString**</td>

<td>

_instance._getString(_encoding_)

Gets a string from this instance using the specified encoding.

Return Type: String

<dl>

<dt>encoding</dt>

<dd>

Type: Encoding

The encoding to be used to translate a sequence of bytes into a string.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**size**</td>

<td>

_instance._size

Gets the size of the stream.

Return Type: Integer

</td>

</tr>

<tr>

<td>**toBase64String**</td>

<td>

_instance._toBase64String

Converts the binary data to its equivalent string representation that is encoded with base-64 digits.

Return Type: String

</td>

</tr>

<tr>

<td>**toBase64UrlString**</td>

<td>

_instance._toBase64UrlString

Converts the binary data to its equivalent string representation that is encoded with base-64 URL digits. (Like base-64, except for special characters +, /, and =).

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## StringIdentifierDomain Type

Used to assign a unique identifier to an object. Contains a finite set of identifiers.

The StringIdentifierDomain type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**newIdentifier**</td>

<td>

StringIdentifierDomain.newIdentifier

Reserves and returns the next available identifier.

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## Task Type

The Task type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**constraintDate**</td>

<td>

_instance._constraintDate

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**constraintType**</td>

<td>

_instance._constraintType

Return Type: TaskConstraintType

</td>

</tr>

<tr>

<td>**contact**</td>

<td>

_instance._contact

Return Type: String

</td>

</tr>

<tr>

<td>**customFields**</td>

<td>

_instance._customFields

Return Type: CustomFields

</td>

</tr>

<tr>

<td>**deadline**</td>

<td>

_instance._deadline

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**duration**</td>

<td>

_instance._duration

Return Type: Integer

</td>

</tr>

<tr>

<td>**externalUniqueIdentifier**</td>

<td>

_instance._externalUniqueIdentifier

Return Type: String

</td>

</tr>

<tr>

<td>**finish**</td>

<td>

_instance._finish

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**hasDependencies**</td>

<td>

_instance._hasDependencies

Return Type: Boolean

</td>

</tr>

<tr>

<td>**hyperlink**</td>

<td>

_instance._hyperlink

Return Type: String

</td>

</tr>

<tr>

<td>**hyperlinkAddress**</td>

<td>

_instance._hyperlinkAddress

Return Type: Url

</td>

</tr>

<tr>

<td>**hyperlinkHREF**</td>

<td>

_instance._hyperlinkHREF

Return Type: Url

</td>

</tr>

<tr>

<td>**hyperlinkScreenTip**</td>

<td>

_instance._hyperlinkScreenTip

Return Type: String

</td>

</tr>

<tr>

<td>**hyperlinkSubAddress**</td>

<td>

_instance._hyperlinkSubAddress

Return Type: Url

</td>

</tr>

<tr>

<td>**milestone**</td>

<td>

_instance._milestone

Return Type: Boolean

</td>

</tr>

<tr>

<td>**name**</td>

<td>

_instance._name

Return Type: String

</td>

</tr>

<tr>

<td>**notes**</td>

<td>

_instance._notes

Return Type: String

</td>

</tr>

<tr>

<td>**outlineLevel**</td>

<td>

_instance._outlineLevel

Return Type: Integer

</td>

</tr>

<tr>

<td>**percentComplete**</td>

<td>

_instance._percentComplete

Return Type: Integer

</td>

</tr>

<tr>

<td>**priority**</td>

<td>

_instance._priority

Return Type: Integer

</td>

</tr>

<tr>

<td>**sequenceNumber**</td>

<td>

_instance._sequenceNumber

Return Type: Integer

</td>

</tr>

<tr>

<td>**start**</td>

<td>

_instance._start

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**summary**</td>

<td>

_instance._summary

Return Type: Boolean

</td>

</tr>

<tr>

<td>**summaryUniqueIdentifier**</td>

<td>

_instance._summaryUniqueIdentifier

Return Type: Integer

</td>

</tr>

<tr>

<td>**taskDependencies**</td>

<td>

_instance._taskDependencies

Return Type: Bag(TaskDependencies)

</td>

</tr>

<tr>

<td>**uniqueIdentifier**</td>

<td>

_instance._uniqueIdentifier

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

## TaskDependency Type

The TaskDependency type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**dependencyType**</td>

<td>

_instance._dependencyType

Return Type: GanttTaskDependency

</td>

</tr>

<tr>

<td>**predecessorUniqueIdentifier**</td>

<td>

_instance._predecessorUniqueIdentifier

Return Type: Integer

</td>

</tr>

<tr>

<td>**successorUniqueIdentifier**</td>

<td>

_instance._successorUniqueIdentifier

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

## TaskExtendedAttributes Type

The TaskExtendedAttributes type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**date1**</td>

<td>

_instance._date1

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**date2**</td>

<td>

_instance._date2

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**date3**</td>

<td>

_instance._date3

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**date4**</td>

<td>

_instance._date4

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**date5**</td>

<td>

_instance._date5

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**number1**</td>

<td>

_instance._number1

Return Type: Real

</td>

</tr>

<tr>

<td>**number2**</td>

<td>

_instance._number2

Return Type: Real

</td>

</tr>

<tr>

<td>**number3**</td>

<td>

_instance._number3

Return Type: Real

</td>

</tr>

<tr>

<td>**number4**</td>

<td>

_instance._number4

Return Type: Real

</td>

</tr>

<tr>

<td>**number5**</td>

<td>

_instance._number5

Return Type: Real

</td>

</tr>

<tr>

<td>**text1**</td>

<td>

_instance._text1

Return Type: String

</td>

</tr>

<tr>

<td>**text2**</td>

<td>

_instance._text2

Return Type: String

</td>

</tr>

<tr>

<td>**text3**</td>

<td>

_instance._text3

Return Type: String

</td>

</tr>

<tr>

<td>**text4**</td>

<td>

_instance._text4

Return Type: String

</td>

</tr>

<tr>

<td>**text5**</td>

<td>

_instance._text5

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## UIControlOrientation Type

The UIControlOrientation type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**allObjects**</td>

<td>

UIControlOrientation.allObjects

Return Type: Bag(UIControlOrientation)

</td>

</tr>

<tr>

<td>**horizontal**</td>

<td>

UIControlOrientation.horizontal

Return Type: UIControlOrientation

</td>

</tr>

<tr>

<td>**lookupObject**</td>

<td>

UIControlOrientation.lookupObject(_condition_)

Return Type: UIControlOrientation

<dl>

<dt>condition</dt>

<dd>

Type: Boolean

</dd>

</dl>

</td>

</tr>

<tr>

<td>**lookupObjects**</td>

<td>

UIControlOrientation.lookupObjects(_condition_)

Return Type: Bag(UIControlOrientation)

<dl>

<dt>condition</dt>

<dd>

Type: Boolean

</dd>

</dl>

</td>

</tr>

<tr>

<td>**ocGroup**</td>

<td>

UIControlOrientation.ocGroup

Return Type: String

</td>

</tr>

<tr>

<td>**ocName**</td>

<td>

UIControlOrientation.ocName

Return Type: String

</td>

</tr>

<tr>

<td>**selectObject**</td>

<td>

UIControlOrientation.selectObject(_objectIdentifier_)

Return Type: UIControlOrientation

<dl>

<dt>objectIdentifier</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**selectObjects**</td>

<td>

UIControlOrientation.selectObjects(_objectIdentifiers_)

Return Type: Bag(UIControlOrientation)

<dl>

<dt>objectIdentifiers</dt>

<dd>

Type: Collection(String)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**vertical**</td>

<td>

UIControlOrientation.vertical

Return Type: UIControlOrientation

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**allObjects**</td>

<td>

_instance._allObjects

Return Type: Set(UIControlOrientation)

</td>

</tr>

<tr>

<td>**hasDeletePermissions**</td>

<td>

_instance._hasDeletePermissions

Return Type: Boolean

</td>

</tr>

<tr>

<td>**hasModifyPermissions**</td>

<td>

_instance._hasModifyPermissions

Return Type: Boolean

</td>

</tr>

<tr>

<td>**id**</td>

<td>

_instance._id

Return Type: Integer

</td>

</tr>

<tr>

<td>**isModified**</td>

<td>

_instance._isModified

Return Type: Boolean

</td>

</tr>

<tr>

<td>**isPersisted**</td>

<td>

_instance._isPersisted

Return Type: Boolean

</td>

</tr>

<tr>

<td>**isValid**</td>

<td>

_instance._isValid

Return Type: Boolean

</td>

</tr>

<tr>

<td>**name**</td>

<td>

_instance._name

Return Type: String

</td>

</tr>

<tr>

<td>**orderIndex**</td>

<td>

_instance._orderIndex

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

## UserSession Type

The UserSession type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**fullName**</td>

<td>

UserSession.fullName

Return Type: String

</td>

</tr>

<tr>

<td>**mailAddress**</td>

<td>

UserSession.mailAddress

Return Type: String

</td>

</tr>

<tr>

<td>**userName**</td>

<td>

UserSession.userName

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## XmlNode Type

Represents a single node in an XML document.

The XmlNode type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**createAttributeNode**</td>

<td>

XmlNode.createAttributeNode(_qualifiedName__, namespaceURI__, value_)

Creates an XML attribute node with the specified name, namespaceURI, and value.

Return Type: XmlNode

<dl>

<dt>qualifiedName</dt>

<dd>

Type: String

The qualified name of the attribute. If the name contains a colon then the Prefix property will reflect the part of the name preceding the colon and the LocalName property will reflect the part after the colon.

</dd>

<dt>namespaceURI</dt>

<dd>

Type: String

The namespaceURI of the attribute. If the qualified name includes a prefix of xmlns, then this parameter must be http://www.w3.org/2000/xmlns/.

</dd>

<dt>value</dt>

<dd>

Type: String

The value of the node.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**createElementNode**</td>

<td>

XmlNode.createElementNode(_outerXml_)

Creates an XML element.

Return Type: XmlNode

<dl>

<dt>outerXml</dt>

<dd>

Type: String

The XML markup representing this node and all its child nodes.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**createTextNode**</td>

<td>

XmlNode.createTextNode(_text_)

Creates an XML text node with the specified text.

Return Type: XmlNode

<dl>

<dt>text</dt>

<dd>

Type: String

The text for the text node.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**innerText**</td>

<td>

_instance._innerText

Gets the concatenated values of the node and all its child nodes.

Return Type: String

</td>

</tr>

<tr>

<td>**innerXml**</td>

<td>

_instance._innerXml

Gets the XML markup representing only the child nodes of this node.

Return Type: String

</td>

</tr>

<tr>

<td>**localName**</td>

<td>

_instance._localName

Gets the local name of the node.

Return Type: String

</td>

</tr>

<tr>

<td>**name**</td>

<td>

_instance._name

Gets the qualified name of the node.

Return Type: String

</td>

</tr>

<tr>

<td>**namespaceUri**</td>

<td>

_instance._namespaceUri

Gets the namespaceURI of this node.

Return Type: String

</td>

</tr>

<tr>

<td>**outerXml**</td>

<td>

_instance._outerXml

Gets the XML markup representing this node and all its child nodes.

Return Type: String

</td>

</tr>

<tr>

<td>**prefix**</td>

<td>

_instance._prefix

Gets the namespace prefix of this node.

Return Type: String

</td>

</tr>

<tr>

<td>**value**</td>

<td>

_instance._value

Gets the value of the node.

Return Type: String

</td>

</tr>

</tbody>

</table>