import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({navigation} ) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Noticias</Text>
      <Button
        title="Noticias"
        onPress={() => navigation.navigate('Noticia')}
      />
      <Text>Noticias</Text>
      <Button
        title="Soluções"
        onPress={() => navigation.navigate('Solucao')}
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