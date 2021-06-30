---
title: Deploy Genus 10 on Kubernetes
description: How to Deploy Genus 10 on Kubernetes
author: vka
---

# Deploying Genus 10 on Kubernetes

Genus 10 is deployed using [Helm](https://helm.sh/) to a namespace in a [Kubernetes cluster](https://kubernetes.io/).

To run Genus 10, both [Genus](genus/index.md) and [Genus Operator](genus-operator/index.md) needs to be deployed to the same Kubernetes cluster, in separate namespaces. 

It is recommended to use the [Genus Bootstrap](https://hub.docker.com/r/genusbiz/genus-bootstrap) docker image to deploy Genus and Genus Operator.

## 
