import React from 'react';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ReactComponent as Svg } from '../../assets/spinner.svg';

import {
  CustomMuiBox,
  Header,
  Form,
  SpinnerContainer,
  Footer,
} from './CustomModalStyled';

const CustomModal = props => {
  if (props.spinner) {
    return (
      <Modal open={true}>
        <SpinnerContainer>
          <Svg />
        </SpinnerContainer>
      </Modal>
    );
  }
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CustomMuiBox width="50%">
        <Header>
          <Typography id="modal-modal-title" variant="h5" component="h6">
            {props.header}
          </Typography>
        </Header>
        <Form
          onSubmit={props.onSubmit ? props.onSubmit : e => e.preventDefault()}
        >
          {props.children}
          <Footer>{props.footer}</Footer>
        </Form>
      </CustomMuiBox>
    </Modal>
  );
};

export default CustomModal;
