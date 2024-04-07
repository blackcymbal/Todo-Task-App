import React, {useState, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import AddTaskModal from './modals/AddTaskModal';
import theme from '../assets/themes/theme';
import Feather from 'react-native-vector-icons/Feather';

const AddToDo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowModal(true)}>
        <Feather size={22} name={'plus'} color={theme.colors.font} />
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>

      <AddTaskModal showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colors.font,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
});
