import 'react-native';

import { THEME_LIGHT, THEME_DEFAULT } from '../ThemeContext';

jest.mock('react-native-appearance', () => ({
  Appearance: {
    getColorScheme: () => 'light',
  },
}));

// Note: test renderer must be required after react-native.
it('Uses the light theme if "light" is set on device', () => {
  expect(THEME_DEFAULT).toEqual(THEME_LIGHT);
});
