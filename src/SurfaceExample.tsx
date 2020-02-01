import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Surface, withTheme, Theme } from 'react-native-paper';
import env from './env';

const range = (a: number, b?: number) => {
  if (!b) {
    b = a;
    a = 0;
  }
  let arr = [];
  for (let i = 0; i < b - a; i++) {
    arr[i] = i + a;
  }
  return arr;
};

type Props = {
  theme: Theme;
};
const SurfaceExample = (props: Props) => {
  let backgroundColor = props.theme?.colors?.background;
  return (
    <ScrollView
      style={[styles.scrollview, { backgroundColor }]}
      contentContainerStyle={styles.container}>
      <>
        <Surface key={0} style={[styles.surface, { elevation: 0 }]}>
          <Text>{env.API_KEY}</Text>
        </Surface>
        {range(1, 24).map((i: number) => {
          return (
            <Surface key={i} style={[styles.surface, { elevation: i }]}>
              <Text>{i}</Text>
            </Surface>
          );
        })}
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'red',
  },
  box: {
    flex: 0,
    margin: 5,
    backgroundColor: 'blue',
    width: 40,
    height: 40,
  },

  scrollview: {},
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  surface: {
    flex: 0,
    margin: 15,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(SurfaceExample);
