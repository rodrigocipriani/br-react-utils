import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import 'materialize-css/bin/materialize.css';
// import 'materialize-css/bin/materialize.js';

class Painel extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            isOpen: props.isOpen
        };
    }

    componentDidMount() {
        // this._montaCollapsible();
    }

    componentDidUpdate(prevProps, prevState) {
        // this._montaCollapsible();
        if(prevState.isOpen !== this.state.isOpen){
            // chamada forçada par ao resize, pois tem componentes que necessitam se reorganizar
            window.dispatchEvent(new Event('resize'));
        }
    }

    // _montaCollapsible(){
    //     $(document).ready(function () {
    //         $('.collapsible').collapsible();
    //     });
    // }

    _handleHeaderClick = () => {
        // console.log('this.state.isOpen', this.state.isOpen);
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {

        // todo : Fazer animação quando abrir e fechar sem Jquery

        const {header, titulo, children,} = this.props;
        const {isOpen} = this.state;

        const display = isOpen ? 'block' : 'none';

        // console.log('isOpen', isOpen);
        // console.log('display', display);
        return (

            <ul className="collapsible2" data-collapsible="accordion">
                <li>
                    <div onClick={this._handleHeaderClick} className={['collapsible-header', (isOpen && 'active')].join(' ')}>{header ? header : titulo}</div>
                    <div className="collapsible-body white animate" style={{padding: '0px', display: display}}>
                        {children}
                    </div>
                </li>
            </ul>
        );
    }
}

Painel.propTypes = {
    titulo: PropTypes.string,
    header: PropTypes.any,
    children: PropTypes.any,
    isOpen: PropTypes.bool,
};

Painel.defaultProps = {
    titulo: null,
    header: null,
    children: <div></div>,
    isOpen: false
};

export default Painel;
