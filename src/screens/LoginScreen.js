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
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 16}}>Continue With</Text>
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
    backgroundColor: theme.colors.mintCream
  },
  buttonContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  welcomeText: {fontSize: 22, fontWeight: '700', color: theme.colors.primary},
});
