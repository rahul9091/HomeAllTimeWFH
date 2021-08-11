import {ADD_INPUT} from '../types'

export const addInput = () => {
 
    return ({
        type:ADD_INPUT,
        payload:{input,note,price,date}
    })
}