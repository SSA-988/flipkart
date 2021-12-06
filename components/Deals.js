import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
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

const Deals = () => {
    const navigation = useNavigation();
    return (
      <ScrollView style={{ backgroundColor: "#0C73EB" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 17, color: "#ADD8E6", fontWeight: "700" }}>
              Deals of the Day
            </Text>
            <Text style={{ color: "#FFDEAD" }}>Opt Your Choice ❤️</Text>
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
            onPress={() => navigation.navigate("Fitness")}
            style={{
              backgroundColor: "white",
              marginLeft: "auto",
              padding: 10,
            }}
          >
            <View style={{ padding: 10 }}>
              <Image
                style={{ width: 130, height: 130 }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3Zilqa1g8be-fvmh11vdFb3F8vTbEOHVmA&usqp=CAU",
                }}
              />
              <Text style={{ marginTop: 7 }}>Fitness accessories</Text>
              <Text style={{ color: "green", textAlign: "center" }}>
                From ₹99
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
              onPress={() => navigation.navigate("Kitchen")}
              style={{ padding: 10 }}
            >
              <Image
                style={{ width: 130, height: 130 }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75rJQvEPra988J9ULpv-IXvBNKc_-oOh92Q&usqp=CAU",
                }}
              />
              <Text style={{ marginTop: 7, paddingLeft: 4 }}>
                Kitchen essentials
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
            onPress={() => navigation.navigate("Mobile")}
            style={{
              backgroundColor: "white",
              marginLeft: "auto",
              padding: 10,
            }}
          >
            <View style={{ padding: 10 }}>
              <Image
                style={{ width: 130, height: 130 }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7xlVuvvzkB5ohvWSy5-tres4SbbQKskmTkjWCXw4mhd3JL1uZGrpjn1J4E8vJ-2gxIE&usqp=CAU",
                }}
              />
              <Text style={{ marginTop: 7 }}>Desinger Back covers</Text>
              <Text style={{ color: "green", textAlign: "center" }}>
                Just ₹179
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
              onPress={() => navigation.navigate("Nike")}
              style={{ padding: 10 }}
            >
              <Image
                style={{ width: 130, height: 130 }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6FUAdBXBQWTr8PXtUuZxZ5NKPlWQbROdZw&usqp=CAU",
                }}
              />
              <Text style={{ marginTop: 7, textAlign: "center" }}>
                T-Shirts
              </Text>
              <Text style={{ color: "green", textAlign: "center" }}>
                Upto 50+Extra 5% Off
              </Text>
            </Pressable>
          </Pressable>
        </View>
      </ScrollView>
    );
}

export default Deals

const styles = StyleSheet.create({})
