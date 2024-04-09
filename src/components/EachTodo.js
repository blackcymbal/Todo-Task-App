import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ToDoContext} from '../contexts/ToDoContext';
import theme from '../assets/themes/theme';

const EachTodo = ({item, setData, setModalOpen}) => {
  const {toDos, updateTodo, setCountDone, removeToDo} = useContext(ToDoContext);

  useEffect(() => {
    setCountDone(toDos.filter(item => item.doneStatus === true).length);
  }, [item?.doneStatus, toDos?.length]);

  const handlePress = () => {
    setData(item);
    setModalOpen(true);
  };

  return (
    <TouchableOpacity style={styles.eachTask} onPress={handlePress}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            updateTodo(item?.id, {doneStatus: !item?.doneStatus});
          }}
          style={[
            styles.button2,
            {
              backgroundColor: item?.doneStatus
                ? '#48BB78'
                : theme.colors.mintCream,
            },
          ]}>
          <AntDesign
            size={25}
            name={'check'}
            color={item?.doneStatus ? theme.colors.mintCream : '#48BB78'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => removeToDo(item.id)}>
          <AntDesign size={25} name={'delete'} color={'#A00000'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default EachTodo;

const styles = StyleSheet.create({
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
});
