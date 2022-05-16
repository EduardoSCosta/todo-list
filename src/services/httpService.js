import axios from 'axios';

const API_URL = 'http://localhost:3001/taskList/';

const httpService = () => {
  const instance = axios.create({
    baseURL: API_URL
  });

  const get = async ({ id }) => {
    const response = await instance.get(id);
    return response.data;
  }

  const getAll = async () => {
    const response = await instance.get();
    return response.data;
  }

  const create = async (task) => {
    const response = await instance.post('', task);
    return response.data;
  }

  const update = async ({ id, newStatus }) => {
    const response = await instance.patch(id, { status: newStatus });
    return response.data;
  }

  return { get, getAll, create, update };
}

export default httpService;
