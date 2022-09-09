---
name: Fsfill
description: Fill unused space in the file system structure with bytes.
repo: https://github.com/ShinyJonny/fsfill
tags: [ wip, rust ]
---

CLI utility that scans the file system structure and keeps track of the free (uninitialised) space.
This space can then be filled with bytes.
Essentially, it allows the user to zero-fill the drive even after the file system has been installed.
This can be used to achieve plausible deniability on block-encrypted media (e.g. [dm-crypt](https://gitlab.com/cryptsetup/cryptsetup)) that has not been filled with random bytes during the initialisation.
