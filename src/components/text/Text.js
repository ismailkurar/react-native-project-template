import React from 'react';
import { Text } from 'react-native';

export const FONTS = {
  THIN: '100',
  ULTRA_LIGHT: '200',
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  SEMI_BOLD: '600',
  BOLD: '700',
  HEAVY: '800',
  BLACK: '900'
};

class CustomText extends React.Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  };

  render() {
    const { style, children, ...others } = this.props || {};
    const defaultStyle = {
      fontSize: 16,
      fontWeight: FONTS.REGULAR,
      color: 'black',
      backgroundColor: 'transparent',
      width: '100%'
    };

    return (
      <Text
        ref={component => this._root = component}
        style={[defaultStyle, style]}
        {...others}
      >
        {children}
      </Text>
    )
  }
}

export default CustomText;