import React from 'react';
import concept from './svgs/concept.svg';
import innovation from './svgs/innovation.svg';
import problem from './svgs/problem.svg';
import conceptDark from './svgs/concept-dark.svg';
import innovationDark from './svgs/innovation-dark.svg';
import problemDark from './svgs/problem-dark.svg';
import './Undraw.css';

const Undraw = ({ isDark }) => {
	return (
		<section className="" id="undraw">
			<h1 className="heading-1">undraw illustrations</h1>
			<div className="column-container">
				<div className="column">
					<div className="ui card card-container">
						<div className="image image-container">
							<img src={isDark ? innovationDark : innovation} alt="img" />
						</div>
						<div className="content">
							<a className="header">Web Innovation</a>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="ui card card-container">
						<div className="image image-container">
							<img src={isDark ? problemDark : problem} alt="img" />
						</div>
						<div className="content">
							<a className="header">Problem Solving</a>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="ui card card-container">
						<div className="image image-container">
							<img src={isDark ? conceptDark : concept} alt="img" />
						</div>
						<div className="content">
							<a className="header">High Concept</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Undraw;
