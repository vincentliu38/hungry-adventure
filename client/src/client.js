import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //wrap react-redux with provider
import Layout from './containers/Layout';
import store from './store';
import Routes from './Routes';

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
    <Routes />
</Provider>, app);

