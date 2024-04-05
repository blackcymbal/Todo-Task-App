import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import ToDoList from '../components/ToDoList';
import theme from '../assets/themes/theme';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppBar title={'Home'} />
      <ToDoList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.colors.mintCream},
});
