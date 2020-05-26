const defaultOptions = require('./utils/defaultOptions'),
    processLayout = require('./utils/processLayout');

class Journl {
    constructor(options) {
        if (!options) options = defaultOptions;

        this.options = options;

        let o;
        for (o in defaultOptions) {
            if (!this.options[o]) this.options[o] = defaultOptions[o]
        }

        for (o in defaultOptions.colors) {
            if (!this.options.colors[o]) this.options.colors[o] = defaultOptions.colors[o]
        }

        for (o in defaultOptions.colors.types) {
            if (!this.options.colors.types[o]) this.options.colors.types[o] = defaultOptions.colors.types[o];
        }
    }

    info(message) {
        console.log(processLayout('info', 'i', message, this.options))
    }
    
    warn (message) {
        console.log(processLayout('warn', '!', message, this.options))
    }
    
    success(message) {
        console.log(processLayout('success', '✓', message, this.options))
    }
    
    error(message) {
        console.log(processLayout('error', 'x', message, this.options))
    }
}

module.exports = Journl;
