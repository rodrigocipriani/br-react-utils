import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Button extends Component{
    static propTypes = {
        children: PropTypes.any
    };

    static defaultProps = {
        children: ''
    };

    render(){

        const {children} = this.props;

        return <button className="waves-effect waves-light btn" {...this.props}>{children}</button>;
    }
}
