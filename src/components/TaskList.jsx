import { useState } from 'react';
import { useTaskList } from '../contexts/Tasks';
import { TASK_STATUS } from '../constants/taskStatus';
import Task from './Task';
import '../styles/components/_taskList.css';

const TaskList = () => {
  const [currentListType, setCurrentListType] = useState(TASK_STATUS.OPEN);

  const { taskList } = useTaskList();

  const filteredList = taskList.filter(task => task.status === currentListType);

  return (
    <div className='task-list'>
      <div>
        <button
          onClick={() => setCurrentListType(TASK_STATUS.OPEN)}
          className={`button ${currentListType === TASK_STATUS.OPEN ? 'button--selected' : ''}`}
        >
          To do
        </button>
        <button
          onClick={() => setCurrentListType(TASK_STATUS.CLOSED)}
          className={`button ${currentListType === TASK_STATUS.CLOSED ? 'button--selected' : ''}`}
        >
          Closed
        </button>
      </div>
      {(filteredList.length > 0) ?
        filteredList.map(task => {
          return <Task key={task.id} task={task} />
        })
        :
        <h1 className='task-list__empty'>No Tasks</h1>}
    </div>
  );
}

export default TaskList;
