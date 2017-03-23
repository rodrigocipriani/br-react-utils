import React, {PureComponent, PropTypes} from "react";
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

export default class Painel extends PureComponent {

    static propTypes = {
        titulo: React.PropTypes.string,
        header: React.PropTypes.any,
        children: React.PropTypes.any,
        isOpen: React.PropTypes.bool,
    };

    static defaultProps = {
        titulo: null,
        header: null,
        children: <div></div>,
        isOpen: false
    };

    componentDidMount() {
        this._montaCollapsible()
    }

    componentDidUpdate(prevProps, prevState) {
        this._montaCollapsible()
    }

    _montaCollapsible(){
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });
    }

    render() {

        const {header, titulo, children, isOpen} = this.props;

        return (

            <ul className="collapsible" data-collapsible="accordion">
                <li>
                    <div className={['collapsible-header', (isOpen && 'active')].join(' ')}>{header ? header : titulo}</div>
                    <div className="collapsible-body white" style={{padding: '0px'}}>
                        {children}
                    </div>
                </li>
            </ul>
        );
    }
}
