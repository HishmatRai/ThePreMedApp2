import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Theme from './../../Constant/Constant';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {
    Select,
    CheckIcon,
} from "native-base"
export default function Compose(props) {
    let [language, setLanguage] = React.useState("")
    let [language2, setLanguage2] = React.useState("")
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
                    <Text style={[styles._header_heading, Theme._QuestionsTextColor]}>Compose</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={styles._back_icon} >
                        <MaterialIcons name="attach-file" size={25} color="#2b2b2b" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._back_icon} >
                        <Ionicons name="md-send-sharp" size={25} color="#2b2b2b" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles._main}>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._dropdown}>
                        <Select
                            selectedValue={language2}
                            minWidth="100%"
                            accessibilityLabel="To"
                            placeholder="To"
                            onValueChange={(itemValue) => setLanguage2(itemValue2)}
                            _selectedItem={{
                                bg: "cyan.600",
                                endIcon: <CheckIcon size={4} />,
                            }}
                        >
                            <Select.Item label="Team Motivate" value="Team Motivate" />
                            <Select.Item label="MyMentor" value="MyMentor" />
                            <Select.Item label="The Editors" value="The Editors" />
                            <Select.Item label="MCAT Scheduler" value="MCAT Scheduler" />
                            <Select.Item label="Med School Interview" value="Med School Interview" />

                        </Select>
                    </View>
                </View>
                <View style={styles._main}>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._dropdown}>
                        <Select
                            selectedValue={language}
                            minWidth="100%"
                            accessibilityLabel="Cc"
                            placeholder="Cc"
                            onValueChange={(itemValue) => setLanguage(itemValue)}
                            _selectedItem={{
                                bg: "cyan.600",
                                endIcon: <CheckIcon size={4} />,
                            }}
                        >
                            <Select.Item label="Team Motivate" value="Team Motivate" />
                            <Select.Item label="MyMentor" value="MyMentor" />
                            <Select.Item label="The Editors" value="The Editors" />
                            <Select.Item label="MCAT Scheduler" value="MCAT Scheduler" />
                            <Select.Item label="Med School Interview" value="Med School Interview" />

                        </Select>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._input_main, Theme._InputBorderColor]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Subject"
                            placeholderTextColor={Theme._InputPlaceholderTextColor}
                            color={Theme._InputTextColor}
                        />
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._input_main2, Theme._InputBorderColor]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type something here..."
                            placeholderTextColor={Theme._InputPlaceholderTextColor}
                            color={Theme._InputTextColor}
                            multiline={true}
                            numberOfLines={4}
                        />
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
    _dropdown: {
        marginTop: 10
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 0
    },
    _input_main2: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 0
    },
    input: {
        width: "100%",
        letterSpacing: 1
    },
});