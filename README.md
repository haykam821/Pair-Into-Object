# Pair Into Object

This single-function library merges two arrays of keys and values respectively into a single object.

For example, with the input key array being `["a", "b", "c"]` and the input value array being `[1, 2, 3]`, you would get the object `{"a": 1, "b": 2, "c": 3}`.

## Errors

If your key or value input is *not* an array, a TypeError will be thrown. If the key and value input arrays do not match in length, an Error will be thrown.