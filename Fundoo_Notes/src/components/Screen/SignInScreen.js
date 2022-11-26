//import React from 'react'
import React,{useState} from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';


const SignInScreen = (navigation) => {
  const [details, setUserInput] = useState(' ');
  return (
    <View style={styles.mainBody}>
    <View style={styles.subView}>
        <Image style={styles.image} source={require('../../../assets/Fundo.png')}/>
      </View>
      <View >
      <Text style={{ fontWeight: 'bold' }}>Gmail or Phone</Text>
      <View>
      <TextInput
      style={styles.input}
      placeholder="Gmail or Phone"
      onChangeText = {(value)=>{setUserInput(value);}}
      />
      </View>
      <Text style={{ color: '#635b30', marginBottom: 10  }}>Forgot Gmail?</Text>
      </View>
      <TextInput
      style={styles.input}
      placeholder="Password"
      onChangeText = {(value)=>{setUserInput(value);}}
      />
      <Text style = {{marginBottom: 5,color:'red'}}>App will share your name gmail address and details</Text>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#00bfff',
            alignItems: 'center',
            padding: 9,
            margin: 10,
            width: 80,
            marginBottom: 20,
            borderRadius: 10,
            marginHorizontal:130,
          }}
          onPress={() => {
            console.log('');
          }}>
          <View>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
              Next
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress = {() => {
        console.log('');
        }}>
        <Text style={{color: '#635b30',textAlign:'center'}}>Create account?</Text>
        </TouchableOpacity>
      </View>
    </View>
 );
};
const styles = StyleSheet.create({
mainBody: {
    flex: 0,
    padding: 0,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  subView: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
   width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  image:{
    width:60,
    height:60,
    borderColor:'black',
  }
});
export default SignInScreen;