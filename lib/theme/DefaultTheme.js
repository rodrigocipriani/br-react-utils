var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// todo : remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

var DefaultTheme = function (_Component) {
    _inherits(DefaultTheme, _Component);

    function DefaultTheme(props) {
        _classCallCheck(this, DefaultTheme);

        return _possibleConstructorReturn(this, (DefaultTheme.__proto__ || Object.getPrototypeOf(DefaultTheme)).call(this, props));
    }

    _createClass(DefaultTheme, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;


            return React.createElement(
                MuiThemeProvider,
                { muiTheme: getMuiTheme() },
                children
            );
        }
    }]);

    return DefaultTheme;
}(Component);

DefaultTheme.propTypes = {
    children: PropTypes.element
};

DefaultTheme.defaultProps = {
    children: null
};

export default DefaultTheme;
//# sourceMappingURL=DefaultTheme.js.map