var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

var FabButton = function (_PureComponent) {
    _inherits(FabButton, _PureComponent);

    function FabButton() {
        _classCallCheck(this, FabButton);

        return _possibleConstructorReturn(this, (FabButton.__proto__ || Object.getPrototypeOf(FabButton)).apply(this, arguments));
    }

    _createClass(FabButton, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                color = _props.color,
                label = _props.label,
                onClick = _props.onClick,
                children = _props.children;


            var attrs = {
                color: color || 'blue',
                label: label || React.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' }),
                onClick: onClick || '#'
            };

            return React.createElement(
                'div',
                { onClick: onClick, className: 'fixed-action-btn', style: { zIndex: '9999' } },
                React.createElement(
                    'a',
                    { className: ['btn-floating btn-large ', attrs.color].join(' ') },
                    attrs.label
                ),
                React.createElement(
                    'ul',
                    null,
                    children
                )
            );
        }
    }]);

    return FabButton;
}(PureComponent);

FabButton.propTypes = {
    color: PropTypes.string,
    label: PropTypes.any,
    onClick: PropTypes.any,
    children: PropTypes.any
};

FabButton.defaultProps = {
    color: null,
    label: null,
    onClick: null,
    children: React.createElement('li', null)
};

var FabButtonOption = function (_PureComponent2) {
    _inherits(FabButtonOption, _PureComponent2);

    function FabButtonOption() {
        _classCallCheck(this, FabButtonOption);

        return _possibleConstructorReturn(this, (FabButtonOption.__proto__ || Object.getPrototypeOf(FabButtonOption)).apply(this, arguments));
    }

    _createClass(FabButtonOption, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                color = _props2.color,
                onClick = _props2.onClick,
                tooltip = _props2.tooltip,
                tooltipPosition = _props2.tooltipPosition,
                tooltipDelay = _props2.tooltipDelay,
                children = _props2.children;


            var attrs = {
                color: color || 'blue',
                onClick: onClick || '#',
                tooltip: tooltip || '',
                tooltipDelay: tooltipDelay || '50',
                tooltipPosition: tooltipPosition || 'left'
            };

            return React.createElement(
                'li',
                null,
                React.createElement(
                    'a',
                    {
                        onClick: attrs.onClick,
                        className: ['waves-effect waves-light btn-floating tooltipped', attrs.color].join(' '),
                        'data-position': attrs.tooltipPosition,
                        'data-delay': attrs.tooltipDelay,
                        'data-tooltip': attrs.tooltip
                    },
                    children
                )
            );
        }
    }]);

    return FabButtonOption;
}(PureComponent);

FabButtonOption.propTypes = {
    color: PropTypes.string,
    tooltip: PropTypes.any,
    tooltipDelay: PropTypes.any,
    tooltipPosition: PropTypes.any,
    onClick: PropTypes.any,
    children: PropTypes.any
};

FabButtonOption.defaultProps = {
    color: null,
    tooltip: null,
    tooltipDelay: null,
    tooltipPosition: null,
    onClick: null,
    children: React.createElement('div', null)
};

export { FabButton, FabButtonOption };
//# sourceMappingURL=FabButton.js.map