import React, { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FitnessItems from "../data/FitnessItems";
import { Image } from "react-native";
import tailwind from "tailwind-rn";
import { FlatList } from "react-native";
import Fit from "../components/Fit";

const Fitness = () => {
  const FitnessData = FitnessItems;
  //   console.log("😜😜😜", FitnessData);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Fitness Accessories",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0C73EB",
      },
      headerLeft: () => null,
    });
  }, []);
  const navigation = useNavigation();
  return (
    // <ScrollView style={tailwind("")}>
    //   <View style={tailwind("flex flex-row flex-wrap")}>
    //     {FitnessData.map((item) => (
    //       <View style={tailwind("w-full")}>
    //         <Image
    //           source={{ uri: item.image }}
    //           style={{ width: 190, height: 300, }}
    //         />
    //         {/* <Text style={{  }}>{item.name}</Text> */}
    //       </View>
    //     ))}
    //   </View>
    //   <Text>fitness</Text>
    // </ScrollView>
    <FlatList
      data={FitnessData}
      numColumns={2}
      renderItem={({ item }) => <Fit data={item}/>}
    />
  );
};

export default Fitness;

const styles = StyleSheet.create({});
