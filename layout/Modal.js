import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

const styles = {
    close: {
        position: 'relative',
        float: 'right',
        fontSize: '22px',
        marginBottom: '20px',
        cursor: 'pointer',
        marginTop: -10,
        color: 'gray'
    }
}

class Modal extends Component {

    state = {
        open: false
    };

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {

        if (this.props.open != prevProps.open) {

            this.setState({
                open: this.props.open
            })
        }

    }

    handleCloseModal() {

        this.props.onRequestClose();

    }

    createHeader() {
        return (
            <div>
                {this.props.title}
                <span onClick={() => this.handleCloseModal()} style={styles.close}>×</span>
            </div>
        )
    }

    render() {

        const {title, children} = this.props;

        return (


            <Dialog
                title={this.createHeader()}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleCloseModal.bind(this)}>

                {children}
            </Dialog>
        )
    }
}

export default Modal;