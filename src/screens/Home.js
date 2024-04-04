import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ToDoList from '../components/ToDoList';

const Home = ({navigation}) => {
    
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View>
      <Text>Home</Text>
      <ToDoList />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
