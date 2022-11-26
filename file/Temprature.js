import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextValue from '../TextValue';
import {Picker} from '@react-native-picker/picker';
import CustomButton from './CustomButton';

const Temprature = () => {
  const [select, setSelect] = useState('Celsius');
  const [toSelect, setToSelect] = useState('Fahrenheit');
  const [userInput, setUserInput] = useState('');
  const [toInput, setToInput] = useState('');

  const temprature = () => {
    let result = {};
    if (select === 'Celsius') {
      if (toSelect === 'Celsius') {
        result = userInput;
        setToInput(result);
      } else if (toSelect === 'Fahrenheit') {
        result = userInput * 1.8 + 32;
        setToInput(result);
      } else if (toSelect === 'Kelvin') {
        result = userInput * 1 + 273.15;
        setToInput(result);
      }
    } else if (select === 'Fahrenheit') {
      if (toSelect === 'Fahrenheit') {
        result = userInput;
        setToInput(result);
      } else if (toSelect === 'Celsius') {
        result = (userInput - 32) * 0.56;
        setToInput(result);
      } else if (toSelect === 'Kelvin') {
        result = (userInput - 32) * 0.56 + 273.15;
        setToInput(result);
      }
    } else if (select === 'Kelvin') {
      if (toSelect === 'Kelvin') {
        result = userInput;
        setToInput(result);
      } else if (toSelect === 'Celsius') {
        result = userInput * 1 - 273.15;
        setToInput(result);
      } else if (toSelect === 'Fahrenheit') {
        result = (userInput * 1 - 273.15) * 1.8 + 32;
        setToInput(result);
      }
    }
  };

  return (
    <View style={styles.mainBody}>
      <View style={styles.body}>
        <View>
          <Text style={styles.tn}>Convert From :</Text>
        </View>
        <View>
          <TextValue onChangeText={setUserInput} val={userInput} />
          <Picker
            selectedValue={select}
            onValueChange={itemValue => setSelect(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Celsius" value="Celsius" />
            <Picker.Item label="Fahrenheit" value="Fahrenheit" />
            <Picker.Item label="Kelvin" value="Kelvin" />
          </Picker>
        </View>
        <View>
          <Text style={styles.tn}>The Result Of Conversion :</Text>
        </View>
        <View>
          <View style={styles.box}>
            <Text style={styles.TxIn}>{toInput}</Text>
          </View>
          <Picker
            selectedValue={toSelect}
            onValueChange={itemValue => setToSelect(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Celsius" value="Celsius" />
            <Picker.Item label="Fahrenheit" value="Fahrenheit" />
            <Picker.Item label="Kelvin" value="Kelvin" />
          </Picker>
        </View>
        <View>
          <CustomButton
            onPress={() => {
              temprature();
            }}
            text="Convert"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  body: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 75,
    marginVertical: 150,
  },
  tn: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'left',
    color: 'red',
    marginBottom: 10,
  },
  picker: {
    width: 200,
    marginBottom: 10,
    marginTop: 5,
    color: 'orange',
  },
  box: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 250,
    textAlign: 'center',
    height: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  TxIn: {
    color: 'black',
    fontSize: 20,
    alignItems: 'center',
  },
});

export default Temprature;