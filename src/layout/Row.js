import React, {Component, PropTypes} from "react";

export default class Row extends Component{
    static propTypes = {
        // children: PropTypes.object
    };

    static defaultProps = {
        // children: null
    };

    render(){

        const { children, className, ...reactProps } = this.props;

        return <div { ...reactProps} className={'row ' + className}>{children}</div>;
    }
}