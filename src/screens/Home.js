import {StyleSheet, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import AppBar from '../components/AppBar';
import ToDoList from '../components/ToDoList';
import theme from '../assets/themes/theme';
import {ToDoContext} from '../contexts/ToDoContext';

const Home = () => {
  const {getTodosFromFireStore, user} = useContext(ToDoContext);

  useEffect(() => {
    const unsubscribe = getTodosFromFireStore();

    return () => {
      unsubscribe();
    };
  }, [user?.email]);

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
