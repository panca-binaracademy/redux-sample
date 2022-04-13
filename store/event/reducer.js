import { ADD_EVENT, REMOVE_EVENT } from './actionType.js'

let index = 0

const reducer = (state = [], action) => {
    switch ( action.type ) {
        case ADD_EVENT:
            {
                const newEvent = {
                    id: ++index,
                    description: action.payload.description,
                    date: action.payload.date
                }
                const newState = [...state, newEvent]
                return newState
            }
        case REMOVE_EVENT:
            {
                const newState = state.filter( event => event.id !== action.payload.id)
                return newState
            }
        default:
            return state
    }
}

export default reducer