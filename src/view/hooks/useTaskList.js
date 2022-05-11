import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { showNotificationWithTimeout } from '../../store/notificationSlice';
import { addNewTaskThunk, fetchTasksThunk, toggleStatusThunk } from '../../store/taskListSlice';
import { TASK_STATUS } from '../../constants/taskStatus';
import { getCreationDate } from '../../utils/getCreationDate';

export const useTaskList = () => {
  const taskList = useSelector(state => state.taskList)

  const dispatch = useDispatch();

  const fetchTaskList = () => {
    dispatch(fetchTasksThunk());
  }

  const addTask = (title, description) => {
    const task = {
      id: uuidv4(),
      title: title,
      description: description,
      createdAt: getCreationDate(),
      status: TASK_STATUS.OPEN
    }

    dispatch(addNewTaskThunk(task));
    dispatch(showNotificationWithTimeout({ type: "success", msg: "Task adicionada" }));
  }

  const toggleTaskStatus = (id) => {
    dispatch(toggleStatusThunk({ id }));
    dispatch(showNotificationWithTimeout({ type: "success", msg: "Task movida" }));
  }

  return { taskList, toggleTaskStatus, fetchTaskList, addTask };
}
