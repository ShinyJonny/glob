---
name: CwinUI
description: Terminal UI library, written in Rust.
repo: https://github.com/ShinyJonny/cwinui
tags: [ rust ]
---

A terminal UI library for rust applications. The library is inspired by
[tui](https://github.com/fdehau/tui-rs) but with a vastly different layout model
and a focus on ergonomic APIs.

As a UI library, it follows the model of an [immediate mode
ui](https://en.wikipedia.org/wiki/Immediate_mode_GUI), widgets being
functionally rendered on every draw, with explicit caching by *memoisation*
(WIP).

In the near future, it is planned to take the direction of maximum performance
and *no-std* compatibility, as it is intended to be supported for use in *EFI*
applications and other embedded contexts.
