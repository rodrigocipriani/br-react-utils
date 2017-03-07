import React from 'react';

const Link = ({...props, children, href}) => (

    <a {...props} href={(href ? href : 'javascript:void(0)')}>{children}</a>
);

export default Link;
