import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
	const [ translated, setTanslated ] = useState('');
	const [ debouncedtext, setDebouncedtext ] = useState(text);

	useEffect(
		() => {
			const timerId = setTimeout(() => setDebouncedtext(text), 1000);
			return () => {
				clearTimeout(timerId);
			};
		},
		[ text ]
	);

	useEffect(
		() => {
			const doTranslate = async () => {
				const { data } = await axios.post(
					'https://translation.googleapis.com/language/translate/v2',
					{},
					{
						params: {
							q: debouncedtext,
							target: language.value,
							key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
						}
					}
				);
				setTanslated(data.data.translations[0].translatedText);
			};
			if (debouncedtext) doTranslate();
		},
		[ language, debouncedtext ]
	);

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	);
};

export default Convert;
