import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import db  from '../database/firebase';

export default function HomeScreen({navigation} ) {

  const [Noticia,setarNoticia] = useState([]);

  //Busca no bd de noticias
  useEffect(()=>{
    db.collection('noticias').onSnapshot(snapshot =>{
      setarNoticia(snapshot.docs.map(function(doc)
      {
        return {info:doc.data()}
      }));
    })
  },[])
  
  return (
    <View style = {{ flex: 1, height: "100%", width: "100%" }}>
      <StatusBar hidden/>

      <ScrollView contentContainerStyle = {{ paddingTop: 20 }} style = { styles.scroll }>
        {
          Noticia.map((val,index)=>
            {
              if(index < 100)
              {
                return (
                  <View style = { styles.noticiasArea }>
                    <TouchableOpacity style = {{ flexDirection:'row' }} onPress={()=>navigation.navigate('Noticia',
                      {
                        nome: val.info.nome,
                        noticia: val.info.noticia,
                        imagem: val.info.imagem,
                        data: val.info.data,
                        local: val.info.local,
                        fonte: val.info.fonte
                      })}
                    >
                      <Image source = {{ uri: val.info.imagem }} style = { styles.image } />
                        <View style = {{justifyContent: 'center' }}>
                          <Text style={{padding:10, color: 'black'}}>
                            {val.info.nome}
                          </Text>
                        </View>
                    </TouchableOpacity>
                  </View>
                )
              }
            })
          }      
        </ScrollView>
    </View>        
  );
}

const styles = StyleSheet.create({
  scroll:
  { 
    flex: 1, 
    width: "100%", 
    height: "100%" 
  },

  noticiasArea:
  { 
    width: '95%', 
    flexDirection: 'column', 
    borderRadius: 20,
    marginBottom:10, 
    marginLeft: '2%', 
    backgroundColor: '#F2F2F2', 
    shadowColor: "#000", 
    shadowOffset: { width: 3, height: 12,}, 
    shadowOpacity: 0.6, 
    shadowRadius: 20, 
    elevation: 5
  },

  image: 
  { width:100,
    height:100, 
    borderRadius: 20 
  }
});
