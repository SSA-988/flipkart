import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Shoes from '../data/Shoes'
import { useNavigation } from "@react-navigation/native";
import ShoeItem from '../components/ShoeItem';
const ShoeProducts = () => {
     useLayoutEffect(() => {
       navigation.setOptions({
         title: "Men Shoes",
         headerTintColor: "white",

         gestureEnabled: false,
         headerStyle: {
           backgroundColor: "#0C73EB",
         },
         headerLeft: () => null,
       });
     }, []);
     const navigation = useNavigation();
     const data = Shoes;
    return (
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => <ShoeItem data={item} />}
      />
    );
}

export default ShoeProducts

const styles = StyleSheet.create({})
