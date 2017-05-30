import React, {Component} from "react";
import PropTypes from 'prop-types';

class Link extends Component {

    render() {

        const {children, href} = this.props;

        return (
            <a {...this.props} href={(href ? href : 'javascript:void(0)')}>{children}</a>
        );
    }
}


Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.any
};

Link.defaultProps = {
    href: null,
    children: null
};

export default Link;
