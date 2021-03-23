import React, { Component } from 'react';
import Bookmark from './Bookmark';
import './BookmarkList.scss';

export class BookmarkList extends Component {
  renderBookmark = () => {
    return this.props.bookmarks.map((cur, index) => {
      return <Bookmark key={index} name={cur[0]} url={cur[1]} />;
    });
  };

  render() {
    return <div className="bookmark-list">{this.renderBookmark()}</div>;
  }
}

export default BookmarkList;
