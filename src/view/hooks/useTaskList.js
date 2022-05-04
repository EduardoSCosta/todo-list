import { useDispatch, useSelector } from 'react-redux';
import { add, toggleStatus } from '../../store/taskListSlice';
import {showNotificationWithTimout} from "../../store/notificationSlice";

export const useTaskList = () => {
  const taskList = useSelector(state => state.taskList)
  
  const dispatch = useDispatch();

  const addTask = (title, description) => {
    dispatch(add({ title, description }));
    dispatch(showNotificationWithTimout({type: "success", msg: "Task adicionada"}));
  }
  const toggleTaskStatus = (id) => {
    dispatch(toggleStatus({ id }));
    dispatch(showNotificationWithTimout({type: "success", msg: "Task movida pra todo"}));
  }
  return { taskList, addTask, toggleTaskStatus };
}
