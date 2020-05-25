const chalk = require('chalk'),
    getTime = require('./getTime');

const processLayout = (type, type_short, message, loggerOptions) => {
    if (!loggerOptions) throw new Error('No logger options defined.')

    return loggerOptions.layout
        .replace('%time%', chalk[loggerOptions.colors.time](getTime()))
        .replace('%message%', chalk[loggerOptions.colors.message](message))
        .replace('%type%', chalk[loggerOptions.colors.types[type]](type))
        .replace('%type_short%', chalk[loggerOptions.colors.types[type]](type_short));
}

module.exports = processLayout;