import React, {Component, PropTypes} from "react";

class Link extends Component {

    render() {

        const {children, href} = this.props;

        return (
            <a {...this.props} href={(href ? href : 'javascript:void(0)')}>{children}</a>
        );
    }
}


Link.propTypes = {
    href: React.PropTypes.string,
    children: React.PropTypes.any
};

Link.defaultProps = {
    href: null,
    children: null
};

export default Link;
