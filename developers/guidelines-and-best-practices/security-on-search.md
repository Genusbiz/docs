# Security on search

The search features in  Genus Desktop are powerful and easy to use, and it is therefore important to consider the security settings for objects and user groups.

*   Which users should be able to view the different data
*   Which object should be searchable
*   Which properties should be searchable
*   Which objects should be searchable using advanced search
*   Which related data sources should be available when searching for a certain object

## Permissions on data
The Genus desktop client offers several ways to search and view data, and the [permissions](../defining-an-app-model/security/security-permissions.md) on data are therefore the most important aspect to consider when limiting access to data. Permissions can be set on both [Object Classes](../defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/security.md) and individual [Properties](../defining-an-app-model/data/object-class-property/modify-an-object-class-property/security.md).

## Search on object class properties and named search fields
By enabling search on an object class and setting [common search properties](../defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/search.md) you can define what objects and properties should be available for [standard searches](../../users/search-and-refine/search-for-objects.md). Searchable properties can also be defined through named search fields in [table views](../defining-an-app-model/user-interface/tables/views.md).

## Search views
Basic Views and Table Views that are enabled as Search View, are available for use with search in the [search](../../users/search-and-refine/search-for-other-data-sources.md) task pane.

## Searching based on other data sources
Genus allows you to search for data in a data source based on search [criteria on other data sources](../../users/search-and-refine/search-for-other-data-sources.md). It is important to be aware of some security limitations when enabling this type of search feature. When criteria are set in other data sources, permissions on the objects in the other data sources is **NOT** checked. This is due to performance issues.  

For example:  
An application model consists of Activity and Note. Activity is readable for everyone, but a note is personal and can only be viewed by the creator of the note. When searching for an activity by setting criteria on note, the user can indirectly check for content in the note without having read access to the note itself. Let us say the user is searching for activities, with a note containing the string "Secret", and the result is that an activity is found. The user is not able to read the actual note, but knows that one of the notes on the activity contains the search string.   This is a very specific case, but should be taken into consideration if dealing with very sensitive data.

In this example, a solution may be to remove the ability to search for Activity based on criteria on Notes, and remove the [permission](../defining-an-app-model/security/security-permissions.md) Set Search Criteriafor Note. Instead the users that needs this functionality, can search directly for Notes, and then explore Activities from the search result.

## Advanced search
The Set Search Criteria [permission](../defining-an-app-model/security/security-permissions.md) makes an object class available in [Advanced Search](../../users/search-and-refine/using-advanced-search.md). Note that, when this permission is set, all properties the user has access to in the object class, is searchable in advanced search. [Search paths](../defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/search.md) are used to make related object classes available in advanced search. This allows for finding objects given search criteria on related data sources.

## Search folders
[Search Folders](../../users/search-and-refine/search-folders.md) are pre-defined searches, and these can have specific permissions to limit access to certain user groups. See [Security Permissions](../defining-an-app-model/security/security-permissions.md) for information on how to set permissions on Search Folders.

## Search in history
Users with permissions can search their own history. The [privilege](../defining-an-app-model/security/security-privileges.md)  _Combine event history for all users_ can be granted to specific user groups to give access to searching for events logged by any user. Searching in history can be time consuming and incur performance penalties depending on the amount of logged data. This is especially true for searches across many users.
