const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'City address',
        demand: true
    }
}).argv;

module.exports = {
    argv
};