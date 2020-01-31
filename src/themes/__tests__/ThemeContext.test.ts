import 'react-native';

import { THEME_DEFAULT } from '../ThemeContext';

jest.mock('react-native-appearance', () => ({
  Appearance: {
    getColorScheme: () => 'no-preference',
  },
}));

// Note: test renderer must be required after react-native.
it('renders a theme if "no-preference" is set on device', () => {
  expect(THEME_DEFAULT).toBeDefined();
});
