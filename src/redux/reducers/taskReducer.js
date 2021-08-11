import { ADD_INPUT, SEND_ID } from '../types'

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
            const {id} = action.payload;

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
            case SEND_ID:{
                const {id} = action.payload;
                const filtered = state.taskArr.filter((item)=>{
                    return item.id != id
                })
                for(let k=0;k<state.taskArr.length;k++){
                    console.log(state.taskArr[k].price)
                    const reducedPrice = state.totalPrice - state.taskArr[k].price
                
                // const reducedPrice = state.totalPrice - 
                return {
                    ...state,
                    taskArr:filtered,
                    totalPrice:reducedPrice
                }
            }
        }
        default:
            return {
                ...state
            }
    }
}