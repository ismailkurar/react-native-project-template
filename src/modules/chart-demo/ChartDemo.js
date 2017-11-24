import React, { Component } from 'react';
import { View, Platform } from 'react-native';

import Chart from '../../customs/custom-ui-component/IsoChart'

class ChartDemo extends Component {

  render() {
    return (
      <View>
        {
          Platform.OS === 'ios' ?
            <Chart
              style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              drawCenterText={true}
              centerText="İsmail Kurar"
              usePercentValues={false}
              holeRadius={80}
              displayLegends={false}
            /> :
            <Chart
              style={{ width: 300, height: 300, backgroundColor: 'transparent' }}
              centerText="İsmail Kurar"
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
              data={[{ data: 10, color: '#eb9c00' }, { data: 20, color: '#fdb814' }]}
            />
        }

      </View>
    );
  }
}

export default ChartDemo;