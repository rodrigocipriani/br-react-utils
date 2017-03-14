import React, { Component } from 'react'


export default class Loading extends Component {

    render() {
        return (
              <div className="progress" style={{margin: 0}}>
                    <div className="indeterminate"></div>
              </div>
        );
    }
}
