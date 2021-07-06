import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function Progress(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="black"
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <View style={styles._header_main}>
                <View style={styles._menu_main}>
                    <TouchableOpacity style={styles._menu_btn}>
                        <Entypo name="menu" size={30} color="gray" />
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
                        <Ionicons name="chatbubbles-sharp" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._notification_btn}>
                        <Ionicons name="notifications" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ backgroundColor: "red", color: "white", fontSize: 40 }}>Progress</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
                <Text>dfdfsd</Text>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    // ====================> Header <====================
    _header_main: {
        backgroundColor: "white",
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
        backgroundColor: "white",
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
    }
});