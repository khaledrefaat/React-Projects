import React from 'react';
import { Container } from 'react-bootstrap';
import Modal from './components/Modal';
import { Button } from 'react-bootstrap';

import './App.scss';

function App() {
  return (
    <div className="app-background">
      <Container className="app-container">
        <Button className="add-btn" variant="secondary">
          add bookmark
        </Button>
        <Modal title="Add Bookmark" />
      </Container>
    </div>
  );
}

export default App;
