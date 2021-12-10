import React, { useReducer, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import { validate } from '../../util/validators';

const TextError = styled(Typography)`
  color: #f44336;
`;

const CustomTextField = styled(TextField)`
  width: 80%;
`;

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case 'TOUCH':
      return { ...state, isTouched: true };
    default:
      return { ...state };
  }
};

const Input = ({
  validators,
  id,
  initialValue,
  inintialValidate,
  errorText,
  onInput,
  ...restProps
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isValid: inintialValidate || '',
    isTouched: false,
  });

  const onChangeHandler = e =>
    dispatch({ type: 'CHANGE', value: e.target.value, validators });

  const onTouch = () => dispatch({ type: 'TOUCH' });

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid, onInput]);

  return (
    <>
      <CustomTextField
        id
        width="300"
        value={inputState.value}
        onChange={onChangeHandler}
        onBlur={onTouch}
        variant="outlined"
        {...restProps}
      />
      {!inputState.isValid && inputState.isTouched && (
        <TextError variant="body1">{errorText}</TextError>
      )}
    </>
  );
};

export default Input;
