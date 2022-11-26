import React from "react";
//import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
//import SignUp from "../Screen/SignUpScreen";
import SignInScreen from "../Screen/SignInScreen";
const Stack = createNativeStackNavigator();
const Authnavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen
                name='SignIn'
                component={SignInScreen}
                />
                <Stack.Screen
                name='SignUpScreen'
                component={SignUpScreen}
                />
                <Stack.Screen
                name='Forgotpassword'
                component={SignIn}
                options={ ({navigation})=>({
                    title:' '
                })}
                />
                <View style={styles.container}>

                </View> */}
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles=StyleSheet.create({
    image:{
      height:100,
      width:100, 
    },
    container:{
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
export default Authnavigation;