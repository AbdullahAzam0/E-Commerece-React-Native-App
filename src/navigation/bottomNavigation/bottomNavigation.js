import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Dashboard from '../../screens/dashboard-screen';
import Favourite from "../../screens/favourite-screen";
import AddToCart from '../../screens/addtocart-screen';
import MyProfile from "../../screens/profile-screen";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size,focused}) => (
            <Icon name="home" size={size} color={focused ? 'red' : 'gray'} /> 
          ),
        }}
        name="Home" component={Dashboard} />

      {/* <Tab.Screen options={{
        headerTitle: 'My Favourite',
        headerTitleAlign: "center",
         tabBarIcon: ({ color, size, focused}) => (
            <Icon name="heart" size={size} color={focused ? 'red' : 'gray'} /> 
          ),
      }} name="Favourite" component={Favourite} />

      <Tab.Screen options={{
        headerTitle: 'My Cart',
        headerTitleAlign: "center",
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name="shopping-cart" size={size} color={focused ? 'red' : 'gray'} />
        ),
      }} name="Cart" component={AddToCart} /> */}

      <Tab.Screen options={{
        headerTitle: 'My Profile',
        headerTitleAlign: "center",
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name="user" size={size} color={focused ? 'red' : 'gray'} /> 
        ),
      }} name="Profile" component={MyProfile} />

    </Tab.Navigator>
  );
}