import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Theme from './../../Constant/Constant';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import ToggleSwitch from "toggle-switch-react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Settings(props) {
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Guyana", value: "Guyana" },
        { label: "Pakistan", value: "Pakistan" },
        { label: "India", value: "India" },
        { label: "USA", value: "USA" },
      ]);
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles._main}>
                    <Text style={[styles._title, Theme._QuestionsTextColor]}>Push Notifications</Text>
                    <View style={[styles._card_main, Theme._ActveTabBg]}>
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text>Today's Quote</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>


                                <ToggleSwitch
                                    isOn={toggle}
                                    onColor="white"
                                    offColor="white"
                                    // label="Example label"
                                    labelStyle={{ color: "black", fontWeight: "900" }}
                                    style={{
                                        borderWidth: 2,
                                        borderColor: "black",
                                        borderRadius: 30,
                                    }}
                                    thumbOffStyle={{
                                        color: "blue",
                                        backgroundColor: "white",
                                        borderWidth: 3,
                                        borderColor: "red",
                                    }}
                                    thumbOnStyle={{
                                        color: "blue",
                                        backgroundColor: "white",
                                        borderWidth: 3,
                                        borderColor: "green",
                                    }}
                                    size="medium"
                                    onToggle={(isOn) => setToggle({ toggle: !toggle })}
                                />
                            </View>
                        </View>
                        <View style={styles._Card_Data_main}>
                            <View style={styles._Card_Data_title_main}>
                                <Text>Today's Quote</Text>
                            </View>
                            <View style={styles._Card_Data_toggle_btn_main}>
                            </View>

                        </View>
                    </View>

                </View>
                            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select"
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#fff",
                  width: "100%",
                  alignSelf: "center",
                  borderRadius: 5,
                }}
                containerStyle={{
                  width: "100%",
                  alignSelf: "center",
                }}
                textStyle={{
                  fontSize: 16,
                  color: "#8F92A1",
                }}
                labelStyle={{
                  fontSize: 16,
                  color: "#8F92A1",
                }}
                arrowIconStyle={{ color: "#8F92A1" }}
              />
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
    },
    _card_main: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20
    },
    _Card_Data_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});