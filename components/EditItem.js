import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const EditItem = () =>{
  return(
    <View style={styles.header}>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkgrey'
  },
  text: {
      color : "white",
      fontSize: 23,
      textAlign: 'center'
  }
})

export default EditItem