const yargs = require('yargs')
.option('t', {
    alias: 'tipoOperation',
    demandOption: true,
    default: 'S',
    describe: 'the aritmetic operation',
    type: 'string'
})
.option('b', {
    alias: 'base',
    demandOption: true,
    default: 5,
    describe: 'the aritmetic base',
    type: 'number'
})
.option('l', {
    alias: 'limit',
    demandOption: true,
    default: 10,
    describe: 'the aritmetic base',
    type: 'number'
})
.option('s', {
    alias: 'list',
    //demandOption: true,
    default: false,
    describe: 'the aritmetic base',
    type: 'boolean'
})
.argv;

module.exports = yargs;

