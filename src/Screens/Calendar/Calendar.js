import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Theme from './../../Constant/Constant';
import CalendarPicker from './../../Components/Calendar/Calendar';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
export default function Calendar(props) {
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
                <View style={[styles._body, Theme._MyMentorListMain]}>
                    <CalendarPicker />
                </View>

                {/* <==========================> --- <==========================> */}
                <View style={styles._upcomming_events_main}>
                    <Text style={[styles._upcomming_events_heading, Theme._QuestionsTextColor]}>Upcomming Events</Text>
                    <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]}>
                        <Fontisto name="doctor" size={20} color="white" />
                    </TouchableOpacity>
                    <Text style={[styles._no_event, Theme._QuestionsTextColor]}>No events to show</Text>
                </View>
            </ScrollView>

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
                    <Entypo name="calendar" size={25} style={Theme._ActiveColor} />
                    <Text style={[styles._tab_bar_title, Theme._ActiveColor]}>Calendar</Text>
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
    _body: {
        flex: 1,
        paddingTop: 30,
        borderBottomWidth: 2,
        paddingBottom: 20
    },
    _upcomming_events_main: {
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    _upcomming_events_heading: {
        fontWeight: "bold"
    },
    _doctor_btn: {
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        alignSelf: "flex-end"
    },
    _no_event: {
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 50
    }
});