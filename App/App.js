import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './Screens/TabNavigator';

function App() 
{
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;