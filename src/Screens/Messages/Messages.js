import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import Theme from './../../Constant/Constant';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {
    Select,
    CheckIcon,
} from "native-base";
export default function Messages(props) {
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
    const AddTags = () => {


    }
    return (

        <View style={[styles.container, Theme._HeaderBg]}>
            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor={Theme._StatusBarBg}
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <View style={[styles._header_main, Theme._HeaderBg]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                        <Ionicons name="arrow-back" size={25} color="#2b2b2b" />
                    </TouchableOpacity>
                    <Text style={[styles._header_heading, Theme._QuestionsTextColor]}>Message</Text>
                </View>
                <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.navigate("Search")}>
                    <AntDesign name="search1" size={25} color="#2b2b2b" />
                </TouchableOpacity>
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
                    <TouchableOpacity style={styles._edit_btn2} onPress={()=> props.navigation.navigate("Compose")}>
                        <LinearGradient colors={[Theme._LinearGradientFirst, Theme._LinearGradientSecond]} style={styles._edit_btn} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <MaterialIcons name="edit" size={25} color="white" />
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
                <>
                    <View style={[styles._add_tags_main, Theme._HomePageContainer]}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeTags}
                            value={tags}
                            placeholder="Create new tags"
                            placeholderTextColor={Theme._InputPlaceholderTextColor}
                            color={Theme._InputTextColor}
                        />
                        <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={() => AddTags()}>
                            <MaterialIcons name="add" size={25} color="white" />
                            <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles._show_tags_main}>
                        <Ionicons name="ios-pricetags-outline" size={20} color="#2b2b2b" />
                        <Text style={[styles._tags, Theme._QuestionsTextColor]}>G</Text>
                    </View>
                </>
                : null}
            {dropdownValue === "Trash" ?
                <View style={{ flex: 1 }}>
                    <View style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}>
                        <Text style={styles._no_message}>No Message to show</Text>
                    </View>
                </View>
                : null}
            {dropdownValue === "Important" ?
                <View style={{ flex: 1 }}>
                    <View style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}>
                        <Text style={styles._no_message}>No Message to show</Text>
                    </View>
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
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        elevation: 0.8,
        justifyContent: "space-between"
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
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10

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
    _show_tags_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 20
    },
    _tags: {
        marginLeft: 10
    }
});