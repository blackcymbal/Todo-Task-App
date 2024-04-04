import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import theme from '../assets/themes/theme';

const routes = [
  {name: 'About', path: 'About', icon: 'person', user: 'student'},
  {name: 'Home', path: 'Home', icon: 'school'},
  {name: 'Tasks', path: 'Tasks', icon: 'info'},
  {name: 'Settings', path: 'Settings', icon: 'settings'},
];

const DrawerContent = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    navigation.closeDrawer();
    setVisible(true);
  };
  const hideModal = () => setVisible(false);

  const handleClick = () => {};

  return (
    <View>
      <View style={styles.drawerHeader}>
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 20,
            backgroundColor: 'grey',
          }}></View>
        <Text
          style={{
            color: '#FFFF',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 5,
          }}>
          {'Shohan'}
        </Text>
        <Text style={{color: '#FFFF', fontSize: 14}}>{'01878044600'}</Text>
      </View>

      <ScrollView style={{paddingHorizontal: 10}} >
        {routes.map(
          (route, idx) =>
            !route.user && (
              <TouchableOpacity
                key={idx}
                onPress={() => navigation.navigate(route.path)}
                style={styles.button}
                >
                <MaterialIcon size={30} name={route.icon} />
                <Text style={{marginLeft: 20}}>{route.name}</Text>
              </TouchableOpacity>
            ),
        )}
        <View style={{width: 100, height: 1, backgroundColor: '#000'}}></View>
       
      </ScrollView>

      {/* <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}>
          <Text style={{fontSize: 22, paddingBottom: 10}}>Are you sure ? </Text>
          <Text style={{textAlign: 'justify', paddingBottom: 20}}>
            Are you sure you want to log out from this account. You have to
            login again to use your account.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}>
            <Button mode="outlined" onPress={hideModal}>
              Cancel
            </Button>
            <Button mode="contained" onPress={handleClick}>
              Yes, Logout
            </Button>
          </View>
        </Modal>
      </Portal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: theme.colors.primary,
    margin: 0,
    paddingTop: 30,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
    height: 1,
  },
  button: {flexDirection: 'row', alignItems: 'center', marginVertical: 20}

});

export default DrawerContent;
