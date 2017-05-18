/**
 * Evite alterar este arquivo
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import 'babel-polyfill';

var customHistory = createBrowserHistory();

var isProduction = process.env.NODE_ENV === 'production';

export default (function (Routes, store) {
    var rootContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'root';

    ReactDOM.render(React.createElement(
        Provider,
        { store: store },
        React.createElement(
            Router,
            { history: customHistory },
            isProduction ? React.createElement(Routes, null) : React.createElement(
                'div',
                null,
                React.createElement(Routes, null)
            )
        )
    ), document.getElementById(rootContainer));
});
//# sourceMappingURL=appConstructor.js.map