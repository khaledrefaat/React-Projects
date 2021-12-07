import React from 'react';

const Link = ({ href, className, children }) => {
	const onClick = event => {
		// when user press ctrl and clicks on the link open the link on new page
		if (event.metaKey || event.ctrlKey) return;

		event.preventDefault();
		window.history.pushState({}, '', href);

		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};

	return (
		<a href={href} className={className} onClick={onClick}>
			{children}
		</a>
	);
};

export default Link;
