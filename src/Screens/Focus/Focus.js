import React,{useState} from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Theme from './../../Constant/Constant';
import LinearGradient from 'react-native-linear-gradient';
import Tooltip from 'react-native-walkthrough-tooltip';
export default function Focus(props) {
    const [toolTio, setToolTop] = useState(false)

    return (
        <View style={[styles._HomePageContainer, Theme._CalendarPageContainer]}>

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
                    <TouchableOpacity style={styles._chat_btn} onPress={() => props.navigation.navigate("Messages")}>
                        <Ionicons name="chatbubbles-sharp" size={30} style={Theme._NotificationIconColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._notification_btn} onPress={() => setToolTop(true)}>
                        <Ionicons name="notifications" size={30} style={Theme._NotificationIconColor} />
                    </TouchableOpacity>
                </View>
            </View>
      {/* <==========================> --- <==========================> */}
      <Tooltip
                isVisible={toolTio}
                showChildInTooltip={true}
                accessible={true}
                allowChildInteraction={true}
                content={
                    <View style={styles._notification_show_main}>
                        <Text style={[styles._confirm_activity, Theme._QuestionsTextColor]}>Confirm your Activity</Text>
                        <Text style={[styles._welcome_back, Theme._QuestionsTextColor]}>Welcome Back !</Text>
                        <Text style={[styles._message, Theme._QuestionsTextColor]}>looks like you've been busy,Are these complete?</Text>
                        <View style={[styles._line, Theme._AllStepsLineBg]}></View>
                        <Text style={[styles._no_notification, Theme._QuestionsTextColor]}>No notifications for now!</Text>
                    </View>
                }
                placement="top"
                onClose={() => setToolTop(false)}
            >
            </Tooltip>
            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <==========================> --- <==========================> */}
                <View style={styles._todays_focus_main}>
                    <View style={styles._todays_focus}>
                        <Text style={[styles._todays_focus_heading, Theme._QuestionsTextColor]}>Today's Focus Targets</Text>
                        <FontAwesome5 name="sort-amount-up" size={20} style={Theme._TabsIconColor} />
                    </View>
                    <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]}>
                        <MaterialIcons name="add" size={25} color="white" />
                        <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                    </TouchableOpacity>
                </View>

                {/* <==========================> --- <==========================> */}
                <TouchableOpacity style={[styles._set_target_btn, Theme._SetTargetBtnBg]}>
                    <Text style={[styles._set_target_btn_text, Theme._GrayColor]}>Set a Target</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={[styles._timer_setting_btn, Theme._HomeSubmitBtnBg]}>
                <Text style={[styles._timer_setting_btn_text, Theme._TextWhiteColor]}>Timer Setting</Text>
                <FontAwesome name="angle-double-up" size={25} color="white" />
            </TouchableOpacity>
            <View style={[styles._bottom_line, Theme._HomeSubmitBtnBg]}></View>
            {/* <==========================> --- <==========================> */}
            <View style={[styles._tab_bar_main, Theme._TabBarBg, Theme._TabBarBorder]}>
                <TouchableOpacity style={styles._tabs_main} onPress={() => props.navigation.navigate("Home")}>
                    <AntDesign name="home" size={25} style={Theme._TabsIconColor} />
                    <Text style={[styles._tab_bar_title, Theme._TabsIconColor]}>Home</Text>
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
                    <MaterialCommunityIcons name="alarm-check" size={25} style={Theme._ActiveColor} />
                    <Text style={[styles._tab_bar_title, Theme._ActiveColor]}>Focus</Text>
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
    _bottom_line: {
        height: 10
    },
    _timer_setting_btn: {
        width: "40%",
        marginLeft: "10%",
        flexDirection: "row",
        alignItems: "center",
        height: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "center"
    },
    _timer_setting_btn_text: {
        fontWeight: "bold",
        marginRight: 10
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
    _todays_focus_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    _todays_focus: {
        flexDirection: "row",
        alignItems: "center"
    },
    _todays_focus_heading: {
        fontWeight: "bold",
        marginRight: 10
    },
    _set_target_btn: {
        marginVertical: 20,
        marginHorizontal: 20,
        width: 250,
        height: 250,
        borderWidth: 5,
        borderRadius: 250 / 2,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70
    },
    _set_target_btn_text: {
        fontWeight: "bold",
        fontSize: 18
    },
    _notification_show_main: {
        width: "100%",
        // height:200,
        padding: 10
    },
    _confirm_activity: {
        fontWeight: "bold",
        fontSize: 18
    },
    _line: {
        width: "100%",
        height: 2,
        marginVertical: 5
    },
    _no_notification: {
        fontWeight: "bold",
        textAlign: "center",
    }
});