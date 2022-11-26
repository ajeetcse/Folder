import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUpScreen=()=> {
  
  return (
    <View style={styles.mainBody}>
      <View style={styles.subView}>
        <Text style={styles.text}> Registration Form </Text>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText = {(value)=>{setUserInput(value);}}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name "
         onChangeText = {(value)=>{setUserInput(value);}}
        />
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}> Choose your username</Text>
        <TextInput
          style={styles.input}
          placeholder="Email-Id "
          onBlur={()=>this.emailValidation()}
          onChangeText={(value) => {this.setState({email:value})}}
        />
        
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Create a password</Text>
        <TextInput
          style={styles.input}
         
          placeholder="password "
          secureTextEntry={true}
           keyboardType="numeric"
           maxLength={5}
         onChangeText = {(value)=>{setUserInput(value);}}
        />
        <Text style={{ fontWeight: 'bold' }}>Confirm your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          secureTextEntry={true}
          onChangeText={(value) => this.setState({cnfPassword:value})}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#00bfff',
            alignItems: 'center',
            padding: 9,
            width: 100,
            margin: 10,
            borderRadius: 10,
            left: 180,
          }}
          onPress={() => {
            console.log('');
          }}>
          <View>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
              Register
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('');
          }}>
          <Text style={{ color: 'blue' }}>Already Register? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }
const styles = StyleSheet.create({
 mainBody: {
    flex: 0,
    padding: 0,
    alignContent: 'center',
    backgroundColor: 'white',
 },
  subView: {
    height: 50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    width: 320,
    height: 35,
    backgroundColor: '#42A5F5',
    margin: 8,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
});
export default SignUpScreen;