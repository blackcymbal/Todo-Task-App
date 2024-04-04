import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {ToDoProvider} from './src/contexts/ToDoContext';

function App(): React.JSX.Element {
  return (
    <ToDoProvider>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ToDoProvider>
  );
}

export default App;
