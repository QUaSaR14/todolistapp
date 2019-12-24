import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem  from './components/todoItem'
import AddTodo from './components/addTodo'
import SandBox from './components/sandbox'

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy a macbook'       , key: '1' },
    { text: 'get a decent girlfriend'    , key: '2' },
    { text: 'go for world your'   , key: '3' },
    { text: 'hack into Facebook' , key: '4' },

  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return  [
          { text : text, key: Math.random().toString() },
          ...prevTodos, 
        ]
      }) 
    } else {
      Alert.alert('OOPS!!', 'Todos must be over 3 chars long', [
        {text: 'OK', onPress: () => console.log('alert closed')}
      ])
    }
  }
 
  return (
    // <SandBox />

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('Keyboard Dismissed') 
    }}>
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content} >
        {/* to form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list} >
          <FlatList 
            keyExtractor={item => item.key }
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});