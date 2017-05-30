import React, {Component} from "react";
import PropTypes from 'prop-types';

class HorizontalRule extends Component{

    render(){

        const {children, className, title, actions} = this.props;

        return (
            <hr />
        );
    }
}

HorizontalRule.propTypes = {
};

HorizontalRule.defaultProps = {
};

export default HorizontalRule;
