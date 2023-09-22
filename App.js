import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  

  return (
    <View style={styles.container}>
      
    



    <View style={styles.Image}>

    <Text style={styles.txt}>Português (Brasil)  </Text>
      <Image style={styles.img} 
      source={require('./assets/Facebook1.png')}
      />
      
</View>

    <TextInput placeholder='Número de celular ou email' style={styles.textInput} onChangeText={text=>setEmail(text)} />
    
    <TextInput secureTextEntry={true} placeholder='Senha' style={styles.textInput} onChangeNumber={text=>setSenha(text)}/>


    <TouchableOpacity style={styles.btnentrar}>
      <Text>Entrar</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.btn2}>
        <Text>Esqueceu a senha?</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.btncriar}>
      <Text> Criar nova conta</Text>
    </TouchableOpacity>


    <View>
      <Image style={styles.img2}
      source={require('./assets/META.png')}/>
    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0766ff',
    alignItems: 'center',
    padding:20,
    
    
  },

  txt:{
    marginTop:-65,
    marginBottom: 50,
    
  },
  

Image:{

  marginTop:100,
  marginBottom: 140,
  alignItems:'center',
    justifyContent:'center'
  

},



  img:{
    width:60,
    height:60,
    
    
  },

  textInput:{
    width:'100%',
    height:40,
    backgroundColor: '#87CEFA',
    borderRadius:5,
    paddingLeft:10,
    marginBottom:20
    
  },

  btnentrar:{
    width:'80%',
    height:30,
    backgroundColor: 'white',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
   
  },

  btn2:{
    marginTop:20,
    color:'white',
    marginBottom:250,

  },

  btncriar:{
    width:'80%',
    height:30,
    backgroundColor: '#F0F8FF',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    
  },

  img2:{
    width: 100,
    height: 20,
    marginTop:20
  },

 

});

