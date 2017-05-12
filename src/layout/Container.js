import React, { Component, PropTypes } from "react";

class Container extends Component {
    render() {

        const {children} = this.props;

        return <div {...this.props}>{children}</div>;
    }
}
Container.propTypes = {
    children: React.PropTypes.any,
    sizes   : PropTypes.string
};

Container.defaultProps = {
    children: null,
    sizes   : ''
};

export default Container;
