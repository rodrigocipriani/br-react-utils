import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Col extends Component{
    static propTypes = {
        children: React.PropTypes.any,
        sizes: PropTypes.string
    };

    static defaultProps = {
        children: null,
        sizes: ''
    };

    render(){

        const {children, sizes} = this.props;

        return <div className={['col', sizes].join(' ')}>{children}</div>;
    }
}
