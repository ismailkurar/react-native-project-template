import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  loadingImageContainer: {
    width: 150, height: 150, alignItems: 'center', justifyContent: 'center'
  }
});