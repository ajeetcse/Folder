import React from "react";
import { View, ImageBackground, StyleSheet } from 'react-native'
import CustomButton from './CustomButton';

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.viewBody}
      source={require('../../assets/Background1.jpeg')}>
      <View>

        <CustomButton onPress={() => { navigation.navigate('Length') }} Mytext={'Length'} />

      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  viewBody: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
export default HomePage;