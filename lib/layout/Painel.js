var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent, PropTypes } from "react";
import 'materialize-css/bin/materialize.css';
// import 'materialize-css/bin/materialize.js';

var Painel = function (_PureComponent) {
    _inherits(Painel, _PureComponent);

    function Painel(props) {
        _classCallCheck(this, Painel);

        var _this = _possibleConstructorReturn(this, (Painel.__proto__ || Object.getPrototypeOf(Painel)).call(this, props));

        _this._handleHeaderClick = function () {
            // console.log('this.state.isOpen', this.state.isOpen);
            _this.setState({ isOpen: !_this.state.isOpen });
        };

        _this.state = {
            isOpen: props.isOpen
        };
        return _this;
    }

    _createClass(Painel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this._montaCollapsible();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // this._montaCollapsible();
            if (prevState.isOpen !== this.state.isOpen) {
                // chamada forçada par ao resize, pois tem componentes que necessitam se reorganizar
                window.dispatchEvent(new Event('resize'));
            }
        }

        // _montaCollapsible(){
        //     $(document).ready(function () {
        //         $('.collapsible').collapsible();
        //     });
        // }

    }, {
        key: 'render',
        value: function render() {

            // todo : Fazer animação quando abrir e fechar sem Jquery

            var _props = this.props,
                header = _props.header,
                titulo = _props.titulo,
                children = _props.children;
            var isOpen = this.state.isOpen;


            var display = isOpen ? 'block' : 'none';

            // console.log('isOpen', isOpen);
            // console.log('display', display);
            return React.createElement(
                'ul',
                { className: 'collapsible2', 'data-collapsible': 'accordion' },
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'div',
                        { onClick: this._handleHeaderClick, className: ['collapsible-header', isOpen && 'active'].join(' ') },
                        header ? header : titulo
                    ),
                    React.createElement(
                        'div',
                        { className: 'collapsible-body white animate', style: { padding: '0px', display: display } },
                        children
                    )
                )
            );
        }
    }]);

    return Painel;
}(PureComponent);

Painel.propTypes = {
    titulo: React.PropTypes.string,
    header: React.PropTypes.any,
    children: React.PropTypes.any,
    isOpen: React.PropTypes.bool
};

Painel.defaultProps = {
    titulo: null,
    header: null,
    children: React.createElement('div', null),
    isOpen: false
};

export default Painel;
//# sourceMappingURL=Painel.js.map