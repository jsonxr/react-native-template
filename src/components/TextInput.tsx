import React, { useContext } from 'react';
import {
  TextInput as ReactTextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import ThemeContext from '../themes/ThemeContext';
import Theme from '../themes/Theme';

export const TextInput: React.FC<TextInputProps> = props => {
  const theme = useContext(ThemeContext);
  const styles = createStyle(theme);
  return <ReactTextInput {...props} style={styles.TextInput} />;
};

const createStyle = (theme: Theme) => {
  return StyleSheet.create({
    TextInput: {
      ...theme.TextInput,
    },
  });
};
