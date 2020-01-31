import React from 'react';
import { TextInput as ReactTextInput, TextInputProps } from 'react-native';

export const TextInput: React.FC<TextInputProps> = props => (
  <ReactTextInput {...props} />
);
