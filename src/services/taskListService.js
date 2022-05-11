import axios from 'axios';
import { TASK_STATUS } from '../constants/taskStatus';

const API_URL = 'http://localhost:3001/taskList/';

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addNewTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const toggleStatus = async ({ id }) => {
  const task = await axios.get(`${API_URL}${id}`);
  const taskStatus = task.data.status === TASK_STATUS.OPEN;

  const response = await axios.patch(`${API_URL}${id}`, {
    status: taskStatus ? TASK_STATUS.CLOSED : TASK_STATUS.OPEN
  });
  return response.data;
};
