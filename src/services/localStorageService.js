const TASK_LOCAL_KEY = 'taskList';

const localStorageService = () => {
  const get = ({ id }) => {
    const tasks = getAll();
    const task = tasks.find(task => task.id === id);

    return task;
  }

  const getAll = () => {
    const tasks = localStorage.getItem(TASK_LOCAL_KEY);

    return tasks ? JSON.parse(tasks) : [];
  }

  const create = (task) => {
    const tasks = getAll();

    const listWithNewTask = [...tasks, task];
    localStorage.setItem(TASK_LOCAL_KEY, JSON.stringify(listWithNewTask));

    return task;
  }

  const update = ({ id, newStatus }) => {
    const tasks = getAll();
    const taskToUpdate = get({ id });
    const updatedTask = { ...taskToUpdate, status: newStatus };

    const newTaskList = tasks.map(task => task.id === id ? updatedTask : task);
    localStorage.setItem(TASK_LOCAL_KEY, JSON.stringify(newTaskList));

    return updatedTask;
  }

  return { get, getAll, create, update };
}

export default localStorageService;
