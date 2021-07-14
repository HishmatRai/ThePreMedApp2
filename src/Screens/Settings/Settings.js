import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Share  } from 'react-native';
import Theme from './../../Constant/Constant';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import ToggleSwitch from "toggle-switch-react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { backgroundColor } from 'styled-system';
import {
    Select,
    VStack,
    CheckIcon,
    Center,
    NativeBaseProvider,
} from "native-base";
const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
}
export default function Settings(props) {
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);
    const [toggle6, setToggle6] = useState(false);
    const [toggle7, setToggle7] = useState(false);
    let [language, setLanguage] = React.useState("")
    let Time = [
        { label: "9:00 am", value: "9:00 am" },
        { label: "10:00 am", value: "10:00 am" },
        { label: "11:00 am", value: "11:00 am" },
        { label: "12:00 pm", value: "12:00 pm" },
        { label: "01:00 pm", value: "01:00 pm" },
        { label: "02:00 pm", value: "02:00 pm" },
        { label: "03:00 pm", value: "03:00 pm" },
        { label: "04:00 pm", value: "04:00 pm" },
        { label: "05:00 pm", value: "05:00 pm" },
        { label: "06:00 pm", value: "06:00 pm" },
        { label: "07:00 pm", value: "07:00 pm" },
        { label: "08:00 pm", value: "08:00 pm" },
        { label: "09:00 pm", value: "09:00 pm" },
        { label: "10:00 pm", value: "10:00 pm" },
        { label: "11:00 pm", value: "11:00 pm" },
        { label: "12:00 am", value: "12:00 am" },
        { label: "01:00 am", value: "01:00 am" },
        { label: "02:00 am", value: "02:00 am" },
        { label: "03:00 am", value: "03:00 am" },
        { label: "04:00 am", value: "04:00 am" },
        { label: "05:00 am", value: "05:00 am" },
        { label: "06:00 am", value: "06:00 am" },
        { label: "07:00 am", value: "07:00 am" },
        { label: "08:00 am", value: "08:00 am" },
    ]
    
    return (

        <View style={[styles.container, Theme._HomePageContainer]}>
            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor={Theme._StatusBarBg}
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <View style={styles._header_main}>
                <TouchableOpacity style={styles._back_icon}>
                    <Ionicons name="arrow-back" size={25} color="#2b2b2b" />
                </TouchableOpacity>
                <Text style={[styles._header_heading, Theme._QuestionsTextColor]}>Settings</Text>
            </View>

            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles._main}>
                    {/* <==========================> --- <==========================> */}
                    <Text style={[styles._title, Theme._QuestionsTextColor]}>Push Notifications</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._card_main, Theme._ActveTabBg, Theme._settingDataBottomBorderColor, Theme._settingDataTopBorderColor]}>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text style={[styles._card_title, Theme._QuestionsTextColor]}>Today's Quote</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                                <ToggleSwitch
                                    isOn={toggle}
                                    onColor="white"
                                    offColor="white"
                                    labelStyle={{ color: "black", fontWeight: "900", backgroundColor: "#3e82fd" }}
                                    style={{
                                        borderWidth: 2,
                                        borderColor: Theme._ToggleBorderColor,
                                        borderRadius: 30,
                                    }}
                                    thumbOffStyle={{
                                        backgroundColor: Theme._ToggleOffBg,
                                    }}
                                    thumbOnStyle={{
                                        backgroundColor: Theme._ToggleOnBg,
                                    }}
                                    size="medium"
                                    onToggle={(isOn) => setToggle(!toggle)}
                                />
                            </View>
                        </View>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text style={[styles._card_title, Theme._QuestionsTextColor]}>Set notification time (CST)</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                                <Select
                                    selectedValue={language}
                                    minWidth={120}
                                    accessibilityLabel="9:00 am"
                                    placeholder="9:00 am"
                                    onValueChange={(itemValue) => setLanguage(itemValue)}
                                    _selectedItem={{
                                        bg: "cyan.600",
                                        endIcon: <CheckIcon size={4} />,
                                    }}
                                    style={{ height: 40 }}
                                >
                                    {Time.map((v, i) => {
                                        return (
                                            <Select.Item label={v.label} value={v.value} />
                                        )
                                    })}

                                </Select>
                            </View>
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._card_main, Theme._ActveTabBg, Theme._settingDataBottomBorderColor, Theme._settingDataTopBorderColor]}>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text style={[styles._card_title, Theme._QuestionsTextColor]}>MCAT Questions of the day</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                                <ToggleSwitch
                                    isOn={toggle2}
                                    onColor="white"
                                    offColor="white"
                                    labelStyle={{ color: "black", fontWeight: "900", backgroundColor: "#3e82fd" }}
                                    style={{
                                        borderWidth: 2,
                                        borderColor: Theme._ToggleBorderColor,
                                        borderRadius: 30,
                                    }}
                                    thumbOffStyle={{
                                        backgroundColor: Theme._ToggleOffBg,
                                    }}
                                    thumbOnStyle={{
                                        backgroundColor: Theme._ToggleOnBg,
                                    }}
                                    size="medium"
                                    onToggle={(isOn) => setToggle2(!toggle2)}
                                />
                            </View>
                        </View>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text style={[styles._card_title, Theme._QuestionsTextColor]}>Set notification time (CST)</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                                <Select
                                    selectedValue={language}
                                    minWidth={120}
                                    accessibilityLabel="9:00 am"
                                    placeholder="9:00 am"
                                    onValueChange={(itemValue) => setLanguage(itemValue)}
                                    _selectedItem={{
                                        bg: "cyan.600",
                                        endIcon: <CheckIcon size={4} />,
                                    }}
                                    style={{ height: 40 }}
                                >
                                    {Time.map((v, i) => {
                                        return (
                                            <Select.Item label={v.label} value={v.value} />
                                        )
                                    })}

                                </Select>
                            </View>
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._card_main, Theme._ActveTabBg, Theme._settingDataBottomBorderColor, Theme._settingDataTopBorderColor]}>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text style={[styles._card_title, Theme._QuestionsTextColor]}>New Message</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                                <ToggleSwitch
                                    isOn={toggle3}
                                    onColor="white"
                                    offColor="white"
                                    labelStyle={{ color: "black", fontWeight: "900", backgroundColor: "#3e82fd" }}
                                    style={{
                                        borderWidth: 2,
                                        borderColor: Theme._ToggleBorderColor,
                                        borderRadius: 30,
                                    }}
                                    thumbOffStyle={{
                                        backgroundColor: Theme._ToggleOffBg,
                                    }}
                                    thumbOnStyle={{
                                        backgroundColor: Theme._ToggleOnBg,
                                    }}
                                    size="medium"
                                    onToggle={(isOn) => setToggle3(!toggle3)}
                                />
                            </View>
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._card_main, Theme._ActveTabBg, Theme._settingDataBottomBorderColor, Theme._settingDataTopBorderColor]}>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text style={[styles._card_title, Theme._QuestionsTextColor]}>Event Reminders</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                                <ToggleSwitch
                                    isOn={toggle4}
                                    onColor="white"
                                    offColor="white"
                                    labelStyle={{ color: "black", fontWeight: "900", backgroundColor: "#3e82fd" }}
                                    style={{
                                        borderWidth: 2,
                                        borderColor: Theme._ToggleBorderColor,
                                        borderRadius: 30,
                                    }}
                                    thumbOffStyle={{
                                        backgroundColor: Theme._ToggleOffBg,
                                    }}
                                    thumbOnStyle={{
                                        backgroundColor: Theme._ToggleOnBg,
                                    }}
                                    size="medium"
                                    onToggle={(isOn) => setToggle4(!toggle4)}
                                />
                            </View>
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <Text style={[styles._title, Theme._QuestionsTextColor]}>Push Notifications</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._card_main, Theme._ActveTabBg, Theme._settingDataBottomBorderColor, Theme._settingDataTopBorderColor]}>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text style={[styles._card_title, Theme._QuestionsTextColor]}>Hide MCAT Question of the day</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                                <ToggleSwitch
                                    isOn={toggle5}
                                    onColor="white"
                                    offColor="white"
                                    labelStyle={{ color: "black", fontWeight: "900", backgroundColor: "#3e82fd" }}
                                    style={{
                                        borderWidth: 2,
                                        borderColor: Theme._ToggleBorderColor,
                                        borderRadius: 30,
                                    }}
                                    thumbOffStyle={{
                                        backgroundColor: Theme._ToggleOffBg,
                                    }}
                                    thumbOnStyle={{
                                        backgroundColor: Theme._ToggleOnBg,
                                    }}
                                    size="medium"
                                    onToggle={(isOn) => setToggle5(!toggle5)}
                                />
                            </View>
                        </View>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <Text style={[styles._title, Theme._QuestionsTextColor]}>Focus</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._card_main, Theme._ActveTabBg, Theme._settingDataBottomBorderColor, Theme._settingDataTopBorderColor]}>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text style={[styles._card_title, Theme._QuestionsTextColor]}>Alaram Sound</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                                <ToggleSwitch
                                    isOn={toggle6}
                                    onColor="white"
                                    offColor="white"
                                    labelStyle={{ color: "black", fontWeight: "900", backgroundColor: "#3e82fd" }}
                                    style={{
                                        borderWidth: 2,
                                        borderColor: Theme._ToggleBorderColor,
                                        borderRadius: 30,
                                    }}
                                    thumbOffStyle={{
                                        backgroundColor: Theme._ToggleOffBg,
                                    }}
                                    thumbOnStyle={{
                                        backgroundColor: Theme._ToggleOnBg,
                                    }}
                                    size="medium"
                                    onToggle={(isOn) => setToggle6(!toggle6)}
                                />
                            </View>
                        </View>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._card_main, Theme._ActveTabBg, Theme._settingDataBottomBorderColor, Theme._settingDataTopBorderColor]}>
                        {/* <==========================> --- <==========================> */}
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text style={[styles._card_title, Theme._QuestionsTextColor]}>Ticking Sound</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                                <ToggleSwitch
                                    isOn={toggle7}
                                    onColor="white"
                                    offColor="white"
                                    labelStyle={{ color: "black", fontWeight: "900", backgroundColor: "#3e82fd" }}
                                    style={{
                                        borderWidth: 2,
                                        borderColor: Theme._ToggleBorderColor,
                                        borderRadius: 30,
                                    }}
                                    thumbOffStyle={{
                                        backgroundColor: Theme._ToggleOffBg,
                                    }}
                                    thumbOnStyle={{
                                        backgroundColor: Theme._ToggleOnBg,
                                    }}
                                    size="medium"
                                    onToggle={(isOn) => setToggle7(!toggle7)}
                                />
                            </View>
                        </View>
                    </View>


                    {/* <==========================> --- <==========================> */}
                    <Text style={[styles._title, Theme._QuestionsTextColor]}>Others</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._card_main, Theme._ActveTabBg, Theme._settingDataBottomBorderColor, Theme._settingDataTopBorderColor]}>
                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._share_btn} onPress={onShare}>
                            <Entypo name="share" size={25} color="#2b2b2b" style={{ marginRight: 10 }} />
                            <Text style={[styles._card_title, Theme._QuestionsTextColor]}>Share With Friends</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._card_main, Theme._ActveTabBg, Theme._settingDataBottomBorderColor, Theme._settingDataTopBorderColor]}>
                        {/* <==========================> --- <==========================> */}
                        <TouchableOpacity style={styles._share_btn}>
                            <AntDesign name="star" size={25} color="#2b2b2b" style={{ marginRight: 10 }} />
                            <Text style={[styles._card_title, Theme._QuestionsTextColor]}>Rate the App</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    _main: {
    },
    _header_main: {
        marginTop: 30,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        height: 40,

    },
    _back_icon: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _header_heading: {
        fontWeight: "bold",
        marginLeft: 10
    },
    _title: {
        fontWeight: "bold",
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20
    },
    _card_main: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    _Card_Data_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15
    },
    _card_title: {
        fontWeight: 'bold'
    },
    _share_btn: {
        flexDirection: 'row',
        alignItems: "center",
    }
});