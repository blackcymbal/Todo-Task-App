import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SocialLogin = () => {
  const navigation = useNavigation();

  const googleAlphabets = [
    {alphabet: 'G', color: '#0086F9'},
    {alphabet: 'o', color: '#FF4131'},
    {alphabet: 'o', color: '#FEBD00'},
    {alphabet: 'g', color: '#0086F9'},
    {alphabet: 'l', color: '#00AA4A'},
    {alphabet: 'e', color: '#FF4131'},
  ];

  const handleLogin = () => {
    navigation.navigate('DrawerNavigator');
  };

  return (
    <TouchableOpacity onPress={handleLogin} style={styles.button}>
      {googleAlphabets.map((data, idx) => (
        <Text key={idx} style={[styles.title, {color: data.color}]}>
          {data.alphabet}
        </Text>
      ))}
    </TouchableOpacity>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 170,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#0086F9',
    marginVertical: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    paddingHorizontal: 1,
  },
});
