import { useState } from 'react';
import NewTaskModal from './NewTaskModal';
import '../styles/components/_header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='header'>
      <h1>Task Manager</h1>
      <button className='button button--new-task' onClick={() => setIsOpen(true)}>New Task</button>
      <NewTaskModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </header>
  );
}

export default Header;
