import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TASK_STATUS } from '../constants/taskStatus';
import { getCreationDate } from '../utils/getCreationDate';

const fetchTasks = createAsyncThunk(); //dispatch(loading) -> dispatch(success) -> dispatch(error)
const addTask = createAsyncThunk(); //dispatch(loading) -> dispatch(success) -> dispatch(error)
const toggleTask = createAsyncThunk(); //dispatch(loading) -> dispatch(success) -> dispatch(error)

const initialState = {
  tasks: [],
  status: "error"
};
fetchTasks.pending
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