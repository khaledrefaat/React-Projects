import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomModal from './CustomModal';

import { ErrorBox } from './ErrorModalStyled';

const ErrorModal = props => {
  return (
    <CustomModal onClose={props.clearError} open={true}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Box mt={2}>
          <ErrorBox>{props.error}</ErrorBox>
        </Box>
        <Box sx={{ marginLeft: 'auto' }} mt={2}>
          <Button
            onClick={() => props.clearError()}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
        </Box>
      </Box>
    </CustomModal>
  );
};

export default ErrorModal;
