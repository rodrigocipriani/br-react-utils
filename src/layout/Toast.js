import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';


class Toast extends Component {

    componentDidMount(){
        this.timeout = parseInt(this.props.timeout) || 15000;
    }

    render() {
        return (<Snackbar
          open={!!this.props.msg}
          message={this.props.msg || ''}
          autoHideDuration={this.timeout}
        />
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {

    return {
        msg : state.appReducer.erro,
    }
}

export default connect(mapStateToProps)(Toast);