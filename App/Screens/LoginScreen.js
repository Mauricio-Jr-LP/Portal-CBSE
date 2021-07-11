import React, {useEffect,useState, useRef} from "react";
import { ScrollView, TouchableOpacity, Text, View, StyleSheet, TextInput, ImageBackground, Image} from "react-native";
import {auth}  from '../database/firebase';

//mauricioezjnr@gmail.com mauricio

export default function LoginScreen({navigation})
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  
  useEffect(() =>{
    auth.onAuthStateChanged(function(val)
    {
      if(val != null)
      {
        setUser(val.email);
      }
    })
  }, [])
  
  const login = () => {
    auth.signInWithEmailAndPassword(email,password).then(function(val){
      setUser(val.email);
    }).catch(function(erro){
      alert(error.message);
    })
  }

  const logout = () => {
    auth.signOut().then(() => {
      setUser('');
    }).catch(function(error){
    });
  }

  /*
  const criar = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(val)
    {
      setUser(val.email);
      }).catch(function(error){
        alert(erro.message);
      })
  }


  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  },[])  
  */

  if(!user)
  {
    return(
      <View style = {{flex: 1, backgroundColor: '#F2F2F2', height: '100%', width: '100%'}}>

        <View style = {{flex:0.5, justifyContent: 'center',  alignItems: 'center', width: "100%", height: "25%"}}>
          <ImageBackground style={styles.image} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/portal-cliente-590be.appspot.com/o/assets%2FLOGO%20Fonte%20Preta.png?alt=media&token=cbee4997-b58e-4e08-a803-9b6130fa91a5'}}/>
        </View>

        <View style = {{flex: 1, alignItems: 'center', width: '100%', height: '50%', paddingTop: '40%'}}>

          <TextInput placeholder = 'Usuario' placeholderTextColor = "black" onChangeText = {(email) => setEmail(email)} value = {email} style = {{ width: '75%', height: 60, borderBottomWidth: 2, borderBottomColor: 'black'}}/>
          <TextInput placeholder = 'Senha' placeholderTextColor = "black" secureTextEntry = {true}  onChangeText = {(password) => setPassword(password)} value = {password}  style = {{ textDecorationColor: 'red', width: '75%', height: 60, borderBottomWidth: 2, borderBottomColor: 'black'}}/>
          
          <View style = {{ flex: 1, width: '75%', paddingTop: 25}}> 
            <TouchableOpacity onPress = {() => {login()}}>
              <View style = {{width: '100%', height: 50, borderColor: 'black', borderWidth: 2, borderRadius: 25, alignItems: 'center', justifyContent: 'center'}}>    
                <Text style = {{color: 'black'}}>
                  Entrar
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    )
  }
  
  else{
    return(
      <View style = {{flex:0.7,padding:20}}>

        <View style={{ width: '95%', flexDirection: 'column', borderRadius: 20 ,marginBottom:10, marginLeft: '2%', backgroundColor: '#F2F2F2', 
          shadowColor: "#000", shadowOffset: { width: 3, height: 12,}, shadowOpacity: 0.6, shadowRadius: 20, elevation: 5,}}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Pastas',
              {
                user: user,
                email: email
              })}>
              <Image source = {{ uri: 'https://firebasestorage.googleapis.com/v0/b/portal-cliente-590be.appspot.com/o/assets%2FLOGO%20Fonte%20Branca%20-%20Copia.png?alt=media&token=457c1c04-13f6-498d-a02d-4173d73d5acd'}} style={{width:100,height:100, borderRadius: 20}} />
              <View style = {{justifyContent: 'center' }}>
                <Text style={{padding:20, color: 'black', fontSize: 20}}>Regularize</Text>
              </View>
            </TouchableOpacity>
        </View>

        <View style = {{ flex: 1, width: '75%', paddingTop: 25}}> 
            <TouchableOpacity onPress = {() => {logout()}}>
              <View style = {{width: '100%', height: 50, borderColor: 'black',alignItems: 'flex-end',  borderWidth: 2, borderRadius: 25, alignItems: 'center', justifyContent: 'center'}}>    
                <Text style = {{color: 'black'}}>
                  Sair                
                </Text>
              </View>
            </TouchableOpacity>

          </View>

      </View>        
      
    )
  }
}

const styles = StyleSheet.create({
  image: 
  {
    width:150,
    height: 100,
    resizeMode: 'cover',
    marginTop: "25%", 
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});