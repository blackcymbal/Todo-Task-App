import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToDoContext} from '../contexts/ToDoContext';

const SocialLogin = () => {
  const navigation = useNavigation();
  const {setUser} = useContext(ToDoContext);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '780722487644-0neddhm6ifkrnsp53vrn0s35mk7jr816.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();

      setUser(user);

      try {
        const jsonValue = JSON.stringify(user);
        await AsyncStorage.setItem('userInfo', jsonValue);
        await AsyncStorage.setItem('idToken', idToken);
      } catch (e) {
        // saving error
      }
      navigation.navigate('DrawerNavigator');
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      alert(error);
    }
  }

  const googleAlphabets = [
    {alphabet: 'G', color: '#0086F9'},
    {alphabet: 'o', color: '#FF4131'},
    {alphabet: 'o', color: '#FEBD00'},
    {alphabet: 'g', color: '#0086F9'},
    {alphabet: 'l', color: '#00AA4A'},
    {alphabet: 'e', color: '#FF4131'},
  ];

  const handleLogin = async () => {
    await onGoogleButtonPress();
  };

  return (
    <TouchableOpacity onPress={handleLogin} style={styles.button}>
      {googleAlphabets.map((data, idx) => (
        <Text key={idx} style={[styles.title, {color: data.color}]}>
          {data.alphabet}
        </Text>
      ))}
    </TouchableOpacity>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 170,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#0086F9',
    marginVertical: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    paddingHorizontal: 1,
  },
});
