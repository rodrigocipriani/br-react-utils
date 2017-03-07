import React from 'react';
import {Link} from 'react-router';

const RouterLink = ({...props, children, href}) => (

    <Link activeClassName='white-text blue darken-1'  className="waves-effect" {...props}>
        {children}
    </Link>
);

const css = {
    fontWeight: 'bolder'
};

export default RouterLink;
