import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';

import {ADD_INPUT,SEND_ID} from '../redux/types'
const ListComponent = (props) => {
    const dispatch = useDispatch()

    const sendId = (id) => dispatch({type:SEND_ID,payload:{id}})
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={()=>sendId(props.id)} >
                <Text style={{ fontSize: 16, color: "grey" }}>{props.date}</Text>
                <View style={styles.rowContainer}>
                    <Text style={{ fontSize: 20, fontWeight: '900' }}>{props.title}</Text>
                    <Text style={{ fontSize: 20 }}>Rs: {props.price}</Text>

                </View>
                <Text style={styles.note}><Text style={{ fontWeight: "bold" }}>Note:</Text> {props.note}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 10,
        backgroundColor: "#fff",
        flex: 1,
        height: 80,
        elevation: 1,
        borderRadius: 1,
        marginBottom: 10,
        elevation: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-start'
    },
    note: {
        fontSize: 20,
        fontWeight: "900"
    }
})

export default ListComponent;