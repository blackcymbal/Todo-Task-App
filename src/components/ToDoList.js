import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ToDoContext} from '../contexts/ToDoContext';
import theme from '../assets/themes/theme';
import EachTodo from './EachTodo';

const ToDoList = () => {
  const {toDos, updateTodo, countDone, removeToDo} = useContext(ToDoContext);
  
  const renderItem =({item}) => (
    <EachTodo item={item} />
  )
  return (
    <View style={styles.container}>
      <View style={styles.totalView}>
        <Text style={styles.totalText}>Total Completed Tasks:</Text>
        <Text style={styles.totalText}>{countDone}</Text>
      </View>
      <FlatList
        data={toDos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {backgroundColor: theme.colors.mintCream, paddingHorizontal: 10},
  totalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    // Shadow styles for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Shadow styles for Android
    elevation: 5,
  },
  totalText: {color: '#000', fontSize: 16, fontWeight: '500'},
});
