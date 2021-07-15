import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import Theme from './../../Constant/Constant';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
export default function Search(props) {
    const [tags, onChangeTags] = React.useState("");
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
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTags}
                        value={tags}
                        placeholder="Search"
                        placeholderTextColor={Theme._InputPlaceholderTextColor}
                        color={Theme._InputTextColor}
                    />
                </View>
                <TouchableOpacity style={styles._back_icon} >
                    <AntDesign name="search1" size={25} color="#2b2b2b" />
                </TouchableOpacity>
            </View>

            {/* <==========================> --- <==========================> */}
            <View style={styles._main}>
            </View>

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
    input: {
        width: "80%",
        paddingHorizontal: 10,
        height: 40,
    },
});