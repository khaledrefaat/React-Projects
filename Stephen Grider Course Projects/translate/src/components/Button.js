import React from 'react';
import { connect } from 'react-redux';
import { selectlanguage, selectColor } from '../actions';

class Button extends React.Component {
    renderText() {
        return this.props.language === 'arabic' ? 'ارسل' : 'submit';
    }

    render() {
        return (
            <button className={`ui button ${this.props.color}`}>
                {this.renderText()}
            </button>
        );
    }
}

const mapStateToProps = state => {
    return { language: state.language.language, color: state.color.color };
};

export default connect(mapStateToProps, { selectlanguage, selectColor })(
    Button
);
