import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/navigation';
import { DETAIL } from '../../../constants/path';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type StatisticsProps = StackNavigationProp<RootStackParamList, 'STATISTICS'>;

export default function Statistics() {
  const { navigate } = useNavigation<StatisticsProps>();

  return (
    <View style={styles.container}>
      <Text>Statistics Page</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>Go to Detail Page</Text>
      </TouchableOpacity>
    </View>
  );
}
