import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [ term, setTerm ] = useState('programming');
	const [ results, setResults ] = useState([]);
	const [ debouncedTerm, setDebouncedTerm ] = useState(term);

	// everytime user inputs new value and stops for 1sec change the debouncedTerm value
	useEffect(
		() => {
			const timerId = setTimeout(() => {
				setDebouncedTerm(term);
			}, 1000);
			return () => {
				clearTimeout(timerId);
			};
		},
		[ term ]
	);
	// run this if the user refresh the page or debouncedTerm was Changed
	useEffect(
		() => {
			const search = async () => {
				const data = await axios.get('https://en.wikipedia.org/w/api.php', {
					params: {
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: debouncedTerm
					}
				});
				setResults(data.data.query.search);
			};
			search();
		},
		[ debouncedTerm ]
	);

	const renderedResults = results.map(result => {
		return (
			<div className="item" key={result.pageid}>
				<div className="right floated content">
					<a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="blank">
						{/* this was my code */
						/* <a className="ui button" href={`https://en.wikipedia.org/wiki/${result.title.split(' ').join('_')}}`} target="blank"> */}
						GO
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }} />
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form form-custom" style={{ margin: '10px 30px' }}>
				<div className="field">
					<label>Enter Search Term</label>
					<input className="input" value={term} onChange={e => setTerm(e.target.value)} />
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
