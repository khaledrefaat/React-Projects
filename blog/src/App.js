import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Auth from './users/containers/Auth';
import Nav from './shared/components/Navigation/Nav';
import Articles from './articles/containers/Articles';

const AppContainer = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <AppContainer className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
