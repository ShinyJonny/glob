---
name: CCC
description: Replacement for the C standard library.
repo: https://github.com/ShinyJonny/ccc
tags: [ c, wip ]
---

CCC is a modern replacement for the C standard library.

### Goals

- **Compilation with a standard compiler** - Code written with *ccc* should
  compile with a standard-compliant compiler, without using any custom
  preprocessors or other code transformers. Currently, the minimum standard
  requirement is *C11*.
- **Performance, relying on compiler optimisation** - The library is designed to
  be as performant as possible, but only when compiler optimisations are taken
  into consideration. An example of this is the formatting module, which uses
  dynamically dispatched polymorphism for its methods. Modern compilers (GCC,
  Clang) do a good job of inlining these methods and removing the abstraction
  altogether, however compilers that cannot perform these optimisations will
  produce *'less-than-optimal'* code.
- **Ergonomic API** - CCC is intended to bring an experience closer to the likes
  of the Rust standard library and tries to **push modern C to its limits**
  (while still being sane and safe, of course).
- **Safety** - The library is built on safer primitives like *fixed-size
  integers and bounded buffers and strings*, the preference of *passing by
  value* over passing by pointer, *strongly typed pointers*, *avoiding null
  pointers*, etc.

  It is planned to further expand this by implementing a custom [borrow
  checker](https://rustc-dev-guide.rust-lang.org/borrow_check.html).
