import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Notifications from "./screens/Notifications";
import Payment from "./screens/Payment";
import Confirmation from "./screens/Confirmation";
import BuyNow from "./screens/BuyNow";
import Fitness from "./screens/Fitness";
import Kitchen from "./screens/Kitchen";
import Mobile from "./screens/Mobile";
import NikeScreen from "./screens/NikeScreen";
import LoginScreen from "./screens/LoginScreen";
import useAuth from "./useAuth";
import ProductDiff from "./screens/ProductDiff";
import WomenShrugs from "./screens/WomenShrugs";
import WesternWear from "./screens/WesternWear";
import ElectronicUse from "./screens/ElectronicUse";
import ShoeProducts from "./screens/ShoeProducts";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Product"
              component={ProductScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Confirmation" component={Confirmation} />
            <Stack.Screen name="BuyNow" component={BuyNow} />
            <Stack.Screen name="Fitness" component={Fitness} />
            <Stack.Screen name="Kitchen" component={Kitchen} />
            <Stack.Screen name="Mobile" component={Mobile} />
            <Stack.Screen name="Nike" component={NikeScreen} />
            <Stack.Screen name="Women" component={WomenShrugs} />
            <Stack.Screen name="Western" component={WesternWear} />
            <Stack.Screen name="Electronic" component={ElectronicUse} />
            <Stack.Screen name="Shoe" component={ShoeProducts} />
            <Stack.Screen
              name="ProductDiff"
              component={ProductDiff}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
