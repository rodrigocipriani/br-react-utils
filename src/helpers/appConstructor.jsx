/**
 * Evite alterar este arquivo
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';

const isProduction = process.env.NODE_ENV === 'production';

export default (Routes, store, rootContainer = 'root') => {
    ReactDOM.render(
        <Provider store={ store }>
            { isProduction ?
                <Routes /> :
                <div>
                    <Routes />
                    {/* <div>Desenvolvimento</div>*/}
                </div> }
        </Provider>,
        document.getElementById(rootContainer)
    );
};
