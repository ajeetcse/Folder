import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import React from 'react'

const CustomButton = ({ Mytext, onPress }) => {

    return (
        <View style={styles.frontView}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress} >
                <Text style={styles.text}>{Mytext}</Text>

            </TouchableOpacity>
        </View>
    );
};
export default CustomButton;
const styles = StyleSheet.create({
    frontView: {
        marginVertical: 30,
        marginHorizontal: 10,
        backgroundColor: 'center',
    },
    button: {
        backgroundColor: '#ee82ee',
        alignItem: 'center',
        padding: 5,
        margin: 6,
        borderradius: 25,
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
})


