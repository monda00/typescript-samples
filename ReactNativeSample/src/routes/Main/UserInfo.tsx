import { createStackNavigator } from '@react-navigation/stack';
import { USER_INFO } from '../../constants/path';
import { UserInfo } from '../../components/pages';
import type { RootStackParamList } from '../../types/navigation';
import { HeaderLeft } from '../Header';

const Stack = createStackNavigator<RootStackParamList>();

function UserInfoNavigator() {
  return (
    <Stack.Navigator initialRouteName={USER_INFO}>
      <Stack.Screen
        name={USER_INFO}
        component={UserInfo}
        options={{ headerLeft: () => <HeaderLeft /> }}
      />
    </Stack.Navigator>
  );
}

export default UserInfoNavigator;
