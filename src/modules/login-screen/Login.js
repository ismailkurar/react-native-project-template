import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  ActivityIndicator
} from 'react-native';

import loginStyle from './Login.style';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      loading: false
    };
  }
  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleLogin = () => {
    this.setState({ loading: true });

    this.props.login({ password: this.state.password }).then(() => {
      this.setState({ loading: false });

      Actions.home();
    }, (err) => {
      Alert.alert('', 'Login Failed', [{ text: 'Retry' }],  { cancelable: true });
      this.setState({ loading: false });
    })
  };

  render() {
    return (
      <View style={loginStyle.loginContainer}>
        <ActivityIndicator animating={this.state.loading}/>
        <View style={loginStyle.inputContainer}>
          <TextInput
            style={loginStyle.passwordInput}
            secureTextEntry
            autoCorrect={false}
            maxLength={8}
            onChangeText={this.handlePasswordChange}
            placeholder="Enter Password"
          />
          <TouchableHighlight
            activeOpacity={0.5}
            onPress={this.handleLogin}
          >
            <Text>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default Login;