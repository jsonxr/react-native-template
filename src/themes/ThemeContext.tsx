import React, { createContext } from 'react';
import { Appearance } from 'react-native-appearance';
import Theme from './Theme';
import THEME_LIGHT from './light';
import THEME_DARK from './dark';

const themes = new Map<string, any>();
themes.set(THEME_LIGHT.name, THEME_LIGHT);
themes.set(THEME_DARK.name, THEME_DARK);

// Get the default theme
const colorScheme = Appearance.getColorScheme(); // no-preference,light,dark
let THEME_DEFAULT = themes.get(colorScheme);
if (!THEME_DEFAULT) {
  THEME_DEFAULT = THEME_LIGHT;
}
const ThemeContext: React.Context<Theme> = createContext(THEME_DEFAULT);

export {
  ThemeContext as default,
  themes,
  THEME_DEFAULT,
  THEME_LIGHT,
  THEME_DARK,
};
