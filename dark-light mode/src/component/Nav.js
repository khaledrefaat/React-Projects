import React from 'react';
import './Nav.css';

const Nav = ({ onCheck, isDark }) => {
	return (
		<nav className="ui secondary menu list">
			<a href="#" className="item list-item">
				home
			</a>
			<a href="#" className="item list-item">
				ِabout
			</a>
			<a href="#" className="item list-item">
				projects
			</a>
			<a href="#" className="item list-item">
				contact
			</a>
			<div className="right menu switch-container">
				<span id="toggle-icon" className="ui item">
					{isDark ? 'dark mode' : 'light mode'}
					<i className={isDark ? 'fas fa-moon' : 'fas fa-sun'} />
				</span>
				<label className="theme-switch">
					<input type="checkbox" onClick={() => onCheck()} />
					<div className="slider round" />
				</label>
			</div>
		</nav>
	);
};

export default Nav;
