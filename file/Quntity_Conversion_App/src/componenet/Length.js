import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextValue from '../TextValue';
import {Picker} from '@react-native-picker/picker';
import CustomButton from './CustomButton';

const Length = () => {
  const [select, setSelect] = useState('Meter');
  const [toSelect, setToSelect] = useState('Centimeter');
  const [userInput, setUserInput] = useState('');
  const [toInput, setToInput] = useState('');

  const lengthConvertor = () => {
    let result = {};
    if (select === 'Meter') {
      if (toSelect === 'Meter') {
        result = userInput;
        setToInput(result);
      } else if (toSelect === 'Centimeter') {
        result = userInput * 100;
        setToInput(result);
      } else if (toSelect === 'Kilometer') {
        result = userInput / 1000;
        setToInput(result);
      }
    } else if (select === 'Centimeter') {
      if (toSelect === 'Centimeter') {
        result = userInput;
        setToInput(result);
      } else if (toSelect === 'Meter') {
        result = userInput / 100;
        setToInput(result);
      } else if (toSelect === 'Kilometer') {
        result = userInput / 100000;
        setToInput(result);
      }
    } else if (select === 'Kilometer') {
      if (toSelect === 'Kilometer') {
        result = userInput;
        setToInput(result);
      } else if (toSelect === 'Meter') {
        result = userInput * 1000;
        setToInput(result);
      } else if (toSelect === 'Centimeter') {
        result = userInput * 100000;
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
            <Picker.Item label="Meter" value="Meter" />
            <Picker.Item label="CentiMeter" value="Centimeter" />
            <Picker.Item label="KiloMeter" value="Kilometer" />
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
            <Picker.Item label="Meter" value="Meter" />
            <Picker.Item label="Centimeter" value="Centimeter" />
            <Picker.Item label="Kilometer" value="Kilometer" />
          </Picker>
        </View>
        <View>
          <CustomButton
            onPress={() => {
              lengthConvertor();
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

export default Length;