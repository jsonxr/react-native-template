import 'react-native';
import React from 'react';
import TextInput from '../TextInput';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly with no properties', () => {
  const tree = renderer.create(<TextInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
