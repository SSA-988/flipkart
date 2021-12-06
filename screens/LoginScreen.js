import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-rn";
import useAuth from "../useAuth";
const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();
  const { user } = useAuth();
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#0C73EB", flex: 1 }}>
      <Image
        style={{
          width: 120,
          height: 110,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 290,
          marginLeft: 127,
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8IbGcao0WvB7aG0mrTdIQ0CHTpqlsNP309-w_LoAU5HZHefCVE7GjUYNP-Fa_3le1TI&usqp=CAU",
        }}
      />
      <TouchableOpacity
        onPress={signInWithGoogle}
        activeOpacity={0.9}
        style={{
          padding: 10,
          justifyContent: "center",
          flex: 1,
          marginVertical: 10,
          width: 190,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "white",
            position: "absolute",
            bottom: 100,
            padding: 10,
            borderRadius: 5,
            marginBottom: 140,
            marginLeft: 13,
            color: "#0C73EB",
            fontWeight: "bold",
          }}
        >
          Sign in With Google
        </Text>
      </TouchableOpacity>
      {/* <View
        style={{
          marginTop: 50,
          borderRadius: 4,
          // flex:1
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Image
          style={{ width: 120, height: 100 }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8IbGcao0WvB7aG0mrTdIQ0CHTpqlsNP309-w_LoAU5HZHefCVE7GjUYNP-Fa_3le1TI&usqp=CAU",
          }}
        />
        <Pressable
          onPress={() => console.warn("presssed")}
          // activeOpacity={0.9}
          style={{
          
            // flex:1
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              // marginLeft: 120,
              fontSize: 16,
              padding: 10,
              borderRadius: 4,
              position: "absolute",
              backgroundColor: "white",
              textAlign: "center",
              top: 50,
              color: "blue",
              width: 170,
            }}
          >
            Sign in With Google
          </Text>
        </Pressable>
      </View> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
