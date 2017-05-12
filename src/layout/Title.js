import React, {Component, PropTypes} from "react";

class Title extends Component{

    render(){

        const {children, priority} = this.props;

        switch (priority) {
            case 1:
                return <h1>{children}</h1>;
                break;
            case 2:
                return <h2>{children}</h2>;
                break;
            case 3:
                return <h3>{children}</h3>;
                break;
            case 4:
                return <h4>{children}</h4>;
                break;
            case 5:
                return <h5>{children}</h5>;
                break;
            case 6:
                return <h6>{children}</h6>;
                break;
            default:
                return <h3>{children}</h3>;
                break;
        }

    }
}

Title.propTypes = {
    priority: PropTypes.number
};

Title.defaultProps = {
    priority: 3
};

export default Title;
