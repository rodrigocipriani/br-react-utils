import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesRedboxReactLibIndexJs from 'C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\redbox-react\\lib\\index.js';
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs from 'C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-catch-errors\\lib\\index.js';
import _react from 'react';
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs from 'C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-hmr\\lib\\index.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    SelectFieldInput: {
        displayName: 'SelectFieldInput'
    }
};

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs({
    filename: 'src/form/SelectField.js',
    components: _components,
    locals: [module],
    imports: [_react]
});

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs({
    filename: 'src/form/SelectField.js',
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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var SelectFieldInput = _wrapComponent('SelectFieldInput')((_temp = _class = function (_Component) {
    _inherits(SelectFieldInput, _Component);

    function SelectFieldInput() {
        _classCallCheck(this, SelectFieldInput);

        return _possibleConstructorReturn(this, (SelectFieldInput.__proto__ || Object.getPrototypeOf(SelectFieldInput)).apply(this, arguments));
    }

    _createClass(SelectFieldInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                label = _props.label,
                data = _props.data;


            return React.createElement(
                SelectField,
                _extends({}, this.props, { floatingLabelStyle: style.label, floatingLabelText: label, value: value }),
                data && data.map(function (item, key) {
                    return React.createElement(MenuItem, { value: item.value, primaryText: item.text, key: key });
                })
            );
        }
    }]);

    return SelectFieldInput;
}(Component), _class.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    data: PropTypes.arrayOf(React.PropTypes.shape({
        value: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired
    }))
}, _class.defaultProps = {
    sizes: ''
}, _temp));

var style = {
    label: {
        fontSize: '1.5em',
        color: '#666'
    }
};

export default SelectFieldInput;