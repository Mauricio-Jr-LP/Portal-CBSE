import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, StatusBar, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { db }  from '../database/firebase';

export default function HomeScreen({navigation} ) {

  const [Noticia,setarNoticia] = useState([]);
  const [Solucoes,setarSolucoes] = useState([]);

  //Busca no bd de noticias
  useEffect(()=>{
    db.collection('noticias').onSnapshot(snapshot =>{
        setarNoticia(snapshot.docs.map(function(doc)
        {
          return {info:doc.data()}
        }));
    })
  },[])
  
  //Busca no bd de soluções
  useEffect(()=>{
    db.collection('Solucoes').onSnapshot(snapshot =>{
      setarSolucoes(snapshot.docs.map(function(doc)
        {
          return {info:doc.data()}
        }));
    })
  },[])

  return (

    <View style={{ flex: 1 }}>

      <StatusBar hidden/>

      <View style={{ flex:0.5 }}>

        <View style = {{height: 50, width: '100%', backgroundColor: '#F2F2F2'}}>

          <Text style = {{paddingLeft: 20, paddingTop: 10, fontSize: 20, color: '#595959'}}>
            Noticias
          </Text>

        </View>

        <ScrollView horizontal contentContainerStyle={{width:'500%',height:'100%'}} style={{flex:1}}>
          {
            Noticia.map((val,index)=>
            {
              if(index < 10)
              {
                return (
                  <ImageBackground style={styles.image} source={{ uri: val.info.imagem }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Noticia',
                      {
                        nome: val.info.nome,
                        noticia: val.info.noticia,
                        imagem: val.info.imagem,
                        data: val.info.data,
                        local: val.info.local,
                        fonte: val.info.fonte
                      })} 
                      style = {{ width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'flex-end' }}
                    >
                      <Text style={{fontSize:27,color:'white'}}>{val.info.nome}</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                )
              }
            })
          }
        </ScrollView>

      </View>

      <View style = {{flex:0.7,padding:20}}>
        <View style = {{width:70,height:2,backgroundColor:'#595959',position:'absolute', left:20, top:50}}></View>
        <Text style = {{fontSize: 20, color: '#595959'}}>
          Soluções
        </Text>
        <ScrollView contentContainerStyle={{paddingTop:20}} style={{flex:1 }}>
          {
            Solucoes.map((val,index)=>
            {
              return (
                <View style={{ width: '95%', flexDirection: 'column', borderRadius: 20 ,marginBottom:10, marginLeft: '2%', backgroundColor: '#F2F2F2', 
                shadowColor: "#000", shadowOffset: { width: 3, height: 12,}, shadowOpacity: 0.6, shadowRadius: 20, elevation: 5,}}>
                  <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Solucao',
                    {
                      responsavel: val.info.responsavel,
                      nome: val.info.nome,
                      descricao: val.info.descricao,
                      imagem: val.info.imagem,
                    })}
                  >
                    <Image source = {{ uri: val.info.imagem}} style={{width:100,height:100, borderRadius: 20}} />
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


const styles = StyleSheet.create({
  image: 
  {
    resizeMode: 'cover',
    justifyContent:'flex-end',
    width:'100%',
    borderWidth: 0.5,
    borderColor: "white",
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