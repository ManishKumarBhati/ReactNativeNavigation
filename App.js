import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Third" component={Third} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="StackNav" component={StackNavigator} />
      <Tab.Screen name="Second" component={Second} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="First">
        <Drawer.Screen name="Forth" component={Forth} />
        <Drawer.Screen name="First" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
