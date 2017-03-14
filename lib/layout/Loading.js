import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesRedboxReactLibIndexJs from "C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\redbox-react\\lib\\index.js";
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs from "C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-catch-errors\\lib\\index.js";
import _react from "react";
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs from "C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-hmr\\lib\\index.js";

var _class, _temp;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Loading: {
        displayName: "Loading"
    },
    LoadingCircle: {
        displayName: "LoadingCircle"
    }
};

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs({
    filename: "src/layout/Loading.js",
    components: _components,
    locals: [module],
    imports: [_react]
});

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs({
    filename: "src/layout/Loading.js",
    components: _components,
    locals: [],
    imports: [_react, _CUsersF8711939WorkspaceBrReactUtilsNode_modulesRedboxReactLibIndexJs]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs2(_CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

import React, { Component } from 'react';

export var Loading = _wrapComponent("Loading")(function (_Component) {
    _inherits(Loading, _Component);

    function Loading() {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
    }

    _createClass(Loading, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "progress", style: { margin: 0 } },
                React.createElement("div", { className: "indeterminate" })
            );
        }
    }]);

    return Loading;
}(Component));

/**

Props:
size: small, big

*/
export var LoadingCircle = _wrapComponent("LoadingCircle")((_temp = _class = function (_Component2) {
    _inherits(LoadingCircle, _Component2);

    function LoadingCircle() {
        _classCallCheck(this, LoadingCircle);

        return _possibleConstructorReturn(this, (LoadingCircle.__proto__ || Object.getPrototypeOf(LoadingCircle)).apply(this, arguments));
    }

    _createClass(LoadingCircle, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "preloader-wrapper " + this.props.size + " active" },
                React.createElement(
                    "div",
                    { className: "spinner-layer spinner-blue-only" },
                    React.createElement(
                        "div",
                        { className: "circle-clipper left" },
                        React.createElement("div", { className: "circle" })
                    ),
                    React.createElement(
                        "div",
                        { className: "gap-patch" },
                        React.createElement("div", { className: "circle" })
                    ),
                    React.createElement(
                        "div",
                        { className: "circle-clipper right" },
                        React.createElement("div", { className: "circle" })
                    )
                )
            );
        }
    }]);

    return LoadingCircle;
}(Component), _class.propTypes = {
    size: React.PropTypes.string
}, _class.defaultProps = {
    size: ''
}, _temp));