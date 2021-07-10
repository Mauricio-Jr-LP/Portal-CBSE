import React,{useEffect,useState, useRef} from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function SolucaoScreen({ route, navigation }) {
  return (
    <View style={{flex:1}}>
    <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  image: 
  {
    resizeMode: 'cover',
    justifyContent:'flex-end',
    width:'100%',
    flex:1
  },
  imageConteudo: 
  {
    resizeMode: 'cover',
    width:'100%',
    flex:0.5,
    height:200
  }
});