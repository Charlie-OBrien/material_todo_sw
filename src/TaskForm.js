import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputState from './InputState';


const TaskForm = ({ saveTask }) => {
  const { value, reset, onChange } = InputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTask(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add Tasks"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TaskForm;
