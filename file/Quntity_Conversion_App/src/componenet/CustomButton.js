import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const CustomButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bn}>
        <Text style={styles.bTxt}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bn: {
    borderRadius: 10,
    alignItems: 'center',
    width: 150,
    height: 50,
    padding: 10,
    backgroundColor: 'lightblue',
    marginLeft: 120,
    marginTop: 10,
  },
  bTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default CustomButton;