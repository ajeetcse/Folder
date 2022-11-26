import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from './src/component/HomePage';
import Length from './src/component/Length';

const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name = "HomePage" component={HomePage} 
    options={{title:" Unit Conversion",
    headerStyle: {
            backgroundColor: '#f4511e',
            alignItem:'center'
        
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25
            
            },
            headerTitleStyle:{
              marginLeft:100
            },
    }}
    />
    <Stack.Screen
    name='Length'component={Length}
    options={{title:'Length Conversion'}}
    />
    </Stack.Navigator>
    </NavigationContainer>
  )
  
}
export default App;