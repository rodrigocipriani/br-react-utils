import React, {Component, PropTypes} from 'react';


const styles = {
    isFixed: {
        paddingLeft: 300
    },
    sideMenuTitle: {
        paddingLeft: '10px',
        color: '#333',
        textShadow: 'rgb(224, 224, 224) 1px 1px 0px'
    }
};

class SideNav extends Component {

    constructor(props) {
        super(props);
    }

    // componentWillReceiveProps(nextProps){
    //     console.log("forceRecise");
    //     window.dispatchEvent(new Event('resize'));
    // }

    componentDidUpdate() {
        $(".button-collapse").sideNav();
    }

    componentDidMount() {
        $(document).ready(function () {
            $(".button-collapse").sideNav();
        });
    }

    render() {
        const {sideMenu, sideMenuTitle, sideMenuHeaderBg, avatarImg, avatarTitle, avatarSubTitle, isFixed, isMenuOpen, children, sideMenuFooter} = this.props;

        const isShowMenu = isMenuOpen && isFixed;

        return (
            <div className={['SideNav', (isShowMenu ? 'container' : '')].join(' ')}
                 style={isShowMenu ? styles.isFixed : {}}>
                {/*<a href="#" data-activates="slide-out" className="button-collapse waves-effect waves-light btn">Menu</a>*/}
                {children}

                <ul id="slide-out" className={['side-nav', (isShowMenu ? 'fixed' : '')].join(' ')}>
                    <li>
                        <div className="userView">
                            <img className="background background-cover" src={sideMenuHeaderBg}/>
                            <a href="#!user">
                                <img className="circle" src={avatarImg}/>
                            </a>
                            <a href="#!name"><span className="white-text name">{avatarTitle}</span></a>
                            <a href="#!email"><span className="white-text email">{avatarSubTitle}</span></a>
                        </div>
                        <div style={{position: 'absolute', bottom: 50, width: '100%'}}>
                            <div style={{width: '100%', textAlign: 'right'}}>{sideMenuFooter}</div>
                        </div>
                    </li>
                    <li className="white"><a style={{fontSize: '1.5em'}}>{sideMenuTitle}</a></li>
                    <li>
                        {sideMenu}
                    </li>
                </ul>

            </div>
        );
    }
}

SideNav.propTypes = {
    children: PropTypes.any,
    sideMenu: PropTypes.any,
    sideMenuTitle: PropTypes.any,
    sideMenuFooter: PropTypes.any,
    sideMenuHeaderBg: PropTypes.string,
    avatarImg: PropTypes.string,
    avatarTitle: PropTypes.string,
    avatarSubTitle: PropTypes.string,
    isMenuOpen: PropTypes.bool,
    isFixed: PropTypes.bool
};

SideNav.defaultProps = {
    modoApresentacao: false,
    children: <div>Carregando...</div>,
    sideMenuTitle: '',
    sideMenuFooter: null,
    sideMenu: null,
    sideMenuHeaderBg: '',
    avatarImg: '',
    avatarTitle: '',
    avatarSubTitle: '',
    isMenuOpen: true,
    isFixed: true
};

export default SideNav;