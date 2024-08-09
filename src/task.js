//lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 

//función para llevar las tareas
export const getTasks = () => tasks;

//función para agregar una tarea
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed:false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//función para eliminar tarea que el usuario elija 
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcion para actualizar una tarea
export const toggleTask = (id) => {
    tasks = tasks.map ((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};