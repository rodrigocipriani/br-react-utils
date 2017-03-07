import React, {Component} from 'react';
import {STATIC_SERVER_URL} from 'config';

class ExternalUrlOpen extends Component {

    static propTypes = {
        url: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        url: ""
    };

    state = {
        height: '500px'
    };

    wait = false;
    elementoPai = 'document';
    altura = null;

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.url !== nextProps.url
            || this.state.height !== nextState.height;
    }

    componentDidMount() {
        console.log('fdsa ');

        this.redimenciona();
        let me = this;

        $(window).addEventListener("resize", e => {
            console.log(e);
        });
        $(window).resize(function () {
            console.log(e);
        });

        // $(window).resize(function() {
        //     if (!this.wait) {
        //         me.redimenciona();
        //         me.wait = true;
        //     }
        // });

    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.redimenciona);
    }

    redimenciona(e) {
        console.log('rodrigo ');


        let bodyHeight = $(this.elementoPai).outerHeight();

        let altura = '0px';
        if (this.altura) {
            altura = this.altura + 'px';
        } else {

            // let footerHeight = $("footer").outerHeight();
            let footerHeight = 0;
            let descontoAltura = 0;
            this.elementosDescontarTamanho.forEach(elemento => {
                descontoAltura = descontoAltura + $(elemento).outerHeight();
            });
            // let navbarPrimaryHeight = $('.navbar_primary').outerHeight();
            // let navbarSecondaryHeight = $('.navbar_secondary').outerHeight();

            // console.log(bodyHeight + " - " + footerHeight + " - " + navbar_primaryHeight + " - " + navbar_secondaryHeight);

            let temp = 0;

            altura = bodyHeight - (footerHeight + descontoAltura + temp) + 'px';
        }
console.log(altura);
        this.setState({height: altura});
        // $('#pageContainerObject').css('height', altura);
        this.wait = false;

    }

    render() {

        let {url} = this.props;
        let {height} = this.state;

        return (
            <iframe style={{width: '100%', height: height}}
                    src={url}
                    type="text/html">
                <p>Página não encontrada</p>
            </iframe>
        );
    }
}

export default ExternalUrlOpen;
