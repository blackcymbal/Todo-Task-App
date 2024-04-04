import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const LoginScreen = ({navigation}) => {

  const handleLogin=()=>{
    navigation.navigate('DrawerNavigator')
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.welcomeText}>Welcome to Todo Task App</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>Login With</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <FontAwesome name="google" size={25} color={'red'} />
          <Text style={{paddingLeft: 5}}>Google</Text>
        </TouchableOpacity>
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
  },
  buttonContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    borderRadius: 10,
    marginVertical: 4,
  },
  welcomeText: {fontSize: 22, fontWeight: '600'},
});
