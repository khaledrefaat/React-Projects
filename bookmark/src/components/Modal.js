import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Modal as ModalCard, Button, Form } from 'react-bootstrap';
import './Modal.scss';

class Modal extends Component {
  state = { showModal: true };

  renderModalBody() {
    if (this.props.modalBody) {
      return <p>{this.props.modalBody}</p>;
    }
    return (
      <Form>
        <Form.Group>
          <Form.Label>website name</Form.Label>
          <Form.Control type="text" placeholder="website name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>website url</Form.Label>
          <Form.Control type="text" placeholder="url" />
        </Form.Group>
      </Form>
    );
  }

  render() {
    return ReactDom.createPortal(
      <div
        className={`modal-container ${
          this.state.showModal ? '' : 'hide-modal'
        }`}>
        <ModalCard.Dialog className="modal-box">
          <ModalCard.Header
            onHide={() => this.setState({ showModal: false })}
            closeButton>
            <ModalCard.Title>{this.props.title}</ModalCard.Title>
          </ModalCard.Header>

          <ModalCard.Body>{this.renderModalBody()}</ModalCard.Body>

          <ModalCard.Footer>
            <Button
              onClick={() => this.setState({ showModal: false })}
              variant="secondary">
              cancel
            </Button>
            <Button variant="primary">save</Button>
          </ModalCard.Footer>
        </ModalCard.Dialog>
      </div>,
      document.getElementById('modal')
    );
  }
}

export default Modal;
