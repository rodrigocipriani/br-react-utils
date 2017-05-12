var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";

var Card = function (_Component) {
    _inherits(Card, _Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                title = _props.title,
                actions = _props.actions;


            return React.createElement(
                'div',
                { className: ['card', className].join(' ') },
                React.createElement(
                    'div',
                    { className: 'card-content' },
                    React.createElement(
                        'span',
                        { className: 'card-title' },
                        title
                    ),
                    children
                ),
                React.createElement(
                    'div',
                    { className: 'card-action' },
                    actions
                )
            );
        }
    }]);

    return Card;
}(Component);

Card.propTypes = {
    children: React.PropTypes.any,
    className: PropTypes.string,
    title: PropTypes.string,
    actions: PropTypes.any
};

Card.defaultProps = {
    children: null,
    className: '',
    title: '',
    actions: ''
};

export default Card;
//# sourceMappingURL=Card.js.map