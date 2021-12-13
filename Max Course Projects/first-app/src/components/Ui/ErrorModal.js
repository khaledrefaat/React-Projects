import React from 'react';
import ReactDom from 'react-dom';

import { modal, header, footer, body, card } from './ErrorModal.module.css';

import Button from './Button';
import Card from './Card';

const ErrorModal = props => {
  const Modal = () => (
    <div className={modal} onClick={props.hideModal}>
      <Card className={card} onClick={e => e.stopPropagation()}>
        <div className={header}>Error</div>
        <div className={body}>{props.error}</div>
        <div className={footer}>
          <Button onClick={props.hideModal}>Confirm</Button>
        </div>
      </Card>
    </div>
  );

  return ReactDom.createPortal(<Modal />, document.getElementById('modal'));
};

export default ErrorModal;
