import React, { Component } from "react";
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import NavigationStack from './src/components/NavigationStack';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      address: ""
    }
  }
  submit() {
    console.warn('all values', this.state)
    //alert('function call')
  }
  render() {
    return (
      <View>
        <View style={{flex:1,backgroundColor:'red',}}></View>
        <TextInput placeholder="Enter Your Name"
          style={styles.textBox}
          onChangeText={(text) => { this.setState({ name: text }) }}
        >
        </TextInput>
        <TextInput placeholder="Enter Your Password"
          style={styles.textBox}
          secureTextEntry={true}
          onChangeText={(text) => { this.setState({ password: text }) }}
        >
        </TextInput>
        <TextInput placeholder="Enter Your Address"
          style={styles.textBox}
          onChangeText={(text) => { this.setState({ address: text }) }}
        >
        </TextInput>
        <Button onPress={()=>{this.submit()}} title="Submit"/>
  
        
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  textBox:{
    borderColor:'skyblue',
    borderWidth:2,
    padding:10,
    marginHorizontal:20,
    marginVertical:30
  }
})
export default App;

