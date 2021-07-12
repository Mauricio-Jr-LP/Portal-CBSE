import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import db  from '../database/firebase';
import * as WebBrowser from 'expo-web-browser';

export default function Pastas({ route })
{
  const [Documentos,setarDocumentos] = useState([]);

  useEffect(()=>{
    db.collection('Documentos').where("email", "==", route.params.user).onSnapshot(snapshot =>{
      setarDocumentos(snapshot.docs.map(function(doc)
      {
        return {info:doc.data()}
      }));
    })
  },[])

  const abrirNavegador = async (website) => 
  {
    let result = await WebBrowser.openBrowserAsync(website);
  }

  return (
    <View style = { styles.viewPastas}>
      <View style = { styles.subViewPastas }>
        <View style = { styles.linha }></View>
        
        <Text style = { styles.textDocs }>
          Seus Documentos
        </Text>

        <ScrollView contentContainerStyle={{paddingTop:20}} style={{flex:1 }}>
          {
            Documentos.map((val)=>
            {
              return (
                <View style = { styles.viewDocs }>
                  <TouchableOpacity style = {{ flexDirection:'row' }} onPress = {() => abrirNavegador(val.info.link)}>
                    <Image source = {{ uri: val.info.link }} style = { styles.icoDoc } />
                    <View style = {{ justifyContent: 'center' }}>
                      <Text style = {{ padding:10, color: 'black' }}>{val.info.nome}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }      
        </ScrollView>
      </View>       
    </View>
  );
}

const styles = StyleSheet.create({
  viewPastas:
  {
    flex: 1, 
    backgroundColor: "white", 
    height: '100%', 
    width: '100%'
  },

  subViewPastas:
  {
    flex:0.7,
    padding:20
  },

  linha:
  {
    width:70,
    height:2,
    backgroundColor:'#595959',
    position:'absolute', 
    left:20, 
    top:50
  },

  textDocs:
  {
    fontSize: 20, 
    color: '#595959'
  },

  viewDocs:
  { 
    width: '95%', 
    flexDirection: 'column', 
    borderRadius: 20,
    marginBottom:10,
    marginLeft: '2%', backgroundColor: '#F2F2F2', 
    shadowColor: "#000", 
    shadowOffset: { width: 3, height: 12,}, 
    shadowOpacity: 0.6, 
    shadowRadius: 20, 
    elevation: 5
  },

  icoDoc:
  { 
    width:100,
    height:100, 
    borderRadius: 20 
  }
});