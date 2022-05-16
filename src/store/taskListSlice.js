import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import taskListService from '../services/httpService';

export const fetchTasksThunk = createAsyncThunk('taskList/fetchTasks', () => taskListService().getAll());

export const addNewTaskThunk = createAsyncThunk('taskList/addNewTask', (task) => taskListService().create(task));

export const toggleStatusThunk = createAsyncThunk('taskList/toggleTaskStatus',
  ({ id, newStatus }) => taskListService().update({ id, newStatus })
);

const fetchTasksReducers = {
  [fetchTasksThunk.pending]: (currentState) => {
    currentState.status = 'loading';
  },
  [fetchTasksThunk.fulfilled]: (currentState, action) => {
    currentState.status = 'success';
    currentState.tasks = action.payload;
  },
  [fetchTasksThunk.rejected]: (currentState) => {
    currentState.status = 'failed';
  }
}

const addNewTaskReducers = {
  [addNewTaskThunk.pending]: (currentState) => {
    currentState.status = 'loading';
  },
  [addNewTaskThunk.fulfilled]: (currentState, action) => {
    currentState.status = 'success';
    currentState.tasks.push(action.payload);
  },
  [addNewTaskThunk.rejected]: (currentState) => {
    currentState.status = 'failed';
  }
}

const toggleStatusReducers = {
  [toggleStatusThunk.pending]: (currentState) => {
    currentState.status = 'loading';
  },
  [toggleStatusThunk.fulfilled]: (currentState, action) => {
    currentState.status = 'success';
    const index = currentState.tasks.findIndex(task => task.id === action.payload.id);
    currentState.tasks[index] = action.payload;
  },
  [toggleStatusThunk.rejected]: (currentState) => {
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
