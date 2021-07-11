import React,{useEffect,useState, useRef} from 'react';
import { Animated, View, Text,Button,TextInput, KeyboardAvoidingView,StyleSheet,ImageBackground,Image, StatusBar, LogBox } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
//import Modal from './Modal.js';
import HomeScreen from './HomeScreen';
/* */
export default function NoticiaScreen({ route, navigation }) {
  const [images, setImages] = useState([
    {
      img: require('../resources/logowhats.png'),
      width: 75,
      height: 75,
      ratio: 75,
      website: 'https://api.whatsapp.com/send?phone=5575988043939'
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
      <View style = {{paddingLeft: 50, flexDirection: 'column' ,alignItems: 'flex-end'}}>
          {
            images.map(function(val)
            {
              return(
                <View style = {styles.parentImage}>
                  <TouchableOpacity onPress = {() => abrirNavegador(val.website)}>
                    <Image style = {{width: 50, height: 50}} source = {val.img}/>
                  </TouchableOpacity>
                </View>
              )
            })
          }
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
  parentImage:
  {
    marginTop: 15,
    padding: 10
  },
  imageConteudo: 
  {
    resizeMode: 'cover',
    width:'100%',
    flex:0.5,
    height: 400
  }
});