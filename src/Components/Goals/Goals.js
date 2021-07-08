import React, { useState } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import Theme from './../../Constant/Constant';
import { Accordion, Box, NativeBaseProvider, Center } from 'native-base';
export default function Goals(props) {
    return (
        <View style={styles._Container}>
            {/* <==========================> --- <==========================> */}
<Text style={[styles._heading,Theme._QuestionsTextColor]}>GPA:</Text>
      <Accordion >
        <Accordion.Item>
          <Accordion.Summary _expanded={{ backgroundColor: 'orange.300' }}>
          <View>
           <Text style={[styles._title,Theme._GrayColor]}>Currently 0</Text> 
           <View style={[styles._progress_bar, Theme._HomeScreenProgressBarBg]}></View>
          </View>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
              <View >
                  <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</Text>
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
    _heading:{
        fontWeight:'bold',
        paddingVertical:10
    },
    _progress_bar: {
        height: 15,
        borderRadius: 20,
      marginTop:10,
        width:250
    },
    _title:{
fontWeight:"bold"
    }
});