import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Shrugs from '../data/Shrugs';
import { useNavigation } from "@react-navigation/native";
import WomenItem from '../components/WomenItem';

const WomenShrugs = () => {
    const navigation = useNavigation();
    const data = Shrugs;
    useLayoutEffect(() => {
      navigation.setOptions({
        title: "Women Shrugs",
        headerTintColor: "white",

        gestureEnabled: false,
        headerStyle: {
          backgroundColor: "#0C73EB",
        },
        headerLeft: () => null,
      });
    }, []);
    return (
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => <WomenItem data={item} />}
      />
    );
}

export default WomenShrugs

const styles = StyleSheet.create({})
