import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Theme from './../../Constant/Constant';
import { Accordion } from 'native-base';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import RBSheet from "react-native-raw-bottom-sheet";
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
                  <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this.RBSheet.open()}>
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
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]}>
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
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]}>
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
                <TouchableOpacity style={[styles._add_btn2, Theme._HomeAddBtnBg]}>
                  <MaterialIcons name="add" size={25} color="white" />
                  <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add Event</Text>
                </TouchableOpacity>
              </View>
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]}>
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
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]}>
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
                <TouchableOpacity style={[styles._add_btn2, Theme._HomeAddBtnBg]}>
                  <MaterialIcons name="add" size={25} color="white" />
                  <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add Event</Text>
                </TouchableOpacity>
              </View>
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]}>
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
          <TouchableOpacity style={[styles._edit_btn, Theme._EditeBtnBorderColor]}>
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
                <TouchableOpacity style={styles._up_icons}>
                  <FontAwesome5 name="sort-amount-up-alt" size={25} color="gray" />
                </TouchableOpacity>
              </View>
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]}>
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
          this.RBSheet = ref;
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
              <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this.RBSheet.close()}>
                <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]}>
                <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  }
});