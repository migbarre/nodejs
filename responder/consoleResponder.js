const taskList = (taskList) => {

    taskList.forEach(element => {
        console.log('========== Por Hacer ============'.green);
        console.log(element.description);

        if (element.complete) {
            console.log(('Status: ' + element.complete).yellow);
        } else {
            console.log(('Status: ' + element.complete).red);
        }

        console.log('================================='.green);
    });
}

module.exports = {
    taskList
}