import React, {Component, PropTypes} from "react";

class Card extends Component{
    static propTypes = {
        children: React.PropTypes.any,
        className: PropTypes.string,
        title: PropTypes.string,
        actions: PropTypes.any
    };

    static defaultProps = {
        children: null,
        className: '',
        title: '',
        actions: ''
    };

    render(){

        const {children, className, title, actions} = this.props;

        return (
            <div className={['card', className].join(' ')}>
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    {children}
                </div>
                <div className="card-action">
                    {actions}
                </div>
            </div>
        );
    }
}

export default Card;