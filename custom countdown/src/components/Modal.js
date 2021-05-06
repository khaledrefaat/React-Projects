import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Modal.css";

const Modal = ({
  term,
  daysLeft,
  minutesLeft,
  secondsLeft,
  distance,
  onFormSubmit,
}) => {
  function renderForm() {
    return (
      <div className="modal-container">
        <h2 className="heading-2">create a custom countdown</h2>
        <Form>
          <Form.Group>
            <Form.Label className="input-label">title:</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              size="lg"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="input-label">select a date:</Form.Label>
            <Form.Control
              className="form-input"
              type="date"
              size="lg"
              min={minDate()}
              onChange={(e) => setDateTerm(e.target.value)}
              value={dateTerm}
            />
          </Form.Group>
        </Form>
        <Button className="btn-modal" size="lg" onClick={onFormSubmit} block>
          submit
        </Button>
      </div>
    );
  }

  function renderCountdown() {
    const now = new Date().getTime();
    const distance = new Date(dateTerm).getTime() - now;

    if (distance > 1000) {
      return (
        <div className="countdown-container">
          <h2 className="heading-2">{term}</h2>
          <div className="count-container">
            <div className="days">
              <h2>{daysLeft}</h2>
              <h3>days</h3>
            </div>
            <div className="hours">
              <h2>{hoursLeft}</h2>
              <h3>hours</h3>
            </div>
            <div className="minutes">
              <h2>{minutesLeft}</h2>
              <h3>minutes</h3>
            </div>
            <div className="seconds">
              <h2>{secondsLeft}</h2>
              <h3>seconds</h3>
            </div>
          </div>
          <Button className="btn-modal" size="lg" onClick={onResetClick} block>
            reset
          </Button>
        </div>
      );
    }
    return (
      <div className="countdown-container">
        <h2 className="heading-2">Timeup</h2>
        <Button className="btn-modal" size="lg" onClick={onResetClick} block>
          reset
        </Button>
      </div>
    );
  }

  return <div>{showCountdown ? renderCountdown() : renderForm()}</div>;
};

export default Modal;
