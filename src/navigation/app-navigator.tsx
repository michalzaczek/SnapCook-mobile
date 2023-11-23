import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home-screen';
import { IngredientsScreen } from '../screens/ingredients-screen';

export function AppNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Ingredients' component={IngredientsScreen} />
    </Tab.Navigator>
  );
}
