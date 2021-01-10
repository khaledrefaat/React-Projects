import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import LangugageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LangugageContext;

    render() {
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {value => (value === 'arabic' ? 'الاسم' : 'Name')}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field;
