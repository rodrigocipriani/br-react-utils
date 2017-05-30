import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**

 Props:
 size: small, big

 */
export default class LoadingCircle extends Component {

    static propTypes = {
        size: PropTypes.string
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
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        );
    }
}
