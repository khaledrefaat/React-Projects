import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import styled from '@emotion/styled';
import Nav from './shared/components/Navigation/Nav';

const MainApp = styled.main({
  height: 8000,
});

function App() {
  return (
    <Router>
      <MainApp className="App">
        <Nav></Nav>
      </MainApp>
    </Router>
  );
}

export default App;
