import 'react-native';

// Need this so the app will render
jest.mock('react-native-appearance', () => ({
  Appearance: {
    getColorScheme: () => 'no-preference',
  },
}));
