const fs = require('fs');

let toDoList = [];

const create = (description) => {
    let toDo = {
        description,
        complete: false
    };

    loadDb();
    toDoList.push(toDo);
    saveToDb(toDo);

    return toDo;
}

const saveToDb = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Something went wrong', err);
    });
}

const update = (description, complete) => {
    loadDb();
    let index = toDoList.findIndex(task => task.description === description);

    if (index >= 0) {
        toDoList[index].complete = (complete === 'true');
        saveToDb();
        return true;
    } else {
        return false;
    }
}

const remove = (description) => {
    loadDb();
    let index = toDoList.findIndex(task => task.description === description);

    if (index >= 0) {
        toDoList.splice(index, 1);
        saveToDb();
        return true;
    } else {
        return false;
    }
}

const loadDb = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
    return toDoList;

}

module.exports = {
    create,
    loadDb,
    update,
    remove
}