
# track v1.0.0

A debugging utility for recording data and easily merging new data into existing data.

```sh
npm install aleclarson/track#1.0.0
```

### usage

You can track any data by simply passing it to `track`.

If you pass an `Array` of values, it will be concatenated onto the end of any existing values under the same key.

Any other values are stored in an `Array` in the order that you added them.

```CoffeeScript
track
  hello: "world"

track
  foo: [1, 2, 3]
```

You can get & set the tracked data easily via `track.data`.

```CoffeeScript
# Same data as above, but setting the whole 'track.data' at once!
track.data =
  hello: ["world"]
  foo: [1, 2, 3]
```

If you don't pass an `Object`, it will be merged into the `Array` under the `_` key.

```CoffeeScript
track "hello world"

track.data =
  _: ["hello world"]
```

-

Alternatively, set `track.getData` to a `Function`.

Whenever `track` is called without arguments, `track.getData` will be called to update the data.

```CoffeeScript
track.getData = ->
  hello: "world"
  foo: [1, 2, 3]

track()
```

-

Alternatively, use `track.Tracker()` to create a separate set of tracked data.

```CoffeeScript
{ Tracker } = require "track"

track = Tracker()

track
  hello: "world"
```
