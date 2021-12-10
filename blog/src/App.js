import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Auth from './users/containers/Auth';
import Nav from './shared/components/Navigation/Nav';

const AppContainer = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <AppContainer className="App">
        <Nav />
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
