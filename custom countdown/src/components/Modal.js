import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Modal.css';

const Modal = () => {
  const [term, setTerm] = useState('');
  const [showCountdown, setShowCountdown] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);

  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyy = today.getFullYear();

  function onTimePicked(date) {
    const timePicked = date.split('-');
    setDaysLeft(timePicked[2] - dd);
    setHoursLeft(24 - today.getHours());
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
              onChange={e => setTerm(e.target.value)}
              value={term}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="input-label">select a date:</Form.Label>
            <Form.Control
              className="form-input"
              type="date"
              size="lg"
              max={maxDate()}
              min={minDate()}
              onChange={e => onTimePicked(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button
          className="btn-modal"
          size="lg"
          onClick={() => setShowCountdown(!showCountdown)}
          block>
          submit
        </Button>
      </div>
    );
  }

  function renderCountdown() {
    return (
      <div className="countdown-container">
        <h2 className="heading-2">valve index</h2>
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
            <h2>0</h2>
            <h3>minutes</h3>
          </div>
          <div className="seconds">
            <h2>50</h2>
            <h3>seconds</h3>
          </div>
        </div>
        <Button
          className="btn-modal"
          size="lg"
          onClick={() => setShowCountdown(!showCountdown)}
          block>
          reset
        </Button>
      </div>
    );
  }

  return <div>{showCountdown ? renderCountdown() : renderForm()}</div>;
};

export default Modal;
