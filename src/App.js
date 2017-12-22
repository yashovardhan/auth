import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyC7_d5Cn3UDmKsckJjQKyFu8qDv6jt66IM',
    authDomain: 'auth-f5efa.firebaseapp.com',
    databaseURL: 'https://auth-f5efa.firebaseio.com',
    projectId: 'auth-f5efa',
    storageBucket: 'auth-f5efa.appspot.com',
    messagingSenderId: '55124786790'
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
