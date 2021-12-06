import React from "react";
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const ElectronicItem = (props) => {
  const navigation = useNavigation();
  const data = props.data;
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ProductDiff", {
          id: data.id,
          name: data.name,
          offer: data.offer,
          price: data.price,
          rating: data.rating,
          image: data.image,
          number: data.number,
          op: data.op,
          reviews: data.reviews,
          carouselImages: data.carouselImages,
        })
      }
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        marginVertical: 4,
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{
          width: 190,
          height: 260,
          resizeMode: "contain",
          marginBottom: 14,
        }}
      />
      <View style={{ paddingHorizontal: 5 }}>
        <Text>
          {data.name.length < 10
            ? data.name
            : data.name.substring(0, 17) + "..."}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        <Text
          style={{
            textDecorationLine: "line-through",
            fontSize: 15,
            color: "gray",
            paddingRight: 3,
            fontWeight: "600",
          }}
        >
          {data.op}
        </Text>
        <Text style={{ paddingHorizontal: 4, fontSize: 18, fontWeight: "600" }}>
          {"₹"}
          {data.price}
        </Text>
        <View
        // style={{
        //   flexDirection: "row",
        //   alignItems: "center",
        //   borderRadius: 5,
        //   backgroundColor: "green",
        //   padding: 4,
        // }}
        >
          <Text
            style={{
              paddingHorizontal: 4,
              color: "green",
              fontSize: 19,
              fontWeight: "bold",
            }}
          >
            {data.offer}
            {"%Off"}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 10,
          paddingHorizontal: 5,
        }}
      >
        <Text style={{ color: "#32cd32" }}>Free delivery</Text>
        <Image
          style={{ width: 87, height: 20, marginTop: 5 }}
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          position: "absolute",
          top: 13,
          right: 10,
          backgroundColor: "#FAEBD7",
          padding: 5,
          borderRadius: 20,
        }}
      >
        <Feather name="heart" size={22} color="#2F4F4F" />
      </TouchableOpacity>
    </Pressable>
  );
};

export default ElectronicItem;

const styles = StyleSheet.create({});
