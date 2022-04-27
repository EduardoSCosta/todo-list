import { useContext } from 'react';
import { actions } from '../../store/actions/taskListActions';
import { TaskListContext } from '../../store/contexts/Tasks';

export const useTaskList = () => {
  const context = useContext(TaskListContext);
  const { taskList, dispatch } = context;
  const addTask = (title, description) => dispatch(actions.addTask({ title, description }));
  const toggleTaskStatus = (id) => dispatch(actions.toggleStatus({ id }));
  return { taskList, addTask, toggleTaskStatus };
}
