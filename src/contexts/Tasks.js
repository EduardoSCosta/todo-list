import { v4 as uuidv4 } from 'uuid';
import { createContext, useContext, useState } from 'react';
import { getCreationDate } from '../utils/getCreationDate';
import { TASK_STATUS } from '../constants/taskStatus';

const TaskListContext = createContext();

export const TaskListProvider = ({ children }) => {

  const [taskList, setTaskList] = useState([]);

  const addTask = (title, description) => {
    setTaskList((currentTaskList) => [...currentTaskList,
    {
      id: uuidv4(),
      title: title,
      description: description,
      createdAt: getCreationDate(),
      status: TASK_STATUS.OPEN
    }]);
  }

  const toggleTaskStatus = (id) => {
    const tasksWithUpdatedStatus = taskList.map(task => task.id === id ? {
      ...task, status: task.status === TASK_STATUS.OPEN ? TASK_STATUS.CLOSED : TASK_STATUS.OPEN
    } : task);

    setTaskList(tasksWithUpdatedStatus);
  }

  return (
    <TaskListContext.Provider value={{
      taskList,
      addTask,
      toggleTaskStatus
    }}
    >
      {children}
    </TaskListContext.Provider>
  )
}

export const useTaskList = () => {
  const context = useContext(TaskListContext);
  const { taskList, addTask, toggleTaskStatus } = context;
  return { taskList, addTask, toggleTaskStatus };
}
