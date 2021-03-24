import React, { Component } from 'react';
import Modal from './components/Modal';
import BookmarkList from './components/BookmarkList';

import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './App.scss';

class App extends Component {
  state = {
    openModal: false,
    bookmarks: [],
  };

  onModalSave = (webName, webUrl) => {
    this.setState({ bookmarks: [...this.state.bookmarks, [webName, webUrl]] });
  };

  onDelete = index => {
    let newState = this.state.bookmarks;
    this.state.bookmarks.splice(index, 1);
    this.setState({ bookmarks: newState });
  };

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
          <BookmarkList
            onDeletClicked={this.onDelete}
            bookmarks={this.state.bookmarks}
          />
          <Modal
            openModal={this.state.openModal}
            title="Add Bookmark"
            onModalSave={this.onModalSave}
            closeModal={isOpen => this.setState({ openModal: isOpen })}
          />
        </Container>
      </div>
    );
  }
}

export default App;

// try to add www.facebook.com or facebook.com without https:// to see the problem
