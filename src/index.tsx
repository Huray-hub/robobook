import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
// import { createLogger } from 'redux-logger';
import App from './containers/App';
import './index.css';
import 'tachyons';

import * as serviceWorker from './serviceWorker';
//const logger = createLogger();
const store = configureStore();

const Root = () => (
    <Provider store = {store}> 
        <App />
    </Provider>
);

ReactDOM.render(<Root/> , document.getElementById('root'));

serviceWorker.unregister();
