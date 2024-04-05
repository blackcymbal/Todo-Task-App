import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import theme from '../assets/themes/theme';
import Feather from 'react-native-vector-icons/Feather';

const AppBar = ({title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.insideContainer}>
        <TouchableOpacity>
          <Feather name="align-justify" size={30} color="#900" />
        </TouchableOpacity>
        <Text>{title}</Text>
        <TouchableOpacity>
          <Feather name="align-justify" size={30} color="#900" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
});
