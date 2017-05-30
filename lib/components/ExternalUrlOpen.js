var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { STATIC_SERVER_URL } from 'config';

var ExternalUrlOpen = function (_Component) {
    _inherits(ExternalUrlOpen, _Component);

    function ExternalUrlOpen(props) {
        _classCallCheck(this, ExternalUrlOpen);

        var _this = _possibleConstructorReturn(this, (ExternalUrlOpen.__proto__ || Object.getPrototypeOf(ExternalUrlOpen)).call(this, props));

        _this.state = {
            height: '500px'
        };
        _this.wait = false;
        _this.elementoPai = 'document';
        _this.altura = null;
        return _this;
    }

    _createClass(ExternalUrlOpen, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.url !== nextProps.url || this.state.height !== nextState.height;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('fdsa ');

            this.redimenciona();
            var me = this;

            $(window).addEventListener("resize", function (e) {
                console.log(e);
            });
            $(window).resize(function () {
                console.log(e);
            });

            // $(window).resize(function() {
            //     if (!this.wait) {
            //         me.redimenciona();
            //         me.wait = true;
            //     }
            // });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.redimenciona);
        }
    }, {
        key: 'redimenciona',
        value: function redimenciona(e) {
            console.log('rodrigo ');

            var bodyHeight = $(this.elementoPai).outerHeight();

            var altura = '0px';
            if (this.altura) {
                altura = this.altura + 'px';
            } else {

                // let footerHeight = $("footer").outerHeight();
                var footerHeight = 0;
                var descontoAltura = 0;
                this.elementosDescontarTamanho.forEach(function (elemento) {
                    descontoAltura = descontoAltura + $(elemento).outerHeight();
                });
                // let navbarPrimaryHeight = $('.navbar_primary').outerHeight();
                // let navbarSecondaryHeight = $('.navbar_secondary').outerHeight();

                // console.log(bodyHeight + " - " + footerHeight + " - " + navbar_primaryHeight + " - " + navbar_secondaryHeight);

                var temp = 0;

                altura = bodyHeight - (footerHeight + descontoAltura + temp) + 'px';
            }
            console.log(altura);
            this.setState({ height: altura });
            // $('#pageContainerObject').css('height', altura);
            this.wait = false;
        }
    }, {
        key: 'render',
        value: function render() {
            var url = this.props.url;
            var height = this.state.height;


            return React.createElement(
                'iframe',
                { style: { width: '100%', height: height },
                    src: url,
                    type: 'text/html' },
                React.createElement(
                    'p',
                    null,
                    'P\xE1gina n\xE3o encontrada'
                )
            );
        }
    }]);

    return ExternalUrlOpen;
}(Component);

ExternalUrlOpen.propTypes = {
    url: PropTypes.string.isRequired
};
ExternalUrlOpen.defaultProps = {
    url: ""
};


export default ExternalUrlOpen;
//# sourceMappingURL=ExternalUrlOpen.js.map