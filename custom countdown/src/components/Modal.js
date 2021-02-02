import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal-container">
      <h2 className="modal-title">create a custom countdown</h2>
      <Form>
        <Form.Group>
          <Form.Label className="input-label">title:</Form.Label>
          <Form.Control className="form-input" type="text" size="lg" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="input-label">select a date:</Form.Label>
          <Form.Control className="form-input" type="date" size="lg" />
        </Form.Group>
      </Form>
      <Button className="btn-modal" size="lg" block>
        submit
      </Button>
    </div>
  );
};

export default Modal;
