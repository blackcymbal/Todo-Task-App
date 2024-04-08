import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import theme from '../../assets/themes/theme';

const TaskDetailsModal = ({showModal, setShowModal, data}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}>
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => false}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Task Details</Text>
              <View
                style={{
                  width: Dimensions.get('screen').width * 0.85,
                  paddingHorizontal: 15,
                  paddingBottom: 10
                }}>
                <Text style={styles.subTitle}>Task Title: {data?.name}</Text>
                <Text style={styles.subTitle}>Task Description:</Text>
                <Text style={styles.description}>{data?.description}</Text>
                <Text style={styles.subTitle}>Created At: {data?.date}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TaskDetailsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  innerContainer: {
    //  height: Dimensions.get('screen').height * 0.6,
    width: Dimensions.get('screen').width * 0.85,
    backgroundColor: theme.colors.mintCream,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  title: {color: theme.colors.font, fontSize: 20, fontWeight: '500'},
  subTitle: {
    color: theme.colors.font,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 20,
  },
  description: {
    color: theme.colors.font,
    fontSize: 15,
    fontWeight: '400',
    marginTop: 5,

  }
});
