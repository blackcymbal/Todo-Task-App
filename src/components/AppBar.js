import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import theme from '../assets/themes/theme';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const AppBar = ({title}) => {
  const navigation = useNavigation();

  const handleDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <LinearGradient colors={[theme.colors.secondary, theme.colors.primary]}>
      <SafeAreaView style={styles.container}>
        <View style={styles.insideContainer}>
          <TouchableOpacity onPress={handleDrawer}>
            <Feather
              name="align-justify"
              size={30}
              color={theme.colors.mintCream}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/person.jpeg')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.primary,
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
    paddingTop: Platform.OS == 'ios' ? 0 : 10 
  },
  title: {fontSize: 20, fontWeight: '500', color: theme.colors.mintCream},
  image: {height: 30, width: 30, borderRadius: 30},
});
