import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Statistics } from '../../components/pages';
import { DETAIL, STATISTICS } from '../../constants/path';
import type { RootStackParamList } from '../../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function StatisticsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={STATISTICS} component={Statistics} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}

export default StatisticsNavigator;
