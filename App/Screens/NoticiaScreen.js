import React,{ useState } from 'react';
import {  View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default function NoticiaScreen({ route }) {
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
          <View style = { styles.sombra }>
            <Text style = { styles.titulo }>
              {route.params.nome}
            </Text>
          </View>
        </ImageBackground>   

        <View style = {{ flex:0.8 }}>
          <Text style = { styles.noticia }>
            {route.params.noticia}
          </Text>
        </View>
      </ScrollView>
      <View style = {styles.whatsArea}>
        {
          images.map(function(val)
          {
            return(
              <View style = { styles.parentImage }>
                <TouchableOpacity onPress = {() => abrirNavegador(val.website)}>
                  <Image style = { styles.zap } source = { val.img }/>
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
  },

  sombra:
  {
    width:'100%', 
    height:'100%', 
    backgroundColor:'rgba(0,0,0,0.5)', 
    justifyContent:'flex-end', 
    padding: 10
  },

  titulo:
  {
    fontSize:27,
    color: 'white'
  },
  
  noticia:
  { 
    fontSize:15, 
    color: 'black', 
    padding:20 
  },

  whatsArea:
  {
    paddingLeft: 50, 
    flexDirection: 'column',
    alignItems: 'flex-end'
  },

  zap:
  {
    width: 50, 
    height: 50
  }
});