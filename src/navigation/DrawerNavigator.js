import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import TasksScreen from '../screens/TasksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tasks" component={TasksScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
