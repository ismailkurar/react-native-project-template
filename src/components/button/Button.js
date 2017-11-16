import React from 'react';
import { View ,TouchableHighlight } from 'react-native';
import Text, { FONTS } from '../../components/text/Text';

const Button = (props) => {
  let touchableHighlightStyle = {
    width: '100%',
    height: 52
  };

  let innerViewStyle = {
    flex: 1,
    backgroundColor: props.children ? "transparent" : 'rgba(255, 255, 255, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  let textStyle = {
    fontSize: 18, textAlign: 'center'
  };

  touchableHighlightStyle = [touchableHighlightStyle, props.touchableHighlightStyle ? props.touchableHighlightStyle : {}];
  innerViewStyle = [innerViewStyle, props.innerViewStyle ? props.innerViewStyle : {}];
  textStyle = [textStyle, props.textStyle ? props.textStyle : {}];

  return (
    <TouchableHighlight
      style={touchableHighlightStyle}
      underlayColor={props.children ? "transparent" : "rgba(255, 255, 255, 0.2)"}
      activeOpacity={props.children ? 0.5 : 0.2}
      onPress={props.onPress ? props.onPress : () => {}}
      {...props.touchableHighlightProps}
    >
      <View style={innerViewStyle} >
        { props.children ? props.children : <Text style={textStyle}>{props.text}</Text> }
      </View>
    </TouchableHighlight>
  )
};

export default Button;