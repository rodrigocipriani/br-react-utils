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

    componentDidUpdate() {
        $(".button-collapse").sideNav();
    }

    componentDidMount() {
        $(document).ready(function () {
            $(".button-collapse").sideNav();
        });
    }

    render() {
        const {sideMenu, sideMenuTitle, sideMenuHeaderBg, avatarImg, avatarTitle, avatarSubTitle, isFixed, children} = this.props;

        return (
            <div className={['SideNav', (isFixed ? 'container' : '')].join(' ')} style={isFixed ? styles.isFixed : {}}>

                {children}

                <ul id="slide-out" className={['side-nav', (isFixed ? 'fixed' : '')].join(' ')}>
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
    isFixed: true
};

export default SideNav;