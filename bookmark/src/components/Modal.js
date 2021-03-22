import React, { Component } from 'react';
import { Modal as ModalCard, Button, Form } from 'react-bootstrap';
import './Modal.scss';

class Modal extends Component {
  state = { showModal: false, websiteTerm: '', urlTerm: '' };

  componentDidUpdate(prevProps) {
    if (prevProps.openModal !== this.props.openModal) {
      this.setState({ showModal: !this.state.showModal });
    }
  }

  renderModalBody() {
    if (this.props.modalBody) {
      return <p>{this.props.modalBody}</p>;
    }
    return (
      <Form>
        <Form.Group>
          <Form.Label>website name</Form.Label>
          <Form.Control
            onChange={e => this.setState({ websiteTerm: e.target.value })}
            value={this.state.websiteTerm}
            type="text"
            placeholder="website name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>website url</Form.Label>
          <Form.Control
            onChange={e => this.setState({ urlTerm: e.target.value })}
            value={this.state.urlTerm}
            type="text"
            placeholder="url"
          />
        </Form.Group>
      </Form>
    );
  }

  onSaveClick = e => {
    if (this.state.websiteTerm && this.state.urlTerm) {
      this.setState({ showModal: false });
    }
  };

  render() {
    return (
      <ModalCard
        className="modal-box"
        show={this.state.showModal}
        onHide={() => this.setState({ showModal: false })}
        animation
        centered>
        <ModalCard.Header closeButton>
          <ModalCard.Title>{this.props.title}</ModalCard.Title>
        </ModalCard.Header>
        <ModalCard.Body>{this.renderModalBody()}</ModalCard.Body>
        <ModalCard.Footer>
          <Button
            variant="secondary"
            onClick={() => this.setState({ showModal: false })}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.onSaveClick()}>
            Save Changes
          </Button>
        </ModalCard.Footer>
      </ModalCard>
    );
  }
}

export default Modal;
