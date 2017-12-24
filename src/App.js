import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD7RzKHmWhuIsqE_gmFrngnIXpLYnQ4Dgw',
      authDomain: 'authentication-89a0a.firebaseapp.com',
      databaseURL: 'https://authentication-89a0a.firebaseio.com',
      projectId: 'authentication-89a0a',
      storageBucket: 'authentication-89a0a.appspot.com',
      messagingSenderId: '177817811550'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
