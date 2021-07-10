import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Painel({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Noticias</Text>
      <Button
        title="Regularize"
        onPress={() => navigation.navigate('Pastas')}
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