import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import Theme from './../../Constant/Constant';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
export default function Onboarding(props) {
    const [email, onChangeEmail] = React.useState("");
    const [passwordEyeIcon, setPasswordEyeIcon] = useState(true);
    const [password, onChangePassword] = React.useState("");
    const [remember, setRemember] = useState(true);
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles._main}>
                    <Image
                        source={require("./../../img/logo.png")}
                        style={styles._logo}
                    />

                    {/* <==========================> --- <==========================> */}
                    <Text style={[styles._title, Theme._GrayColor]}>Welcone back! please log in to your account</Text>
                    <Text style={[styles._heading, Theme._HeadingColorBlue]}>Onboarding</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._input_main, Theme._InputBorderColor]}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Email"
                            placeholderTextColor={Theme._InputPlaceholderTextColor}
                            color={Theme._InputTextColor}
                        />
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._input_main, Theme._InputBorderColor]}>
                        <TextInput
                            style={styles.inputPassword}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Password"
                            placeholderTextColor={Theme._InputPlaceholderTextColor}
                            secureTextEntry={passwordEyeIcon}
                            color={Theme._InputTextColor}
                        />
                        {passwordEyeIcon ? (
                            <Entypo name="eye" size={24} color={Theme._PasswordHideShowIconColor}
                                onPress={() => setPasswordEyeIcon(!passwordEyeIcon)} />
                        ) : (
                            <Entypo name="eye-with-line" size={24} color={Theme._PasswordHideShowIconColor}
                                onPress={() => setPasswordEyeIcon(!passwordEyeIcon)} />
                        )}
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._remember_and_forgot_password_main}>
                        <View style={styles._remember_main}>
                            <TouchableOpacity style={[styles._remember_btn, Theme._RememberBtnBg]}>
                                {remember ? (
                                    <Ionicons name="checkmark" size={24}
                                        color="white"
                                        onPress={() => setRemember(!remember)}
                                    />
                                ) : (
                                    <Ionicons name="checkmark" size={24}
                                        color="#a4a4a4"
                                        onPress={() => setRemember(!remember)}
                                    />
                                )}
                            </TouchableOpacity>
                            <Text style={[styles._remember_text, Theme._GrayColor]}>Remember Me</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={[styles._forgot_password_btn_txt, Theme._HeadingColorBlue]}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._login_btn} onPress={()=> props.navigation.navigate("Home")}>
                        <LinearGradient colors={[Theme._LinearGradientFirst, Theme._LinearGradientSecond]} style={styles._login_btn} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <Text style={[styles._login_btn_text, Theme._TextWhiteColor]}>Log In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._login_btn} >
                        <LinearGradient
                            colors={[Theme._LinearGradientFirst, Theme._LinearGradientSecond]}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={styles.grediant}
                        >
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate("SignUp")}>
                                <Text style={[styles.buttonText, Theme._HeadingColorBlue]}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        textAlign: "center",
        marginTop: 10
    },
    _heading: {
        marginTop: 50,
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 1
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 0
    },
    input: {
        width: "100%",
        letterSpacing: 1
    },
    inputPassword: {
        width: "85%",
        letterSpacing: 1,
    },
    _remember_and_forgot_password_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
    },
    _remember_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    _remember_text: {
        fontSize: 16,
        marginLeft: 10,
        letterSpacing: 1

    },
    _forgot_password_btn_txt: {
        fontSize: 16,
    },
    _remember_btn: {
        backgroundColor: 'white',
        elevation: 0.8,
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _login_btn: {
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    _login_btn_text: {
        fontWeight: "bold",
        letterSpacing: 1
    },
    grediant: {
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        width: "100%",
        borderRadius: 10,
        marginTop: 20
    },
    buttonContainer: {
        flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '99%',
        margin: 2,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: "bold",
        letterSpacing: 1,
        alignSelf: 'center',
    }
});