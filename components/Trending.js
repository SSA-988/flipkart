import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const deals = [
  {
    id: "0",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3Zilqa1g8be-fvmh11vdFb3F8vTbEOHVmA&usqp=CAU",
    name: "Fitness accessories",
    rate: "From ₹99",
  },
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75rJQvEPra988J9ULpv-IXvBNKc_-oOh92Q&usqp=CAU",
    name: "Kitchen essentials",
    rate: "Upto 50+Extra 5% Off",
  },
  {
    id: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7xlVuvvzkB5ohvWSy5-tres4SbbQKskmTkjWCXw4mhd3JL1uZGrpjn1J4E8vJ-2gxIE&usqp=CAU",
    name: "Desinger Back covers",
    rate: "Just ₹179",
  },
  {
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yJnFhF89DiPz40XP-sB1TPU6OTiykgGz_mn7tTf-BlnJCL9fzh_WJhl8LJTB7pyle3A&usqp=CAU",
    name: "Roadster T-shirts",
    rate: "From ₹199",
  },
];

const Trending = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "#ffc1cc" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 17, color: "black", fontWeight: "700" }}>
            Trending Offers
          </Text>
          {/* <Text style={{ color: "#FFDEAD" }}>Opt Your Choice ❤️</Text> */}
        </View>

        <Pressable>
          <Pressable>
            <Text
              style={{
                marginRight: 4,
                color: "#4682B4",
                backgroundColor: "white",
                padding: 5,
                borderRadius: 5,
              }}
            >
              View All
            </Text>
          </Pressable>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          onPress={() => navigation.navigate("Women")}
          style={{
            backgroundColor: "white",
            marginLeft: "auto",
            padding: 10,
          }}
        >
          <View style={{ padding: 10 }}>
            <Image
              style={{ width: 130, height: 130, resizeMode: "contain" }}
              source={{
                uri: "https://rukminim1.flixcart.com/image/580/696/jvmpci80/shrug/p/7/z/xl-7393108-taavi-original-imafgh4dza34nhgj.jpeg?q=50",
              }}
            />
            <Text style={{ marginTop: 7, textAlign: "center" }}>
              Women Shrugs
            </Text>
            <Text style={{ color: "green", textAlign: "center" }}>
              ₹499 onwards
            </Text>
          </View>
        </Pressable>

        <View
          style={{
            backgroundColor: "white",
            marginLeft: "auto",
            marginRight: 22,
            padding: 10,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Western")}
            style={{ padding: 10 }}
          >
            <Image
              style={{ width: 130, height: 130, resizeMode: "contain" }}
              source={{
                uri: "https://rukminim1.flixcart.com/image/746/895/k52s58w0/dress/z/s/d/xl-shiv-black-gulab-maxi-142-skight-fashion-original-imaf23yqszrg995z.jpeg?q=50",
              }}
            />
            <Text style={{ marginTop: 7, paddingLeft: 4, textAlign: "center" }}>
              Western Wear
            </Text>
            <Text style={{ color: "green", textAlign: "center" }}>
              Upto 50+Extra 5% Off
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          paddingBottom: 20,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Electronic")}
          style={{
            backgroundColor: "white",
            marginLeft: "auto",
            padding: 10,
          }}
        >
          <View style={{ padding: 10 }}>
            <Image
              style={{ width: 130, height: 130, resizeMode: "contain" }}
              source={{
                uri: "https://rukminim1.flixcart.com/image/612/612/kvzkosw0/headphone/d/c/z/-original-imag8rdvydzyjhxz.jpeg?q=70",
              }}
            />
            <Text style={{ marginTop: 7 }}>Electronic Gadgets</Text>
            <Text style={{ color: "green", textAlign: "center" }}>
              Just ₹599
            </Text>
          </View>
        </Pressable>

        <Pressable
          // onPress={() => navigation.navigate("Nike")}
          style={{
            backgroundColor: "white",
            marginLeft: "auto",
            marginRight: 22,
            padding: 10,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Shoe")}
            style={{ padding: 10 }}
          >
            <Image
              style={{ width: 130, height: 130, resizeMode: "contain" }}
              source={{
                uri: "https://rukminim1.flixcart.com/image/580/696/ke353m80-0/shoe/z/e/j/sandoz-black-6-clymb-black-original-imafuuusjjhhwskq.jpeg?q=50",
              }}
            />
            <Text style={{ marginTop: 7, textAlign: "center" }}>Shoes</Text>
            <Text style={{ color: "green", textAlign: "center" }}>
              Upto 50+Extra 5% Off
            </Text>
          </Pressable>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Trending;

const styles = StyleSheet.create({});
