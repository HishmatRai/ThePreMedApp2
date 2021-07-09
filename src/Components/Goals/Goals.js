import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Theme from './../../Constant/Constant';
import { Accordion } from 'native-base';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import RBSheet from "react-native-raw-bottom-sheet";
export default function Goals(props) {
  const [currentGPA, onChangeCurrentGPA] = React.useState("");
  const [scienceGPA, onChangeScienceGPA] = React.useState("");
  const [isActive1, setisActive1] = React.useState(false);
  const [isActive2, setisActive2] = React.useState(false);//true
  const [activeIndex1, setactiveIndex1] = React.useState(-1);
  const [activeIndex2, setactiveIndex2] = React.useState(-1);
  const accordianHandlChange = (e) => {
    if (e === 0) {
      setisActive1(!isActive1)
      setactiveIndex1(e)

    }
    if (e === 1) {
      setisActive2(!isActive2)
      setactiveIndex2(e)
    }

  }

  return (
    <View style={styles._Container}>
      {/* <==========================> --- <==========================> */}
      <View style={styles._edit_main}>
        <Text style={[styles._heading, Theme._QuestionsTextColor]}>GPA:</Text>
        {isActive1 && activeIndex1 === 0 &&
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]}>
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
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>
                <View style={styles._update_btns_main}>
                  <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]}>
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
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]}>
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
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>
                <View style={styles._update_btns_main}>
                  <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]}>
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
  _progress_bar: {
    height: 15,
    borderRadius: 20,
    marginTop: 10,
    width: 250
  },
  _title: {
    fontWeight: "bold"
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
  input: {
    width: "100%",
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
  }
});