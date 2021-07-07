import React, { Component, useEffect, useState } from "react";
import { View, Image, StatusBar,Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
// import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { Drawer } from "react-native-paper";
// import { LinearGradient } from "expo-linear-gradient";
// import { Auth } from "aws-amplify";

export default function CustomDrawerContent(props) {
  const [currentuser, setcurrentuser] = useState({});
  // LOGOUT FUNCTION
//   const signOut = async () => {
//     try {
//       await Auth.signOut();
//       props.navigation.navigate("Login");
//     } catch (error) {
//       console.log("error signing out: ", error.message);
//     }
//   };
  return (
    <DrawerContentScrollView {...props}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.sideMenuContainer}>
        {/* <LinearGradient
          colors={["#293b90", "#98189a"]}
          style={styles._profile_container}
        > */}
          {/* <Image
            source={require("./../../assets/avatar.jpg")}
            style={styles._profile_view}
          /> */}
          <Text style={styles._user_name}>Suneel kumar</Text>
        {/* </LinearGradient> */}
        <DrawerItemList {...props} />
        <Drawer.Section />
        {/* </Drawer.Section> */}
        {/* <DrawerItem
          style={{ color: "red" }}
          label="Logout"
          onPress={() => signOut()}
          labelStyle={{
            color: "#283878",
          }}
          icon={() => <AntDesign name="logout" color="#283878" size={24} />}
        /> */}
      </View>
      <Drawer.Section />

      <Text style={styles._copy_right}>ISKILLERS INSTITUTE</Text>
    </DrawerContentScrollView>
  );
}