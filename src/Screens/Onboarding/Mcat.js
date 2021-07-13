import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Theme from './../../Constant/Constant';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import LinearGradient from 'react-native-linear-gradient';
export default function Mcat(props) {
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
                            <View style={styles._data_header_main}>
                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._All_numbers_main, Theme._AllStepsNumberBorderColor]]}>
                                        <Text style={[styles._active_number_text, Theme._GrayColor]}>1</Text>
                                    </View>
                                </View>
                                <View style={[styles._line_main, Theme._AllStepsLineBg]}></View>
                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._active_number, Theme._ActiveNumberBg]]}>
                                        <Text style={[styles._active_number_text, Theme._TextWhiteColor]}>2</Text>
                                    </View>
                                </View>
                                <View style={styles._header_heading_2_main}>
                                    <Text style={[styles._active_heading, Theme._QuestionsTextColor]}>MCAT</Text>
                                </View>
                                <View style={[styles._line_main, Theme._AllStepsLineBg]}></View>
                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._All_numbers_main, Theme._AllStepsNumberBorderColor]]}>
                                        <Text style={[styles._active_number_text, Theme._GrayColor]}>3</Text>
                                    </View>
                                </View>
                                <View style={[styles._line_main, Theme._AllStepsLineBg]}></View>
                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._All_numbers_main, Theme._AllStepsNumberBorderColor]]}>
                                        <Text style={[styles._active_number_text, Theme._GrayColor]}>4</Text>
                                    </View>
                                </View>
                                <View style={[styles._line_main, Theme._AllStepsLineBg]}></View>
                                <View style={[styles._data_number_main]}>
                                    <View style={[[styles._All_numbers_main, Theme._AllStepsNumberBorderColor]]}>
                                        <Text style={[styles._active_number_text, Theme._GrayColor]}>5</Text>
                                    </View>
                                </View>
                            </View>
                            <Image
                                source={require("./../../img/logoIcon.png")}
                                style={styles._logo}
                            />
                            <Text style={[styles._current_education, Theme._QuestionsTextColor]}>Tell Us About Your Currenct Education</Text>
                            <Text style={[styles._graduated_colllege, Theme._GrayColor]}>have you graduated college?</Text>
                            <View style={styles._no_yes_btn_main}>
                                <TouchableOpacity style={[styles._no_btn, Theme._NoBtnBg]} onPress={() => props.navigation.navigate("EducationNo")}>
                                    <Text style={[styles._no_btn_text, Theme._GrayColor]}>No</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles._no_btn, Theme._YesBtnBg]} onPress={() => props.navigation.navigate("EducationYes")}>
                                    <Text style={[styles._no_btn_text, Theme._TextWhiteColor]}>Yes</Text>
                                </TouchableOpacity>
                            </View>

                                         {/* <==========================> --- <==========================> */}
                                         <View style={styles._skip_back_main}>
                                <TouchableOpacity style={styles._skip_btn} onPress={() => props.navigation.navigate0("Onboarding")}>
                                    <Entypo name="chevron-small-left" size={24} color="gray" />
                                    <Text style={[styles._skip_btn_text, Theme._GrayColor]}>Back</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles._skip_btn} onPress={() => props.navigation.navigate("")}>
                                    <Text style={[styles._skip_btn_text, Theme._SkipBtnTextColor]}>Skip</Text>
                                    <Entypo name="chevron-small-right" size={24} color="#4888f8" />
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
        width: "15%",
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
    _no_yes_btn_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "40%",
        alignSelf: "center"
    },
    _no_btn: {
        width: "45%",
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _no_btn_text: {
        fontWeight: 'bold'
    },
    _skip_btn: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        marginTop: 20
    },
    _skip_back_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        justifyContent: "space-between"
    },
});