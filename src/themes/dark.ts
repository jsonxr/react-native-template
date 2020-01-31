import Theme from './Theme';
import { StyleSheet } from 'react-native';

const colors = {
  primary: '#ff0000',
  secondary: '#00ff00',
  tertiary: '#0000ff',
  foreground: '#ffffff',
  background: '#222222',
};

const dark: Theme = {
  name: 'dark',
  colors,
  spacing: {},
  fonts: {},
  TextInput: {
    padding: 10,
    margin: 10,
    color: colors.foreground,
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
};

export default dark;
