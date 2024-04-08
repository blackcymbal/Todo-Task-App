import {StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';
import React, {useContext} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../assets/themes/theme';
import {ToDoContext} from '../contexts/ToDoContext';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LogoutButton = () => {
  const navigation = useNavigation();
  const {resetToDos} = useContext(ToDoContext);

  const handleLogout = async () => {
    try {
      await auth().signOut();
      if(Platform.OS == 'android'){
        await GoogleSignin.signOut();
      }
      
      await AsyncStorage.removeItem('userInfo');
      resetToDos();
      navigation.navigate('LoginScreen');
    } catch (e) {
      // remove error
      alert(e);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <MaterialIcon size={30} name="logout" color={theme.colors.font} />
      <Text style={styles.title}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 20,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500',
    color: theme.colors.font,
  },
});
