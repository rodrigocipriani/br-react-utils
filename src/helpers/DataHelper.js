import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class DataHelper extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        let {value, format} = this.props;

        if (!value) return null;

        format = format || 'DD/MM/YYYY';

        let resultado = moment(value).format(format);

        return (
            <span>{resultado}</span>
        );

    }
}


DataHelper.propTypes = {
    value: PropTypes.any,
    format: PropTypes.string
};

DataHelper.defaultProps = {
    value: null,
    format: null
};

export default DataHelper;
