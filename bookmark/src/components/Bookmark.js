import React from 'react';
import './Bookmark.scss';

function Bookmark({ name, url, onDelete }) {
  function onDeleteClicked(e) {
    e.preventDefault();
    onDelete();
  }

  return (
    <a rel="external" className="bookmark" href={url} target="blank">
      {name}
      <span onClick={onDeleteClicked}>x</span>
    </a>
  );
}

export default Bookmark;
