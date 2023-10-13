import '@fontsource-variable/montserrat';
import "@fontsource/inter/700.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from './App';
import './index.css';
import {store} from './redux/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
);
