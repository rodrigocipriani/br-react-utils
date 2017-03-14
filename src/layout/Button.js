import React, {Component, PropTypes} from "react";

export default class Col extends Component{
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