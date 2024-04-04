import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
