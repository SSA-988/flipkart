import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import KitchenItems from "../data/KitchenItems";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import KitchenEssentials from "../components/KitchenEssentials";

const Kitchen = () => {
  const data = KitchenItems;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Kitchen",
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
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({ item }) => <KitchenEssentials data={item} />}
    />
  );
};

export default Kitchen;

const styles = StyleSheet.create({});
