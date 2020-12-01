import React, { useState } from 'react';


function CustomInput(props) {

  const [newTask, setNewTask] = useState('');

  const tasks = props.tasks;
  const setTasks = props.setTasks;

  const handleOnChange = (event) => {
    event.preventDefault();
    setNewTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <p>Ajouter une tache</p>
        <input value={ newTask } onChange={ handleOnChange }></input>
      </form>
    </>
  );
}

export default CustomInput
