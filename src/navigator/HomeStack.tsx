import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '@screens';
import { homeStackScreens } from '@navigator';

export type HomeStackParams = {
  [homeStackScreens.HOME]: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStack = () => (
  <Stack.Navigator initialRouteName={homeStackScreens.HOME}>
    <Stack.Screen name={homeStackScreens.HOME} component={MainScreen} />
  </Stack.Navigator>
);
