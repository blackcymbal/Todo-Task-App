import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import theme from '../assets/themes/theme';
import UserProfile from '../components/UserProfile';
import LogoutButton from '../components/LogoutButton';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar title={'Settings'} />
      <View style={styles.insideContainer}>
        <UserProfile />
        <LogoutButton />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mintCream,
  },
  insideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 70,
  },
});
