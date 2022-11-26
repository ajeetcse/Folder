//** Quntity conversion App */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/componenet/HomePage';
import Length from './src/componenet/Length';
//import Temprature from './src/componenet/Temprature';
//import Weight from './src/componenet/Weight';
//import Area from './src/componenet/Area';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: 'Welcome To Unit Conversion',
            headerStyle: {
              backgroundColor: '#00ffff',
            },
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen
          name="Length"
          component={Length}
          options={{
            title: 'Length Conversion',
          }}
        />
        {/* <Stack.Screen
          name="Temprature"
          component={Temprature}
          options={{
            title: 'Temprature Conversion',
          }}
        /> */}
        {/* <Stack.Screen
          name="Weight"
          component={Weight}
          options={{
            title: 'Weight Conversion',
          }}
        />
        <Stack.Screen
          name="Area"
          component={Area}
          options={{
            title: 'Area Conversion',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;