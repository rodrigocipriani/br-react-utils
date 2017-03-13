import React, {Component, PropTypes} from 'react';


const styles = {
    isFixed: {
        paddingLeft: 300
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
        const {sideMenu, sideMenuTitle, sideMenuHeaderBg, avatarImg, avatarTitle, avatarSubTitle, isFixed, isMenuOpen, children} = this.props;

        const isShowMenu = isMenuOpen && isFixed;

        return (
            <div className={['SideNav', (isShowMenu ? 'container' : '')].join(' ')} style={isShowMenu ? styles.isFixed : {}}>
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
                    </li>
                    <li><h5 style={{paddingLeft: '10px'}}>{sideMenuTitle}</h5></li>
                    <li>
                        {sideMenu}
                    </li>
                </ul>
            </div>
        );
    }
}

SideNav.propTypes = {
    modoApresentacao: PropTypes.bool,
    children: PropTypes.any,
    sideMenu: PropTypes.any,
    sideMenuTitle: PropTypes.string,
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
    sideMenu: null,
    sideMenuHeaderBg: '',
    avatarImg: '',
    avatarTitle: '',
    avatarSubTitle: '',
    isMenuOpen: true,
    isFixed: true
};

export default SideNav;