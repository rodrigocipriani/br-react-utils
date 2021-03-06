import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SelectFieldInput extends Component {

  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })),
  };

  static defaultProps = {
    sizes: '',
  };

  render() {
    const { value, label, data } = this.props;

    return (
      <SelectField { ...this.props } floatingLabelStyle={ style.label } floatingLabelText={ label } value={ value } >
        {data && data.map((item, key) => (
          <MenuItem { ...item } value={ item.value } primaryText={ item.text } key={ key } />
                ))}
      </SelectField>

    );
  }
}

const style = {
  label: {
    fontSize: '1.5em',
    color: '#666',
    left: 0,
  },
};

export default SelectFieldInput;
