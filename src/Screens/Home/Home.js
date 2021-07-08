import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Theme from './../../Constant/Constant';
import LinearGradient from 'react-native-linear-gradient';

export default function Home(props) {
    const [activeBtn, setActiveBtn] = useState("");
    let QuestionOption = [
        { option: "A. Nucleases degrade DNAFFF" },
        { option: "B. Nucleases degrade DNAFFF" },
        { option: "C. Nucleases degrade DNAFFF" },
        { option: "D. Nucleases degrade DNAFFF" },
        { option: "E. Nucleases degrade DNAFFF" },
    ]
    return (
        <View style={[styles._HomePageContainer, Theme._HomePageContainer]}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor={Theme._StatusBarBg}
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <View style={[styles._header_main, Theme._HeaderBg]}>
                <View style={styles._menu_main}>
                    <TouchableOpacity style={styles._menu_btn} onPress={() => props.navigation.openDrawer()}>
                        <Entypo name="menu" size={30} style={Theme._MenuIconColor} />
                    </TouchableOpacity>
                </View>
                <View style={styles._logo_main}>
                    <Image
                        source={require("./../../img/logo.png")}
                        style={styles._logo}
                    />
                </View>
                <View style={styles._notification_main}>
                    <TouchableOpacity style={styles._chat_btn}>
                        <Ionicons name="chatbubbles-sharp" size={30} style={Theme._NotificationIconColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._notification_btn}>
                        <Ionicons name="notifications" size={30} style={Theme._NotificationIconColor} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <==========================> --- <==========================> */}
                <LinearGradient colors={[Theme._HomeCardLinearGradientFirst, Theme._HomeCardLinearGradientSecond]} style={styles._Card_main} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <View style={styles._lines_main}>
                        <View style={[styles._line, Theme._LineBgWhite]}></View>
                        <Text style={[styles._card_header_title, Theme._TextWhiteColor]}>Today's Quote</Text>
                        <View style={[styles._line, Theme._LineBgWhite]}></View>
                    </View>
                    <Text style={[styles.card_data, Theme._TextWhiteColor]}>Anything is possible. You can be told that you have a 90-percent chance or a 50-percent chance or a 1-percent chance, but you have to believe, and you have to fight.</Text>
                    <View style={styles._lines_main}>
                        <View style={[styles._line, Theme._LineBgWhite]}></View>
                        <Text style={[styles._card_bottom_title, Theme._TextWhiteColor]}>lance Armstrong</Text>
                        <View style={[styles._line, Theme._LineBgWhite]}></View>
                    </View>
                </LinearGradient>

                {/* <==========================> --- <==========================> */}
                <View style={[styles._progress_main, Theme._HeaderBg]}>
                    <Text style={[styles._progress_heading, Theme._MenuIconColor]}>Progress</Text>
                    <View style={[styles._progress_bar, Theme._HomeScreenProgressBarBg]}></View>
                    <View style={styles._progress_Titles_main}>
                        <View style={[styles._progress_round_circle, Theme._HomeGPAProgressRoundCircleBg]}></View>
                        <Text style={[styles._progress_Title, Theme._GrayColor]}>GPA</Text>
                        <View style={[styles._progress_round_circle, Theme._HomeMCATProgressRoundCircleBg]}></View>
                        <Text style={[styles._progress_Title, Theme._GrayColor]}>MCAT</Text>
                        <View style={[styles._progress_round_circle, Theme._HomeShadowingProgressRoundCircleBg]}></View>
                        <Text style={[styles._progress_Title, Theme._GrayColor]}>Shadowing</Text>
                        <View style={[styles._progress_round_circle, Theme._HomeVolunteeringProgressRoundCircleBg]}></View>
                        <Text style={[styles._progress_Title, Theme._GrayColor]}>Volunteering</Text>
                        <View style={[styles._progress_round_circle, Theme._HomeActivitiesProgressRoundCircleBg]}></View>
                        <Text style={[styles._progress_Title, Theme._GrayColor]}>Activities</Text>
                    </View>
                </View>

                {/* <==========================> --- <==========================> */}
                <View style={[styles._focus_target_main, Theme._HeaderBg]}>
                    <View style={styles._focus_target_text_main}>
                        <Text style={[styles._focus_target_heading, Theme._MenuIconColor]}>Today's Focus Targets</Text>
                        <Text style={[styles._focus_target_sub_heading, Theme._GrayColor]}>No focus targets set for today.</Text>
                    </View>

                    <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]}>
                        <MaterialIcons name="add" size={25} color="white" />
                        <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                    </TouchableOpacity>
                </View>

                {/* <==========================> --- <==========================> */}
                <View style={[styles._questions_main, Theme._HeaderBg]}>
                    <Text style={[styles._questions_heading, Theme._QuestionsTextColor]}>MCAT Question of the Day</Text>
                    <Text style={[styles._questions_des, Theme._QuestionsTextColor, Theme._QuestionsBgColor]}>In the 1950s, science and engineering melded with the production of computers and artificial intelligence. The model of information processing applied to these fields.</Text>
                    {QuestionOption.map((v, i) => {
                        return (
                            <TouchableOpacity style={[styles._questions_show_main, Theme._QuestionsOptionBg]}
                                onPress={() => setActiveBtn(i)}
                                style={
                                    activeBtn === i
                                        ? {
                                            backgroundColor: "#41C188",
                                            marginTop: 10,
                                            borderRadius: 5,
                                            paddingVertical: 10,
                                            paddingHorizontal: 10
                                        }
                                        : {
                                            backgroundColor: "#EFEFEF",
                                            marginTop: 10,
                                            borderRadius: 5,
                                            paddingVertical: 10,
                                            paddingHorizontal: 10

                                        }
                                }>

                                <Text style={[styles._questions_text, Theme._QuestionsOptionTextColor]}>{v.option}</Text>
                            </TouchableOpacity>
                        )
                    })}

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={[styles._submit_btn, Theme._HomeSubmitBtnBg]}>
                        <Text style={[styles._submit_btn_text, Theme._TextWhiteColor]}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* <==========================> --- <==========================> */}
            <View style={[styles._tab_bar_main, Theme._TabBarBg, Theme._TabBarBorder]}>
                <TouchableOpacity style={styles._tabs_main} onPress={() => props.navigation.navigate("Home")}>
                    <AntDesign name="home" size={25} style={Theme._ActiveColor} />
                    <Text style={[styles._tab_bar_title, Theme._ActiveColor]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs_main} onPress={() => props.navigation.navigate("Progress")}>
                    <Feather name="align-center" size={25} style={Theme._TabsIconColor} />
                    <Text style={[styles._tab_bar_title, Theme._TabsIconColor]}>Progress</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs_main} onPress={() => props.navigation.navigate("MyMentor")}>
                    <FontAwesome name="user-circle" size={25} style={Theme._TabsIconColor} />
                    <Text style={[styles._tab_bar_title, Theme._TabsIconColor]}>My Mentor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs_main} onPress={() => props.navigation.navigate("Calendar")}>
                    <Entypo name="calendar" size={25} style={Theme._TabsIconColor} />
                    <Text style={[styles._tab_bar_title, Theme._TabsIconColor]}>Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs_main} onPress={() => props.navigation.navigate("Focus")}>
                    <MaterialCommunityIcons name="alarm-check" size={25} style={Theme._TabsIconColor} />
                    <Text style={[styles._tab_bar_title, Theme._TabsIconColor]}>Focus</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    _HomePageContainer: {
        flex: 1,
    },
    // ====================> Header <====================
    _header_main: {
        elevation: 0.8,
        marginTop: 23,
        height: 50,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _menu_main: {
        width: "20%"
    },
    _logo_main: {
        width: "55%",
    },
    _notification_main: {
        width: "25%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _menu_btn: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2
    },
    _chat_btn: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
    },
    _notification_btn: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
    },
    _logo: {
        width: 130,
        height: 30
    },

    // ====================> TabBar <====================
    _tab_bar_main: {
        // position: "absolute",
        // bottom: 0,
        width: "100%",
        elevation: 0.8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 70,
        borderTopWidth: 1

    },
    _tabs_main: {
        width: "20%",
        alignSelf: "center",
        alignItems: "center",
    },
    _tab_bar_title: {
        fontSize: 12
    },

    // ====================>  <====================
    _Card_main: {
        margin: 10,
        borderRadius: 10,
        padding: 20
    },
    _lines_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    _line: {
        height: 2,
        width: "30%",
    },
    _card_header_title: {
        fontSize: 18,
        fontWeight: "bold",
        width: "40%",
        textAlign: "center"
    },
    _card_bottom_title: {
        fontSize: 15,
        fontWeight: "bold",
        width: "40%",
        textAlign: "center"
    },
    card_data: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginVertical: 10
    },
    _progress_main: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    _progress_heading: {
        fontSize: 18,
        letterSpacing: 0.5,
        fontWeight: "bold"
    },
    _progress_bar: {
        height: 20,
        borderRadius: 20,
        marginVertical: 20
    },
    _progress_round_circle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2
    },
    _progress_Titles_main: {
        flexDirection: "row",
        alignItems: "center"
    },
    _progress_Title: {
        marginHorizontal: 5,
        fontWeight: "bold",
        fontSize: 12
    },
    _focus_target_main: {
        marginVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 30
    },
    _focus_target_text_main: {
        width: "70%"
    },
    _focus_target_heading: {
        fontWeight: 'bold'
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
    _questions_main: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    _questions_heading: {
        fontWeight: "bold",
        fontSize: 18
    },
    _questions_des: {
        fontSize: 16,
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    _questions_show_main: {
        marginTop: 10,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    _submit_btn: {
        marginTop: 20,
        width: "30%",
        alignSelf: "flex-end",
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _submit_btn_text: {
        letterSpacing: 0.5
    }
});