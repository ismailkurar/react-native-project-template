import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  handleClick = () => {
    this.props.getMockData();
  };

  render() {
    return (
      <View>
        <Button
          onPress={this.handleClick}
          title="Get Dummy Data"
          color="#841584"
        />
        {
          this.props.dummyData && <Text>
            {JSON.stringify(this.props.dummyData)}
          </Text>
        }
      </View>
    );
  }
}

export default Home;