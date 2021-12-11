import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
`;
export const CustomMuiBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;

  @media only screen and(max-width: 37.5em) {
    width: 90% !important;
  }
`;

export const Header = styled.div`
  background-color: #341f97;
  width: 100%;
  padding: 15px 5px;
  color: #fff;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const Footer = styled.footer`
  text-align: right;
  padding: 10px;
`;
