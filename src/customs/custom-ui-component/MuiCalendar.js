import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NativeModules, requireNativeComponent, View, Text } from 'react-native';

class MuiCalendar extends Component {

  constructor(props) {
    super(props);
    //this._onChange = this._onChange.bind(this);
  }

  _onChange = (event) => {
    if(!this.props.onDateChange) {
      return;
    }
    this.props.onDateChange(event.nativeEvent);
  }

  render() {
    return <MaterialCalendarView{...this.props} onChange={this._onChange} />;
  }
}

MuiCalendar.propTypes = {
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  onDateChange: PropTypes.func,
  selectionColor: PropTypes.string,
  ...View.propTypes,
}

const MaterialCalendarView = requireNativeComponent(`MaterialCalendarView`, MuiCalendar, {
  nativeOnly: {
    onChange: true,
  },
});

export default MuiCalendar;