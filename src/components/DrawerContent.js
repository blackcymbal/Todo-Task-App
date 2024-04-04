import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Avatar,
  List,
  Portal,
  Provider,
  Button,
  Modal,
  Divider,
} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import {BASE_URL} from '../../services/apis';
import theme from '../../themes/theme';
import {logout} from '../../stores/actions/userActions';

const routes = [
  {name: 'About', path: 'StudentAbout', icon: 'person', user: 'student'},
  {name: 'About', path: 'MentorAbout', icon: 'person', user: 'mentor'},

  {
    name: 'Apply Abroad',
    path: 'ApplyAbroad',
    icon: 'school',
    user: 'student',
  },
  {name: 'About Us', path: 'Aboutus', icon: 'info'},
  {name: 'Contact Us', path: 'Contactus', icon: 'contact-support'},
  {name: 'Privacy Policy', path: 'PrivacyPolicy', icon: 'privacy-tip'},
  {name: 'Settings', path: 'Settings', icon: 'settings'},
];

const DrawerContent = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  // const {user} = React.useContext(UserContext);

  // Redux
  const dispatch = useDispatch();
  const {loading, error, user} = useSelector(state => state.userDetails);
  // React.useEffect(() => {
  //   dispatch(getUserDetails());
  // }, [dispatch]);

  const showModal = () => {
    navigation.closeDrawer();
    setVisible(true);
  };
  const hideModal = () => setVisible(false);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <View>
      <View style={styles.drawerHeader}>
        {user?.profilePic ? (
          <Avatar.Image
            size={130}
            source={{uri: `${BASE_URL}/${user.profilePic}`}}
          />
        ) : (
          <Avatar.Text
            size={130}
            label={user.name}
            color={theme.colors.primary}
            style={{backgroundColor: '#F8F8F8'}}
          />
        )}
        <Text
          style={{
            color: '#FFFF',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 5,
          }}>
          {user.name}
        </Text>
        <Text style={{color: '#FFFF', fontSize: 14}}>
          {JSON.parse(user.phone).dialCode + JSON.parse(user.phone).phoneNumber}
        </Text>
      </View>

      <ScrollView>
        {routes.map(
          (route, idx) =>
            (route.user === user.userStatus || !route.user) && (
              <TouchableOpacity
                key={idx}
                onPress={() => navigation.navigate(route.path)}>
                <List.Item
                  title={route.name}
                  left={props => (
                    <MaterialIcon {...props} size={30} name={route.icon} />
                  )}
                />
              </TouchableOpacity>
            ),
        )}
        <Divider style={styles.divider} />
        <List.Item
          onPress={showModal}
          title="Logout"
          left={props => <MaterialIcon {...props} size={30} name="logout" />}
        />
        <TouchableOpacity onPress={() => navigation.navigate('DeleteAccount')}>
          <List.Item
            title={'Delete Account'}
            left={props => (
              <Feather {...props} size={30} name={'minus-circle'} />
            )}
          />
        </TouchableOpacity>
      </ScrollView>

      <Portal>
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
      </Portal>
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
  modal: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginLeft: 30,
    marginRight: 30,
    padding: 30,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
    height: 1,
  },
});

export default DrawerContent;