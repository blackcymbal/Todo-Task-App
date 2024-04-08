import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../assets/themes/theme';
import UserProfile from './UserProfile';

const routes = [
  {name: 'About', path: 'About', icon: 'home', user: 'student'},
  {name: 'Home', path: 'Home', icon: 'home'},
  {name: 'Tasks', path: 'Tasks', icon: 'list'},
  {name: 'Settings', path: 'Settings', icon: 'settings'},
];

const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.drawerHeader}>
        <UserProfile textColor={theme.colors.mintCream} />
      </View>

      <View style={{paddingHorizontal: 10, paddingLeft: 20}}>
        {routes.map(
          (route, idx) =>
            !route.user && (
              <TouchableOpacity
                key={idx}
                onPress={() => navigation.navigate(route.path)}
                style={styles.button}>
                <Feather
                  size={30}
                  name={route.icon}
                  color={theme.colors.font}
                />
                <Text
                  style={{
                    marginLeft: 20,
                    color: theme.colors.font,
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  {route.name}
                </Text>
              </TouchableOpacity>
            ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
  button: {flexDirection: 'row', alignItems: 'center', marginVertical: 20},
});

export default DrawerContent;
