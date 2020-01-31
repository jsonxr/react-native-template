import 'react-native';

import { THEME_DEFAULT, THEME_DARK } from '../ThemeContext';

jest.mock('react-native-appearance', () => ({
  Appearance: {
    getColorScheme: () => 'dark',
  },
}));

// Note: test renderer must be required after react-native.
it('Uses the dark theme if "dark" is set on device', () => {
  expect(THEME_DEFAULT).toEqual(THEME_DARK);
});
