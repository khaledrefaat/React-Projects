import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
	const [ color, setColor ] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/search">
				<Search />
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			<Route path="/dropdown">
				<Dropdown label="Select a Color" options={options} selected={color} onSelectedChange={setColor} />
				<h1 style={{ color: color.value, textAlign: 'center', marginToh1: '30px' }}>{color.label}</h1>
			</Route>
		</div>
	);
};

export default App;
