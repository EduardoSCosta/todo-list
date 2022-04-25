import { useState } from 'react';
import Modal from 'react-modal';
import { useTaskList } from '../contexts/Tasks';
import '../styles/components/_newTaskModal.css';

const NewTaskModal = ({ isOpen, setIsOpen }) => {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setdescriptionInput] = useState('');

  const { addTask } = useTaskList();

  const clearForm = () => {
    setIsOpen(false);
    setTitleInput('');
    setdescriptionInput('');
  }

  const handleSubmit = () => {
    addTask(titleInput, descriptionInput);
    clearForm();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel='New Task'
      ariaHideApp={false}
      className='modal'
      overlayClassName='modal-overlay'
    >
      <button
        onClick={() => setIsOpen(false)}
        className='button button-close'
      >
        X
      </button>
      <h1>New Task</h1>
      <input
        type='text'
        placeholder='Title'
        onChange={(event) => setTitleInput(event.target.value)}
        value={titleInput}
        className='input'
      />
      <textarea
        type='text'
        placeholder='Description'
        onChange={(event) => setdescriptionInput(event.target.value)}
        value={descriptionInput}
        className='input input--textarea'
      />

      <button
        type='submit'
        onClick={handleSubmit}
        disabled={titleInput.length <= 0}
        className='button button--submit'
      >
        Create task
      </button>
    </Modal>
  );
}

export default NewTaskModal;
