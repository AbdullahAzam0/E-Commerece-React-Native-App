import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from "./src/screens/signup-screen";
import Login from "./src/screens/login-screen";
import ForgotPassword from "./src/screens/forgootpassword-screen";
import Dashboard from "./src/screens/dashboard-screen";
import Categorie from "./src/screens/categories-screen";
import Products from "./src/screens/products";
import ProductDetail from "./src/screens/productdetail-screen";
import Favourite from "./src/screens/favourite-screen";
import AddToCart from "./src/screens/addtocart-screen";
import Profile from "./src/screens/profile-screen";
import BottomNavigation from "./src/navigation/bottomNavigation/bottomNavigation";



const Stack = createNativeStackNavigator();

export default function ECommerece() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='E-COMMERECE'>

        <Stack.Screen name="signUp"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="logIn"
          component={Login}
          options={{

            headerShown: false,
          }}
        />
        <Stack.Screen name="forgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="bottomNavigation"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />

        {/* <Stack.Screen name="dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen name="categories"
          component={Categorie}
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerShown: true,

          }}
        />

        <Stack.Screen name="products"
          component={Products}
          options={{
            title: 'Products',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerShown: true,

          }}
        />

        <Stack.Screen name="productdetail"
          component={ProductDetail}
          options={{
            title: 'Product Detail',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerShown: true,

          }}
        />
        <Stack.Screen name="favourite"
          component={Favourite}
          options={{
            title: 'My Wishlist',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerShown: false,

          }}
        />
        <Stack.Screen name="addtocart"
          component={AddToCart}
          options={{
            title: 'My Cart',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerShown: false,

          }}
        />
        <Stack.Screen name="profile"
          component={Profile}
          options={{
            title: 'My Profile',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerShown: true,

          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}