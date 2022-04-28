import { useDispatch, useSelector } from 'react-redux';
import { add, toggleStatus } from '../../store/taskListSlice';

export const useTaskList = () => {
  const taskList = useSelector(state => state.taskList)
  
  const dispatch = useDispatch();
  const addTask = (title, description) => dispatch(add({ title, description }));
  const toggleTaskStatus = (id) => dispatch(toggleStatus({ id }));
  return { taskList, addTask, toggleTaskStatus };
}
