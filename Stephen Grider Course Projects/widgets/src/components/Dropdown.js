import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [ open, setOpen ] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = event => {
			// run only if the click was outside the dropdown
			// ref.current here to fix a bug of (Cannot read property 'contains' of null)
			if (ref.current && ref.current.contains(event.target)) return;
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick);

		return () => document.body.removeEventListener('click', onBodyClick);
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
				<label className="label">{label}</label>
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
