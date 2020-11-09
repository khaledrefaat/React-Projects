import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [ term, setTerm ] = useState('');
	const [ results, setResults ] = useState([]);

	useEffect(
		() => {
			// then run this code
			const search = async () => {
				const data = await axios.get('https://en.wikipedia.org/w/api.php', {
					params: {
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: term
					}
				});
				setResults(data.data.query.search);
			};
			const timeoutId = setTimeout(() => {
				if (term) {
					search();
				}
			}, 500);

			// this will run first
			return () => {
				clearTimeout(timeoutId);
			};
		},
		[ term ]
	);

	const renderedResults = results.map(result => {
		return (
			<div className="item" key={result.pageid}>
				<div className="right floated content">
					<a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="blank">
						{/* <a className="ui button" href={`https://en.wikipedia.org/wiki/${result.title.split(' ').join('_')}}`} target="blank"> */}
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
			<div className="ui form form-custom">
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
