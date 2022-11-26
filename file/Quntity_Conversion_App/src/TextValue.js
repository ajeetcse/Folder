import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const TextValue = ({onChangeText, Value}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Value"
        keyboardType="numeric"
        MaxLength={10}
        onChangeText={onChangeText}
        value={Value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default TextValue;