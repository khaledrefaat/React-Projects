import React from 'react';

import { list, item } from './UserItem.module.css';

const UsersList = props => {
  return (
    <div>
      <ul className={list}>
        <li className={item}>
          Username: <span>{props.user.username}</span>
        </li>
        <li className={item}>
          Age: <span>{props.user.age} Years Old</span>
        </li>
      </ul>
    </div>
  );
};

export default UsersList;
