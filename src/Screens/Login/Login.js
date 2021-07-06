import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, RecyclerViewBackedScrollView } from 'react-native';
export default function Login(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="white"
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles._main}>
                    <Image
                        source={require("./../../img/logo.png")}
                        style={styles._logo}
                    />
                    <Text style={styles._title}>Welcone back! please log in to your account</Text>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _main: {
        margin: 20
    },
    _logo: {
        marginTop: 100,
        width: 220,
        height: 40,
        alignSelf: "center"
    },
    _title: {
        color: "gray",
        textAlign: "center",
        marginTop: 10
    }
});