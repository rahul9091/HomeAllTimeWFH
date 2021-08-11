import {ADD_INPUT,SEND_ID} from '../types'

export const addInput = () => {
 
    return ({
        type:ADD_INPUT,
        payload:{input,note,price,date,id}
    })
}

export const sendId = () => {
    return ({
        type:SEND_ID,
        payload:{id}
    })
}