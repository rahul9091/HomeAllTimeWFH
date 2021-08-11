import {createStore,combineReducers} from 'redux'
import taskReducer from './reducers/taskReducer'

const rootReducer = combineReducers({
    taskReducer
})

export const store = createStore(rootReducer)