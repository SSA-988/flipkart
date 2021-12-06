import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Western from "../data/Western"
import { useNavigation } from "@react-navigation/native";
import WesternItem from "../components/WesternItem";
const WesternWear = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Western Wear",
      headerTintColor: "white",

      gestureEnabled: false,
      headerStyle: {
        backgroundColor: "#0C73EB",
      },
      headerLeft: () => null,
    });
  }, []);
  const navigation = useNavigation();
  const data = Western;
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({ item }) => <WesternItem data={item} />}
    />
  );
};

export default WesternWear;

const styles = StyleSheet.create({});
