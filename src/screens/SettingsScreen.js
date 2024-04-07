import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AppBar from '../components/AppBar';
import theme from '../assets/themes/theme';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToDoContext } from '../contexts/ToDoContext';
import UserProfile from '../components/UserProfile';


const SettingsScreen = ({navigation}) => {
  const {setUser} = useContext(ToDoContext);
  let userId = '104063193449254549032';

  const todosRef = firestore().collection(`${userId}`);

  const storeData = () => {
    // firestore().collection('users').add({
    //   id: 1,
    //   text: 'a',
    // });
    todosRef.doc('5').set({
      id: '5',
      title: 'Task 5',
      status: true,
    });
  };

  const updateData = () => {
    todosRef
      .doc('5')
      .update({
        title: 'Updated Task Title', // Update the title field to a new value
        status: false, // Update the status field to a new value
      })
      .then(() => {
        console.log('Document updated successfully');
      })
      .catch(error => {
        console.error('Error updating document: ', error);
      });
  };

  const getTodos = () => {
    firestore()
      .collection(`${userId}`) // Replace 'yourCollection' with the name of your collection
      .onSnapshot(querySnapshot => {
        const documents = [];
        querySnapshot.forEach(doc => {
          documents.push({id: doc.id, ...doc.data()});
        });
        console.log(documents);
      });
  };

  const handleLogout = async () => {
    //updateData()
    //getTodos();
    //storeData()
    //getData();


    try {
      await AsyncStorage.removeItem('userInfo')
    } catch(e) {
      // remove error
    }
  
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <AppBar title={'Settings'} />
      <View style={styles.insideContainer}>
        <UserProfile />
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <MaterialIcon size={30} name="logout" />
          <Text style={{marginLeft: 20}}>Logout</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-around',
  },
  button: {flexDirection: 'row', alignItems: 'center', marginVertical: 20},
});
