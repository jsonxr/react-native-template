import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import env from './env';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.welcome}>Jason to React Native!</Text>
          <Text>{env.API_KEY}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
