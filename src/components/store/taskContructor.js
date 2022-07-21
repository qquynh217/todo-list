export function taskContructor(nameTask, todoList) {
    return {
        nameTask,
        todoList,
        numberOfWork: function () { return this.todoList.length },
        completedTodos: function () {
            let completed = 0;
            this.todoList.forEach(todo => {
                if (todo.isCompleted === true) {
                    completed++
                }
            });
            return completed
        }
    }
}
export function todoContructor(nameTodo, isCompleted) {
    return {
        nameTodo,
        isCompleted
    }
}
