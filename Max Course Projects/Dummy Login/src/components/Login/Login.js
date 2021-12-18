import React, { useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGE':
      return {
        ...state,
        email: {
          value: action.value,
          isValid: action.isValid,
        },
        isValid: state.email.isValid && state.password.isValid,
      };
    case 'PASSWORD_CHANGE':
      return {
        ...state,
        password: {
          value: action.value,
          isValid: action.isValid,
        },
        isValid: state.email.isValid && state.password.isValid,
      };
    default:
      return state;
  }
};

const Login = props => {
  const [formState, dispatch] = useReducer(formReducer, {
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    isValid: false,
  });

  const emailChangeHandler = event =>
    dispatch({
      type: 'EMAIL_CHANGE',
      value: event.target.value,
      isValid: event.target.value.includes('@'),
    });

  const passwordChangeHandler = event =>
    dispatch({
      type: 'PASSWORD_CHANGE',
      value: event.target.value,
      isValid: event.target.value.length > 6,
    });

  const submitHandler = event => {
    event.preventDefault();
    props.onLogin(formState.email.value, formState.password.value);
  };

  console.log(formState);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.email.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email.value}
            onChange={emailChangeHandler}
            onBlur={() =>
              dispatch({
                type: 'EMAIL_CHANGE',
                value: formState.email.value,
                isValid: formState.email.value.includes('@'),
              })
            }
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.password.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password.value}
            onChange={passwordChangeHandler}
            onBlur={() =>
              dispatch({
                type: 'PASSWORD_CHANGE',
                value: formState.password.value,
                isValid: formState.password.value.length > 6,
              })
            }
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formState.isValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
