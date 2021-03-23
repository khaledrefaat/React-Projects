import React from 'react';
import './Bookmark.scss';

function Bookmark({ name, url }) {
  return (
    <a className="bookmark" href={url} target="blank">
      {name}
      <span>x</span>
    </a>
  );
}

export default Bookmark;
