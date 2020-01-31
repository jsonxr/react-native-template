import Theme from './Theme';

const colors = {
  primary: '#ff0000',
  secondary: '#00ff00',
  tertiary: '#0000ff',
  foreground: '#000000',
  background: '#eeeeee',
};

const light: Theme = {
  name: 'light',
  colors,
  spacing: {},
  fonts: {},
  TextInput: {
    padding: 5,
    margin: 5,
    color: colors.foreground,
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
};

export default light;
