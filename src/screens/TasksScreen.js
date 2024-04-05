import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ToDoList from '../components/ToDoList';
import AddToDo from '../components/AddToDo';
import AppBar from '../components/AppBar';
import theme from '../assets/themes/theme';


const TasksScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar title={'Tasks'} />
      <AddToDo />
      <ToDoList />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.colors.mintCream},
});
