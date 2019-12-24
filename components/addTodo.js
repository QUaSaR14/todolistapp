import React, { useState } from 'react';
import { StyleSheet, View , Text, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Eg. Watch Mr. Robot '
                onChangeText={changeHandler}
            />            
            <Button 
                onPress={() => submitHandler(text)}  
                title='add todo'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        fontSize: 20,
    }
})