import React, { useLayoutEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import Checkout from "../components/Checkout";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
const CartScreen = () => {
  const { items, quantity, id } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  console.log("My items 📌😘", items);
  const size = items.length;
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [add, setAdd] = useState(1);
  const total = items
    .map((item) => Number(item.price) * add)
    .reduce((prev, curr) => prev + curr, 0);
  const originalPrice = items.map((item) =>
    Number(item.op)*add).reduce((prev, curr) => prev + curr,0);
    // console.log(originalPrice);
  const discount = originalPrice - total;
  // const [add, setAdd] = useState(quantity);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "My Cart",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0C73EB",
      },
    });
  }, []);
  const showCheckout = () => {
    return (
      <View
        style={{
          flex: 2,
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
            // padding: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            view price details
          </Text>
          <Text style={{ backgroundColor: "#E0E0E0", height: 1 }}></Text>
          <View style={{ padding: 10 }}>
            {/* {items.map((data, index) => ( */}
              <>
                <View
              
                  style={{
                    flexDirection: "row",
                    marginVertical: 10,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Price ({size} Item)</Text>
                  <Text>
                    {"₹"}
                    {originalPrice}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Discount</Text>
                  <Text>
                    {"₹"}
                    {discount}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Delivery Charges</Text>
                  <Text style={{ color: "#32cd32" }}>FREE</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    Total
                  </Text>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    {"₹"}
                    {total}
                  </Text>
                </View>
              </>
            {/* ))} */}
          </View>
          <Text style={{ backgroundColor: "#E0E0E0", height: 1 }}></Text>
          <Pressable
            onPress={() => navigation.navigate("Payment")}
            style={{
              padding: 10,
              justifyContent: "center",
              marginVertical: 10,
              width: 180,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "#ffd700",
                padding: 10,
                borderRadius: 5,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Place Order
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modal}
        transparent={true}
        onCloseRequest={() => setModal(false)}
      >
        {showCheckout()}
      </Modal>
      
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={items}
          renderItem={({ item }) => <Checkout data={item} add={add} setAdd={setAdd}/>}
        />
        {total === 0 ? null : (
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fffafa",
              padding: 10,
            }}
          >
            <View style={{}}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{total}</Text>
              <Pressable onPress={() => setModal(true)}>
                <Text style={{ color: "blue" }}>View Price details</Text>
              </Pressable>
            </View>
            <Button
              onPress={() => navigation.navigate("Payment")}
              color="#ff5c5c"
              backgroundColor={"red"}
              containerStyle={styles.button}
              title="Place Order"
            ></Button>
          </Pressable>
        )}
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  button: {
    width: 180,
    backgroundColor: "orange",
  },
});
