import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import sponsorPuma from "../data/sponsorPuma"
import Sponsor from "../components/Sponsor"

const sponsor1 = [
  {
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/846669/01/mod02/fnd/IND/fmt/png/Ottoman-Full-Zip-Men's-Jacket",
    id: "0",
  },
  {
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/846669/01/mod03/fnd/IND/fmt/png/Ottoman-Full-Zip-Men's-Jacket",
    id: "1",
  },
  {
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/846669/01/mod01/fnd/IND/fmt/png/Ottoman-Full-Zip-Men's-Jacket",
    id:"2",
  },
];

const sponsor2 = [
  {
    image:
      "https://rukminim1.flixcart.com/image/880/1056/ksoz53k0/jacket/k/e/3/m-1-no-67029001-puma-original-imag67exymgmzar7.jpeg?q=50",
    id: "0",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/880/1056/ksoz53k0/jacket/h/b/d/m-1-no-67029001-puma-original-imag67ex3hzgsgzr.jpeg?q=50",
    id: "1",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/880/1056/ksoz53k0/jacket/5/l/2/m-1-no-67029001-puma-original-imag67exhg6qth7x.jpeg?q=50",
    id: "2",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/880/1056/ksoz53k0/jacket/6/9/0/m-1-no-67029001-puma-original-imag67exhkzprcsr.jpeg?q=50",
    id:"3",
  },
];

const sponsor3 = [
  {
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kgjqefk0/jacket/z/9/z/m-58969201-puma-original-imafwqhyf4gdq8zk.jpeg?q=50",
    id: "0",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kgjqefk0/jacket/z/9/z/m-58969201-puma-original-imafwqhyejmn7rcz.jpeg?q=50",
    id: "1",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kgjqefk0/jacket/z/9/z/m-58969201-puma-original-imafwqhycyhxcrvg.jpeg?q=50",
    id: "2",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kgjqefk0/jacket/z/9/z/m-58969201-puma-original-imafwqhydbzaa5gz.jpeg?q=50",
    id:"3",
  },
];

const Sponsored = () => {
    const data = sponsorPuma[0];
    // console.log(data);
    return (
      <View style={{ paddingBottom: 10, backgroundColor: "#e63e62" }}>
        <Text style={{ padding: 10, color: "white" }}>Promoted Products</Text>
        <Text style={{ backgroundColor: "#D3D3D3", height: 2 }}></Text>


        <FlatList
          data={sponsorPuma}
          renderItem={({ item }) => <Sponsor data={item} />}
        />

        {/* <Text style={{ backgroundColor: "#D3D3D3", height: 3 }}></Text> */}
      </View>
    );
}

export default Sponsored

const styles = StyleSheet.create({})


