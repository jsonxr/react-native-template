import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import env from './env';
import { TextInput } from './components';
import ThemeContext, { THEME_DEFAULT } from './themes/ThemeContext';

const App = () => {
  return (
    <ThemeContext.Provider value={THEME_DEFAULT}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.welcome}>Jason to React Native!</Text>
          <Text>{env.API_KEY}</Text>
          <TextInput value="jason" />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
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
