import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Electronics from "../data/Electronics"
import { useNavigation } from "@react-navigation/native";
import ElectronicItem from '../components/ElectronicItem';

const ElectronicUse = () => {
    useLayoutEffect(() => {
      navigation.setOptions({
        title: "Electronics",
        headerTintColor: "white",

        gestureEnabled: false,
        headerStyle: {
          backgroundColor: "#0C73EB",
        },
        headerLeft: () => null,
      });
    }, []);
    const navigation = useNavigation();
    const data = Electronics;
    return (
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => <ElectronicItem data={item} />}
      />
    );
}

export default ElectronicUse

const styles = StyleSheet.create({})
