import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

 
const Length = () => {
    const [number, setUserInput] = useState('');
    return (
        <View style={styles.mainBody}>
            <View style={styles.body}>
                <View>
                    <Text style={styles.text}> Enter Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="number" onChangeText={(value) => { setUserInput(value) }} />
                </View>
                <Button style={styles.button} title="convert" />
                <View>
                    <View style={styles.box}>
                        <Text style={styles.TxIn}>{number}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
 const styles = StyleSheet.create({
     mainBody: {
         flex: 1,
         alignContent: 'center',
        backgroundColor: 'white',
   },
    body: {
        flex: 1,
        borderWidth: 50,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff8dc',
    },
    text: {
        textAlign: 'left',
        color: 'red',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20
    },
    textn: {
        textAlign: 'left',
        color: 'black',
        fontSize: 14,
    },
    input: {
        width: 100,
        borderWidth: 3,
        borderColor: '#ee82ee',
        textAlign: 'center',
        fontSize: 10,
        color: 'black',
        justifyContent: 'center',
        marginBottom: 10,
    },
    box: {
        borderWidth: 2,
        borderColor: 'black',
        borderradius: 10,
        width: 150,
        textAlign: 'center',
        height: 50,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    TxIn: {
        color: 'balck',
        fontSize: 20,
        alignItems: 'center',
    },
    custonBtnBG: {
        backgroundColor: "#ee82ee",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30,
    },
    customBtnText: {
        fontSize: 20,
        justifyContent:'center',
        width:20,
    },
    button:{
        justifyContent:'center',
        width:20,
        alignContent:"space-around"
    }
})

export default Length;