import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AddButton = ({onAddPress},{labelOfButton}) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onAddPress}> 
    <Text>{labelOfButton}</Text>
      <Image
        source={require('../assets/greencircle.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'green',
    zIndex: 1,
    height: 160,
    width: 160,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    tintColor: 'white',
    height: 45,
    width: 45,
  },
});