import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = ({navigation}) => {

  const handleLogout = () => {
    navigation.navigate('LoginScreen');

  }

  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <MaterialIcon size={30} name="logout" />
        <Text style={{marginLeft: 20}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {flexDirection: 'row', alignItems: 'center', marginVertical: 20},
});
