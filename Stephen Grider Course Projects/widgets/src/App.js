import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
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

const options = [
	{
		label: 'Shade Of Red',
		value: 'crimson'
	},
	{
		label: 'Shade Of Green',
		value: 'limegreen'
	},
	{
		label: 'Shade Of Blue',
		value: 'navy'
	}
];

const App = () => {
	return (
		<div>
			<Translate />
		</div>
	);
};

export default App;
