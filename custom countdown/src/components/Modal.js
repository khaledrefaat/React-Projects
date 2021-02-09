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

  // const today = new Date();
  // const dd = today.getDate();
  // const mm = today.getMonth() + 1;
  // const yyy = today.getFullYear();

  const today = new Date().getTime();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  function onFormSubmit() {
    if (dateTerm && term) {
      setShowCountdown(!showCountdown);
      const countDown = new Date(dateTerm).getTime();
      const distance = Math.floor(countDown - today);
      const days = Math.floor((countDown - today) / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor(((distance % day) % hour) / minute);
      const seconds = Math.floor((((distance % day) % hour) % minute) / second);

      setDaysLeft(days);
      setHoursLeft(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  }

  // console.log(daysLeft);
  // console.log(hoursLeft);
  // console.log(minutesLeft);
  // console.log(secondsLeft);

  // useEffect(() => {
  //   if (showCountdown) {
  //     function count() {
  //       const today = new Date();
  //       let remainingDays = dateTerm.split('-')[2] - today.getDate();
  //       let remainingHours = 24 - today.getHours();
  //       let remainingMinutes = new Date().getMinutes();
  //       let remainingSecond = new Date().getSeconds();
  //       setDaysLeft(remainingDays);
  //       setHoursLeft(remainingHours);
  //       setMinutes(remainingMinutes);
  //       setSeconds(remainingSecond);
  //     }
  //     const countDown = setInterval(() => count(), 1000);
  //     return () => {
  //       clearInterval(countDown);
  //     };
  //   }
  // }, [showCountdown, dateTerm]);

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
        <Button
          className="btn-modal"
          size="lg"
          onClick={() => setShowCountdown(!showCountdown)}
          block>
          reset
        </Button>
      </div>
    );
    // return (
    //   <div className="countdown-container">
    //     <h2 className="heading-2">Timeup</h2>
    //     <Button
    //       className="btn-modal"
    //       size="lg"
    //       onClick={() => setShowCountdown(!showCountdown)}
    //       block>
    //       reset
    //     </Button>
    //   </div>
    // );
  }

  return <div>{showCountdown ? renderCountdown() : renderForm()}</div>;
};

export default Modal;
