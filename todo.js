const STATUS = ['TODO', 'InProgress', 'Done'];
const PRIORITY = ['low', 'high']
const list = [
    {
        id: 1,
        name: 'create a post',
        status: 'TODO', 
        priority: 'low'
    },
    {
        id: 2,
        name: 'test',
        status: 'Done',
        priority: 'high'
    },
    {
        id: 3,
        name: 'test2',
        status: 'Done',
        priority: 'high'
    },
]
const freeIndex = [];
function changeStatus(id, status){
    let indexChangeTask = list.findIndex(item => item.id == id);
    list[indexChangeTask].status = status;
}
function addTask(name, status, priority){
    if (freeIndex.length > 0) {
        list.push({id: freeIndex.pop(), name: name, status: status, priority: priority});
        return;
    }
    list.push({id: list.length + 1, name: name, status: status, priority: priority});
}
function deleteTask(id){
    let indexDeleteTask = list.findIndex(item => item.id == id);
    if (indexDeleteTask != -1) {
        freeIndex[freeIndex.length] = list[indexDeleteTask].id;
        list.splice(indexDeleteTask, 1);           
    }
        
}

function showList(filterForTask){
    let showTask = list.filter(item => item.status == filterForTask);
    if (showTask.length == 0) {
        console.log(filterForTask + ':\n' + ' -');
        return;
    }
    console.log(filterForTask + ':');
    showTask.forEach((item) => {console.log(' ' + item.name)});
}

deleteTask(2);
deleteTask(1);
addTask('test3', STATUS[1], PRIORITY[1]);
addTask('test4', STATUS[1], PRIORITY[0]);
addTask('test5', STATUS[1], PRIORITY[0]);
addTask('test6', STATUS[1], PRIORITY[0]);
deleteTask(2);
addTask('test7', STATUS[2], PRIORITY[0]);
showList(STATUS[0]);
showList(STATUS[1]);
showList(STATUS[2]);