/**
 * Evite alterar este arquivo
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';

var isProduction = process.env.NODE_ENV === 'production';

export default (function (Routes, store) {
    var rootContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'root';

    ReactDOM.render(React.createElement(
        Provider,
        { store: store },
        isProduction ? React.createElement(Routes, null) : React.createElement(
            'div',
            null,
            React.createElement(Routes, null)
        )
    ), document.getElementById(rootContainer));
});
//# sourceMappingURL=appConstructor.js.map