import React from 'react';

import { modal, header, footer, body, card } from './ErrorModal.module.css';

import Button from './Button';
import Card from './Card';

const ErrorModal = props => {
  return (
    <div className={modal}>
      <Card className={card}>
        <div className={header}>Error</div>
        <div className={body}>{props.error}</div>
        <div className={footer}>
          <Button onClick={props.hideModal}>Confirm</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
