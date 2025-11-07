import React from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../App';

interface Props {
  name: string;
}

function Profile({ name }: Props) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={theme.container}>
      <Text style={theme.label}>Profile: {name}</Text>
    </View>
  );
}

export default Profile;
