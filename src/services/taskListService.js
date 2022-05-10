import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { TASK_STATUS } from '../constants/taskStatus';
import { getCreationDate } from '../utils/getCreationDate';

export const fetchTasks = createAsyncThunk('taskList/fetchTasks', async () => {
  const response = await axios.get('http://localhost:3001/taskList');
  return response.data;
})

export const addNewTask = createAsyncThunk('taskList/addNewTask', async ({ title, description }) => {
  const task = {
    id: uuidv4(),
    title: title,
    description: description,
    createdAt: getCreationDate(),
    status: TASK_STATUS.OPEN
  }

  const response = await axios.post('http://localhost:3001/taskList', task);
  return response.data;
})

export const toggleStatus = createAsyncThunk('taskList/toggleTaskStatus', async ({ id }) => {
  const task = await axios.get(`http://localhost:3001/taskList/${id}`);
  const taskStatus = task.data.status === TASK_STATUS.OPEN;

  const response = await axios.patch(`http://localhost:3001/taskList/${id}`, {
    status: taskStatus ? TASK_STATUS.CLOSED : TASK_STATUS.OPEN
  });
  return response.data;
})
