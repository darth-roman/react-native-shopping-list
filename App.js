import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


const App = () =>{

  const [items, setItems] = useState([
    {id: uuidv4(), text:'Milk'},
    {id: uuidv4(), text:'Lemons'},
    {id: uuidv4(), text:'Orange'},
    {id: uuidv4(), text:'Candy Choco'},
  ])
  
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter((item)=> item.id != id)
    })
  }
  const addItem = text => {
    if(!text){
      //Alert.alert('Error', "Please Enter an Item", {text: 'Okay'})
      Alert.alert('Error', 'Please Enter an Item', [
        {text: 'Okay'}
      ])
    }else{
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems]
      })
    }


  }
  

  return(
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem}/>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App