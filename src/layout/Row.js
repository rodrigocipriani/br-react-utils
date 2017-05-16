import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Row extends Component{
    static propTypes = {
        // children: PropTypes.object
    };

    static defaultProps = {
        // children: null
    };

    render(){

        const { children, className, ...reactProps } = this.props;

        const classNameProps = className ? className + ' row' : 'row';

        return <div { ...reactProps} className={classNameProps}>{children}</div>;
    }
}
