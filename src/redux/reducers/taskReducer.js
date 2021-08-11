import { ADD_INPUT } from '../types'

const initialState = {
    taskArr: [],
    totalPrice:0
}


export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_INPUT:
            const { title } = action.payload;
            const { note } = action.payload;
            const { price } = action.payload;
            const { date } = action.payload;
            for (let i = 0; i < 1; i++) {
                state.taskArr.push({ id: Date.now(), title: title, date: date, note: note, price: price })
            }
            
            const total = state.taskArr.reduce((currentTotal, item) => {
                return state.totalPrice = currentTotal + parseInt(item.price)
            }, 0)
          
            return {
                ...state,
                taskArr: state.taskArr,
                totalPrice: total
            }
        default:
            return {
                ...state
            }
    }
}