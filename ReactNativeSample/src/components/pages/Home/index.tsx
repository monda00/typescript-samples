import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DETAIL } from '../../../constants/path';
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

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'HOME'>;

export default function Home() {
  const { navigate } = useNavigation<HomeNavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>Go to Detail Page</Text>
      </TouchableOpacity>
    </View>
  );
}
