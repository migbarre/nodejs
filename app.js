const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./todo/todo');
const response = require('./responder/consoleResponder');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;

    case 'list':
        let taskList = toDo.loadDb();
        response.taskList(taskList);
        break;

    case 'update':
        let updated = toDo.update(argv.description, argv.complete);
        if (updated) {
            console.log('Task ' + argv.description + ' updated');
        } else {
            console.log(argv.description + ' doesn\'t exists');
        }
        break;

    case 'delete':
        let deleted = toDo.remove(argv.description);
        if (deleted) {
            console.log('Task ' + argv.description + ' deleted');
        } else {
            console.log(argv.description + ' doesn\'t exists');
        }
        break;

    default:
        console.log('Command not found');
        break;
}