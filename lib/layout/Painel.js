import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesRedboxReactLibIndexJs from 'C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\redbox-react\\lib\\index.js';
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs from 'C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-catch-errors\\lib\\index.js';
import _react from 'react';
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs from 'C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-hmr\\lib\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Painel: {
        displayName: 'Painel'
    }
};

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs({
    filename: 'src/layout/Painel.js',
    components: _components,
    locals: [module],
    imports: [_react]
});

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs({
    filename: 'src/layout/Painel.js',
    components: _components,
    locals: [],
    imports: [_react, _CUsersF8711939WorkspaceBrReactUtilsNode_modulesRedboxReactLibIndexJs]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs2(_CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

import React, { Component, PropTypes } from "react";
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

var Painel = _wrapComponent('Painel')((_temp = _class = function (_Component) {
    _inherits(Painel, _Component);

    function Painel() {
        _classCallCheck(this, Painel);

        return _possibleConstructorReturn(this, (Painel.__proto__ || Object.getPrototypeOf(Painel)).apply(this, arguments));
    }

    _createClass(Painel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            $(document).ready(function () {
                $('.collapsible').collapsible();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                header = _props.header,
                titulo = _props.titulo,
                children = _props.children,
                isOpen = _props.isOpen;


            return React.createElement(
                'ul',
                { className: 'collapsible', 'data-collapsible': 'accordion' },
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'div',
                        { className: ['collapsible-header', isOpen && 'active'].join(' ') },
                        header ? header : titulo
                    ),
                    React.createElement(
                        'div',
                        { className: 'collapsible-body white', style: { padding: '0px' } },
                        children
                    )
                )
            );
        }
    }]);

    return Painel;
}(Component), _class.propTypes = {
    titulo: React.PropTypes.string,
    header: React.PropTypes.any,
    children: React.PropTypes.element,
    isOpen: React.PropTypes.bool
}, _class.defaultProps = {
    titulo: null,
    header: null,
    children: React.createElement('div', null),
    isOpen: false
}, _temp));

export default Painel;