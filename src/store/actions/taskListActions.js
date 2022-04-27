import { ACTION_TYPES } from '../types';

export const actions = {
  addTask: ({ title, description }) => (
    {
      type: ACTION_TYPES.ADD,
      payload: {
        title: title,
        description: description,
      }
    }
  ),
  toggleStatus: ({ id }) => (
    {
      type: ACTION_TYPES.TOGGLE_TASK_STATUS,
      payload: {
        id: id
      }
    }
  )
}
