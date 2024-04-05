import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import ToDoList from '../components/ToDoList';

const Home = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View>
      <AppBar title={'Home'} />
      <Text>Home</Text>
      <ToDoList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
