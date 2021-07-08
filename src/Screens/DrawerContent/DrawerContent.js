import React from "react";
import { View, Image, StatusBar, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Feather from 'react-native-vector-icons/dist/Feather';
import Theme from './../../Constant/Constant';
import styles from "./styles";
import { Drawer } from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';
export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <==========================> --- <==========================> */}
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor={Theme._StatusBarBg}
        translucent={true}
      />
      <View style={styles.sideMenuContainer}>
        {/* <DrawerItemList {...props} /> */}
        <Drawer.Section />
        {/* <==========================> --- <==========================> */}
        <LinearGradient colors={[Theme._DrawerLinearGradientFirst, Theme._DrawerLinearGradientSecond]} style={styles._profile_Section} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <View style={styles._drawer_profile_main}>
            <View style={[styles._drawer_profile, Theme._DwawerProfileBg]}>
              <Text style={[styles._profile_first_l, Theme._TextWhiteColor]}>H</Text>
            </View>
            <Text style={[styles._user_name, Theme._TextWhiteColor]}>Hishmat Rai</Text>
          </View>
        </LinearGradient>
        <DrawerItem
          label="Onboarding"
          labelStyle={{
            fontWeight: "bold",
            fontSize: 18,
            color: Theme._DrawerScreenTitleColor
          }}
        />
        <DrawerItem
          label="Suppport"
          labelStyle={{
            fontWeight: "bold",
            fontSize: 18,
            color: Theme._DrawerScreenTitleColor
          }}
        />

        <DrawerItem
          label="Settings"
          labelStyle={{
            fontWeight: "bold",
            fontSize: 18,
            color: Theme._DrawerScreenTitleColor,
          }}
        />

        <DrawerItem
          label="Log Out"
          labelStyle={{
            fontWeight: "bold",
            fontSize: 18,
            color: Theme._DrawerScreenTitleColor
          }}
        />
        <TouchableOpacity style={styles._services_btn}>
          <LinearGradient colors={[Theme._DrawerServiceBtnLinearGradientFirst, Theme._DrawerServiceBtnLinearGradientSecond]} style={styles._services_btn_gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text style={[styles._services_btn_text, Theme._TextWhiteColor]}>Services</Text>
            <Feather name="arrow-right-circle" size={30} color="white" />
          </LinearGradient>
        </TouchableOpacity>
        <Text style={[styles._version,Theme._DrawerScreenTitleColor]}>Version:1.0.4</Text>
      </View>
    </DrawerContentScrollView >
  );
}