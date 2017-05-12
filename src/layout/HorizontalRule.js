import React, {Component, PropTypes} from "react";

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
