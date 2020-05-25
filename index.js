const defaultOptions = require('./utils/defaultOptions'),
    processLayout = require('./utils/processLayout');

class Journl {
    constructor(options) {
        this.options = options;

        for (let option in options) {
            options[option] = options[option] || defaultOptions[option]
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
