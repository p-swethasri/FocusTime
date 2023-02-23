import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../utils/colors';

export const RoundedButton =({
  style={},
  textstyle={},
  size=150,
  ... props
})=>{
  return(
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
    <Text style={[styles(size).text, textStyle]} ></Text>
    </TouchableOpacity>
  )
}
const styles=(size)=>({
  radius:{
       width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: size/2,
    backgroundColor: colors.white,
    borderWidth: 2,
  },
  text:{
    color: colors.white,
    fontSize: size/3,
  }
})