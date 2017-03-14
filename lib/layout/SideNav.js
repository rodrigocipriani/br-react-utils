import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesRedboxReactLibIndexJs from 'C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\redbox-react\\lib\\index.js';
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs from 'C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-catch-errors\\lib\\index.js';
import _react from 'react';
import _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs from 'C:\\Users\\f8711939\\workspace\\br-react-utils\\node_modules\\react-transform-hmr\\lib\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    SideNav: {
        displayName: 'SideNav'
    }
};

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs({
    filename: 'src/layout/SideNav.js',
    components: _components,
    locals: [module],
    imports: [_react]
});

var _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs2 = _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs({
    filename: 'src/layout/SideNav.js',
    components: _components,
    locals: [],
    imports: [_react, _CUsersF8711939WorkspaceBrReactUtilsNode_modulesRedboxReactLibIndexJs]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformHmrLibIndexJs2(_CUsersF8711939WorkspaceBrReactUtilsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

import React, { Component, PropTypes } from 'react';

var styles = {
    isFixed: {
        paddingLeft: 300
    },
    sideMenuTitle: {
        paddingLeft: '10px',
        color: '#333',
        textShadow: 'rgb(224, 224, 224) 1px 1px 0px'
    }
};

var SideNav = _wrapComponent('SideNav')(function (_Component) {
    _inherits(SideNav, _Component);

    function SideNav(props) {
        _classCallCheck(this, SideNav);

        return _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));
    }

    // componentWillReceiveProps(nextProps){
    //     console.log("forceRecise");
    //     window.dispatchEvent(new Event('resize'));
    // }

    _createClass(SideNav, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            $(".button-collapse").sideNav();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            $(document).ready(function () {
                $(".button-collapse").sideNav();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                sideMenu = _props.sideMenu,
                sideMenuTitle = _props.sideMenuTitle,
                sideMenuHeaderBg = _props.sideMenuHeaderBg,
                avatarImg = _props.avatarImg,
                avatarTitle = _props.avatarTitle,
                avatarSubTitle = _props.avatarSubTitle,
                isFixed = _props.isFixed,
                isMenuOpen = _props.isMenuOpen,
                children = _props.children;


            var isShowMenu = isMenuOpen && isFixed;

            return React.createElement(
                'div',
                { className: ['SideNav', isShowMenu ? 'container' : ''].join(' '),
                    style: isShowMenu ? styles.isFixed : {} },
                children,
                React.createElement(
                    'ul',
                    { id: 'slide-out', className: ['side-nav', isShowMenu ? 'fixed' : ''].join(' ') },
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'div',
                            { className: 'userView' },
                            React.createElement('img', { className: 'background background-cover', src: sideMenuHeaderBg }),
                            React.createElement(
                                'a',
                                { href: '#!user' },
                                React.createElement('img', { className: 'circle', src: avatarImg })
                            ),
                            React.createElement(
                                'a',
                                { href: '#!name' },
                                React.createElement(
                                    'span',
                                    { className: 'white-text name' },
                                    avatarTitle
                                )
                            ),
                            React.createElement(
                                'a',
                                { href: '#!email' },
                                React.createElement(
                                    'span',
                                    { className: 'white-text email' },
                                    avatarSubTitle
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'white' },
                        React.createElement(
                            'a',
                            { style: { fontSize: '1.5em' } },
                            sideMenuTitle
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        sideMenu
                    )
                )
            );
        }
    }]);

    return SideNav;
}(Component));

SideNav.propTypes = {
    modoApresentacao: PropTypes.bool,
    children: PropTypes.any,
    sideMenu: PropTypes.any,
    sideMenuTitle: PropTypes.any,
    sideMenuHeaderBg: PropTypes.string,
    avatarImg: PropTypes.string,
    avatarTitle: PropTypes.string,
    avatarSubTitle: PropTypes.string,
    isMenuOpen: PropTypes.bool,
    isFixed: PropTypes.bool
};

SideNav.defaultProps = {
    modoApresentacao: false,
    children: React.createElement(
        'div',
        null,
        'Carregando...'
    ),
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
//# sourceMappingURL=SideNav.js.map