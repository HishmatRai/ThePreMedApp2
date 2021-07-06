import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
export default function SignUp(props) {
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
                <Text></Text>
                <Text></Text>
                <Text>Sifn Up</Text>
                <TouchableOpacity style={{ backgroundColor: "green" }} onPress={() => props.navigation.navigate("Login")}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "blue", height: 30 }} onPress={() => props.navigation.navigate("Home")}>
                    <Text>Home</Text>
                </TouchableOpacity>
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
});