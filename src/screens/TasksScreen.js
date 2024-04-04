import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToDoList from '../components/ToDoList'
import AddToDo from '../components/AddToDo'

const TasksScreen = () => {
  return (
    <View>
      <Text>TasksScreen</Text>
      <ToDoList />
      <AddToDo />
    </View>
  )
}

export default TasksScreen

const styles = StyleSheet.create({})