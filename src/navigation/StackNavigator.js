import {View, StyleSheet} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';
import {ToDoContext} from '../contexts/ToDoContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

function StackNavigator() {
  const {setUser, user} = useContext(ToDoContext);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '780722487644-0neddhm6ifkrnsp53vrn0s35mk7jr816.apps.googleusercontent.com',
    });
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userInfo');
      const idToken = await AsyncStorage.getItem('idToken');
      if (jsonValue != null) {
        setLoggedIn(true);
        setUser(JSON.parse(jsonValue));
      }

      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      setLoading(false);

      // return auth().signInWithCredential(googleCredential);
    } catch (e) {
      console.log(e);
    }
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
