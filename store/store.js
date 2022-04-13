import todoReducer from './todo/reducer.js'
import eventReducer from './event/reducer.js'
import { combineReducers, createStore } from 'redux'

const combinedReducer = combineReducers({
    todo: todoReducer,
    event: eventReducer
})

const store = createStore(combinedReducer)

export default store