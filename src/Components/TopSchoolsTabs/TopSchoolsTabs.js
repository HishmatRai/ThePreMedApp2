import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Theme from './../../Constant/Constant';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import RBSheet from "react-native-raw-bottom-sheet";
import SearchableDropdown from 'react-native-searchable-dropdown';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
export default function TopSchoolsTabs(props) {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        fetch('https://aboutreact.herokuapp.com/demosearchables.php')
            .then((response) => response.json())
            .then((responseJson) => {
                //Successful response from the API Call
                setServerData(responseJson.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const items = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'angellist' },
        { id: 2, name: 'codepen' },
        { id: 3, name: 'envelope' },
        { id: 4, name: 'etsy' },
        { id: 5, name: 'facebook' },
        { id: 6, name: 'foursquare' },
        { id: 7, name: 'github-alt' },
        { id: 8, name: 'github' },
        { id: 9, name: 'gitlab' },
        { id: 10, name: 'instagram' },
    ];
    return (
        <View style={styles._Container}>
            {/* <==========================> --- <==========================> */}
            <View style={styles._edit_main2}>
                <Text style={[styles._heading, Theme._QuestionsTextColor]}>Top Schools: </Text>
                <Text style={[styles._title, Theme._GrayColor]}> 0 school(s) added</Text>
            </View>
            <View>
                <SearchableDropdown
                    onTextChange={(text) => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={(item) => alert(JSON.stringify(item))}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{ padding: 5 }}
                    //suggestion container style
                    textInputStyle={{
                        //inserted text style
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        backgroundColor: 'white',
                        borderRadius: 10

                    }}
                    itemStyle={{
                        //single dropdown item style
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#FAF9F8',
                        borderColor: '#bbb',
                        borderWidth: 1,
                    }}
                    itemTextStyle={{
                        //text style of a single dropdown item
                        color: '#222',
                    }}
                    itemsContainerStyle={{
                        //items container style you can pass maxHeight
                        //to restrict the items dropdown hieght
                        maxHeight: '100%',
                    }}
                    items={serverData}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="Type or select the school name"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                //To remove the underline from the android input
                />
            </View>
            <View style={{ marginTop: 210, paddingBottom: 10 }}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                    <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>
                <View style={styles._school_btn_main}>
                    <TouchableOpacity style={[styles._school_btn, Theme._MedicalSchoolMap]} onPress={() => Linking.openURL('https://www.motivatemd.com/medical-school-map/')}>
                        <Text style={[styles._school_btn_text, Theme._TextWhiteColor]}>Madical School Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles._school_btn, Theme._MedicalSchoolList]} onPress={() => Linking.openURL('https://www.motivatemd.com/list-of-medical-schools/')}>
                        <Text style={[styles._school_btn_text, Theme._TextWhiteColor]}>Madical School List</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <RBSheet
                ref={ref => {
                    this[RBSheet + 0] = ref;
                }}
                height={350}
                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}
            >
                <View style={styles._bottomsheet_main}>
                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", justifyContent: "center" }}>
                        <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]}>
                            <Fontisto name="doctor" size={20} color="white" />
                        </TouchableOpacity>
                        <Text style={[styles._bottomsheet__main_heaidng2, Theme._ActiveColor]}>MyMentor</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <Text style={[Theme._QuestionsTextColor]}>The average GPA varies with each school but is usually between 3.6-3.8. The GPA you need depends on what school you wish to attend.

                        The scores needed to successfully matriculate at Harvard will be very different than those needed to attend a state school or even a DO school.

                        While no applicant wants any deficiencies, they are inevitable; we are not perfect people. A low MCAT score can be balanced with a higher GPA and visa versa. However, some schools do have certain GPA or MCAT “cut off” limits.

                        Be aware of what scores the school you want to attend requires, but more importantly, be aware of what kind of school you want to attend.</Text>
                </View>
            </RBSheet>
        </View>
    );
}
const styles = StyleSheet.create({
    _Container: {
        flex: 1,
    },
    _heading: {
        fontWeight: 'bold',
        paddingVertical: 10
    },
    _title: {
        fontWeight: "bold"
    },
    HoursLeft: {
        fontWeight: "bold",
        alignSelf: "flex-end",
        marginTop: 5
    },

    _doctor_btn: {
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        marginBottom: 10
    },

    _edit_main2: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10
    },
    _bottomsheet_main: {
        paddingHorizontal: 10,
    },
    _bottomsheet__main_heaidng2: {
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize: 18
    },
    _school_btn_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    _school_btn: {
        height: 55,
        width: "48%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20

    },
    _school_btn_text: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
});