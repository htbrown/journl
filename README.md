# Journl
A beautiful logger that has a combination of both simple and advanced features.

## Installation
Installation is simple. Simply run:
```
npm i journl
```

## Usage
To start with Journl, import or require it as normal and create a new instance:
```js
const Journl = require('journl');
const log = new Journl()
```

You can customise it by adding some options. Here's an example:
```js
const log = new Journl({
    layout: '%type_short%: %message%',
    colors: {
        message: 'white',
        time: 'grey',
        types: {
            info: 'blue'
            // ...
        }
    }
})
```
More on customisation options later.

## Methods
There are currently four methods available. These are:
- `log.info(message)`
- `log.warn(message)`
- `log.error(message)`
- `log.success(message)`

There are future plans to add more, and even allow custom methods.

## Layout Options
If you would like to customise the layout of the logged messages, you can using the following syntax:

- `%message%` - displays the message given.
- `%time%` - displays the current time using HH:mm:ss.
- `%type%` - displays the type of log (e.g: error).
- `%type_short%` - displays the short type of log (e.g: i).

You can modify the layout using the `layout` option.