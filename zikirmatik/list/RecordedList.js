import React, { useState, useEffect } from 'react';
import { View, Text,TouchableOpacity, Pressable, ScrollView } from 'react-native';

import CustomStyle from '../style/customStyle';
import i18n from "../text/general"; import DATA from '../files/list.json';


import { useTranslation } from 'react-i18next';
const initI18n = i18n;

const MyList = ({ navigation }) => {


  const { t, i18n } = useTranslation();


  return (

    <View style={{ flex: 1 }} >
    <Text></Text>
    <Text></Text>
    <Text></Text>
     
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <ScrollView contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
     

      <Text></Text>
      <Text></Text>
      <Text></Text>
        {DATA.map(item => {
          return (
            <View style={{ width: '50%', flexDirection: "row" }} key={item.name}>

              <View style={{ flex: 2 }} >


                <Pressable style={CustomStyle.customListButton} onPress={() => navigation.navigate('ShowItemFromList', { item })}>
                  <Text style={CustomStyle.listItem}>{item.name}</Text>
                </Pressable>
                <Text></Text>
              </View>
            </View>
          );
        })}
        <View style={{ alignItems: 'center',width: '100%', flex: 1 }}>
          <Pressable style={CustomStyle.backButton} onPress={() => navigation.navigate('Counter')}>
            <Text style={CustomStyle.buttonLabel}>{t('BACK')}</Text>
          </Pressable>
        </View>

      </ScrollView>


    </View>
  );

}
export default MyList;