import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Modal from './components/Modal';
import { Button } from 'react-bootstrap';

import './App.scss';

class App extends Component {
  state = { openModal: false };

  render() {
    return (
      <div className="app-background">
        <Container className="app-container">
          <Button
            onClick={() => this.setState({ openModal: true })}
            className="add-btn"
            variant="secondary">
            add bookmark
          </Button>
          <Modal openModal={this.state.openModal} title="Add Bookmark" />
        </Container>
      </div>
    );
  }
}

export default App;
