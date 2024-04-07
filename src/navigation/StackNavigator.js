import {View, StyleSheet} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';
import {ToDoContext} from '../contexts/ToDoContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';

const Stack = createStackNavigator();

function StackNavigator() {
  const {setUser, user} = useContext(ToDoContext);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userInfo');
      if (jsonValue != null) {
        setLoggedIn(true);
        setUser(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <View style={styles.container}>
      <Loader />
    </View>
  ) : (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={loggedIn ? 'DrawerNavigator' : 'LoginScreen'}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default StackNavigator;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
