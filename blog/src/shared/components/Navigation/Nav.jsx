import * as React from 'react';

import Header from './Header';
import NavLinks from './NavLinks';

import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Nav = () => {
  return (
    <Header>
      <StyledToolbar>
        <Typography variant="h4">Blog</Typography>
        <NavLinks />
      </StyledToolbar>
    </Header>
  );
};

export default Nav;
