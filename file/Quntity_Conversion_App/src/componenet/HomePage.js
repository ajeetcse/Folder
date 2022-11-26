import React from "react";
import{StyleSheet,ImageBackground}from 'react-native';
import UnitItem from './UnitItem';
const HomePage = () => {
    return (
      <ImageBackground
        style={styles.viewBody}
        source={require('../../assets/Background.jpeg')}>
        <UnitItem
          unitName="Length"
          image={require('../../assets/LengthImage.jpeg')}
        />
        <UnitItem
          unitName="Temprature"
          image={require('../../assets/ThermoMeter.jpeg')}
        />
        <UnitItem
          unitName="Weight"
          image={require('../../assets/Weighing.jpeg')}
        />
        <UnitItem
          unitName="Area"
          image={require('../../assets/AreaImage.jpeg')}
        />
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    viewBody: {
      flex: 1,
    },
    bag: {
      width: 450,
      height: 80,
    },
  });
  
  export default HomePage;