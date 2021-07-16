import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,ScrollView ,TextInput} from 'react-native';
import Theme from './../../Constant/Constant';
import { Accordion } from 'native-base';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
export default function Applications(props) {
  const [personalStatement1, setPersonalStatement1] = useState(true);
  const [personalStatement2, setPersonalStatement2] = useState(true);
  const [personalStatement3, setPersonalStatement3] = useState(true);
  const [personalStatement4, setPersonalStatement4] = useState(true);
  const [personalStatement5, setPersonalStatement5] = useState(true);
  const [personalStatement6, setPersonalStatement6] = useState(true);
  const [personalStatement7, setPersonalStatement7] = useState(true);
  const [personalStatement8, setPersonalStatement8] = useState(true);
  const [personalStatement9, setPersonalStatement9] = useState(true);
  const [personalStatement10, setPersonalStatement10] = useState(true);
  return (
    <View style={styles._Container}>
      {/* <==========================> --- <==========================> */}
      <View style={styles._edit_main2}>
        <Text style={[styles._heading, Theme._QuestionsTextColor]}>Overall: </Text>
        <Text style={[styles._title, Theme._GrayColor]}>15 steps</Text>
      </View>
      <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <Text style={[styles._title, Theme._GrayColor]}>Completed 0 steps</Text>
        <View style={[styles._progress_bar2, Theme._HomeScreenProgressBarBg]}></View>
        <Text style={[styles.HoursLeft, Theme._GrayColor]}>16 steps Left</Text>
      </View>


      {/* <==========================> --- <==========================> */}
      <Accordion>
        <Accordion.Item>
          <Accordion.Summary >
            <View>
              <View style={styles._edit_main}>
                <Text style={[styles._heading, Theme._QuestionsTextColor]}>Required Courses: </Text>
                <Text style={[styles._title, Theme._GrayColor]}>0</Text>
              </View>
              <View style={[styles._progress_bar, Theme._HomeScreenProgressBarBg]}></View>
              <Text style={[styles.HoursLeft, Theme._GrayColor]}>No items Yet</Text>
            </View>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <View >
              <View style={styles._update_main}>
                <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                  <Fontisto name="doctor" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 1].open()}>
                  <MaterialIcons name="add" size={25} color="white" />
                  <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>

      {/* <==========================> --- <==========================> */}
      <View style={styles._accoudion_main}>
        <Accordion>
          <Accordion.Item>
            <Accordion.Summary >
              <View>
                <View style={styles._edit_main}>
                  <Text style={[styles._heading, Theme._QuestionsTextColor]}>Letters of Recommendation: </Text>
                  <Text style={[styles._title, Theme._GrayColor]}>0</Text>
                </View>
                <View style={[styles._progress_bar, Theme._HomeScreenProgressBarBg]}></View>
                <Text style={[styles.HoursLeft, Theme._GrayColor]}>No items Yet</Text>
              </View>
              <Accordion.Icon />
            </Accordion.Summary>
            <Accordion.Details>
              <View >
                <View style={styles._update_main}>
                  <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                    <Fontisto name="doctor" size={20} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 2].open()}>
                    <MaterialIcons name="add" size={25} color="white" />
                    <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Accordion.Details>
          </Accordion.Item>
        </Accordion>
      </View>

      {/* <==========================> --- <==========================> */}
      <View style={styles._accoudion_main}>
        <Accordion>
          <Accordion.Item>
            <Accordion.Summary >
              <View>
                <View style={styles._edit_main}>
                  <Text style={[styles._heading, Theme._QuestionsTextColor]}>Personal Statement: </Text>
                  <Text style={[styles._title, Theme._GrayColor]}>9</Text>
                </View>
                <View style={[styles._progress_bar3, Theme._HomeScreenProgressBarBg]}>
                  <View style={[styles._total_Statements1, Theme._HomeScreenProgressBarBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                </View>
                <Text style={[styles.HoursLeft, Theme._GrayColor]}>0 of 9 Completed</Text>
              </View>
              <Accordion.Icon />
            </Accordion.Summary>
            <Accordion.Details>
              <View >
                <View style={styles._personal_statement} >
                  <LinearGradient colors={[Theme._PersonalStatementLinearGradientFirst, Theme._PersonalStatementLinearGradientSecond]} style={styles._personal_statement_gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Feather name="arrow-right-circle" size={25} color="white" />
                    <Text style={[styles._personal_statement_text, Theme._TextWhiteColor]}>Personal Statement Editing</Text>
                  </LinearGradient>
                </View>
                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement1 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement1(!personalStatement1)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement1(!personalStatement1)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>Brainstorming</Text>
                </View>

                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement2 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement2(!personalStatement2)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement2(!personalStatement2)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>Outline</Text>
                </View>
                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement3 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement3(!personalStatement3)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement3(!personalStatement3)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>1st Draft</Text>
                </View>
                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement4 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement4(!personalStatement4)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement4(!personalStatement4)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>Review</Text>
                </View>
                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement5 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement5(!personalStatement5)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement5(!personalStatement5)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>2nd Draft</Text>
                </View>
                <TouchableOpacity style={styles._view_more_btn}>
                  <Text style={[Theme._ViewMoreBtnTextColor]}>View More</Text>
                  <Entypo name="chevron-down" size={25} color={Theme._ViewMoreBtnIconColor} />
                </TouchableOpacity>
                <View style={styles._update_main}>
                  <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]}  onPress={() => this[RBSheet + 0].open()}> 
                    <Fontisto name="doctor" size={20} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 3].open()}>
                    <MaterialIcons name="add" size={25} color="white" />
                    <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Accordion.Details>
          </Accordion.Item>
        </Accordion>
      </View>

      {/* <==========================> --- <==========================> */}
      <View style={styles._accoudion_main}>
        <Accordion>
          <Accordion.Item>
            <Accordion.Summary >
              <View>
                <View style={styles._edit_main}>
                  <Text style={[styles._heading, Theme._QuestionsTextColor]}>Work & Activities Essays: </Text>
                  <Text style={[styles._title, Theme._GrayColor]}>7</Text>
                </View>
                <View style={[styles._progress_bar3, Theme._HomeScreenProgressBarBg]}>
                  <View style={[styles._total_Statements1, Theme._HomeScreenProgressBarBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                  <View style={[styles._total_Statements, Theme._StatementDotBg]}></View>
                </View>
                <Text style={[styles.HoursLeft, Theme._GrayColor]}>0 of 7 Completed</Text>
              </View>
              <Accordion.Icon />
            </Accordion.Summary>
            <Accordion.Details>
              <View >
                <View style={styles._personal_statement} >
                  <LinearGradient colors={[Theme._PersonalStatementLinearGradientFirst, Theme._PersonalStatementLinearGradientSecond]} style={styles._personal_statement_gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Feather name="arrow-right-circle" size={25} color="white" />
                    <Text style={[styles._personal_statement_text, Theme._TextWhiteColor]}>Personal Statement Editing</Text>
                  </LinearGradient>
                </View>
                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement6 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement6(!personalStatement6)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement6(!personalStatement6)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>Chose Top Three</Text>
                </View>

                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement7 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement7(!personalStatement7)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement7(!personalStatement7)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>Outline</Text>
                </View>
                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement8 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement8(!personalStatement8)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement8(!personalStatement8)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>1st Draft</Text>
                </View>
                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement9 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement9(!personalStatement9)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement9(!personalStatement9)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>Review</Text>
                </View>
                <View style={[styles._personal_statement_tags_main, Theme._PersonalStatementTagsBg]}>
                  <TouchableOpacity style={[styles._personal_statement_tags_select]}>
                    {personalStatement10 ? (
                      <TouchableOpacity style={[styles._unselect_checkbox, Theme._PersonalStatementUnCheckBorderColor]} onPress={() => setPersonalStatement10(!personalStatement10)}>

                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={[styles._select_checkbox, Theme._PersonalStatementCheckBgColor]} onPress={() => setPersonalStatement10(!personalStatement10)}>
                        <Ionicons name="checkmark-sharp" size={20}
                          color={Theme._PersonalStatementCheckIconColor}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  <Text style={[styles._check_box_heading, Theme._QuestionsTextColor]}>2nd Draft</Text>
                </View>
                <TouchableOpacity style={styles._view_more_btn}>
                  <Text style={[Theme._ViewMoreBtnTextColor]}>View More</Text>
                  <Entypo name="chevron-down" size={25} color={Theme._ViewMoreBtnIconColor} />
                </TouchableOpacity>
                <View style={styles._update_main}>
                  <TouchableOpacity style={[styles._doctor_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 0].open()}>
                    <Fontisto name="doctor" size={20} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} onPress={() => this[RBSheet + 4].open()}>
                    <MaterialIcons name="add" size={25} color="white" />
                    <Text style={[styles._add_btn_text, Theme._TextWhiteColor]}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Accordion.Details>
          </Accordion.Item>
        </Accordion>
      </View>

      {/* <==========================> --- <==========================> */}
      <Accordion>
        <Accordion.Item>
          <Accordion.Summary >
            <View>
              <View style={styles._edit_main}>
                <Text style={[styles._heading, Theme._QuestionsTextColor]}>My Applications Notes: </Text>
                <Text style={[styles._title, Theme._GrayColor]}>0</Text>
              </View>

            </View>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <View >
              <View style={styles._update_main2}>
                <TouchableOpacity style={[styles._add_btn, Theme._HomeAddBtnBg]} >
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
        </View>
      </RBSheet>
      <RBSheet
        ref={ref => {
          this[RBSheet + 1] = ref;
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Required Course</Text>
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
                <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 1].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 1].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </RBSheet>
      <RBSheet
        ref={ref => {
          this[RBSheet + 2] = ref;
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Letter of Receommendation</Text>
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
                <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 2].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 2].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Save</Text>
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
        height={200}
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Work & Activity Essay</Text>
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
          this[RBSheet + 3] = ref;
        }}
        height={200}
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>Personal Statement</Text>
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
            <View style={styles._update_main2}>
              <View style={styles._update_btns_main}>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 3].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 3].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </RBSheet>

      <RBSheet
        ref={ref => {
          this[RBSheet + 6] = ref;
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
            <Text style={[styles._accourdian_input_title, Theme._QuestionsTextColor]}>My Applications Note</Text>
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
                <TouchableOpacity style={[styles._Graduated_btn, Theme._GraduatedBtnBg]} onPress={() => this[RBSheet + 6].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._QuestionsTextColor]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles._Graduated_btn, Theme._HomeSubmitBtnBg]} onPress={() => this[RBSheet + 6].close()}>
                  <Text style={[styles._Graduated_btn_text, Theme._TextWhiteColor]}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
  _progress_bar3: {
    height: 15,
    borderRadius: 20,
    marginTop: 10,
    width: 250,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  _progress_bar2: {
    height: 15,
    borderRadius: 20,
    marginTop: 10,
    width: "100%"
  },
  _title: {
    fontWeight: "bold"
  },
  HoursLeft: {
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginTop: 5
  },
  _update_main: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  _update_main2: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20
  },
  _doctor_btn: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  _edit_main: {
    flexDirection: "row",
    alignItems: "center"
  },
  _edit_main2: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10
  },

  _add_btn: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
    justifyContent: "space-between",
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 15
  },

  _add_btn_text: {
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1
  },
  _accoudion_main: {
    marginVertical: 10
  },
  _total_Statements: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2
  },
  _total_Statements1: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2
  },
  _personal_statement: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20
  },
  _personal_statement_gradient: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  _personal_statement_text: {
    fontWeight: "bold",
    marginLeft: 10
  },
  _personal_statement_tags_main: {
    marginTop: 20,
    flexDirection: "row",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 20
  },
  _personal_statement_tags_select: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  _unselect_checkbox: {
    borderWidth: 3,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  _select_checkbox: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  _check_box_heading: {
    fontWeight: 'bold',
    marginLeft: 10
  },
  _view_more_btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end',
    marginTop: 20,
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
  },
  _accourdian_input_title: {
    fontWeight: 'bold',
    marginTop: 10
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
  _update_main2: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-end"
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
});