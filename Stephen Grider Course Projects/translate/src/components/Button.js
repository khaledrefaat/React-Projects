import React from 'react';
import LangugageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LangugageContext.Consumer>
                    {value => (value === 'arabic' ? 'إرسال' : 'Submit')}
                </LangugageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
