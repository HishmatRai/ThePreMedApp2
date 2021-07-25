import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, TextInput, TextBase } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Theme from './../../Constant/Constant';
import RBSheet from "react-native-raw-bottom-sheet";
import Tooltip from 'react-native-walkthrough-tooltip';
import ToggleSwitch from "toggle-switch-react-native";
import { theme } from 'native-base';

export default function Focus(props) {
    const [toolTio, setToolTop] = useState(false)
    const [numberOfProduct, setNumberOfProduct] = useState(1);
    const [numberOfProduct2, setNumberOfProduct2] = useState(25);
    const [numberOfProduct3, setNumberOfProduct3] = useState(5);
    const [numberOfProduct4, setNumberOfProduct4] = useState(20);
    const [numberOfProduct5, setNumberOfProduct5] = useState(43);
    const [toggle, setToggle] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const increase = () => {
        setNumberOfProduct(numberOfProduct + 1);
    };

    const decrease = () => {
        if (numberOfProduct >= 1) {
            setNumberOfProduct(numberOfProduct - 1);
        }
    };
    const focusforTimeIncrease = () => {
        setNumberOfProduct2(numberOfProduct2 + 1);
    };

    const focusforTimeDecrease = () => {
        if (numberOfProduct2 >= 1) {
            setNumberOfProduct2(numberOfProduct2 - 1);
        }
    };
    const focusforTimeIncrease1 = () => {
        setNumberOfProduct3(numberOfProduct3 + 1);
    };

    const focusforTimeDecrease1 = () => {
        if (numberOfProduct3 >= 1) {
            setNumberOfProduct3(numberOfProduct3 - 1);
        }
    };
    const focusforTimeIncrease2 = () => {
        setNumberOfProduct4(numberOfProduct4 + 1);
    };

    const focusforTimeDecrease2 = () => {
        if (numberOfProduct4 >= 1) {
            setNumberOfProduct4(numberOfProduct4 - 1);
        }
    };
    const focusforTimeIncrease3 = () => {
        setNumberOfProduct5(numberOfProduct5 + 1);
    };

    const focusforTimeDecrease3 = () => {
        if (numberOfProduct5 >= 1) {
            setNumberOfProduct5(numberOfProduct5 - 1);
        }
    };
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
            <View style={[styles._header_main, Theme._Container2]}>
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
                    <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                        <MaterialIcons name="add" size={25} color="white" />
                        <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                    </TouchableOpacity>
                </View>

                {/* <==========================> --- <==========================> */}
                <TouchableOpacity style={[styles._set_target_btn, Theme._SetTargetBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                    <Text style={[styles._set_target_btn_text, Theme._GrayColor]}>Set a Target</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* <==========================> --- <==========================> */}
            <TouchableOpacity style={[styles._timer_setting_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 1].open()}>
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
            <RBSheet
                ref={ref => {
                    this[RBSheet + 0] = ref;
                }}
                height={200}
                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}
            >

            <View style={styles._bottomsheet_main}>
                <ScrollView>
                    <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Add Focus Targets</Text>
            {/* <==========================> --- <==========================> */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ width: "65%" }}>
                            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Focus Targets</Text>
                            <View style={[styles._input_main, Theme._InputBorderColor]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Type here to add new target"
                                    placeholderTextColor={Theme._InputPlaceholderTextColor}
                                    color={Theme._InputTextColor}
                                />
                            </View>
                        </View>
                        <View style={{ width: "30%" }}>
                            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Rounds</Text>
                            <View style={[styles._input_main, Theme._InputBorderColor]}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 50, width: "100%" }}>
                                    <TouchableOpacity onPress={() => decrease()}>
                                        <Entypo name="minus" size={25} color="gray" />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: "bold" }}>  {numberOfProduct}</Text>
                                    <TouchableOpacity onPress={() => increase()}>
                                        <MaterialIcons name="add" size={25} color="gray" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
            {/* <==========================> --- <==========================> */}
            <View style={styles._update_main2}>
                        <View style={styles._update_btns_main}>
                            <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 0].close()}>
                                <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].close()}>
                                <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
            </RBSheet>
            <RBSheet
                ref={ref => {
                    this[RBSheet + 1] = ref;
                }}
                height={250}
                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}
            >

            <View style={styles._bottomsheet_main}>
                <ScrollView>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Timer setting</Text>
                        <TouchableOpacity onPress={() => this[RBSheet + 1].close()}>
                            <Text style={[styles.done_btn, Theme._ViewMoreBtnTextColor]}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._timer_Set_main}>
                        <View style={[styles._focus_for_main, Theme._InputBorderColor]}>
                            <Text style={[styles._focus_for_main_heading, Theme._HomeAddBtnBg, Theme._TextWhiteColor]}>Focus For</Text>
                            <View style={styles._timer_set_and_show_main}>
                                <Text style={[styles._default_time, Theme._QuestionsTextColor]}>{numberOfProduct2}</Text>
                                <View>
                                    <TouchableOpacity onPress={() => focusforTimeIncrease()}>
                                        <FontAwesome name="caret-up" size={25} color="gray" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => focusforTimeDecrease()}>
                                        <FontAwesome name="caret-down" size={25} color="gray" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text styles={[styles._mins, Theme._GrayColor]}>mins</Text>
                        </View>
                        <View style={[styles._breaks_main, Theme._InputBorderColor]}>
                            <Text style={[styles._focus_for_main_heading, Theme._BgGray, Theme._TextWhiteColor]}>Breaks</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                <View style={[styles._focus_for_main2, Theme._RightBorderColor]}>
                                    <Text styles={[styles._mins, Theme._GrayColor]}>Short</Text>
                                    <View style={styles._timer_set_and_show_main}>
                                        <Text style={[styles._default_time, Theme._QuestionsTextColor]}>{numberOfProduct3}</Text>
                                        <View>
                                            <TouchableOpacity onPress={() => focusforTimeIncrease1()}>
                                                <FontAwesome name="caret-up" size={25} color="gray" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => focusforTimeDecrease1()}>
                                                <FontAwesome name="caret-down" size={25} color="gray" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text styles={[styles._mins, Theme._GrayColor]}>mins</Text>
                                </View>
                                <View style={[styles._focus_for_main2, Theme._RightBorderColor]}>
                                    <Text styles={[styles._mins, Theme._GrayColor]}>Long</Text>
                                    <View style={styles._timer_set_and_show_main}>
                                        <Text style={[styles._default_time, Theme._QuestionsTextColor]}>{numberOfProduct4}</Text>
                                        <View>
                                            <TouchableOpacity onPress={() => focusforTimeIncrease2()}>
                                                <FontAwesome name="caret-up" size={25} color="gray" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => focusforTimeDecrease2()}>
                                                <FontAwesome name="caret-down" size={25} color="gray" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text styles={[styles._mins, Theme._GrayColor]}>mins</Text>
                                </View>
                                <View style={[styles._focus_for_main3, Theme._RightBorderColor]}>
                                    <Text styles={[styles._mins, Theme._GrayColor]}>After</Text>
                                    <View style={styles._timer_set_and_show_main}>
                                        <Text style={[styles._default_time, Theme._QuestionsTextColor]}>{numberOfProduct5}</Text>
                                        <View>
                                            <TouchableOpacity onPress={() => focusforTimeIncrease3()}>
                                                <FontAwesome name="caret-up" size={25} color="gray" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => focusforTimeDecrease3()}>
                                                <FontAwesome name="caret-down" size={25} color="gray" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text styles={[styles._mins, Theme._GrayColor]}>Rounds</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%",marginVertical:20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "48%" }}>
                            <Text style={[styles.toggle_text, theme._QuestionsTextColor]}>Alaram Sound</Text>
                            <ToggleSwitch
                                isOn={toggle}
                                onColor="white"
                                offColor="white"
                                labelStyle={{ color: "black", fontWeight: "900", backgroundColor: "#3e82fd" }}
                                style={{
                                    borderWidth: 2,
                                    borderColor: Theme._ToggleBorderColor,
                                    borderRadius: 30,
                                }}
                                thumbOffStyle={{
                                    backgroundColor: Theme._ToggleOffBg,
                                }}
                                thumbOnStyle={{
                                    backgroundColor: Theme._ToggleOnBg,
                                }}
                                size="medium"
                                onToggle={(isOn) => setToggle(!toggle)}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "48%" }}>
                            <Text style={[styles.toggle_text, theme._QuestionsTextColor]}>Track Sound</Text>
                            <ToggleSwitch
                                isOn={toggle}
                                onColor="white"
                                offColor="white"
                                labelStyle={{ color: "black", fontWeight: "900", backgroundColor: "#3e82fd" }}
                                style={{
                                    borderWidth: 2,
                                    borderColor: Theme._ToggleBorderColor,
                                    borderRadius: 30,
                                }}
                                thumbOffStyle={{
                                    backgroundColor: Theme._ToggleOffBg,
                                }}
                                thumbOnStyle={{
                                    backgroundColor: Theme._ToggleOnBg,
                                }}
                                size="medium"
                                onToggle={(isOn) => setToggle2(!toggle2)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            </RBSheet>
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
        width: "10%"
    },
    _logo_main: {
        width: "70%",
    },
    _notification_main: {
        width: "20%",
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
        width:200,
      height:20,
      alignSelf:"center",
      marginTop:10
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
    },
    _bottomsheet_main: {
        paddingHorizontal: 10,
    },
    _accourdian_input_title: {
        fontWeight: 'bold',
        marginTop: 10
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
    input: {
        width: "100%",
        letterSpacing: 1,
        fontSize: 14
    },
    _update_main2: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "flex-end"
    },
    _update_btns_main: {
        flexDirection: "row",
        alignItems: "center",
        width: "60%",
        justifyContent: "space-between"
    },
    _Graduated_btn: {
        width: "48%",
        height: 35,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _Graduated_btn_text: {
        fontWeight: "bold",
        letterSpacing: 0.5
    },
    done_btn: {
        fontWeight: "bold",
        marginTop: 10
    },
    _timer_Set_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    },
    _focus_for_main: {
        width: "30%",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        height: 120
    },
    _focus_for_main2: {
        borderRightWidth: 1,
        alignItems: "center",
        width: "30%",
    },
    _focus_for_main3: {
        alignItems: "center",
        width: "30%",
    },
    _focus_for_main_heading: {
        width: "100%",
        textAlign: "center",
        paddingVertical: 5,
        fontWeight: "bold"
    },
    _timer_set_and_show_main: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"

    },
    _default_time: {
        fontWeight: "bold",
        marginRight: 10,
        fontSize: 18
    },
    _mins: {
        textAlign: "center",
        paddingVertical: 5,
        backgroundColor: "red"

    },
    _breaks_main: {
        width: "65%",
        borderWidth: 1,
        borderRadius: 5,
        height: 120
    },
    toggle_text: {
        fontWeight: "bold"
    }
});