# leftenant

Lit. "placeholder". I quickly and quietly succeed at any task you give me. Just call me. I can be almost anything to anybody, but not everything to everybody. That's ok, call me over and over if you need.

## "almost anything"
* synchronous function: `leftenant(...args)`
* callback function: `leftenant(...args, function(err, result) {})`
* Promise function:
 * `await leftenant()` (but leftenant doesn't require async/await support)
 * `leftenant().then(...)`
 * `Promise.resolve(leftenant())`
* [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)
* [Duplex stream](https://nodejs.org/api/stream.html#stream_class_stream_duplex)
* Connect/[Express](http://expressjs.com/en/guide/writing-middleware.html)/[Koa 2](https://github.com/koajs/koa/tree/v2.x#middleware) middleware: `app.use(leftenant)`

You can say `leftenant.make(...keys)` to get an object where all the specified keys are `leftenant` itself. Or, say `leftenant.make({key1: boolean, key2: boolean, ...})`; then you'll get an object with those keys, but if the key's boolean value was truthy, it'll be an instantiated `leftenant()` instead of just `leftentant`.

## Legal

Copyright 2016 Datanalytics, Inc. d/b/a Juristat. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
