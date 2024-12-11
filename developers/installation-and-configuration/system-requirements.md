# System requirements

## System requirements for Genus Apps for web (Genus Web)

Our web client runs on all major evergreen browsers on all devices.  

The term "evergreen browser" refers to web browsers that are automatically upgraded to future versions. We consider Mozilla Firefox, Google Chrome, Microsoft Edge and Apple Safari to be evergreen browsers.


## System requirements for Genus Apps for desktop (Genus Desktop)


### Software requirements
Our desktop client runs on the following operating systems:

* Windows 11 (64-bit)
* Windows 10 (64-bit)

Our desktop client requires the following minimum version of the .NET Framework:

* Genus 2022.1 and later: .NET Framework 4.8 or later

To download the required version of the .NET Framework Runtime, visit https://dotnet.microsoft.com/download.

## System requirements for running Genus Services

*Versions later than 2022.1 run on Kubernetes clusters and not on traditional application servers as earlier versions.*

**Infrastructure requirements**
* Cloud or on-prem Kubernetes cluster running Linux worker nodes.
Minimum hardware requirements:
    *	4 CPU, 16 GB RAM, 100 GB
*	Kubernetes version v.1.27 to v.1.29
*	Kubectl client for managing cluster

Kubernetes provides architecture for sharing the worker nodes resources efficiently and scale up and down the number of nodes and pods as needed. 
We recommend a cluster of minimum of 4 worker nodes to provide redundance and performance.

**DevOps recommendations**
*	Elastic Search or equivalent: For indexing and searching logs from cluster and microservices
*	Helm client (> v.3.14): Genus provides Helm charts for facilitating deploying and upgrading Genus microservices.
*	Kube-prometheus-operator (Prometheus, Alertmanager and Grafana). Other equivalents may be used if they support metrics in Prometheus format.

We do not recommend running your Relational Data Base Management System (RDBMS) in the Kubernetes cluster, but instead on a dedicated server or as a service in the cloud.

## Supported database system vendors
<!-- Kan kodegeneres -->
Genus Apps version 2022.1 and later supports the following database system vendors. Use one of the supported database version strings to indicate your database version:

| **Database**         | **Supported database version**
| -------------------- | -------------------------------|-------------------
| Microsoft SQL Server | Microsoft SQL Server 2019<br />Azure SQL Server<br />Azure SQL Managed Instance
| MySQL (incl. Aurora) | MYSQL 5.5<br />MYSQL 5.7
| Oracle               | ORACLE 12.1c<br />Oracle 19c
| DB2                  | DB2 10.1
