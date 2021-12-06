import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MobileCovers from '../data/MobileCovers'
import { useNavigation } from "@react-navigation/native";
import MobileItems from '../components/MobileItems';

const Mobile = () => {
    const data = MobileCovers;
    useLayoutEffect(() => {
      navigation.setOptions({
        title: "Mobile Back Covers",
        headerTintColor: "white",

        gestureEnabled: false,
        headerStyle: {
          backgroundColor: "#0C73EB",
        },
        headerLeft: () => null,
      });
    }, []);
    const navigation = useNavigation();
    return (
        <FlatList numColumns={2} data={data} renderItem={({item}) => <MobileItems data={item}/>}/>
    )
}

export default Mobile

const styles = StyleSheet.create({})
