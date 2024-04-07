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

const ProfileModal = ({showModal, setShowModal}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}>
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => false}>
            <View
              style={{
                backgroundColor: theme.colors.mintCream,
                height: Dimensions.get('screen').height,
                width: Dimensions.get('screen').width*0.7,
              }}></View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
});
