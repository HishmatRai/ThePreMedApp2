import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, TextInput, Linking } from 'react-native';
import Theme from './../../Constant/Constant';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
    Select,
    CheckIcon,
} from "native-base"
export default function SignUp(props) {
    const [firstName, onChangeFirstName] = React.useState("");
    const [lastName, onChangeLastName] = React.useState("");
    const [aboutUs, onChangeAboutUs] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [passwordEyeIcon, setPasswordEyeIcon] = useState(true);
    const [confirmPassword, onChangeConfirmPassword] = React.useState("");
    const [confirmPasswordEyeIcon, setConfirmPasswordEyeIcon] = useState(true);
    const [remember, setRemember] = useState(true);
    let [language, setLanguage] = React.useState("")

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
                    <Text style={[styles._title, Theme._GrayColor]}>Welcome! The PreMed APp has everything you need to get into medical school.</Text>
                    <Text style={[styles._heading, Theme._HeadingColorBlue]}>Sign Up</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._input_main, Theme._InputBorderColor]}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeFirstName}
                            value={firstName}
                            placeholder="First Name"
                            placeholderTextColor={Theme._InputPlaceholderTextColor}
                            color={Theme._InputTextColor}
                        />
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._input_main, Theme._InputBorderColor]}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeLastName}
                            value={lastName}
                            placeholder="Last Name"
                            placeholderTextColor={Theme._InputPlaceholderTextColor}
                            color={Theme._InputTextColor}
                        />
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={[styles._input_main, Theme._InputBorderColor]}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeAboutUs}
                            value={aboutUs}
                            placeholder="Where did you hear about us?"
                            placeholderTextColor={Theme._InputPlaceholderTextColor}
                            color={Theme._InputTextColor}
                        />
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._dropdown}>
                        <Select
                            selectedValue={language}
                            minWidth="100%"
                            accessibilityLabel="Select your favorite programming language"
                            placeholder="Select your favorite programming language"
                            onValueChange={(itemValue) => setLanguage(itemValue)}
                            _selectedItem={{
                                bg: "cyan.600",
                                endIcon: <CheckIcon size={4} />,
                            }}
                        >
                            <Select.Item label="Freshman" value="Freshman" />
                            <Select.Item label="Sophomore" value="Sophomore" />
                            <Select.Item label="Junior" value="Junior" />
                            <Select.Item label="Senior" value="Senior" />
                            <Select.Item label="Graduate/Grad Student" value="Graduate/Grad Student" />
                            <Select.Item label="High School Student" value="High School Student" />

                        </Select>
                    </View>
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
                    <View style={[styles._input_main, Theme._InputBorderColor]}>
                        <TextInput
                            style={styles.inputPassword}
                            onChangeText={onChangeConfirmPassword}
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            placeholderTextColor={Theme._InputPlaceholderTextColor}
                            secureTextEntry={confirmPasswordEyeIcon}
                            color={Theme._InputTextColor}
                        />
                        {confirmPasswordEyeIcon ? (
                            <Entypo name="eye" size={24} color={Theme._PasswordHideShowIconColor}
                                onPress={() => setConfirmPasswordEyeIcon(!confirmPasswordEyeIcon)} />
                        ) : (
                            <Entypo name="eye-with-line" size={24} color={Theme._PasswordHideShowIconColor}
                                onPress={() => setConfirmPasswordEyeIcon(!confirmPasswordEyeIcon)} />
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
                            <Text style={[styles._remember_text, Theme._GrayColor]}>I agree to the PreMed App </Text>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.motivatemd.com/terms-and-conditions-2/')}>
                                <Text style={[styles._forgot_password_btn_txt, Theme._HeadingColorBlue]}>
                                    Terms of Services
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles._remember_and_forgot_password_main2}>
                        <Text style={[styles._remember_text, Theme._GrayColor]}>& </Text>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.motivatemd.com/privacy/')}>
                            <Text style={[styles._forgot_password_btn_txt, Theme._HeadingColorBlue]}>
                                Privacy Policy
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._login_btn} onPress={() => props.navigation.navigate("Onboarding")}>
                        <LinearGradient colors={[Theme._LinearGradientFirst, Theme._LinearGradientSecond]} style={styles._login_btn} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <Text style={[styles._login_btn_text, Theme._TextWhiteColor]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._already_account}>
                        <Text style={[Theme._GrayColor]}>Already have a account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={[styles._forgot_password_btn_txt, Theme._HeadingColorBlue]}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        marginTop: 10,
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
    _dropdown: {
        marginTop: 20,
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
        marginTop: 20,
        width: "100%"
    },
    _remember_and_forgot_password_main2: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        // marginTop: 5,
        marginLeft: 30
    },
    _remember_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    _remember_text: {
        fontSize: 12,
        marginLeft: 10,
        letterSpacing: 1

    },
    _forgot_password_btn_txt: {
        fontSize: 12,
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
    _already_account: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    }
});