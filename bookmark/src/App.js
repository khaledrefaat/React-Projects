import React from 'react';
import { Container } from 'react-bootstrap';
import Modal from './components/Modal';

import './App.scss';

function App() {
  return (
    <div className="app-background">
      <Container>
        <Modal title="Add Bookmark" />
      </Container>
    </div>
  );
}

export default App;
