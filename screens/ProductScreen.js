import React, { useState, useEffect } from "react";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { GOOGLE_MAPS_API_KEY } from "@env";
import {
  Image,
  ScrollView,
  StyleSheet,
  BackHandler,
  Text,
  Alert,
  View,
  Modal,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import useAuth from "../useAuth";

const ProductScreen = () => {
  const { user} = useAuth();
  const route = useRoute();
  // console.log(route.params);
  const { width } = Dimensions.get("window");
  const sentItem = false;
  const navigation = useNavigation();
  const height = (width * 100) / 80;
  const data = route.params.carouselImages;
  const price = route.params.price;
  const coin = Math.floor(price / 25);
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState(false);
  const [adress, setAdress] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
   useEffect(() => {
     (async () => {
       let { status } = await Location.requestForegroundPermissionsAsync();
       if (status !== "granted") {
         setErrorMsg("Permission to access location was denied");
         return;
       }

       let location = await Location.getCurrentPositionAsync({});
       setLocation(location);
      //  console.log(location);
       const lat = location.coords.latitude;
       const long = location.coords.longitude;
       fetch(
         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=street_address&key=${GOOGLE_MAPS_API_KEY}`
       )
         .then((response) => response.json())
         .then((responseJson) => {
           console.log("😁😁😁😁", responseJson);
           console.log(
             "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson)
           );

           var street_name = responseJson.results[0].address_components.filter(
             (x) => x.types.filter((t) => t == "premise").length > 0
           )[0].long_name;
           console.log(street_name);

           var homeAdress = responseJson.results[0].address_components.filter(
             (x) => x.types.filter((t) => t == "political").length > 0
           )[0].long_name;
           console.log(homeAdress);

           var locality = responseJson.results[0].address_components.filter(
             (x) => x.types.filter((t) => t == "sublocality_level_1").length > 0
           )[0].long_name;
           console.log(locality);

           var city = responseJson.results[0].address_components.filter(
             (x) => x.types.filter((t) => t == "locality").length > 0
           )[0].long_name;
           console.log(city);

           const finalAdress =
             street_name +
             " " +
             homeAdress +
             "," +
             " " +
             locality +
             "," +
             " " +
             city;
           console.log("🎉🎉", finalAdress);
           setAdress(finalAdress);
         });
     })();
   }, []);
   let text = "Waiting..";
   if (errorMsg) {
     text = errorMsg;
   } else if (location) {
     text = JSON.stringify(location);
   }
  console.log(adress)
  const kick = [
    {
      name: "S",
      id: 1,
      value: "shoulder 17.75 inch | Length 27.25 inch",
    },
    {
      name: "M",
      id: 2,
      value: "shoulder 18 inch | Length 28 inch",
    },
    {
      name: "L",
      id: 3,
      value: "shoulder 19 inch | Length 28.25 inch",
    },
    {
      name: "XL",
      id: 4,
      value: "shoulder 19.87 inch | Length 28.85 inch",
    },
  ];
  const quantity = 0;
  const setSelects = (value, name) => {
    setSelect(value);
    setValue(name);
  };
  const remove = () => {
    setSelect("");
    setValue("");
  };
  const action = () => {
    Alert.alert("Hooray!", "your item is added to cart", [
      {
        text: "Go To Cart",
        onPress: () => navigation.navigate("Cart"),
        //  style: "cancel",
      },
      { text: "Cancel", onPress: () => null },
    ]);
    return true;
  };
  const addToCart = (item) => {
    if (!select) {
      setModal(true);
    } else {
      null;
    }
    if (select) {
      const details = dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...item,
          quantity: quantity + 1,
        },
      });
      // setCart(true);
      action();
      console.log("💕💕😍", details);
    } else {
      return;
    }
  };
  const buyNow = (item) => {
    if (!select) {
      setModal(true);
    } else {
      null;
    }
    if (select) {
      const details = dispatch({
        type: "BUY_NOW",
        payload: {
          ...item,
          quantity: quantity + 1,
        },
      });
      navigation.navigate("BuyNow");
      console.log("💕💕😍", details);
    } else {
      return;
    }
  };
  useEffect(() => {
    if (cart) {
      return true;
    }
  }, [data]);
  const addSize = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <Pressable
          onPress={() => setModal(false)}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign
            style={{ paddingBottom: 10 }}
            name="closecircle"
            size={34}
            color="black"
          />
        </Pressable>
        <View
          style={{
            backgroundColor: "white",
            height: 300,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            please select your size, before adding to Cart
          </Text>
          <Text
            style={{
              backgroundColor: "#32cd32",
              textAlign: "center",
              padding: 3,
              borderRadius: 3,
              width: 130,
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
              marginBottom: 7,
            }}
          >
            Info
          </Text>
          <View style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  backgroundColor: "#9bddff",
                  width: 44,
                  borderRadius: 2,
                  padding: 5,
                  // paddingLeft:5,
                  color: "white",
                  textAlign: "center",
                }}
              >
                S
              </Text>
              <Text style={{ fontSize: 16, color: "gray", marginLeft: 10 }}>
                shoulder 17.75 inch | Length 27.25 inch
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  width: 44,
                  fontWeight: "600",
                  backgroundColor: "#9bddff",
                  borderRadius: 2,
                  padding: 5,
                  // paddingLeft:5,
                  textAlign: "center",
                  color: "white",
                }}
              >
                M
              </Text>
              <Text style={{ fontSize: 16, color: "gray", marginLeft: 10 }}>
                shoulder 18 inch | Length 28 inch
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  width: 44,
                  backgroundColor: "#9bddff",
                  borderRadius: 2,
                  padding: 5,
                  // paddingLeft:5,
                  textAlign: "center",
                  color: "white",
                }}
              >
                L
              </Text>
              <Text style={{ fontSize: 16, color: "gray", marginLeft: 10 }}>
                shoulder 19 inch | Length 28.25 inch
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  width: 44,
                  backgroundColor: "#9bddff",
                  borderRadius: 2,
                  padding: 5,
                  textAlign: "center",
                  // paddingLeft:5,
                  color: "white",
                }}
              >
                XL
              </Text>
              <Text style={{ fontSize: 16, color: "gray", marginLeft: 10 }}>
                shoulder 19.87 inch | Length 28.85 inch
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const showCart = () => {
    return (
      <View
        style={{
          flex: 2,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <Pressable
          onPress={() => setCart(false)}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign
            style={{ paddingBottom: 10 }}
            name="closecircle"
            size={34}
            color="black"
          />
        </Pressable>
        <View
          style={{
            backgroundColor: "white",
            height: 200,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            padding: 15,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
          >
            Your Item added to cart
          </Text>
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <Pressable onPress={() => navigation.navigate("Cart")}>
              <Text
                style={{
                  backgroundColor: "#ffa07a",
                  padding: 10,
                  borderRadius: 5,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Go to Cart
              </Text>
            </Pressable>

            <Pressable onPress={() => setCart(false)}>
              <Text
                style={{
                  backgroundColor: "#ff4500",
                  padding: 10,
                  borderRadius: 5,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Cancel
              </Text>
            </Pressable>
          </View>
          <Image
            style={{
              width: 80,
              height: 80,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecHEG8hAipw7GFpm1gKCkma2DomYpQQEqpCNrdRTiLiEvQZnqi7kLQ5iRvS2_0Vxoc38&usqp=CAU",
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={cart}
        transparent={true}
        onCloseRequest={() => setCart(false)}
      >
        {showCart()}
      </Modal>
      <Modal
        animationType="slide"
        visible={modal}
        transparent={true}
        onCloseRequest={() => setModal(false)}
      >
        {addSize()}
      </Modal>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled={true}
        >
          {data.map((item, i) => (
            <Image
              key={i.id}
              source={{ uri: item.immage }}
              style={{ width, height, marginTop: 25, resizeMode: "contain" }}
            />
          ))}
        </ScrollView>
        <View style={{ padding: 10 }}>
          {route.params.brand ? (
            <Text style={{ fontSize: 16 }}>{route.params.brand}</Text>
          ) : null}

          <Text style={{ fontSize: 16, color: "gray" }}>
            {route.params.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignItems: "center",

              paddingHorizontal: 4,
              padding: 4,

              marginTop: 7,
              marginBottom: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 5,
                backgroundColor: "green",
                padding: 4,
              }}
            >
              <Text style={{ paddingLeft: 3, color: "white" }}>
                {route.params.rating}
              </Text>
              <Entypo
                name="star"
                size={16}
                color="white"
                style={{ paddingHorizontal: 3 }}
              />
            </View>
            <View
              style={{
                marginLeft: 6,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14, color: "gray" }}>
                {route.params.reviews}
              </Text>
              <Text style={{ marginLeft: 4, color: "gray" }}>Ratings</Text>
            </View>
          </View>
          <Text
            style={{
              paddingLeft: 6,
              backgroundColor: "#e0ffff",
              marginTop: 2,
              color: "#008b8b",
              width: 210,
              padding: 3,
              borderRadius: 2,
            }}
          >
            Lowest Price in 15 days, Hurry!
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 7,
            }}
          >
            <Text
              style={{
                textDecorationLine: "line-through",
                fontSize: 17,
                color: "gray",
                paddingRight: 3,
                fontWeight: "600",
              }}
            >
              {route.params.op}
            </Text>
            <Text
              style={{ paddingHorizontal: 4, fontSize: 22, fontWeight: "600" }}
            >
              {"₹"}
              {route.params.price}
            </Text>
            <Text
              style={{
                paddingHorizontal: 4,
                color: "green",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              {route.params.offer}
              {"%Off"}
            </Text>
          </View>
          <View
            style={{
              marginRight: 5,
              paddingRight: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 87, height: 20, marginTop: 5 }}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
            <Text style={{ marginTop: 5, fontSize: 16 }}>free Delivery</Text>
          </View>
        </View>
        <Text style={{ backgroundColor: "#B0B0B0", height: 1 }}></Text>
        <View style={{ padding: 10 }}>
          <Text>
            You will earn{" "}
            <FontAwesome5
              style={{ paddingLeft: 4 }}
              name="coins"
              size={17}
              color="#FFCC99"
            />{" "}
            {coin} coins on this order
          </Text>
        </View>
        <Text style={{ backgroundColor: "#B0B0B0", height: 1 }}></Text>
        <View style={{ padding: 10 }}>
          <Text>45 people ordered this product in the last 10 Days</Text>
        </View>
        <Text style={{ backgroundColor: "#B0B0B0", height: 1 }}></Text>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "700" }}>Size</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
              <EvilIcons name="chart" size={24} color="#00b7eb" />
              <Text style={{ color: "#00b7eb" }}>Size chart</Text>
            </Pressable>
          </View>
          <View
            style={{
              width: 120,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {kick.map((kik) => (
              <Button
                color={"red"}
                onPress={() => setSelects(kik.value, kik.name)}
                containerStyle={styles.button}
                title={kik.name}
                type="solid"
              />
            ))}
          </View>

          {select ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 30,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>{select}</Text>
              <Text
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: "#3cd070",
                  marginLeft: 8,
                  fontSize: 16,
                  color: "white",
                  fontWeight: "700",
                  padding: 3,
                  borderRadius: 5,
                }}
              >
                {value}
              </Text>
              <Pressable
                style={{ position: "absolute", left: 0, top: 24 }}
                onPress={remove}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "red" }}
                >
                  Cancel
                </Text>
              </Pressable>
            </View>
          ) : null}

          {/* <Text>you clicked {select} size</Text> */}
        </View>
        <Text style={{ backgroundColor: "#B0B0B0", height: 1 }}></Text>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Deliver to {user.displayName}
          </Text>
          <Text style={{ color: "gray", fontSize: 15 }}>
            {/* #59 shivasadana behind St johns school, 5th right */}
            {adress}
          </Text>
        </View>
        <Text style={{ backgroundColor: "#B0B0B0", height: 1 }}></Text>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <FontAwesome5 name="truck" size={20} color="#0C73EB" />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "green", marginLeft: 10 }}>Free</Text>
              <Text
                style={{
                  paddingHorizontal: 5,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Delivery by 29 Nov, Monday
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Fontisto name="arrow-return-left" size={20} color="#0C73EB" />
            <Text style={{ marginLeft: 12 }}>10 Days return Policy</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <MaterialIcons name="money" size={24} color="green" />
            <Text style={{ marginLeft: 12 }}>Cash On delivery available</Text>
          </View>
        </View>
        <Text style={{ backgroundColor: "#B0B0B0", height: 0.4 }}></Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {cart ? (
            <TouchableOpacity
              onPress={() => addToCart(route.params)}
              style={{ flex: 1 }}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                GO TO CART
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              // disabled={!select}
              onPress={() => addToCart(route.params)}
              style={{ flex: 1 }}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                ADD TO CART
              </Text>
            </TouchableOpacity>
          )}

          {/* <TouchableOpacity
            onPress={() => addToCart(route.params)}
            style={{ flex: 1 }}
            activeOpacity={0.7}
          >
            <Text
              style={{
                backgroundColor: "#FFFFFF",
                padding: 10,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              GO TO CART
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => buyNow(route.params)}
            activeOpacity={0.7}
            style={{ flex: 1 }}
          >
            <Text
              style={{
                backgroundColor: "orange",
                padding: 10,
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  button: {
    width: 60,
    margin: 7,
  },
});
