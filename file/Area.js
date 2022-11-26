import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextValue from '../TextValue';
import {Picker} from '@react-native-picker/picker';
import CustomButton from './CustomButton';

const Area = () => {
  const [select, setSelect] = useState('sq.m');
  const [toSelect, setToSelect] = useState('sq.cm');
  const [userInput, setUserInput] = useState('');
  const [toInput, setToInput] = useState('');

  const area = () => {
    let result = {};
    if (select === 'sq.m') {
      if (toSelect === 'sq.m') {
        result = userInput;
        setToInput(result);
      } else if (toSelect === 'sq.cm') {
        result = userInput * 10000;
        setToInput(result);
      } else if (toSelect === 'sq.km') {
        result = userInput * 0.000001;
        setToInput(result);
      }
    } else if (select === 'sq.cm') {
      if (toSelect === 'sq.cm') {
        result = userInput;
        setToInput(result);
      } else if (toSelect === 'sq.m') {
        result = userInput / 10000;
        setToInput(result);
      } else if (toSelect === 'sq.km') {
        result = userInput / 10000000000;
        setToInput(result);
      }
    } else if (select === 'sq.km') {
      if (toSelect === 'sq.km') {
        result = userInput;
        setToInput(result);
      } else if (toSelect === 'sq.m') {
        result = userInput * 1000000;
        setToInput(result);
      } else if (toSelect === 'sq.cm') {
        result = userInput * 10000000000;
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
            <Picker.Item label="sq.m" value="sq.m" />
            <Picker.Item label="sq.cm" value="sq.cm" />
            <Picker.Item label="sq.km" value="sq.km" />
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
            <Picker.Item label="sq.m" value="sq.m" />
            <Picker.Item label="sq.cm" value="sq.cm" />
            <Picker.Item label="sq.km" value="sq.km" />
          </Picker>
        </View>
        <View>
          <CustomButton
            onPress={() => {
              area();
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

export default Area;
