import React, { Component } from "react";
import PropTypes from 'prop-types';

class Container extends Component {
    render() {

        const {children} = this.props;

        return <div {...this.props}>{children}</div>;
    }
}
Container.propTypes = {
    children: PropTypes.any,
    sizes   : PropTypes.string
};

Container.defaultProps = {
    children: null,
    sizes   : ''
};

export default Container;
