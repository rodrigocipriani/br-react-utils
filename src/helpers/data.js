import React, {PureComponent} from 'react'
import moment from 'moment'

class data extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        let {formato, data} = this.props;

        if (!data) return null;

        formato = formato || 'DD/MM/YYYY';

        let resultado = moment(data).format(formato);

        return (
            <span>{resultado}</span>
        );

    }
}

export default data;