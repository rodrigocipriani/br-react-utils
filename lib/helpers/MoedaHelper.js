var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
var numeral = require('numeral');
var language = require('numeral/locales/pt-br');

numeral.locale('pt-br', language);
numeral.locale('pt-br');

var MoedaHelper = function (_PureComponent) {
    _inherits(MoedaHelper, _PureComponent);

    function MoedaHelper(props) {
        _classCallCheck(this, MoedaHelper);

        return _possibleConstructorReturn(this, (MoedaHelper.__proto__ || Object.getPrototypeOf(MoedaHelper)).call(this, props));
    }

    _createClass(MoedaHelper, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                format = _props.format;


            if (!value) return null;

            format = format || '0,0.00';
            // format = format || '$ 0,0.00';

            var resultado = numeral(value).format(format);

            /**
             * todo alterar versão do numaraljs
             * bug: https://github.com/adamwdraper/Numeral-js/issues/451
             *
             * por enquanto nesta versão não está formatando corretamente o R$
             *
             * */
            return React.createElement(
                'span',
                null,
                'R$ ',
                resultado
            );
        }
    }]);

    return MoedaHelper;
}(PureComponent);

MoedaHelper.propTypes = {
    value: PropTypes.any,
    format: PropTypes.string
};

MoedaHelper.defaultProps = {
    value: null,
    format: null
};

export default MoedaHelper;
//# sourceMappingURL=MoedaHelper.js.map