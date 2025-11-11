import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SIGN_IN, SIGN_UP } from '../../../constants/path';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type ChooseLoginNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CHOOSE_LOGIN'
>;

export default function ChooseLogin() {
  const { navigate } = useNavigation<ChooseLoginNavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Choose Login Page</Text>
      <TouchableOpacity onPress={() => navigate(SIGN_IN)}>
        <Text>Go to Sign In Page</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SIGN_UP)}>
        <Text>Go to Sign Up Page</Text>
      </TouchableOpacity>
    </View>
  );
}
