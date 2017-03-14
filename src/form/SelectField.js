import React, {Component, PropTypes} from "react";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SelectFieldInput extends Component{

    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string,
        data: PropTypes.arrayOf(React.PropTypes.shape({
            value: React.PropTypes.number.isRequired,
            text: React.PropTypes.string.isRequired,
        }))
    };

    static defaultProps = {
        sizes: ''
    };

    render(){

        const {value, label, data} = this.props;

        return (
            <SelectField {...this.props} floatingLabelStyle={style.label} floatingLabelText={label} value={value} >
                {data && data.map((item, key) => (
                    <MenuItem value={item.value} primaryText={item.text} key={key} />
                ))}
            </SelectField>

        );
    }
}

const style = {
    label: {
        fontSize: '1.5em',
        color: '#666',
    }
};

export default SelectFieldInput;
