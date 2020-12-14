import React from 'react';
import concept from './svgs/concept.svg';
import innovation from './svgs/innovation.svg';
import problem from './svgs/problem.svg';
import './Undraw.css';

const Undraw = () => {
	return (
		<section className="undraw ui three column doubling stackable grid container">
			<h1 className="heading-1">undraw illustrations</h1>
			<div className="column">
				<div className="ui card card-container">
					<div className="image image-container">
						<img src={innovation} alt="img" />
					</div>
					<div className="content">
						<a className="header">Web Innovation</a>
					</div>
				</div>
			</div>
			<div className="column">
				<div className="ui card card-container">
					<div className="image image-container">
						<img src={problem} alt="img" />
					</div>
					<div className="content">
						<a className="header">Problem Solving</a>
					</div>
				</div>
			</div>
			<div className="column">
				<div className="ui card card-container">
					<div className="image image-container">
						<img src={concept} alt="img" />
					</div>
					<div className="content">
						<a className="header">High Concept</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Undraw;
