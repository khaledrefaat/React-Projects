import React, { useRef } from 'react';

import Button from '../Ui/Button';

import classes from './AddUser.module.css';

const AddUser = props => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const formHandler = e => {
    e.preventDefault();

    if (
      ageInputRef.current.value.length === 0 ||
      +ageInputRef.current.value < 1
    ) {
      props.showError('Please Enter Valid Age!');
      return;
    } else if (usernameInputRef.current.value.length === 0) {
      props.showError('Please Enter Valid Username!');
      return;
    }
    props.AddUserHandler({
      username: usernameInputRef.current.value,
      age: ageInputRef.current.value,
    });
    // usually we dont need to manipulate dom without react but max said that in this condition it ok as we dont create a html here or editing css class just editing inputs values
    ageInputRef.current.value = '';
    usernameInputRef.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <label className={classes.label} htmlFor="username">
        UserName
      </label>
      <input
        className={classes.input}
        id="username"
        type="text"
        ref={usernameInputRef}
      />
      <label className={classes.label} htmlFor="age">
        age
      </label>
      <input
        className={classes.input}
        type="number"
        id="age"
        ref={ageInputRef}
      />
      <Button onClick={formHandler} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddUser;
