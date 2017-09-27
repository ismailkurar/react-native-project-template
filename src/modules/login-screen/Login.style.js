import { StyleSheet } from 'react-native';

export default loginStyle = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',

    width: '100%',
    backgroundColor: '#f4f4f4',

    padding: 20
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 150,
    width: '100%',

    marginTop: 20,
  },
  passwordInput: {
    width: '100%',
    height: 50,
    color: 'blue'
  }
});