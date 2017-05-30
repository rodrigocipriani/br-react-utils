import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
var numeral = require('numeral');
var language = require('numeral/locales/pt-br');

numeral.locale('pt-br', language);
numeral.locale('pt-br');


class MoedaHelper extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        let {value, format} = this.props;

        if (!value) return null;

        format = format || '0,0.00';
        // format = format || '$ 0,0.00';

        let resultado = numeral(value).format(format);

        /**
         * todo alterar versão do numaraljs
         * bug: https://github.com/adamwdraper/Numeral-js/issues/451
         *
         * por enquanto nesta versão não está formatando corretamente o R$
         *
         * */
        return (
            <span>R$ {resultado}</span>
        );

    }
}


MoedaHelper.propTypes = {
    value: PropTypes.any,
    format: PropTypes.string
};

MoedaHelper.defaultProps = {
    value: null,
    format: null
};

export default MoedaHelper;
