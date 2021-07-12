import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import Theme from './../../Constant/Constant';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
export default function Onboarding(props) {
    return (
        <View style={[styles.container, Theme._Container]}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor={Theme._StatusBarBg}
                translucent={true}
            />
            {/* <==========================> --- <==========================> */}
            <LinearGradient colors={[Theme._OnboardingGradientFirst, Theme._OnboardingGradientSecond]} style={styles.container} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles._main}>
                        <Entypo name="facebook-with-circle" size={44} color="white" />
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    _main: {
        margin: 20,
        marginTop: 100
    },

});