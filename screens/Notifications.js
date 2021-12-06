import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from 'react-native-elements';

const Notifications = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=> {
        navigation.setOptions({
          title: "Notificatins",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#0C73EB",
          },
        });
    },[])
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <MaterialIcons
          name="photo-library"
          size={30}
          color="gray"
          style={{ padding: 10 }}
        />
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
          >
            No Notification yet
          </Text>
          <Text style={{ textAlign: "center",color:"gray",fontSize:15 }}>
            simply Browse, create a wishlist
          </Text>
        </View>
        <Button
        onPress={() =>navigation.navigate("Home")}
          containerStyle={styles.button}
          title="continue shopping"
        ></Button>
      </View>
    );
}

export default Notifications

const styles = StyleSheet.create({
    button: {
        width:180,
        marginTop:20,
    }
})
