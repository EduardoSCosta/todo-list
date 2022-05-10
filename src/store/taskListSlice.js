import { createSlice } from '@reduxjs/toolkit';
import { addNewTask, fetchTasks, toggleStatus } from '../services/taskListService';

const fetchTasksReducers = {
  [fetchTasks.pending]: (currentState) => {
    currentState.status = 'loading';
  },
  [fetchTasks.fulfilled]: (currentState, action) => {
    currentState.status = 'success';
    currentState.tasks = action.payload;
  },
  [fetchTasks.rejected]: (currentState) => {
    currentState.status = 'failed';
  }
}

const addNewTaskReducers = {
  [addNewTask.pending]: (currentState) => {
    currentState.status = 'loading';
  },
  [addNewTask.fulfilled]: (currentState, action) => {
    currentState.status = 'success';
    currentState.tasks.push(action.payload);
  },
  [addNewTask.rejected]: (currentState) => {
    currentState.status = 'failed';
  }
}

const toggleStatusReducers = {
  [toggleStatus.pending]: (currentState) => {
    currentState.status = 'loading';
  },
  [toggleStatus.fulfilled]: (currentState, action) => {
    currentState.status = 'success';
    const index = currentState.tasks.findIndex(task => task.id === action.payload.id);
    currentState.tasks[index] = action.payload;
  },
  [toggleStatus.rejected]: (currentState) => {
    currentState.status = 'failed';
  }
}

const initialState = {
  tasks: [],
  status: ""
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  extraReducers: {
    ...fetchTasksReducers,
    ...addNewTaskReducers,
    ...toggleStatusReducers
  }
})

export default taskListSlice.reducer;
