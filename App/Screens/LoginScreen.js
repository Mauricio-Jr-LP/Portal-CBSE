import React, {useEffect,useState, useRef} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, StyleSheet, } from "react-native";

//mauricioezjnr@gmail.com mauricio

export default function LoginScreen({navigation})
{
  return(
    <View style={{flex:1}}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Painel')}
      />
    </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});