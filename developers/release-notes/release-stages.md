---
title: Genus Apps release stages
description: The various stages Genus Apps goes through for releasing new or changed functionality.
author: jtroset
---

# Release stages

A software release is a distribution of an upgraded version of a software product.

Genus Apps, as all other software, goes through different stages that describe the stability of the software and the amount of development or testing it requires before the final release of the upgrade.

Genus Apps may be distributed in one of the following release stages:

*   **Pre-alpha.** This version is not feature complete, and typically used by the developers prior to software testing. The activities performed on such a version can include requirements analysis, software design, software development and unit testing. The version is not distributed outside the development environment, but described here for the reason of completeness.
*   **Alpha.** The version delivered to the software testers, i.e. persons different from the software developers. The version is not normally distributed outside the development and test environments.
*   **Beta.** The first version released to outside testers or for evaluation purposes. The version generally includes all features, but may also include known issues and bugs of less serious variety. The software is not yet ready for release, and new source code will be added to this version.
*   **Release Candidate.** This version has the potential to be the final product upgrade. No new source code will be added to this version, but it may be bug-fixed (patched).
*   **Release.** The final version of the upgrade with a quality suitable for wide distribution and use by developers and end-users.

A release with a change in either of the major or minor parts of the version number, constitutes a **Major Release**.

A release with no change in either major or minor parts of the version number (but with a change in the revision or build parts), is called a **Minor Release**, **Release Update** or **Release Patch** or simply a **Patch**.

The **Release Date** is the date of the initial shipping of a release.

Common names for release stages prior to **Release** are **Preview**, **Pre-release** or **Trial** releases or versions.

When producing a release candidate, a copy of the source code is created. It is this copy which later is used to produce a final release, or it may be bug-fixed (patched) to produce a new release candidate. The preceding stages (pre-alpha, alpha and beta) may not be patched.

The alpha, beta and subsequent stages have built-in mechanisms easing the analysis of technical support incidents reported by testers or end-users. This does not apply to the pre-alpha stage.

The version number consists of a sequence of numbers made up of the parts `major.minor.revision.build`, e.g. `17.100.120.0`. Note that the `revision` part often is referred to as `release` in more technical documentation, but is not related to the release stages pre-alpha, alpha, beta, release candidate and release/major release.

In more non-technical documentation, releases are named `YYYY.R`, where `YYYY` is the year and `R` is the release of that year, for example `2017.4`.
