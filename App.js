import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {auth} from '@react-native-firebase/auth';
import ChatScreen from './screens/chatScreen';
import LoginScreen from './screens/loginScreen';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#202440',
  },
  viewStyle: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#202440',
  },
});

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null);
    });
    // when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.viewStyle}>
        {user ? <ChatScreen /> : <LoginScreen />}
      </View>
    </SafeAreaView>
  );
};

export default App;
