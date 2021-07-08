import React,{useState} from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Theme from './../../Constant/Constant';
import LinearGradient from 'react-native-linear-gradient';
import Goals from './../../Components/Goals/Goals'
export default function Progress(props) {
    const [tabs, setTabs] = useState(0);
    let TabsTitle =[
        {title:"Goals"},
        {title:"Application"},
        {title:"Top Schools"},
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
                {/* <==========================> --- <==========================> */}
<View style={styles.tabs_main}>
<View style={styles._tabs}>
    {TabsTitle.map((v,i)=>{
        return(
            <TouchableOpacity  onPress={() => setTabs(i)}
            style={[tabs===i?[styles.tabActive,Theme._ActveTabBg]:styles.tabsList]}
            >
                <Text style={[tabs===i?[styles.tabText,Theme._ActveTabColor]:[styles.tabText,Theme.tabsColor]]}>{v.title}</Text>
            </TouchableOpacity>
        )
    })}
</View>
<TouchableOpacity>
    <Text>228 days</Text>
</TouchableOpacity>
</View>
            <ScrollView showsVerticalScrollIndicator={false}>
{tabs === 0 ?
<View style={[styles._tabs_data_show,Theme._TabsDataBg]}>
  <Goals/>
</View> 
:null}
{tabs === 1 ?
    <View style={[styles._tabs_data_show,Theme._TabsDataBg]}>
    <Text>fss</Text>
</View> 
:null}

{tabs === 2 ?
    <View style={[styles._tabs_data_show,Theme._TabsDataBg]}>
    <Text>dss</Text>
</View> 
:null}
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
    tabs_main:{
        marginTop:20,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    _tabs:{
        flexDirection:"row",
        width:"70%",
        alignItems:"center",
        justifyContent:"space-between"
    },
    tabActive:{
        paddingHorizontal:10,
        paddingVertical:15,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    tabsList:{
        paddingHorizontal:10,
        paddingVertical:15,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    tabText:{
        fontWeight:"bold",
        fontSize:16
    },
    _tabs_data_show:{
        paddingHorizontal:10,
        paddingVertical:20
    }
});