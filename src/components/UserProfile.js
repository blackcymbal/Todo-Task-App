import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import {ToDoContext} from '../contexts/ToDoContext';

const UserProfile = ({textColor = '#000'}) => {
  const {user} = useContext(ToDoContext);

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{uri: user?.photo}} style={styles.image} />
      </View>

      <Text style={[styles.text, {color: textColor}]}>
        {user?.givenName + ' ' + user?.familyName}
      </Text>
      <Text style={[styles.text, {color: textColor}]}>
        Email: {user?.email}
      </Text>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  imageContainer: {alignItems: 'center', paddingVertical: 20},
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  text: {fontSize: 16, fontWeight: '400', paddingVertical: 3},
});
