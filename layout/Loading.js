import React, { Component } from 'react'


export class Loading extends Component {

    render() {
        return (
              <div className="progress" style={{margin: 0}}>
                    <div className="indeterminate"></div>
              </div>
        );
    }
}

/**

Props:
size: small, big

*/
export class LoadingCircle extends Component {

    static propTypes = {
        size: React.PropTypes.string
    };

    static defaultProps = {
        size: ''
    };

    render() {
        return (
          <div className={`preloader-wrapper ${this.props.size} active`}>
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        );
    }
}
