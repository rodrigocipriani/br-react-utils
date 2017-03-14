import React, {Component, PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// todo : remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

class DefaultTheme extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                {children}
            </MuiThemeProvider>
        );
    }
}

DefaultTheme.propTypes = {
    children: PropTypes.element
};

DefaultTheme.defaultProps = {
    children: null
};

export default DefaultTheme;