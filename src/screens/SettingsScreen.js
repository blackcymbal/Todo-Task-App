import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AppBar from '../components/AppBar';
import theme from '../assets/themes/theme';

const SettingsScreen = ({navigation}) => {
  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <AppBar title={'Settings'} />
      <View style={styles.insideContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <MaterialIcon size={30} name="logout" />
          <Text style={{marginLeft: 20}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mintCream
  },
  insideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {flexDirection: 'row', alignItems: 'center', marginVertical: 20},
});
