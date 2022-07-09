// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import React from 'react';

// class QuillEditor extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = { text: '' }; // You can also pass a Quill Delta here
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(value: any) {
//     this.setState({ text: value });
//   }

//   render() {
//     return <ReactQuill value={this.state.text} onChange={this.handleChange} />;
//   }
// }

// export default QuillEditor;

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState } from 'react';

const QuillEditor = () => {
  const [text, setText] = useState('');

  const onChange = (value: string) => setText(value);

  return <ReactQuill value={text} onChange={onChange} />;
};

export default QuillEditor;
