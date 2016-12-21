# leftenant

Lit. "placeholder". I quickly and quietly succeed at any task you give me. Just call me. I can be almost anything to anybody, but not everything to everybody. That's ok, call me over and over if you need.

## "almost anything"
Synchronous function, callback function, Promise/awaitable function (as a thenable), EventEmitter, Duplex stream. Call me with or without `new`. Sorry, leftenant can't be used naked; it must *always* be called to get a new instance.

If leftenant's last argument is a function, it'll be treated as a callback.

You can say `leftenant.make(...keys)` to get an object where all the specified keys are `leftenant` itself. Or, say `leftenant.make({key1: boolean, key2: boolean, ...})`; then you'll get an object with those keys, but if the key's boolean value was truthy, it'll be an instantiated `leftenant()` instead of just `leftentant`.

## Stupid package.json tricks

```json
"dependencies": {
    "module-of-your-dreams": "juristat-oss/leftenant"
}
```

```javascript
const dreamModule = require('module-of-your-dreams');
```

... time passes, a new npm package is published ...

``` json
"dependencies": {
    "module-of-your-dreams": "^1.0.0"
}
```

This is especially handy if your dream module is of the form `await dreamModule();` and you don't care if it returns anything.

## Legal

Copyright 2016 Datanalytics, Inc. d/b/a Juristat. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
