import React, { useState } from 'react';

import Button from '../Ui/Button';

import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredUsername, setenteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const formHandler = e => {
    e.preventDefault();

    if (enteredAge.length === 0 || +enteredAge < 1) {
      props.showError('Please Enter Valid Age!');
      return;
    } else if (enteredUsername.length === 0) {
      props.showError('Please Enter Valid Username!');
      return;
    }
    props.AddUserHandler({ username: enteredUsername, age: enteredAge });
    setEnteredAge('');
    setenteredUserName('');
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <label className={classes.label} htmlFor="username">
        UserName
      </label>
      <input
        onChange={e => setenteredUserName(e.target.value)}
        value={enteredUsername}
        className={classes.input}
        id="username"
        type="text"
      />
      <label className={classes.label} htmlFor="age">
        age
      </label>
      <input
        onChange={e => setEnteredAge(e.target.value)}
        value={enteredAge}
        className={classes.input}
        type="number"
        id="age"
      />
      <Button onClick={formHandler} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddUser;
