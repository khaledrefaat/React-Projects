import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
	const [ open, setOpen ] = useState(false);
	const ref = useRef();

	useEffect(() => {
		document.body.addEventListener('click', event => {
			// run only if the click was outside the dropdown
			if (ref.current.contains(event.target)) return;
			setOpen(false);
		});
	}, []);

	// loop over the options list and print them as dom
	const renderedOptions = options.map(option => {
		// remove the selected value from the dropdown menu
		if (option.value === selected.value) return null;

		return (
			<div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">Select a Color</label>
				<div
					/* oppsite open to toggle the state */
					onClick={() => {
						setOpen(!open);
					}}
					className={`ui selection dropdown ${open ? 'active visible' : ''}`}
				>
					<i className="dropdown icon" />
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
