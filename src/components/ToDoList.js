import React, {useContext} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import { ToDoContext } from '../contexts/ToDoContext';

const ToDoList = () => {
  const {toDos, removeToDo} = useContext(ToDoContext);

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <Text>{item.text}</Text>
      <Button title="Remove" onPress={() => removeToDo(item.id)} />
    </View>
  );

  return (
    <FlatList
      data={toDos}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
