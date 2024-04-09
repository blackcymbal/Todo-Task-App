import {StyleSheet, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import AppBar from '../components/AppBar';
import ToDoList from '../components/ToDoList';
import theme from '../assets/themes/theme';
import {ToDoContext} from '../contexts/ToDoContext';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const {getTodosFromFireStore, user} = useContext(ToDoContext);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = getTodosFromFireStore();

      return () => {
        unsubscribe();
      };
    }, []),
  );

  // useEffect(() => {
  //   return () => {
  //     firestore().collection(`${user?.id}`).unsubscribe();
  //   };
  // }, []);

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
