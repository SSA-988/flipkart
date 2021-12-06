import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PagerView from "react-native-pager-view";
import Deals from "../components/Deals";
import Sponsored from "../components/Sponsored";
import { useSelector } from "react-redux";
import useAuth from "../useAuth";
import Trending from "../components/Trending";
const { width } = Dimensions.get("window");
const height = (width * 100) / 190;
const carousel = [
  {
    pic: "https://blogger.googleusercontent.com/img/a/AVvXsEiSRXYxsK6EXIeTLgwO97wwQzszzR3sRXIxw7aQ6YpmNqFLI3S3nJK3tUt9d6csw3PFHeh7CqanZIl2mPYncUoJDuPdJyuyS7lNQ-ffOi6wiqKFSjTXQ-gG7g4e5U_PKuL5dbke-_58dMUOYwxWrVoibOWDls9sEEwnHAtxY5HLiR3eiCKC0e89k0x3=s16000",
    id: "100",
  },
  {
    pic: "https://www.gizbot.com/img/2019/10/flipkart-diwali-offers-discounts-to-get-on-bluetooth-speakers-1571988565.jpg",
    id: "101",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi61Otrs6VEEim5ldZEi6MVRt4pkiMc1tpsw&usqp=CAU",
    id: "102",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MdYQ80jds6pxU4cT2HL0K75wNDShedgCWMT6ihR9XB7yXA3qaVlmLsjt3XodFg8hdA8&usqp=CAU",
    id: "103",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSA5lPftrehK4h0w6HgB7K7TAx6o_xAgsnKw&usqp=CAU",
    id: "104",
  },
];
const categories = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOjAuMmMII42Wf5kZFQITqe0P49ZEexIOQQ&usqp=CAU",
    name: "offer zone",
    id: "0",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIs5v9f8edqf_ERykIdxi8v6Hd8yJPA2QdA&usqp=CAU",
    name: "Grocery",
    id: "1",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKE7TCEX5AKumLTviUrr_GbSHPxKZ87x6n8w&usqp=CAU",
    name: "Mobiles",
    id: "2",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYENzLytWtaWh7G7BfVmFR73ZosjTf99iBw&usqp=CAU",
    name: "Fashion",
    id: "3",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPwpfBmwi2pxwsV0lpftwDSYQNy0iwX0Vww&usqp=CAU",
    name: "Electronics",
    id: "4",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3f_bGN6qu84GNyNr2gNWeYDmtOXwr6T-Zg&usqp=CAU",
    name: "sports",
    id: "5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1FvurBMmh-h_c2ft1jq_9c4V1gBteug8Zg&usqp=CAU",
    name: "Food",
    id: "6",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { items, quantity, id } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const item = items.length;
  const {user,logout} = useAuth();
  // console.log(user)
  return (
    <ScrollView style={{ flex: 1 }} style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          justifyContent: "space-between",
          backgroundColor: "#0C73EB",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="menu" size={24} color="white" />
          <Image
            style={{
              width: 100,
              borderRadius: 6,
              marginLeft: 10,
              height: 44,
              // resizeMode: "contain",
            }}
            source={{
              uri: "data:image/png;base64,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",
            }}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={logout}>
           <Image source={{uri:user.photoURL}} style={{width:30,height:30,borderRadius:15}}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Notifications")}>
            <Ionicons
              name="notifications"
              size={24}
              color="white"
              style={{ paddingHorizontal: 10 }}
            />
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Cart")}>
            <FontAwesome5
              style={{ marginRight: 10 }}
              name="shopping-cart"
              size={20}
              color="white"
            />
          </Pressable>
          {item === 0 ? null : (
            <Pressable
              onPress={() => navigation.navigate("Cart")}
              style={{
                position: "absolute",
                left: 87,
                bottom: 16,
                backgroundColor: "red",
                textAlign: "center",
                width: 20,
                height: 20,
                borderRadius: 10,
                // fontWeight: "bold",
                // fontSize: 14,
                // color: "white",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  textAlign: "center",
                  color: "white",
                }}
              >
                {item}
              </Text>
            </Pressable>
          )}
        </View>
      </View>
      <View style={{ backgroundColor: "#0C73EB" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 3,
            borderRadius: 3,
            marginBottom: 11,
            alignItems: "center",
            backgroundColor: "#F8F8F8",
            marginLeft: 10,
            marginRight: 10,
            padding: 5,
          }}
        >
          <Feather name="search" size={20} color="gray" />
          <TextInput
            style={{ paddingLeft: 7 }}
            placeholder="Search For Products brands and More"
          />
        </View>
      </View>
      <FlatList
        horizontal
        style={{ height: 60, flexGrow: 0 }}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => (
          <View style={{ padding: 8, alignItems: "center", paddingBottom: 10 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ textAlign: "center", fontSize: 13 }}>
              {item.name}
            </Text>
          </View>
        )}
      />
       <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled={true}
        >
          {carousel.map((item, i) => (
            <Image
              key={i.id}
              source={{ uri: item.pic }}
              style={{ width, height, marginTop: 25, resizeMode: "cover" }}
            />
          ))}
        </ScrollView>
        </ScrollView>
      <Text style={{ backgroundColor: "#D3D3D3", height: 3 }}></Text>
      {/* <ScrollView vertical contentContainerStyle={{ flexGrow: 1 }}> */}
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            padding: 5,
            paddingVertical: 10,
          }}
        >
          sponsored
        </Text>
        <Text style={{ backgroundColor: "#D3D3D3", height: 3 }}></Text>
        <Image
          style={{ width: "100%", aspectRatio: 6 / 3 }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqNgClWapKOGNbqmuhJW5xHP3ByjoD6zCCrUu2o9d403iqtPa2y1KqQYZcQLjrqJtVjg&usqp=CAU",
          }}
        />
      </View>

      <Text
        style={{ backgroundColor: "#D3D3D3", height: 3, marginTop: 8 }}
      ></Text>
      <Deals />
      <Text style={{ backgroundColor: "#D3D3D3", height: 3 }}></Text>
      <Sponsored />
      <Trending/>
      {/* </ScrollView> */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
});
