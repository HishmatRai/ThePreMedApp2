import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Share, TextInput } from 'react-native';
import Theme from './../../Constant/Constant';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import ToggleSwitch from "toggle-switch-react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { backgroundColor } from 'styled-system';
import LinearGradient from 'react-native-linear-gradient';
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
export default function Messages(props) {
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);
    const [toggle6, setToggle6] = useState(false);
    const [toggle7, setToggle7] = useState(false);
    const [tags, onChangeTags] = React.useState("");
    let [dropdownValue, setDropdownValue] = React.useState("Inbox")
    let Time = [
        { label: "Inbox", value: "Inbox" },
        { label: "Sent", value: "Sent" },
        { label: "Drafts", value: "Drafts" },
        { label: "Tags", value: "Tags" },
        { label: "Trash", value: "Trash" },
        { label: "Important", value: "Important" },

    ]
    const  AddTags = () => {
        // // let AllTags = [];
        // // tags.push(AllTags);
        // console.log(tags);
        // tags = "";

    }
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
                <Text style={[styles._header_heading, Theme._QuestionsTextColor]}>Message</Text>
            </View>

            {/* <==========================> --- <==========================> */}
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={styles._main}>
                {/* <==========================> --- <==========================> */}
                <View style={[styles._dropdwon_main, , Theme._InputBorderColor]}>
                    <Select
                        selectedValue={dropdownValue}
                        minWidth={120}
                        accessibilityLabel="Inbox"
                        placeholder="Inbox"
                        onValueChange={(itemValue) => setDropdownValue(itemValue)}
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
            {/* </ScrollView> */}
            {dropdownValue === "Inbox" ?
                <View style={{ flex: 1 }}>
                    <View style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}>
                        <Text style={styles._no_message}>No Message to show</Text>
                    </View>
                    <TouchableOpacity style={styles._edit_btn2}>
                        <LinearGradient colors={[Theme._LinearGradientFirst, Theme._LinearGradientSecond]} style={styles._edit_btn} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <MaterialIcons name="edit" size={25} color="#2b2b2b" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                : null}
            {dropdownValue === "Sent" ?
                <View style={{ flex: 1 }}>
                    <View style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}>
                        <Text style={styles._no_message}>No Message to show</Text>
                    </View>
                </View>
                : null}
            {dropdownValue === "Drafts" ?
                <View style={{ flex: 1 }}>
                    <View style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}>
                        <Text style={styles._no_message}>No Message to show</Text>
                    </View>
                </View>
                : null}

            {dropdownValue === "Tags" ?
                <View style={styles._add_tags_main}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTags}
                        value={tags}
                        placeholder="Create new tags"
                        placeholderTextColor={Theme._InputPlaceholderTextColor}
                        color={Theme._InputTextColor}
                    />
                    <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={()=> AddTags()}>
                        <MaterialIcons name="add" size={25} color="white" />
                        <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                    </TouchableOpacity>
                </View>
                : null}
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
    _dropdwon_main: {
        width: "40%",
        margin: 20,
        borderWidth: 1
    },
    _edit_btn: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    _edit_btn2: {
        position: "absolute",
        bottom: 20,
        alignSelf: "flex-end",
        width: "100%",
        marginLeft: "80%"
    },
    _no_message: {
        alignSelf: "center",
        justifyContent: "center"
    },
    _add_tags_main: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    input: {
        backgroundColor: 'white',
        width: "65%",
        paddingHorizontal: 10,
        height: 40,
    },
    _add_btn: {
        flexDirection: "row",
        alignItems: "center",
        width: "30%",
        justifyContent: "space-between",
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 15
    },
    _add_btn_text: {
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 1
    },
});