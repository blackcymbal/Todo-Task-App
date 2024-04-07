import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../assets/themes/theme';
import SocialLogin from '../components/SocialLogin';



const LoginScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.welcomeText}>Welcome to Todo Task App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.loginText}>Continue With</Text>
        <SocialLogin />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 150,
    paddingBottom: 100,
    backgroundColor: theme.colors.mintCream
  },
  buttonContainer: {flex: 1, alignItems: 'center'},
  welcomeText: {fontSize: 22, fontWeight: '700', color: theme.colors.primary},
  loginText: {fontSize: 16, color: theme.colors.font}
});
