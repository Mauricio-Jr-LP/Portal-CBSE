import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { db }  from '../database/firebase';
import * as WebBrowser from 'expo-web-browser';

export default function Pastas({route, navigation})
{
    const [user, setUser] = useState('');

    const [Documentos,setarDocumentos] = useState([]);
    useEffect(()=>{
        db.collection('Documentos').onSnapshot(snapshot =>{
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
    <View style = {{flex: 1, backgroundColor: '#123', height: '100%', width: '100%'}}>
        <View style = {{flex:0.7,padding:20}}>
        <View style = {{width:70,height:2,backgroundColor:'#595959',position:'absolute', left:20, top:50}}></View>
        <Text style = {{fontSize: 20, color: '#595959'}}>
          Seus Documentos
        </Text>

        <ScrollView contentContainerStyle={{paddingTop:20}} style={{flex:1 }}>
          {
            Documentos.map((val,index)=>
            {
              return (
                <View style={{ width: '95%', flexDirection: 'column', borderRadius: 20 ,marginBottom:10, marginLeft: '2%', backgroundColor: '#F2F2F2', 
                shadowColor: "#000", shadowOffset: { width: 3, height: 12,}, shadowOpacity: 0.6, shadowRadius: 20, elevation: 5,}}>
                  <TouchableOpacity style={{flexDirection:'row'}} onPress = {() => abrirNavegador(val.info.link)}
                  >
                    <Image source = {{ uri: val.info.link}} style={{width:100,height:100, borderRadius: 20}} />
                    <View style = {{justifyContent: 'center' }}>
                      <Text style={{padding:10, color: 'black'}}>{val.info.nome}</Text>
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