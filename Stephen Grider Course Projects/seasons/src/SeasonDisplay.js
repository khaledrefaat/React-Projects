import  './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	summer: {
		whichSeason: 'Let\'s hit the beach',
		iconName: 'sun'
	},
	winter: {
		whichSeason: 'Burr, it\'s Chilly',
		iconName: 'snowflake'
	}
}

const getSeason = (lat, month) => {
	if(month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter';
	else return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const {whichSeason, iconName} = seasonConfig[season];
	return (
	<div className={`${season} season-display`}>
		<i className={`icon massive ${iconName} icon-left icon-${season}`}></i>
		<h1 className="heading-1">{whichSeason}</h1>
		<i className={`icon massive ${iconName} icon-right icon-${season}`}></i>
	</div>
	) 
};

export default SeasonDisplay;


// this app was created from section(Understanding lifecycle mthods) and to have an overview wathc lecture 14 of this section