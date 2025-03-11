let task = [];

function  addtask(event) {
    const newTask = taskInput.value.trim();
    if(newtask){
        task.push(newTask);
        taskInput.value= '';
        rendertask();
    }
}

function edittask(index){
    const updateTask = promt('Edit your todo')
}