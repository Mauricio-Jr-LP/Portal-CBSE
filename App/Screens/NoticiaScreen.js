import React,{useEffect,useState, useRef} from 'react';
import { Animated, View, Text,Button,TextInput, KeyboardAvoidingView,StyleSheet,ImageBackground,Image, StatusBar, LogBox } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
//import Modal from './Modal.js';
import HomeScreen from './HomeScreen';
/* */
export default function NoticiaScreen({ route, navigation }) {
  const [contato, setContato] = useState([
    {
      website: 'https://api.whatsapp.com/send?phone=5575983525355'
    }
  ])
  const abrirNavegador = async (website) => 
  {
    let result = await WebBrowser.openBrowserAsync(website);
  }
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <ImageBackground style={styles.imageConteudo} source={{ uri: route.params.imagem }} >
                 
        </ImageBackground>   
        <View style={{flex:0.8}}>
          <Text style={{ fontSize:15, color: 'black', padding:20 }}>
            {route.params.noticia}
          </Text>
        </View>
      </ScrollView>
      <View style = {{ padding: 10, width: '100%', alignItems: 'flex-end'}}> 
        <View style = {{ padding: 10, width: 70, borderRadius: 20 ,alignItems: 'flex-end', shadowColor: "#000", shadowOffset: { width: 3, height: 8,}, shadowOpacity: 0.5, shadowRadius: 10, elevation: 30,}}>
          <TouchableOpacity onPress = {() => abrirNavegador(website)}>
            <ImageBackground  style = {{width: 50, height: 50, }} source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/05/WhatsApp-Logo.png' }}>

            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
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
    height: 400
  }
});