# Introducing schema.js

schema.js is a utility library for manipulating structured data in javascript.

I wrote schema.js after being frustrated with the limited support in underscore for working with data stored as javascript objects. For example, although there is a very nice `map` function, there's no equivalent for objects.

I built schema.js as an object-first language. Arrays are treated as a special kind of object, one where the keys happen to be `[0..n]` for some `n`. Here's the `map` function (`mapValues` in lodash):

map({'x': 1, 'y': 2}, function(x) {return x*x}) = {'x': 1, 'y': 4}

`transpose`, which is aliased to `zip`:

zip({'x': {'a': 1, 'b': 2}, 'y': {'a': 1, 'b': 2}}) = {'a': {'x': 1, 'y': 2}, 'b': {'x': 1, 'y': 2}}

Utility functions for working on objects. `flip` swaps objects and keys:

flip({'x': 1, 'y': 2}) = {'1': 'x', '2': 'y'}

