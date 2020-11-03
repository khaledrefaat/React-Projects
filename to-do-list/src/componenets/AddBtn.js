import React from 'react';

const AddBtn = props => {
	return (
		<button className="btn btn-add" onClick={props.onClick}>
			Add Todo
		</button>
	);
};

export default AddBtn;
