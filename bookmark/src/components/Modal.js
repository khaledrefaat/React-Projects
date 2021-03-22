import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Modal as ModalCard, Button, Form } from 'react-bootstrap';
import './Modal.scss';

function Modal({ title, modalBody }) {
  const [hideModal, setHideModal] = useState(true);

  function renderModalBody() {
    if (modalBody) {
      return <p>{modalBody}</p>;
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

  return ReactDom.createPortal(
    <div className={`modal-container ${hideModal ? 'hide-modal' : ''}`}>
      <ModalCard.Dialog className="modal-box">
        <ModalCard.Header closeButton>
          <ModalCard.Title>{title}</ModalCard.Title>
        </ModalCard.Header>

        <ModalCard.Body>{renderModalBody()}</ModalCard.Body>

        <ModalCard.Footer>
          <Button onClick={() => setHideModal(true)} variant="secondary">
            cancel
          </Button>
          <Button variant="primary">save</Button>
        </ModalCard.Footer>
      </ModalCard.Dialog>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
