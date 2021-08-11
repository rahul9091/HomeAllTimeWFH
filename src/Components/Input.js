import React from 'react';
import {Text,TextInput,StyleSheet} from 'react-native';

const Input = (props) => {
    return (
        <TextInput {...props}
        value={props.value}
        onChangeText={props.onChangeText}
        style={{...styles.inputStyle,...props.style}}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        onFocus={props.onFocus}
        />
    )
}

const styles = StyleSheet.create({
    inputStyle:{
        borderColor:'grey',
        borderWidth:1
    }
})

export default Input;