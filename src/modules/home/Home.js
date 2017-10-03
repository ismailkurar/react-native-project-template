import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';

import CustomModule from '../../customs/custom-module/CustomModule'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customModuleData: null
    };
  }

  handleClick = () => {
    this.props.getMockData();

    CustomModule.getModuleList((data) => {
      this.setState({  customModuleData: data });
    });
  };

  render() {
    return (
      <View>
        <Button
          onPress={this.handleClick}
          title="Get Dummy Data"
          color="#841584"
        />
        <Text style={{ color: 'red', fontSize: 18 }}>Data come from service</Text>
        {
          this.props.dummyData && <Text>
            {JSON.stringify(this.props.dummyData)}
          </Text>
        }
        <Text style={{ color: 'red', fontSize: 18 }}>Data come from native</Text>
        {
          this.state.customModuleData && this.state.customModuleData.map((module) => (
            <Text>{module}</Text>
          ))
        }
      </View>
    );
  }
}

export default Home;