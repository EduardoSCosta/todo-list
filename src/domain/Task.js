import { v4 as uuidv4 } from 'uuid';
import { TASK_STATUS } from '../constants/taskStatus';
import { getCreationDate } from '../utils/getCreationDate';

export const createTask = ({title, description}) => {
  return {
    id: uuidv4(),
    title: title,
    description: description,
    createdAt: getCreationDate(),
    status: TASK_STATUS.OPEN
  }
}

export const switchTaskStatus = ({status}) => {
  return status === TASK_STATUS.OPEN ? TASK_STATUS.CLOSED : TASK_STATUS.OPEN;
}
