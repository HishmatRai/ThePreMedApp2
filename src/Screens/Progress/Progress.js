import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Theme from './../../Constant/Constant';
import Goals from './../../Components/Goals/Goals';
import Applications from './../../Components/Applications/Applications';
import Tooltip from 'react-native-walkthrough-tooltip';
import TopSchoolsTabs from './../../Components/TopSchoolsTabs/TopSchoolsTabs';
export default function Progress(props) {
    const [tabs, setTabs] = useState(0);
    const [toolTio, setToolTop] = useState(false)
    const [toolTio2, setToolTop2] = useState(false)
    let TabsTitle = [
        { title: "Goals" },
        { title: "Application" },
        { title: "Top Schools" },
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
            <View style={styles.tabs_main}>
                <View style={styles._tabs}>
                    {TabsTitle.map((v, i) => {
                        return (
                            <TouchableOpacity onPress={() => setTabs(i)}
                                style={[tabs === i ? [styles.tabActive, Theme._ActveTabBg] : styles.tabsList]}
                            >
                                <Text style={[tabs === i ? [styles.tabText, Theme._ActveTabColor] : [styles.tabText, Theme.tabsColor]]}>{v.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <TouchableOpacity onPress={() => setToolTop2(true)} style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginRight: 5 }}>6 days</Text>
                    <AntDesign name="infocirlceo" size={15} style={Theme._TabsIconColor} />
                </TouchableOpacity>
            </View>

            {/* <==========================> --- <==========================> */}
            <Tooltip
                isVisible={toolTio2}
                showChildInTooltip={true}
                accessible={true}
                allowChildInteraction={true}
                content={
                    <View style={styles._notification_show_main2}>
                        <View style={styles._data_show}>
                            <Text style={[styles._days_heading, Theme._QuestionsTextColor]}>Today</Text>
                            <Text style={[styles._days_sub_heading, Theme._QuestionsTextColor]}>16 Jul</Text>
                        </View>
                        <View style={styles._popup_line}></View>
                        <View style={styles._data_show}>
                            <Text style={[styles._days_heading, Theme._QuestionsTextColor]}>6 days</Text>
                        </View>
                        <View style={styles._popup_line}></View>
                        <View style={styles._data_show}>
                            <Text style={[styles._days_heading, Theme._QuestionsTextColor]}>Due</Text>
                            <Text style={[styles._days_sub_heading, Theme._QuestionsTextColor]}>23 Jul</Text>
                        </View>
                    </View>
                }
                placement="top"
                onClose={() => setToolTop(false)}
            >
            </Tooltip>
            <ScrollView showsVerticalScrollIndicator={false}>
                {tabs === 0 ?
                    <View style={[styles._tabs_data_show, Theme._TabsDataBg]}>
                        <Goals />
                    </View>
                    : null}
                {tabs === 1 ?
                    <View style={[styles._tabs_data_show, Theme._TabsDataBg]}>
                        <Applications />
                    </View>
                    : null}

                {tabs === 2 ?
                    <View style={[styles._tabs_data_show, Theme._TabsDataBg]}>
                        < TopSchoolsTabs />
                    </View>
                    : null}
            </ScrollView>

            {/* <==========================> --- <==========================> */}
            <View style={[styles._tab_bar_main, Theme._TabBarBg, Theme._TabBarBorder]}>
                <TouchableOpacity style={styles._tabs_main} onPress={() => props.navigation.navigate("Home")}>
                    <AntDesign name="home" size={25} style={Theme._TabsIconColor} />
                    <Text style={[styles._tab_bar_title, Theme._TabsIconColor]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs_main} onPress={() => props.navigation.navigate("Progress")}>
                    <Feather name="align-center" size={25} style={Theme._ActiveColor} />
                    <Text style={[styles._tab_bar_title, Theme._ActiveColor]}>Progress</Text>
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
    tabs_main: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _tabs: {
        flexDirection: "row",
        width: "70%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    tabActive: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    tabsList: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    tabText: {
        fontWeight: "bold",
        fontSize: 16
    },
    _tabs_data_show: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flex: 1
    },
    _notification_show_main: {
        width: "100%",
        // height:200,
        padding: 10
    },
    _notification_show_main2: {
        width: "100%",
        padding: 10,
        flexDirection: "row",
        alignItems: "center"
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
    },
    _data_show: {
        width: "20%",
        alignItems: "center"
    },
    _popup_line: {
        backgroundColor: "black",
        height: 2,
        width: "20%"
    },
    _days_heading: {
        fontWeight: "bold"
    },
    _days_sub_heading: {

    }
});