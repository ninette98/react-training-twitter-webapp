import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reducer from './redux/reducer';
import App from './app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));