import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
	renderError({ error, touched }) {
		if (error && touched) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderElement = ({ input, label, meta, placeholder }) => {
		// assign methods to input like onChange={input.onChange}
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = formValues => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="title" component={this.renderElement} label="Enter Title" />
				<Field name="description" component={this.renderElement} label="Enter Description" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};
	if (!formValues.title) errors.title = 'You Must Enter A Title';
	if (!formValues.description) errors.description = 'You Must Enter A Description';
	return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
