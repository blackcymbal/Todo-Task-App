import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ToDoContext} from '../contexts/ToDoContext';
import theme from '../assets/themes/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ToDoList = () => {
  const {toDos, removeToDo} = useContext(ToDoContext);
  const [done, setDone] = useState(false);

  const renderItem = ({item}) => (
    <View style={styles.eachTask}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.date}>{item.data}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => setDone(!done)}
          style={[
            styles.button2,
            {backgroundColor: done ? '#48BB78' : theme.colors.mintCream},
          ]}>
          <AntDesign
            size={25}
            name={'check'}
            color={done ? theme.colors.mintCream : '#48BB78'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => removeToDo(item.id)}>
          <AntDesign size={25} name={'delete'} color={'#A00000'} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.totalView}>
        <Text style={styles.totalText}>Total Completed Tasks:</Text>
        <Text style={styles.totalText}>1</Text>
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
  eachTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    marginVertical: 4,
  },
  title: {
    color: '#404040',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  date: {color: theme.colors.font, fontSize: 14},
  button: {
    height: 40,
    width: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A00000',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  button2: {
    height: 40,
    width: 40,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#48BB78',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
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
