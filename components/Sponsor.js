import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Sponsor = (props) => {
  const data = props.data;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Product", {
          id: data.id,
          name: data.name,
          offer: data.offer,
          price: data.price,
          rating: data.rating,
          image: data.image,
          number: data.number,
          op: data.op,
          reviews: data.reviews,
          brand: data.brand,
          carouselImages: data.carouselImages,
        })
      }
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <Image
        style={{
          width: 200,
          height: 220,
          marginLeft: 20,
          marginTop: 14,
        }}
        source={{
          uri: data.image,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: 4,
          color: "white",
          textAlign: "center",
        }}
      >
        {data.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textDecorationLine: "line-through",
            paddingHorizontal: 3,
            color: "white",
          }}
        >
          {data.op}
        </Text>
        <Text style={{ paddingHorizontal: 3, color: "white" }}>
          {"₹"}
          {data.price}
        </Text>
        <Text style={{ color: "#bfff00" }}>
          {data.offer}
          {"%Off"}
        </Text>
      </View>
    </Pressable>
  );
};

export default Sponsor;

const styles = StyleSheet.create({});
