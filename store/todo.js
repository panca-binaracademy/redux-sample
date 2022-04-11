/*

TEMPLATE STORE / BRANKAS / STATE / DATA SCHEMA
state = [
    {
        id: 1,
        description: 'belanja ke pasar',
        completed: false
    },
    {
        id: 2,
        description: 'belajar kelompok',
        completed: false
    },
    ...
]

TEMPLATE ACTION / FORM TRANSAKSI
action = [
    {
        type: 'addTodo',
        payload: {
            description: 'masak telor'
        }
    },
    {
        type: 'toggleTodo',
        payload: {
            id: 1
        }
    },
    {
        type: 'removeTodo',
        payload: {
            id:2
        }
    }
]

*/

import { createStore } from 'redux'

let index = 0

const reducer = (state = [], action) => {
    switch ( action.type ) {
        case 'addTodo':
            {
                const newTodo = {
                    id: ++index,
                    description: action.payload.description,
                    completed: false
                }
                const newState = [...state, newTodo]
                return newState
            }
        case 'toggleTodo':
        case 'removeTodo':
        default:
            return state
    }
}

const store = createStore(reducer)

export default store