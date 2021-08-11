import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListComponent = (props) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={{fontSize:16,color:"grey"}}>{props.date}</Text>
            <View style={styles.rowContainer}>
                <Text style={{fontSize:20,fontWeight:'900'}}>{props.title}</Text>
                <Text style={{fontSize:20}}>Rs: {props.price}</Text>
                
            </View>
            <Text style={styles.note}><Text style={{fontWeight:"bold"}}>Note:</Text> {props.note}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop:10,
        backgroundColor: "#fff",
        flex: 1,
        height:80,
        elevation: 1,
        borderRadius:1,
        marginBottom:10,
        elevation:10
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:"space-between" ,
        alignItems:'flex-start'
    },
    note:{
        fontSize:20,
        fontWeight:"900"
    }
})

export default ListComponent;