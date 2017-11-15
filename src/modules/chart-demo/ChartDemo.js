import React, { Component } from 'react';
import { View } from 'react-native';

import Chart from '../../customs/custom-ui-component/IsoChart'

class Home extends Component {

  render() {
    return (
      <View>
        <Chart
          style={{width: 300, height: 300, backgroundColor: 'transparent' }}
         /* centerText="İsmail Kurar"
          centerTextColor="#fdb814"
          centerTextSize={20}
          drawCenterText={true}
          drawHoleEnabled={true}
          holeColor="transparent"
          holeRadius={80}
          usePercentValues={false}
          highlightPerTapEnabled
          rotationEnabled={false}
          drawEntryLabels={false}
          displayLegends={false}
          drawValues={false}
          data={[{data: 10, color: '#eb9c00'}, {data: 20, color: '#fdb814'}]}*/
        />
      </View>
    );
  }
}

export default Home;