import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import AddTaskModal from './modals/AddTaskModal';
import theme from '../assets/themes/theme';
import Feather from 'react-native-vector-icons/Feather';

const AddToDo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      <View
        style={{
          alignItems: 'center',
          width: Dimensions.get('screen').width,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 5
          }}
          onPress={() => setShowModal(true)}>
          <Feather size={22} name={'plus'} color={theme.colors.font} />
          <Text
            style={{
              color: theme.colors.font,
              fontSize: 16,
              fontWeight: '500',
              marginLeft: 10,
            }}>
            Add Task
          </Text>
        </TouchableOpacity>
      </View>

      <AddTaskModal showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
};

export default AddToDo;
