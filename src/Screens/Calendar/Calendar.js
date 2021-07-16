import React,{useState} from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image,TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Theme from './../../Constant/Constant';
import CalendarPicker from './../../Components/Calendar/Calendar';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Tooltip from 'react-native-walkthrough-tooltip';
import RBSheet from "react-native-raw-bottom-sheet";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    Select,
    CheckIcon,
  } from "native-base"
export default function Calendar(props) {
    const [toolTio, setToolTop] = useState(false)
    let [language, setLanguage] = React.useState("Never");
    let [language2, setLanguage2] = React.useState("")
    let Time = [
      { label: "9:00 am", value: "9:00 am" },
      { label: "10:00 am", value: "10:00 am" },
      { label: "11:00 am", value: "11:00 am" },
      { label: "12:00 pm", value: "12:00 pm" },
      { label: "01:00 pm", value: "01:00 pm" },
      { label: "02:00 pm", value: "02:00 pm" },
      { label: "03:00 pm", value: "03:00 pm" },
      { label: "04:00 pm", value: "04:00 pm" },
      { label: "05:00 pm", value: "05:00 pm" },
      { label: "06:00 pm", value: "06:00 pm" },
      { label: "07:00 pm", value: "07:00 pm" },
      { label: "08:00 pm", value: "08:00 pm" },
      { label: "09:00 pm", value: "09:00 pm" },
      { label: "10:00 pm", value: "10:00 pm" },
      { label: "11:00 pm", value: "11:00 pm" },
      { label: "12:00 am", value: "12:00 am" },
      { label: "01:00 am", value: "01:00 am" },
      { label: "02:00 am", value: "02:00 am" },
      { label: "03:00 am", value: "03:00 am" },
      { label: "04:00 am", value: "04:00 am" },
      { label: "05:00 am", value: "05:00 am" },
      { label: "06:00 am", value: "06:00 am" },
      { label: "07:00 am", value: "07:00 am" },
      { label: "08:00 am", value: "08:00 am" },
    ]
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
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
                <View style={[styles._body, Theme._MyMentorListMain]}>
                    <CalendarPicker />
                </View>

                {/* <==========================> --- <==========================> */}
                <View style={styles._upcomming_events_main}>
                    <Text style={[styles._upcomming_events_heading, Theme._QuestionsTextColor]}>Upcomming Events</Text>
                    <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 1].open()}>
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
            <RBSheet
        ref={ref => {
          this[RBSheet + 1] = ref;
        }}
        height={600}
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Schedule Goal Event</Text>
            {/* <==========================> --- <==========================> */}
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Title</Text>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="Title"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
              />
            </View>
            {/* <==========================> --- <==========================> */}
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Category</Text>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="Shadowing"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
              />
            </View>
            {/* <==========================> --- <==========================> */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ width: "48%" }}>
                <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Start Date</Text>
                <View style={[styles._input_main, Theme._InputBorderColor]}>
                  <TouchableOpacity onPress={() => showDatepicker()} style={styles._data_picker}>
                    <Text>07/18/2021</Text>
                    <Entypo name="calendar" size={24} color={Theme._DatePickerIconColor} />
                  </TouchableOpacity>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    />
                  )}
                </View>
              </View>
              <View style={{ width: "48%" }}>
                <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Start Time</Text>
                <View style={{ marginTop: 5}}>
                <Select
                  selectedValue={language2}
                  minWidth={120}
                  accessibilityLabel="9:00 am"
                  placeholder="9:00 am"
                  onValueChange={(itemValue) => setLanguage2(itemValue)}
                  _selectedItem={{
                    bg: "cyan.600",
                    endIcon: <CheckIcon size={4} />,
                  }}
                  style={{ height: 50 }}
                >
                  {Time.map((v, i) => {
                    return (
                      <Select.Item label={v.label} value={v.value} />
                    )
                  })}

                </Select>
                </View>
              </View>
            </View>
            {/* <==========================> --- <==========================> */}
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Duratin (Hours)</Text>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="Ex: 3 or 7.5"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
              />
            </View>
            {/* <==========================> --- <==========================> */}
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Report</Text>
            <View style={styles._dropdown}>
              <Select
                selectedValue={language}
                minWidth="100%"
                accessibilityLabel="Select"
                placeholder="Select"
                onValueChange={(itemValue) => setLanguage(itemValue)}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                <Select.Item label="Never" value="Never" />
                <Select.Item label="Weekly on selected day" value="Weekly on selected day" />
                <Select.Item label="Annually on selected day" value="Annually on selected day" />
                <Select.Item label="Every Weekday (Monday to Friday)" value="Every Weekday (Monday to Friday)" />

              </Select>
            </View>
            {/* <==========================> --- <==========================> */}
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Description</Text>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="Type something here..."
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
                multiline={true}
                numberOfLines={4}
              />
            </View>
            {/* <==========================> --- <==========================> */}
            <View style={styles._update_main2}>
              <View style={styles._update_btns_main}>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 1].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 1].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Update</Text>
                </TouchableOpacity>
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
        letterSpacing: 1
      },
      _data_picker: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 50
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
});