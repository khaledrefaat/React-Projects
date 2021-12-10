import React, { useState, useContext } from 'react';
import Input from '../../shared/components/Form/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import useForm from '../../shared/hooks/form-hook';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AuthContext from '../../shared/context/auth-context';

import BackgroundImage from '../components/BackgroundImage';
import { Card, SvgContainer, FormContainer, LoginButton } from './AuthStyled';

const Auth = () => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const [isLoginMode, setIsLoginMode] = useState(true);

  const authenticate = useContext(AuthContext);

  const submitHandler = e => {
    e.preventDefault();
    console.log(formState.inputs);
    authenticate.login();
  };

  const switchModeHandler = () => {
    if (!isLoginMode)
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    else
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );

    setIsLoginMode(previousMode => !previousMode);
  };

  return (
    <BackgroundImage>
      <Card>
        <SvgContainer />
        <FormContainer>
          <form onSubmit={submitHandler}>
            <FormControl sx={{ flexGrow: 1 }}>
              <Box mb={3}>
                <Typography variant="h4" align="center">
                  {isLoginMode ? 'Login' : 'SignUp'}
                </Typography>
              </Box>
              {!isLoginMode && (
                <Box mb={2}>
                  <Input
                    id="name"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Please Enter A Name!"
                    label="Name"
                    initialValue={formState.inputs.name.value}
                    initialValid={formState.inputs.name.isValid}
                    required
                    onInput={inputHandler}
                    fullWidth
                  />
                </Box>
              )}
              <Box mb={2}>
                <Input
                  id="email"
                  validators={[VALIDATOR_EMAIL()]}
                  errorText="Please Enter A Valid Email!"
                  label="Email"
                  initialValue={formState.inputs.email.value}
                  initialValid={formState.inputs.email.isValid}
                  required
                  onInput={inputHandler}
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <Input
                  id="password"
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  errorText="Please Enter A Valid Password At Least 5 Chars!"
                  label="Password"
                  initialValue={formState.inputs.password.value}
                  initialValid={formState.inputs.password.isValid}
                  required
                  onInput={inputHandler}
                  fullWidth
                />
              </Box>
              <LoginButton
                variant="contained"
                color="primary"
                type="submit"
                disabled={!formState.isValid}
              >
                Login
              </LoginButton>
            </FormControl>
          </form>
          <Box mt={2} textAlign="center">
            {isLoginMode ? 'Not a member? ' : 'Already a member? '}

            <Button color="secondary" onClick={switchModeHandler}>
              {isLoginMode ? 'Sign Up' : 'Login'}
            </Button>
          </Box>
        </FormContainer>
      </Card>
    </BackgroundImage>
  );
};

export default Auth;
