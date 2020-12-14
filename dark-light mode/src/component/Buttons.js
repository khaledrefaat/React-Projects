import React from 'react';
import './Buttons.css';

const Buttons = () => {
	return (
		<section className="buttons">
			<h1 className="heading-1">buttons</h1>
			<div className="buttons-container">
				<button class="ui btn btn-primary button">primary</button>
				<button class="ui btn btn-secondary button">secondary</button>
				<button class="ui btn btn-disabled button">disabled</button>
				<button class="ui btn btn-outline button">outline</button>
				<button class="ui btn btn-alt-outline button">alt outline</button>
				<button class="ui btn btn-disabled button">disabled</button>
			</div>
			<div className="ui segment paragraph-container">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi esse modi culpa animi pariatur,
					atque a, molestias assumenda repudiandae quaerat voluptate, illo vitae possimus aliquam ex. Facere
					minus perferendis dolores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi esse
					modi culpa animi pariatur, atque a, molestias assumenda repudiandae quaerat voluptate, illo vitae
					possimus aliquam ex. Facere minus perferendis dolores.
				</p>
			</div>
		</section>
	);
};

export default Buttons;
