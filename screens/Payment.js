import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { useDispatch } from "react-redux";

const Payment = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Payment",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0C73EB",
      },
    });
  }, []);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  // const val = 732;
  const [value,setNumber] = useState([204]);
  // const val = Math.floor(100 + Math.random() * 900);
  // console.log("random aba",val);
  const confirmation = () => {
    // if(input!=val){
    //   setError("please enter the characters properly");
    // }else{
    if (input != value) {
      setError("please enter the characters properly");
      setNumber(768);
      setInput("");
    } else {
       navigation.navigate("Confirmation");
      // console.log("💕💕items",let)
    }

    // }
  };
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 15,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#D0D0D0",
            paddingVertical: 10,
            paddingHorizontal: 30,
            marginVertical: 10,
            color: "green",
            fontSize: 34,
            fontWeight: "bold",
            borderRadius: 5,
          }}
        >
          {value}
        </Text>
      </View>
      {input != value || input ? (
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 3,
            color: "red",
          }}
        >
          {error}
        </Text>
      ) : null}

      <View style={{ marginLeft: "auto", marginRight: "auto" }}>
        <TextInput
          style={{ fontSize: 18, textAlign: "center" }}
          keyboardType="numeric"
          maxLength={3}
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="enter the Characters"
        />
      </View>
      <Pressable
        disabled={!input}
        onPress={() => confirmation()}
        style={{ marginLeft: "auto", marginRight: "auto", marginVertical: 30 }}
      >
        <Text
          style={{
            backgroundColor: "orange",
            fontSize: 17,
            fontWeight: "bold",
            padding: 10,
            color: "white",
            borderRadius: 5,
          }}
        >
          confirm Order
        </Text>
      </Pressable>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
