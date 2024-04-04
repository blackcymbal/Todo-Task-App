import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { ToDoContext } from '../contexts/ToDoContext';

const AddToDo = () => {
  const [text, setText] = useState('');
  const { addToDo } = useContext(ToDoContext);

  const handleAddToDo = () => {
    addToDo(text);
    setText('');
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
      <TextInput
        style={{ flex: 1, marginRight: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 }}
        placeholder="Enter todo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAddToDo} />
    </View>
  );
};

export default AddToDo;
