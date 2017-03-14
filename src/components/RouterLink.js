import React from 'react';
import {Link} from 'react-router';

const RouterLink = ({...props, children, href}) => (

    <Link activeClassName='light-blue-text text-darken-4 grey lighten-4'  className="waves-effect" {...props}>
        {children}
    </Link>
);

const css = {
    fontWeight: 'bolder'
};

export default RouterLink;
