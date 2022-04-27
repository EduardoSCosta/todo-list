import { createContext, useReducer } from 'react';
import { taskListReducer } from '../reducers/taskList';

export const TaskListContext = createContext();

export const TaskListProvider = ({ children }) => {
  const initialState = [];

  const [taskList, dispatch] = useReducer(taskListReducer, initialState);

  return (
    <TaskListContext.Provider value={{ taskList, dispatch }}>
      {children}
    </TaskListContext.Provider>
  )
}
