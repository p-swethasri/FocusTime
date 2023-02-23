import React,{useState} from 'react';
import{ View,Text,StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../Components/RoundedButton';
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) =>{
const [subject, setsubject] = useState(null);
  return(
<View style={styles.container}>
<View style={styles.inputcontainer}>
<TextInput
style={styles.textInput}
lable='Focus Time'
onChangeText={setsubject}
/>
<View style={styles.button} >
<RoundedButton title='' size={50} onPress={()=>addSubject(subject)}/>
<View/>
<View/>
</View>
  );
};

const styles = StyleSheet.create({
//   container: {
//    flex: 0.2,
//  },
 button:{
justifyContent: 'center'
 },
 textInput:{
flex:0.8,
marginRight:spacing.sm,
 },
inputcontainer: {
  flex: 0.5,
  padding:spacing.lg,
  justifyContent:'top',
  flexDirection:'row',
},


});