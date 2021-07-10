import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Theme from './../../Constant/Constant';
import LinearGradient from 'react-native-linear-gradient';
import { ThemeConsumer } from 'styled-components';

export default function MyMentor(props) {
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
<View style={[styles._faqs_main,Theme._HeaderBg]}>
    <Text style={[styles._faqs_heading, Theme._QuestionsTextColor]}>FAQs</Text>
       {/* <==========================> --- <==========================> */}
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           <View style={styles._card_main}>
               <TouchableOpacity style={[styles._card,Theme._GPACardBg]}>
                   <Text style={[styles._card_data, Theme._TextWhiteColor]}>GPA</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles._card,Theme._MCATCardBg]}>
                   <Text style={[styles._card_data, Theme._TextWhiteColor]}>MCAT</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles._card,Theme._ShadowingCardBg]}>
                   <Text style={[styles._card_data, Theme._TextWhiteColor]}>Shadowing</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles._card,Theme._VolunteeringCardBg]}>
                   <Text style={[styles._card_data, Theme._TextWhiteColor]}>Volunteering</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles._card,Theme._WorkActivitiesCardBg]}>
                   <Text style={[styles._card_data, Theme._TextWhiteColor]}>Work & Activities</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles._card2,Theme._ApplicationCardBg]}>
                   <Text style={[styles._card_data, Theme._TextWhiteColor]}>Application</Text>
               </TouchableOpacity>
           </View>
       </ScrollView>
</View>

       {/* <==========================> --- <==========================> */}
       <View style={[styles._MyMentor,Theme._HeaderBg]}>
           <Text style={[styles._faqs_heading, Theme._QuestionsTextColor]}>
Ask MyMentor a question...</Text>
<Text style={[styles._MyMentor_message, Theme._GrayColor]}>Our team of med students and physician mentors read and reply to your messages daily!</Text>
<TouchableOpacity style={[styles._ask_now_btn, Theme._HomeAddBtnBg]}>
                        <Text style={[styles._ask_now_btn_text, Theme._TextWhiteColor]}>Ask Now!</Text>
                    </TouchableOpacity>
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
                    <FontAwesome name="user-circle" size={25} style={Theme._ActiveColor} />
                    <Text style={[styles._tab_bar_title, Theme._ActiveColor]}>My Mentor</Text>
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
    _faqs_main:{
    paddingHorizontal:20,
    paddingVertical:20
    },
    _faqs_heading:{
        fontWeight:'bold'
    },
    _card_main:{
marginTop:20,
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
width:"100%"
    },
    _card:{
        width:130,
        height:80,
        borderRadius:10,
        alignItems:'center',
        justifyContent:"center",
        marginRight:20,
        paddingHorizontal:20
    },
    _card2:{
        width:130,
        height:80,
        borderRadius:10,
        alignItems:'center',
        justifyContent:"center",
        paddingHorizontal:20
    },
    _card_data:{
        fontWeight:'bold',
        fontSize:16
    },
    _MyMentor:{
        paddingHorizontal:20,
        paddingVertical:20,
        marginVertical:20
    },
    _MyMentor_message:{
        width:"90%",
        fontWeight:"bold",
        marginTop:10
    },
    _ask_now_btn:{
        width:"30%",
alignSelf:"flex-end",
height:40,
borderRadius:5,
alignItems:"center",
justifyContent:"center"
    },
    _ask_now_btn_text:{
        fontWeight:'bold'
    }
});