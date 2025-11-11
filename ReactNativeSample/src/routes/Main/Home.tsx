import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Home } from '../../components/pages';
import { DETAIL, HOME } from '../../constants/path';
import type { RootStackParamList } from '../../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
