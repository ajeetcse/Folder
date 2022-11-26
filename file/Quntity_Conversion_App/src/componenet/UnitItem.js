import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const UnitItem = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.subView}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(props.unitName)}>
        <Text style={styles.text}>{props.unitName}</Text>
        <Image style={styles.img} source={props.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subView: {
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    borderRadius: 25,
    alignItems: 'center',
  },
  img: {
    width: 90,
    height: 70,
    marginBottom: 5,
  },
});

export default UnitItem;    