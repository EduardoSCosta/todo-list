import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TASK_STATUS } from '../constants/taskStatus';
import { getCreationDate } from '../utils/getCreationDate';

const initialState = [];

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    add: (currentState, action) => {
      return [...currentState,
      {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: getCreationDate(),
        status: TASK_STATUS.OPEN
      }];
    },
    toggleStatus: (currentState, action) => {
      return currentState.map(task => task.id === action.payload.id ? {
        ...task, status: task.status === TASK_STATUS.OPEN ? TASK_STATUS.CLOSED : TASK_STATUS.OPEN
      } : task);
    }
  }
})

export const { add, toggleStatus } = taskListSlice.actions;
export default taskListSlice.reducer;