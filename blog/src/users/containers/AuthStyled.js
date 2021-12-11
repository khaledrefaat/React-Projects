import styled from '@emotion/styled';
import Button from '@mui/material/Button';

import svg from '../../shared/assets/Alone.svg';

const backgroundStyle = `
background-image: url(${svg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 95%;
  height: 80%;
  padding-top: 40px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (min-width: 48em) {
    flex-direction: row;
    width: 90%;
    height: 80%;
  }

  @media only screen and (min-width: 56.25em) {
    width: 80%;
    height: 80%;
  }

  @media only screen and (min-width: 75em) {
    width: 70%;
    height: 80%;
  }
`;

export const SvgContainer = styled.div`
  display: none;
  @media only screen and (min-width: 48em) {
    height: 100%;
    width: 50%;
    display: block;
    ${backgroundStyle}
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  @media only screen and (max-width: 48em) {
    ${backgroundStyle}
  }

  @media only screen and (min-width: 48em) {
    width: 50%;
    height: 100%;
    padding: 0 30px;
  }

  form {
    width: 100%;
    display: flex;
  }
`;

export const LoginButton = styled(Button)`
  @media only screen and (max-width: 48em) {
    &:disabled {
      background-color: #cecece;
    }
  }
`;
