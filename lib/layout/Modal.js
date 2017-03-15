var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

var styles = {
    close: {
        position: 'relative',
        float: 'right',
        fontSize: '22px',
        marginBottom: '20px',
        cursor: 'pointer',
        marginTop: -10,
        color: 'gray'
    }
};

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {

            if (this.props.open != prevProps.open) {

                this.setState({
                    open: this.props.open
                });
            }
        }
    }, {
        key: 'handleCloseModal',
        value: function handleCloseModal() {

            this.props.onRequestClose();
        }
    }, {
        key: 'createHeader',
        value: function createHeader() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                this.props.title,
                React.createElement(
                    'span',
                    { onClick: function onClick() {
                            return _this2.handleCloseModal();
                        }, style: styles.close },
                    '\xD7'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                children = _props.children;


            return React.createElement(
                Dialog,
                {
                    title: this.createHeader(),
                    modal: false,
                    open: this.state.open,
                    onRequestClose: this.handleCloseModal.bind(this) },
                children
            );
        }
    }]);

    return Modal;
}(Component);

export default Modal;
//# sourceMappingURL=Modal.js.map