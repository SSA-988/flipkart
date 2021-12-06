import React, { useEffect, useLayoutEffect, useState } from "react";
import { BackHandler, StyleSheet, Text, View, Alert, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";

const Confirmation = () => {
  const navigation = useNavigation();
   const { items, quantity, id } = useSelector(
     (state) => state.cartReducer.selectedItems
   );
   const total = items
     .map((item) => Number(item.price))
     .reduce((prev, curr) => prev + curr, 0);
   const coin = Math.floor(total / 25);
   console.log("😎😎💕",coin);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Confirmation",
      headerTintColor: "white",

      gestureEnabled:false,
      headerStyle: {
        backgroundColor: "#0C73EB",
      },
      headerLeft: () => null,
    });
  }, []);
   const backAction = () => {
     Alert.alert("Hold on!", "Are you sure you want to go back?", [
       {
         text: "Cancel",
         onPress: () => null,
         style: "cancel",
       },
    { text: "YES", onPress: () => BackHandler.exitApp() },
     ]);
     return true;
   };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <Pressable>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Order Placed!
        </Text>
        <Image
          style={{
            width: 80,
            height: 80,
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 25,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUgX_90V6u_O8vAL9SRtFwQmOT7Up8n9zxd83p-TPE6e1ymZZZiKSqGqCMJW3SfZLGM4&usqp=CAU",
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          You will earn{" "}
          <FontAwesome5
            style={{ paddingLeft: 4, paddingRight: 4 }}
            name="coins"
            size={19}
            color="#FFCC99"
          />{" "}
          {coin}coins for this order
        </Text>
      </Pressable>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({});
