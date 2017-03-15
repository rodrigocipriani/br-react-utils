var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import moment from 'moment';

var DataHelper = function (_PureComponent) {
    _inherits(DataHelper, _PureComponent);

    function DataHelper(props) {
        _classCallCheck(this, DataHelper);

        return _possibleConstructorReturn(this, (DataHelper.__proto__ || Object.getPrototypeOf(DataHelper)).call(this, props));
    }

    _createClass(DataHelper, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                format = _props.format;


            if (!value) return null;

            format = format || 'DD/MM/YYYY';

            var resultado = moment(value).format(format);

            return React.createElement(
                'span',
                null,
                resultado
            );
        }
    }]);

    return DataHelper;
}(PureComponent);

DataHelper.propTypes = {
    value: React.PropTypes.any,
    format: React.PropTypes.string
};

DataHelper.defaultProps = {
    value: null,
    format: null
};

export default DataHelper;
//# sourceMappingURL=DataHelper.js.map