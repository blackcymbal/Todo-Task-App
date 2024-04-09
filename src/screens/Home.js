import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import AppBar from '../components/AppBar';
import ToDoList from '../components/ToDoList';
import theme from '../assets/themes/theme';
import {ToDoContext} from '../contexts/ToDoContext';
import {useFocusEffect} from '@react-navigation/native';

const Home = () => {
  const {getTodosFromFireStore} = useContext(ToDoContext);



  useFocusEffect(
    React.useCallback(() => {
      getTodosFromFireStore();
    }, []),
  );

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
