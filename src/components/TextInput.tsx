import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const StyledTextInput: React.FC<TextInputProps> = props => (
  <TextInput {...props} />
);

export default StyledTextInput;
