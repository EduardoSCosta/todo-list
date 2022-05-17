import { useDispatch, useSelector } from 'react-redux';
import { createTask, switchTaskStatus } from '../../domain/Task';
import { showNotificationWithTimeout } from '../../store/notificationSlice';
import { addNewTaskThunk, fetchTasksThunk, removeTaskThunk, toggleStatusThunk } from '../../store/taskListSlice';

export const useTaskList = () => {
  const taskList = useSelector(state => state.taskList)

  const dispatch = useDispatch();

  const fetchTaskList = () => {
    dispatch(fetchTasksThunk());
  }

  const addTask = (title, description) => {
    const task = createTask({title, description})

    dispatch(addNewTaskThunk(task));
    dispatch(showNotificationWithTimeout({ type: "success", msg: "Task adicionada" }));
  }

  const toggleTaskStatus = (id, status) => {
    const newStatus = switchTaskStatus({status});

    dispatch(toggleStatusThunk({ id, newStatus }));
    dispatch(showNotificationWithTimeout({ type: "changed", msg: "Task movida" }));
  }

  const removeTask = (id) => {
    dispatch(removeTaskThunk({ id }));
    dispatch(showNotificationWithTimeout({ type: "removed", msg: "Task excluída" }));
  }

  return { taskList, toggleTaskStatus, fetchTaskList, addTask, removeTask };
}
