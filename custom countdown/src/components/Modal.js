import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Modal.css";

const Modal = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyy = today.getFullYear();

  function onTimePicked(date) {
    const timePicked = date.split("-");
    const daysLeft = timePicked[2] - dd;
    const hoursLeft = 24 - today.getHours();
    console.log("days left: " + daysLeft);
    console.log("hours left: " + hoursLeft);
  }

  function minDate() {
    if (mm < 10 && dd < 10) return `${yyy}-0${mm}-0${dd}`;
    else if (dd < 10) return `${yyy}-${mm}-0${dd}`;
    else if (mm < 10) return `${yyy}-0${mm}-${dd}`;
    return `${yyy}-${mm}-${dd}`;
  }

  function maxDate() {
    const lastDay = new Date(yyy, mm, 0).getDate();
    if (mm < 10) return `${yyy}-0${mm}-${lastDay}`;
    return `${yyy}-${mm}-${lastDay}`;
  }

  console.log(maxDate());

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
          <Form.Control
            className="form-input"
            type="date"
            size="lg"
            max={maxDate()}
            min={minDate()}
            onChange={(e) => onTimePicked(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button className="btn-modal" size="lg" block>
        submit
      </Button>
    </div>
  );
};

export default Modal;
