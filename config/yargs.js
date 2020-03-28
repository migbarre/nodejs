const description = {
    demand: true,
    alias: 'd',
    desc: '´Task description'
};

const complete = {
    demand: false,
    alias: 'c',
    default: true,
    desc: 'Task status'
};

const argv = require('yargs')
    .command('create', 'Create a task', {
        description
    })
    .command('delete', 'Delete a task', {
        description
    })
    .command('update', 'Update complete status task', {
        description,
        complete
    })
    .help()
    .argv;


module.exports = {
    argv
}