import React, { useEffect,useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, TextInput, ImageBackground, Image} from "react-native";
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
      <View style = { styles.viewPai }>
        <View style = { styles.viewLogo }>
          <ImageBackground style={ styles.image } source={{uri: 'https://firebasestorage.googleapis.com/v0/b/portal-cliente-590be.appspot.com/o/assets%2FLOGO%20Fonte%20Preta.png?alt=media&token=cbee4997-b58e-4e08-a803-9b6130fa91a5'}}/>
        </View>

        <View style = { styles.viewLogin }>

          <TextInput placeholder = 'Usuario' placeholderTextColor = "black" onChangeText = {(email) => setEmail(email)} value = {email} style = { styles.placeEmail }/>
          <TextInput placeholder = 'Senha' placeholderTextColor = "black" secureTextEntry = {true}  onChangeText = {(password) => setPassword(password)} value = {password}  style = { styles.placePassword }/>
          
          <View style = { styles.btnArea }> 
            <TouchableOpacity onPress = {() => {login()}}>
              <View style = { styles.btnEntrar }>    
                <Text style = {{ color: 'black' }}>
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
      <View style = { styles.viewLogado }>

        <View style={ styles.viewDeps }>
          <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Pastas',
            {
              user: user,
              email: email
            })}
          >
            <Image source = {{ uri: 'https://firebasestorage.googleapis.com/v0/b/portal-cliente-590be.appspot.com/o/assets%2FLOGO%20Fonte%20Branca%20-%20Copia.png?alt=media&token=457c1c04-13f6-498d-a02d-4173d73d5acd'}} style = { styles.depItem } />
            
            <View style = {{ justifyContent: 'center' }}>
              <Text style = { styles.tituloDep }>Regularize</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style = { styles.viewLogout }> 
          <TouchableOpacity onPress = {() => {logout()}}>
            <View style = { styles.btnLogout}>    
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
  viewPai:
  {
    flex: 1, 
    backgroundColor: '#F2F2F2', 
    height: '100%', 
    width: '100%'
  },

  viewLogo:
  {
    flex:0.5, 
    justifyContent: 'center',  
    alignItems: 'center', 
    width: "100%", 
    height: "25%"
  },

  viewLogin:
  {
    flex: 1, 
    alignItems: 'center', 
    width: '100%', 
    height: '50%', 
    paddingTop: '40%'
  },

  placeEmail:
  { 
    width: '75%', 
    height: 60, 
    borderBottomWidth: 2, 
    borderBottomColor: 'black'
  },

  placePassword:
  { 
    textDecorationColor: 'red', 
    width: '75%', 
    height: 60, 
    borderBottomWidth: 2, 
    borderBottomColor: 'black'
  },

  btnArea:
  { 
    flex: 1, 
    width: '75%', 
    paddingTop: 25
  },

  btnEntrar:
  {
    width: '100%', 
    height: 50, 
    borderColor: 'black', 
    borderWidth: 2, 
    borderRadius: 25, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  viewLogado:
  {
    flex:0.7,
    padding:20
  },

  viewDeps:
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

  depItem:
  {
    width:100,
    height:100, 
    borderRadius: 20
  },

  tituloDep:
  { 
    padding:20, 
    color: 'black', 
    fontSize: 20 
  },

  viewLogout:
  { 
    flex: 1, 
    width: '75%', 
    paddingTop: 25
  },

  btnLogout:
  {
    width: '100%', 
    height: 50, 
    borderColor: 'black',
    alignItems: 'flex-end',  
    borderWidth: 2, 
    borderRadius: 25, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

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