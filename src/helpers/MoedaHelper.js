import React, {PureComponent} from 'react';
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

        format = format || '$ 0,0.00';

        let resultado = numeral(value).format(format);

        return (
            <span>{resultado}</span>
        );

    }
}


MoedaHelper.propTypes = {
    value: React.PropTypes.any,
    format: React.PropTypes.string
};

MoedaHelper.defaultProps = {
    value: null,
    format: null
};

export default MoedaHelper;