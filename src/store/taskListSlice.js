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
      currentState.push(
      {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: getCreationDate(),
        status: TASK_STATUS.OPEN
      });
    },
    toggleStatus: (currentState, action) => {
      const taskIndex = currentState.findIndex(task => task.id === action.payload.id);
      currentState[taskIndex].status = currentState[taskIndex].status === TASK_STATUS.OPEN ? TASK_STATUS.CLOSED : TASK_STATUS.OPEN
    }
  }
})

export const { add, toggleStatus } = taskListSlice.actions;
export default taskListSlice.reducer;