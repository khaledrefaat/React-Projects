import React from 'react';
import { connect } from 'react-redux';
import { selectlanguage } from '../actions';

class Field extends React.Component {
    renderText() {
        return this.props.language === 'arabic' ? 'الاسم' : 'Name';
    }

    render() {
        return (
            <div className="ui field">
                <label>{this.renderText()}</label>
                <input />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { language: state.language.language };
};

export default connect(mapStateToProps, selectlanguage)(Field);
