import React, { useState, useRef } from 'react';
import { FlatList, View, Text, Button, StyleSheet, TextInput, SafeAreaView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Input from '../Components/Input';
import ListComponent from '../Components/ListComponent';

import { ADD_INPUT } from '../redux/types';

import DatePicker from 'react-native-datepicker';

const Task = () => {
    const dispatch = useDispatch();
    const [prodArr, setProductArr] = useState(['Shirt', 'apnt', "Trousers", 'underWear'])
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('10-08-2021')
    const inputRef = useRef('');

    


    const addInput = (title, note) => dispatch({ type: ADD_INPUT, payload: { title, note, price, date } })


    const { taskArr } = useSelector(state => state.taskReducer)
    const {totalPrice} = useSelector(state=> state.taskReducer)

    const checkValidity = () => {
        if((title == "" || note =="" || price =="")){
            return false;
        }else{
            return true
        }
    }

    const btnFunc = () => {
        if(checkValidity()){
        addInput(title, note, price, date)
     
        setTitle('')
        setNote("")
        setPrice("")
        }
        else{
            alert('Input Cannot b Empty')
        }
    }

  

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>MY EXPENSES</Text>
                <Text style={styles.subTitle}>Total<Text style={styles.line}>           |</Text><Text style={[styles.price, { fontSize: 30 }]}>        {totalPrice}</Text></Text>
                <Text>___________________________________________________________</Text>
                <View>
                    <Input style={styles.titleTextInput}
                        ref={inputRef}
                        placeholderTextColor="black"
                        placeholder="Title"
                        value={title}
                        onChangeText={(txt) => setTitle(txt)}
                    />
                    <Input style={styles.titleTextInput}
                        ref={inputRef}
                        placeholderTextColor="black"
                        placeholder="Amount"
                        value={price}
                        onChangeText={(prce) => setPrice(prce)}
                    />
                    <Input style={styles.titleTextInput}
                        ref={inputRef}
                        placeholderTextColor="black"
                        value={note}
                        onChangeText={(txt) => setNote(txt)}
                        placeholder="Note" />

                    <DatePicker
                        style={styles.datePickerStyle}
                        date={date} // Initial date from state
                        mode="date" // The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2018"
                        maxDate="01-01-2025"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                            
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                marginLeft: 3,
                            },
                        }}
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                    />
                    <View style={styles.btnContainer}>
                        <Button title="Add Expense"
                            style={styles.button}
                            onPress={btnFunc}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.container, { padding: 1 }]}>
                <FlatList
                    data={taskArr}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <ListComponent
                            title={item.title}
                            price={item.price}
                            note={item.note}
                            date={item.date}
                        />
                    }}
                />
            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
    },
    subContainer: {
        padding: 20
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 30,
        padding: 20
    },
    line: {
        fontSize: 40,
        marginLeft: 30
    },
    datePickerStyle: {
        width: "100%",
        marginTop: 10,
        borderColor: 'grey',
        borderWidth: 1

    },
    price: {
        fontSize: 25,
        fontWeight: "bold"
    },
    titleTextInput: {
        marginTop: 20,
        marginBottom: 20
    },
    button: {
        marginTop: 10,
        width: '50%'
    },
    btnContainer: {
        marginTop: 20
    }
});
export default Task;
