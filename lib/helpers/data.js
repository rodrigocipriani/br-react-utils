var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import moment from 'moment';

var data = function (_PureComponent) {
    _inherits(data, _PureComponent);

    function data(props) {
        _classCallCheck(this, data);

        return _possibleConstructorReturn(this, (data.__proto__ || Object.getPrototypeOf(data)).call(this, props));
    }

    _createClass(data, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                formato = _props.formato,
                data = _props.data;


            if (!data) return null;

            formato = formato || 'DD/MM/YYYY';

            var resultado = moment(data).format(formato);

            return React.createElement(
                'span',
                null,
                resultado
            );
        }
    }]);

    return data;
}(PureComponent);

export default data;