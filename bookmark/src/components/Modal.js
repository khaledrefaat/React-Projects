import React from 'react';
import ReactDom from 'react-dom';
import { Modal as ModalCard, Button, Form } from 'react-bootstrap';
import './Modal.scss';

function Modal({ title, modalBody }) {
  function renderModalBody() {
    if (modalBody) {
      return <p>{modalBody}</p>;
    }
    return (
      <Form>
        <Form.Group>
          <Form.Label>email address</Form.Label>
          <Form.Control type="email" placeholder="enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
      </Form>
    );
  }

  return ReactDom.createPortal(
    <div className="modal-container">
      <ModalCard.Dialog className="modal-box">
        <ModalCard.Header closeButton>
          <ModalCard.Title>{title}</ModalCard.Title>
        </ModalCard.Header>

        <ModalCard.Body>{renderModalBody()}</ModalCard.Body>

        <ModalCard.Footer>
          <Button variant="secondary">cancel</Button>
          <Button variant="primary">save</Button>
        </ModalCard.Footer>
      </ModalCard.Dialog>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
