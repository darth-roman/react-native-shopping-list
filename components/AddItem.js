import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({addItem}) =>{

    const [text, useText] = useState('')
    const onChange = textValue => useText(textValue)


  return(
    <View style={styles.header}>

      <TextInput 
            placeholder="Add Item ..."
            style={styles.input}
            onChangeText={onChange}
        />
      <TouchableOpacity style={styles.btn} onPress={()=> addItem(text)} >
          <Text style={styles.btnText}>
              <Icon name="plus" size={20}  />
              Add Item
          </Text>
      </TouchableOpacity>
    </View>
);
}


const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn:{
    backgroundColor: "grey",
    padding: 9,
    margin: 5
  },
  btnText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddItem