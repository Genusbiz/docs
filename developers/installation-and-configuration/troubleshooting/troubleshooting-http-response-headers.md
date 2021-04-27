# Troubleshooting http response headers

This article applies to Genus 10.4 and onwards.

The following http response headers can be expected from a Genus Web client or a REST client towards a Genus server (Genus Services):

## x-genus-model-version

The version number of the model.

## x-genus-file-version

The version number of the meta data interpreter.
If this changes, all meta data are invalid.

## x-genus-datamart-version

The version number of the data mart when responding to requests on the data mart endpoint

## x-genus-datamart-data-version

The version stamp of the data in the data mart when responding to requests on the data mart endpoint

## x-genus-datamart-data-loaded

The timestamp of the data in the data mart when responding to requests on the data mart endpoint

## x-genus-error-code

Something failed in a request. Will have one of the following values

- 1001 : The model version of the caller is outdated
- 1002 : The model interpretor has wrong version
- 1003 : The model has not been deployed
- 1004 : There is an error in the model which renders it unusable
- 1005 : Used by the gateway-service to indicate that a connection to a backend service is not available.
- 1006 : Used by the gateway-service to indicate that allowed origins is invalid or missing.
- 1007 : Used by the gateway-service to indicate that a connection to Redis is not available.
- 1500 : The request is invalid
- 1600 : A data source that needed to be populated during the request failed to become populated
- 1601 : The request failed because an action failed
- 2500 : The object in the request was not found
- 3500 : The sequcence number is a request header is not in sync
- 4000 : There is some locking-related error. Probably someone took the lock
- 4500 : The request faiuled because of a concurrency problem
- 5500 : The request failed because of a data constraint
- 6500 : The request timed out while beeing processed
- 7500 : The caller does not have the permissions to perform the request
- 7600 : The mail message draft is invalid. Could be a missing attachment.
- 8001 : The data mart is busy. Could be loading data.
- 8003 : The datamart is not loaded
- 8004 : The data in the datamart has changed
- 8006 : Data mart is temporarily overloaded.
- 8007 : The data mart has been modified
- 8008 : The load plan is out of sync. Probably a concurrency problem
- 8500 : An unexpected transaction error occurred
- 9500 : The account does not have access

## x-genus-sentry-event-id

If a request fails and reports the error as an event to sentry, this is a handle that han be used to find the event in sentry.

## x-genus-handler

The name of the piece of cocde that generated the response

## x-genus-sequence-no

Some objects have sequence numbers.
If one such object is requested, its sequence number is here

## x-genus-varying-permissions

To be documented.
