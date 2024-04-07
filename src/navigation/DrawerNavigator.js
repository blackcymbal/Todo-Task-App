import {View, StyleSheet} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import TasksScreen from '../screens/TasksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerContent from '../components/DrawerContent';
import {ToDoContext} from '../contexts/ToDoContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const [loading, setLoading] = useState(true);
  const {setUser, user} = useContext(ToDoContext);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userInfo');
      setUser(JSON.parse(jsonValue));
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user != null) {
      setLoading(false);
    } else {
      getData();
    }
  }, []);

  return loading ? (
    <View style={styles.container}>
      <Loader />
    </View>
  ) : (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tasks" component={TasksScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
