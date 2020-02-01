import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import {
  Provider as PaperProvider,
  //  DarkTheme,
  DefaultTheme,
  Theme,
} from 'react-native-paper';
import SurfaceExample from './SurfaceExample';

const App = () => {
  const [theme] = React.useState<Theme>(DefaultTheme);
  const backgroundColor = theme?.colors?.background;

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        <SurfaceExample />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
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
