import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesRedboxReactLibIndexJs from "C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\redbox-react\\lib\\index.js";
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs from "C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-catch-errors\\lib\\index.js";
import _react from "react";
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs from "C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-hmr\\lib\\index.js";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Link: {
        displayName: "Link"
    }
};

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs({
    filename: "src/layout/Link.js",
    components: _components,
    locals: [module],
    imports: [_react]
});

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs({
    filename: "src/layout/Link.js",
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

var Link = _wrapComponent("Link")(function (_Component) {
    _inherits(Link, _Component);

    function Link() {
        _classCallCheck(this, Link);

        return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }

    _createClass(Link, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                children = _props.children,
                href = _props.href;


            return React.createElement(
                "a",
                _extends({}, this.props, { href: href ? href : 'javascript:void(0)' }),
                children
            );
        }
    }]);

    return Link;
}(Component));

Link.propTypes = {
    href: React.PropTypes.string,
    children: React.PropTypes.any
};

Link.defaultProps = {
    href: null,
    children: null
};

export default Link;