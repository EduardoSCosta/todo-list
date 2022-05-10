import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, fetchTasks, toggleStatus } from '../../services/taskListService';
import { showNotificationWithTimeout } from "../../store/notificationSlice";

export const useTaskList = () => {
  const taskList = useSelector(state => state.taskList)

  const dispatch = useDispatch();

  const fetchTaskList = () => {
    dispatch(fetchTasks());
  }

  const addTask = (title, description) => {
    dispatch(addNewTask({ title, description }));
    dispatch(showNotificationWithTimeout({ type: "success", msg: "Task adicionada" }));
  }

  const toggleTaskStatus = (id) => {
    dispatch(toggleStatus({ id }));
    dispatch(showNotificationWithTimeout({ type: "success", msg: "Task movida" }));
  }

  return { taskList, toggleTaskStatus, fetchTaskList, addTask };
}
