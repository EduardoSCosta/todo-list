import { v4 as uuidv4 } from 'uuid';
import { TASK_STATUS } from '../../constants/taskStatus';
import { getCreationDate } from '../../utils/getCreationDate';
import { ACTION_TYPES } from '../types';

export const taskListReducer = (currentState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return [...currentState,
      {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: getCreationDate(),
        status: TASK_STATUS.OPEN
      }];
      
    case ACTION_TYPES.TOGGLE_TASK_STATUS:
      return currentState.map(task => task.id === action.payload.id ? {
        ...task, status: task.status === TASK_STATUS.OPEN ? TASK_STATUS.CLOSED : TASK_STATUS.OPEN
      } : task);
    default:
      return currentState;
  }
}
