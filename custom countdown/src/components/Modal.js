import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Modal.css';

const Modal = () => {
  const [term, setTerm] = useState('');
  const [dateTerm, setDateTerm] = useState('');
  const [showCountdown, setShowCountdown] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutes] = useState(0);
  const [secondsLeft, setSeconds] = useState(0);
  const [savedCountDown, setSavedCountDown] = useState({});

  function onFormSubmit() {
    if (dateTerm && term) {
      setShowCountdown(!showCountdown);
      setTimeLeft(0, 0, 0, 0);
    }
  }

  useEffect(() => {
    const countDown = JSON.parse(localStorage.getItem('countDown'));
    if (countDown) {
      setDateTerm(countDown.date);
      setTerm(countDown.title);
      setShowCountdown(true);
    }
  }, [term, dateTerm]);

  useEffect(() => {
    if (showCountdown) {
      function count() {
        const now = new Date().getTime();
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const countDown = new Date(dateTerm).getTime();
        const distance = countDown - now;
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor(((distance % day) % hour) / minute);
        const seconds = Math.floor(
          (((distance % day) % hour) % minute) / second
        );

        setTimeLeft(days, hours, minutes, seconds);
        setSavedCountDown({
          title: term,
          date: dateTerm,
        });
        localStorage.setItem('countDown', JSON.stringify(savedCountDown));
      }
      const countDown = setInterval(() => count(), 1000);
      return () => {
        clearInterval(countDown);
      };
    }
  }, [showCountdown, dateTerm, savedCountDown, term]);

  function minDate() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyy = today.getFullYear();
    if (mm < 10 && dd < 10) return `${yyy}-0${mm}-0${dd}`;
    else if (dd < 10) return `${yyy}-${mm}-0${dd}`;
    else if (mm < 10) return `${yyy}-0${mm}-${dd}`;
    return `${yyy}-${mm}-${dd}`;
  }

  function setTimeLeft(day, hour, minute, second) {
    setDaysLeft(day);
    setHoursLeft(hour);
    setMinutes(minute);
    setSeconds(second);
  }

  function onResetClick() {
    setShowCountdown(!showCountdown);
    localStorage.removeItem('countDown');
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
              min={minDate()}
              onChange={e => setDateTerm(e.target.value)}
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
