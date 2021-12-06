import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Nike from '../data/Nike'
import { useNavigation } from "@react-navigation/native";
import NikeItems from '../components/NikeItems';
const NikeScreen = () => {

    useLayoutEffect(() => {
      navigation.setOptions({
        title: "Men T-shirts",
        headerTintColor: "white",

        gestureEnabled: false,
        headerStyle: {
          backgroundColor: "#0C73EB",
        },
        headerLeft: () => null,
      });
    }, []);
    const navigation = useNavigation();
    const data = Nike;
    return (
       <FlatList numColumns={2} data={data} renderItem={({item}) => <NikeItems data={item}/>}/>
    )
}

export default NikeScreen

const styles = StyleSheet.create({})
