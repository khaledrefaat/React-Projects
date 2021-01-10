import ReactDom from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
