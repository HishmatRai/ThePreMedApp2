import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
import Theme from './../../Constant/Constant';
import { Accordion } from 'native-base';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import RBSheet from "react-native-raw-bottom-sheet";
import DateTimePicker from '@react-native-community/datetimepicker';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { ScrollView } from 'react-native';
import {
  Select,
  CheckIcon,
} from "native-base"
export default function Goals(props) {
  const [currentGPA, onChangeCurrentGPA] = React.useState("");
  const [scienceGPA, onChangeScienceGPA] = React.useState("");
  const [isActive1, setisActive1] = React.useState(false);
  const [isActive2, setisActive2] = React.useState(true);//true
  const [isActive3, setisActive3] = React.useState(true);//true
  const [isActive4, setisActive4] = React.useState(true);//true
  const [isActive5, setisActive5] = React.useState(true);//true
  const [activeIndex1, setactiveIndex1] = React.useState(-1);
  const [activeIndex2, setactiveIndex2] = React.useState(-1);
  const [activeIndex3, setactiveIndex3] = React.useState(-1);
  const [activeIndex4, setactiveIndex4] = React.useState(-1);
  const [activeIndex5, setactiveIndex5] = React.useState(-1);
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
  const accordianHandlChange = (e) => {
    if (e === 0) {
      setisActive1(!isActive1)
      setactiveIndex1(e)

    }
    if (e === 1) {
      setisActive2(!isActive2)
      setactiveIndex2(e)
    }
    if (e === 2) {
      setisActive3(!isActive3)
      setactiveIndex3(e)
    }
    if (e === 3) {
      setisActive4(!isActive4)
      setactiveIndex4(e)
    }
    if (e === 4) {
      setisActive5(!isActive5)
      setactiveIndex5(e)
    }
  }
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
    <View style={styles._Container}>
      {/* <==========================> --- <==========================> */}
      <View style={styles._edit_main}>
        <Text style={[styles._heading, Theme._QuestionsTextColor]}>GPA:</Text>
        {isActive1 && activeIndex1 === 0 &&
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]} onPress={() => this[RBSheet + 2].open()}>
            <MaterialIcons name="edit" size={15} color="#3e84ff" />
          </TouchableOpacity>
        }
      </View>
      <Accordion onChange={(e) => accordianHandlChange(0)}>
        <Accordion.Item>
          <TouchableOpacity >
            <Accordion.Summary >
              <View>
                <Text style={[styles._title, Theme._GrayColor]}>Currently 0</Text>
                <View style={[styles._progress_bar, Theme._HomeScreenProgressBarBg]}></View>
              </View>
              <Accordion.Icon />
            </Accordion.Summary>
          </TouchableOpacity>
          <Accordion.Details>
            <View >
              {/* <==========================> --- <==========================> */}
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Current GPA</Text>
              <View style={[styles._input_main, Theme._InputBorderColor]}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeCurrentGPA}
                  value={currentGPA}
                  placeholder="0.0"
                  placeholderTextColor={Theme._InputPlaceholderTextColor}
                  color={Theme._InputTextColor}
                  keyboardType='numeric'
                />
              </View>

              {/* <==========================> --- <==========================> */}
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Science GPA</Text>
              <View style={[styles._input_main, Theme._InputBorderColor]}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeScienceGPA}
                  value={scienceGPA}
                  placeholder="0.0"
                  placeholderTextColor={Theme._InputPlaceholderTextColor}
                  color={Theme._InputTextColor}
                  keyboardType='numeric'
                />
              </View>

              {/* <==========================> --- <==========================> */}
              <View style={styles._credits_main}>
                <View style={styles._credits}>
                  <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Credits Taken</Text>
                  <View style={[styles._input_main, Theme._InputBorderColor]}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeScienceGPA}
                      value={scienceGPA}
                      placeholder="Credits Taken"
                      placeholderTextColor={Theme._InputPlaceholderTextColor}
                      color={Theme._InputTextColor}
                      keyboardType='numeric'
                    />
                  </View>
                </View>
                <View style={styles._credits}>
                  <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Credits Left</Text>
                  <View style={[styles._input_main, Theme._InputBorderColor]}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeScienceGPA}
                      value={scienceGPA}
                      placeholder="Credits Left"
                      placeholderTextColor={Theme._InputPlaceholderTextColor}
                      color={Theme._InputTextColor}
                      keyboardType='numeric'
                    />
                  </View>
                </View>
              </View>

              {/* <==========================> --- <==========================> */}
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>
                <View style={styles._update_btns_main}>
                  <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 1].open()}>
                    <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Graduated</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]}>
                    <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>



      {/* <==========================> --- <==========================> */}
      <View style={styles._edit_main}>
        <Text style={[styles._heading, Theme._QuestionsTextColor]}>MCAT:</Text>
        {!isActive2 && activeIndex2 === 1 &&
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]} onPress={() => this[RBSheet + 2].open()}>
            <MaterialIcons name="edit" size={15} color="#3e84ff" />
          </TouchableOpacity>
        }
      </View>
      <Accordion onChange={(e) => accordianHandlChange(1)}>
        <Accordion.Item>
          <Accordion.Summary >
            <View>
              <Text style={[styles._title, Theme._GrayColor]}>Currently 0</Text>
              <View style={[styles._progress_bar, Theme._HomeScreenProgressBarBg]}></View>
            </View>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <View >
              {/* <==========================> --- <==========================> */}
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Chemical and Physical Foundations of Biological Systems</Text>
              <View style={[styles._input_main, Theme._InputBorderColor]}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeCurrentGPA}
                  value={currentGPA}
                  placeholder="0"
                  placeholderTextColor={Theme._InputPlaceholderTextColor}
                  color={Theme._InputTextColor}
                  keyboardType='numeric'
                />
              </View>

              {/* <==========================> --- <==========================> */}
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Biological and Biochemical Foundations of Living Systems</Text>
              <View style={[styles._input_main, Theme._InputBorderColor]}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeScienceGPA}
                  value={scienceGPA}
                  placeholder="0"
                  placeholderTextColor={Theme._InputPlaceholderTextColor}
                  color={Theme._InputTextColor}
                  keyboardType='numeric'
                />
              </View>

              {/* <==========================> --- <==========================> */}
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Critical Analysis and Reasoning Skills</Text>
              <View style={[styles._input_main, Theme._InputBorderColor]}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeScienceGPA}
                  value={scienceGPA}
                  placeholder="0"
                  placeholderTextColor={Theme._InputPlaceholderTextColor}
                  color={Theme._InputTextColor}
                  keyboardType='numeric'
                />
              </View>

              {/* <==========================> --- <==========================> */}
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Physical, Social, and Biological Foundation of Behavior</Text>
              <View style={[styles._input_main, Theme._InputBorderColor]}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeScienceGPA}
                  value={scienceGPA}
                  placeholder="0"
                  placeholderTextColor={Theme._InputPlaceholderTextColor}
                  color={Theme._InputTextColor}
                  keyboardType='numeric'
                />
              </View>
              {/* <==========================> --- <==========================> */}
              <Text style={[styles.Overall, Theme._QuestionsTextColor]}>Overall Total MCAT Score: 0</Text>
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Test Date</Text>
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

              {/* <==========================> --- <==========================> */}
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Update</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>

      {/* <==========================> --- <==========================> */}
      <View style={styles._edit_main}>
        <Text style={[styles._heading, Theme._QuestionsTextColor]}>Shadowing: </Text>
        <Text style={[styles._title, Theme._GrayColor]}>0 Hours</Text>
        {!isActive3 && activeIndex3 === 2 &&
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]} onPress={() => this[RBSheet + 2].open()}>
            <MaterialIcons name="edit" size={15} color="#3e84ff" />
          </TouchableOpacity>
        }
      </View>
      <Accordion onChange={(e) => accordianHandlChange(2)}>
        <Accordion.Item>
          <Accordion.Summary >
            <View>
              <Text style={[styles._title, Theme._GrayColor]}>Completed 0.0 Hours</Text>
              <View style={[styles._progress_bar, Theme._HomeScreenProgressBarBg]}></View>
              <Text style={[styles.HoursLeft, Theme._GrayColor]}>0.0 Hours Left</Text>
            </View>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <View >
              {/* <==========================> --- <==========================> */}
              <View style={styles._add_event}>
                <TouchableOpacity style={[styles._add_btn2, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 3].open()}>
                  <MaterialIcons name="add" size={25} color="white" />
                  <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add Event</Text>
                </TouchableOpacity>
              </View>
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 4].open()}>
                  <MaterialIcons name="add" size={25} color="white" />
                  <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add Log</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>

      {/* <==========================> --- <==========================> */}
      <View style={styles._edit_main}>
        <Text style={[styles._heading, Theme._QuestionsTextColor]}>Volunteering: </Text>
        <Text style={[styles._title, Theme._GrayColor]}>0 Hours</Text>
        {!isActive4 && activeIndex4 === 3 &&
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]} onPress={() => this[RBSheet + 2].open()}>
            <MaterialIcons name="edit" size={15} color="#3e84ff" />
          </TouchableOpacity>
        }
      </View>
      <Accordion onChange={(e) => accordianHandlChange(3)}>
        <Accordion.Item>
          <Accordion.Summary >
            <View>
              <Text style={[styles._title, Theme._GrayColor]}>Completed 0.0 Hours</Text>
              <View style={[styles._progress_bar, Theme._HomeScreenProgressBarBg]}></View>
              <Text style={[styles.HoursLeft, Theme._GrayColor]}>0.0 Hours Left</Text>
            </View>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <View >
              {/* <==========================> --- <==========================> */}
              <View style={styles._add_event}>
                <TouchableOpacity style={[styles._add_btn2, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 3].open()}>
                  <MaterialIcons name="add" size={25} color="white" />
                  <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add Event</Text>
                </TouchableOpacity>
              </View>
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 4].open()}>
                  <MaterialIcons name="add" size={25} color="white" />
                  <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add Log</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>

      {/* <==========================> --- <==========================> */}
      <View style={styles._edit_main}>
        <Text style={[styles._heading, Theme._QuestionsTextColor]}>Work & Activities: </Text>
        <Text style={[styles._title, Theme._GrayColor]}>0 Activities</Text>
        {!isActive5 && activeIndex5 === 4 &&
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]} onPress={() => this[RBSheet + 2].open()}>
            <MaterialIcons name="edit" size={15} color="#3e84ff" />
          </TouchableOpacity>
        }
      </View>
      <Accordion onChange={(e) => accordianHandlChange(4)}>
        <Accordion.Item>
          <Accordion.Summary >
            <View>
              <Text style={[styles._title, Theme._GrayColor]}>Completed 0 Activities</Text>
              <View style={[styles._progress_bar, Theme._HomeScreenProgressBarBg]}></View>
              <Text style={[styles.HoursLeft, Theme._GrayColor]}>0 Activities Left</Text>
            </View>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <View >
              {/* <==========================> --- <==========================> */}
              <View style={styles._add_event}>
                <TouchableOpacity style={styles._up_icons} >
                  <FontAwesome5 name="sort-amount-up-alt" size={25} color="gray" />
                </TouchableOpacity>
              </View>
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 5].open()}>
                  <MaterialIcons name="add" size={25} color="white" />
                  <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
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

          {/* <==========================> --- <==========================> */}
          <View style={styles._update_main2}>

            <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => Linking.openURL('https://www.motivatemd.com/mymentor-faq/gpa/')}>
              <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>More</Text>
            </TouchableOpacity>

          </View>
        </View>
      </RBSheet>

      <RBSheet
        ref={ref => {
          this[RBSheet + 1] = ref;
        }}
        height={170}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      >

        <View style={styles._bottomsheet_main}>
          <Text style={[styles._bottomsheet__main_heaidng, Theme._QuestionsTextColor]}>Update Your Degree</Text>
          {/* <==========================> --- <==========================> */}
          <Text style={[Theme._QuestionsTextColor]}>Degree</Text>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={[styles._input_main2, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input2}
                placeholder="Degree"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
              />
            </View>
            <TouchableOpacity style={[styles._add_btn3, Theme._HomeAddBtnBg]}>
              <MaterialIcons name="add" size={25} color="white" />
            </TouchableOpacity>
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
        </View>
      </RBSheet>
      <RBSheet
        ref={ref => {
          this[RBSheet + 2] = ref;
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Update Your Goals</Text>
            {/* <==========================> --- <==========================> */}
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>GPA</Text>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="0.0"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
                keyboardType='numeric'
              />
            </View>
            <Text style={[styles._Suggested, Theme._GrayColor]}>Suggested: 3.7 or greater</Text>
            {/* <==========================> --- <==========================> */}
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>MCAT</Text>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="MCAT"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
                keyboardType='numeric'
              />
            </View>
            <Text style={[styles._Suggested, Theme._GrayColor]}>Suggested: 507 or greater</Text>
            {/* <==========================> --- <==========================> */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Showing</Text>
              <Text style={[styles._hours, Theme._GrayColor]}>(Hours)</Text>
            </View>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="Hours"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
                keyboardType='numeric'
              />
            </View>
            <Text style={[styles._Suggested, Theme._GrayColor]}>Suggested: 50 hours or greater</Text>

            {/* <==========================> --- <==========================> */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Volunteering</Text>
              <Text style={[styles._hours, Theme._GrayColor]}>(Hours)</Text>
            </View>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="Hours"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
                keyboardType='numeric'
              />
            </View>
            <Text style={[styles._Suggested, Theme._GrayColor]}>Suggested: 150 hours or greater</Text>
            {/* <==========================> --- <==========================> */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Work And Activities</Text>
              <Text style={[styles._hours, Theme._GrayColor]}>(Activities)</Text>
            </View>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="Activities"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
                keyboardType='numeric'
              />
            </View>
            <Text style={[styles._Suggested, Theme._GrayColor]}>Suggested: 12-15</Text>
            {/* <==========================> --- <==========================> */}
            <View style={styles._update_main2}>
              <View style={styles._update_btns_main}>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 2].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 2].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </RBSheet>
      <RBSheet
        ref={ref => {
          this[RBSheet + 3] = ref;
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
                  onValueChange={(itemValue) => setLanguage2(itemValue2)}
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
                <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 3].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 3].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </RBSheet>
      <RBSheet
        ref={ref => {
          this[RBSheet + 4] = ref;
        }}
        height={400}
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Add Shadowing Log</Text>
            {/* <==========================> --- <==========================> */}
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Title</Text>
            <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="Log Title"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
              />
            </View>
  
            {/* <==========================> --- <==========================> */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ width: "48%" }}>
                <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Duration (Hours)</Text>
                <View style={[styles._input_main, Theme._InputBorderColor]}>
              <TextInput
                style={styles.input}
                placeholder="Hours"
                placeholderTextColor={Theme._InputPlaceholderTextColor}
                color={Theme._InputTextColor}
                keyboardType="numeric"
              />
            </View>
              </View>
              <View style={{ width: "48%" }}>
                <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Date</Text>
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
                <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 4].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 4].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </RBSheet>
      <RBSheet
        ref={ref => {
          this[RBSheet + 5] = ref;
        }}
        height={300}
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Work & Activity</Text>
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Note</Text>
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
                <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 5].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 5].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </RBSheet>
    </View >
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
  _progress_bar: {
    height: 15,
    borderRadius: 20,
    marginTop: 10,
    width: 250
  },
  _title: {
    fontWeight: "bold"
  },
  HoursLeft: {
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginTop: 5
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
  _input_main2: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-between",
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    height: 40,
  },
  input: {
    width: "100%",
    letterSpacing: 1
  },
  input2: {
    width: "80%",
    letterSpacing: 1
  },
  _accourdian_input_title: {
    fontWeight: 'bold',
    marginTop: 10
  },
  _credits_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  _credits: {
    width: "48%"
  },
  _update_main: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  _update_main2: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-end"
  },
  _doctor_btn: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
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
  _edit_main: {
    flexDirection: "row",
    alignItems: "center"
  },
  _edit_btn: {
    width: 25,
    height: 25,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  Overall: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18
  },
  _add_btn: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    justifyContent: "space-between",
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 15
  },
  _add_btn3: {
    flexDirection: "row",
    alignItems: "center",
    width: "15%",
    justifyContent: "space-between",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    marginTop: 5,
  },
  _add_btn2: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-between",
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 15,
    marginVertical: 20
  },
  _add_btn_text: {
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1
  },
  _up_icons: {
    marginVertical: 20
  },
  _bottomsheet_main: {
    paddingHorizontal: 10,
  },
  _bottomsheet__main_heaidng: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  _bottomsheet__main_heaidng2: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 18
  },
  _data_picker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 50
  },
  _Suggested: {
    fontSize: 10,
    alignSelf: "flex-end"
  },
  _hours: {
    marginLeft: 5,
    marginTop: 10,
    fontSize: 10
  }
});