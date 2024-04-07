import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useContext, useState}  from 'react'
import { ToDoContext } from '../contexts/ToDoContext';

const UserProfile = () => {
  const {user} = useContext(ToDoContext);

  return (
    <View>
      <Image source={{uri: user?.photo}} style={styles.image} />
      <Text>{user?.givenName  + ' ' + user?.familyName}</Text>
      <Text>Email: {user?.email}</Text>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({image:{
  height: 100, width: 100, borderRadius: 100
}})