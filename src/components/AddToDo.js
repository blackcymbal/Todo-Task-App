import React, {useState, useContext} from 'react';
import {View, TextInput, Button, TouchableOpacity, Text} from 'react-native';
import {ToDoContext} from '../contexts/ToDoContext';

const AddToDo = () => {
  const [text, setText] = useState('');
  const {addToDo} = useContext(ToDoContext);

  const handleAddToDo = () => {
    addToDo({name: text, description: 'This is an important task'});
    setText('');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      <TextInput
        style={{
          flex: 1,
          marginRight: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
        }}
        placeholder="Enter todo"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity
        style={{
          height: 35,
          width: 40,
          borderWidth: 1,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleAddToDo}>
        <Text style={{color: '#505050', fontSize: 14}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToDo;
