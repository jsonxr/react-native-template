import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const StyledTextInput: React.FC<TextInputProps> = props => (
  <TextInput value={Date.now().toString()} {...props} />
);

export default StyledTextInput;
