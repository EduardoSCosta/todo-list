import { useTaskList } from '../hooks/useTaskList';
import { TASK_STATUS } from '../../constants/taskStatus';
import '../styles/components/_task.css';

const Task = ({ task }) => {

  const { toggleTaskStatus, removeTask } = useTaskList();

  return (
    <div className='task'>
      <div className='task__title-wrapper'>
        <input
          type='checkbox'
          onChange={() => toggleTaskStatus(task.id, task.status)}
          checked={task.status === TASK_STATUS.CLOSED}
          className='task__checkbox'
        />
        <h3 className='task__title'>{task.title}</h3>
        <button className='task__delete-btn' onClick={() => removeTask(task.id)}>x</button>
      </div>
      <p className='task__description'>{task.description}</p>
      <p className='task__date'>{task.createdAt}</p>
    </div>
  );
}

export default Task;
