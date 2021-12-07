import React from 'react';
import Link from './Link';

const Header = () => {
	return (
		// <ul>
		// 	<li>
		// 		<a href="/">Accordion</a>
		// 	</li>
		// 	<li>
		// 		<a href="/dropdown">Dropdown Color</a>
		// 	</li>
		// 	<li>
		// 		<a href="/search">Search</a>
		// 	</li>
		// 	<li>
		// 		<a href="/translate">Translate</a>
		// 	</li>
		// </ul>

		<div className="ui secondary pointing menu">
			<Link href="/" className="item">
				Accordion
			</Link>
			<Link href="/dropdown" className="item">
				Dropdown
			</Link>
			<Link href="/search" className="item">
				Search
			</Link>
			<Link href="/translate" className="item">
				Translate
			</Link>
		</div>
	);
};

export default Header;
