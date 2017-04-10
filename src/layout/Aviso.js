import React, { Component } from 'react'

const Aviso = ({children}) => (

    <div className="row">
        <div className="col s12 center-align">
            <br/>
            <span className="flow-text">{children}</span>
        </div>
    </div>
);

export default Aviso;