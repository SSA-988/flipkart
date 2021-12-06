import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from "./StackNavigator"
import { Provider } from "react-redux";
import configureStore from "./store";
import store from "./store"
import { LogBox } from "react-native";
import {AuthProvider} from "./useAuth"

LogBox.ignoreAllLogs();
export default function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
