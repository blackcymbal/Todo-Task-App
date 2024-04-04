import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {ToDoProvider} from './src/contexts/ToDoContext';

function App(): React.JSX.Element {
  return (
    <ToDoProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
    </ToDoProvider>
  );
}

export default App;
