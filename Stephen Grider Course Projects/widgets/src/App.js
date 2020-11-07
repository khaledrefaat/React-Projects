import React from 'react';
import Accordion from './components/Accordion';

const items = [
	{
		title: 'What Is React',
		content: 'React Is A Well Known Javascript Library'
	},
	{
		title: 'Why Use React',
		content: 'Because It Makes Making Javascript Application Easier'
	},
	{
		title: 'How Do You Use React',
		content: 'You Use React By Creating Components'
	}
];
const App = () => {
	return (
		<div>
			<Accordion items={items} />
		</div>
	);
};

export default App;
