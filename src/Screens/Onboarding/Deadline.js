import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import Theme from './../../Constant/Constant';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {
    Select,
    CheckIcon,
    Link
} from "native-base"
export default function Deadline(props) {
    let [language, setLanguage] = React.useState("")
    return (
        <View style={[styles.container, Theme._Container]}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor={Theme._StatusBarBg}
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <LinearGradient colors={[Theme._OnboardingGradientFirst, Theme._OnboardingGradientSecond]} style={styles.container} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._main}>
                        <View style={[styles._header_main]}>
                            <Entypo name="facebook-with-circle" size={44} color="white" />
                            <Text style={[styles._header_heading, Theme._TextWhiteColor]}>THE PREMED APP</Text>
                        </View>
                        {/* <==========================> --- <==========================> */}
                        <View style={[styles._data_main, Theme._OnboardingDataBg]}>

                            {/* <==========================> --- <==========================> */}
                            <View style={styles._data_header_main}>
                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._All_numbers_main, Theme._DoneStaps]]}>
                                        <Ionicons name="checkmark" size={20} color="#4888f8" />
                                    </View>
                                </View>
                                <View style={[styles._line_main, Theme._DoneStapsLineBg]}></View>
                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._All_numbers_main, Theme._DoneStaps]]}>
                                        <Ionicons name="checkmark" size={20} color="#4888f8" />
                                    </View>
                                </View>
                                <View style={[styles._line_main, Theme._DoneStapsLineBg]}></View>
                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._All_numbers_main, Theme._DoneStaps]]}>
                                        <Ionicons name="checkmark" size={20} color="#4888f8" />
                                    </View>
                                </View>
                                <View style={[styles._line_main, Theme._DoneStapsLineBg]}></View>

                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._All_numbers_main, Theme._DoneStaps]]}>
                                        <Ionicons name="checkmark" size={20} color="#4888f8" />
                                    </View>
                                </View>

                                <View style={[styles._line_main, Theme._DoneStapsLineBg]}></View>

                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._active_number, Theme._ActiveNumberBg]]}>
                                        <Text style={[styles._active_number_text, Theme._TextWhiteColor]}>5</Text>
                                    </View>
                                </View>
                                <View style={styles._header_heading_2_main}>
                                    <Text style={[styles._active_heading, Theme._QuestionsTextColor]}>Deadline</Text>
                                </View>
                            </View>

                            {/* <==========================> --- <==========================> */}
                            <Entypo name="calendar" size={40} color="#23527c" style={styles._scaner_icon} />

                            {/* <==========================> --- <==========================> */}
                            <Text style={[styles._current_education, Theme._QuestionsTextColor]}>Let's Set a Deadline</Text>
                            <Text style={[styles._sub_heading, Theme._GrayColor]}>When do you plan on submiting your medical school application?</Text>
                            {/* <==========================> --- <==========================> */}


                            {/* <==========================> --- <==========================> */}
                            <TouchableOpacity style={[styles._continue_btn, Theme._HomeAddBtnBg]} onPress={() => props.navigation.navigate("Home")}>
                                <Text style={[styles._continue_btn_text, Theme._TextWhiteColor]}>Finish</Text>
                            </TouchableOpacity>
                            {/* <==========================> --- <==========================> */}
                            <View style={styles._skip_back_main}>
                                <TouchableOpacity style={styles._skip_btn} onPress={() => props.navigation.goBack()}>
                                    <Entypo name="chevron-small-left" size={24} color="gray" />
                                    <Text style={[styles._skip_btn_text, Theme._GrayColor]}>Back</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    _main: {
        margin: 20,
        marginTop: 100,
    },
    _header_main: {
        alignSelf: "center",
        alignItems: "center"
    },
    _header_heading: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5
    },
    _data_main: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5
    },

    // ================ ===================
    _data_header_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _data_number_main: {
        width: "10%",
        alignItems: "center"
    },
    _header_heading_2_main: {
        width: "22%",
    },
    _line_main: {
        width: "7%",
        height: 2
    },
    _active_number: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _active_number_text: {
        fontWeight: 'bold'
    },
    _active_heading: {
        fontWeight: "bold"
    },
    _All_numbers_main: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1
    },
    _logo: {
        width: 50,
        height: 50,
        alignSelf: "center",
        marginVertical: 20
    },
    // ================ ===================
    _current_education: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    _graduated_colllege: {
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10
    },

    _skip_btn: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
    },
    _skip_back_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        justifyContent: "space-between"
    },
    _accourdian_input_title: {
        fontWeight: 'bold',
        marginTop: 10
    },
    _hours: {
        marginLeft: 10,
        marginTop: 13,
        fontSize: 10
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
        borderWidth: 1,
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 0
    },
    _input_main2: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
        borderWidth: 1,
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 0,
        width: "80%"
    },
    input: {
        width: "100%",
        letterSpacing: 1
    },
    _major_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    add_btn: {
        width: "15%",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
    _credits_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _credits: {
        width: "48%"
    },
    _continue_btn: {
        width: "30%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        alignSelf: "flex-end",
        marginTop: 30,
        marginBottom: 30
    },
    _continue_btn_text: {
        fontWeight: "bold"
    },
    _scaner_icon: {
        alignSelf: "center",
        marginVertical: 20
    },
    _limit: {
        alignSelf: "flex-end",
        fontSize: 10
    },
    _sub_heading: {
        textAlign: "center",
        marginVertical: 20
    }
});