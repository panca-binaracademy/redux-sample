import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionType.js'

let index = 0

const reducer = (state = [], action) => {
    switch ( action.type ) {
        case ADD_TODO:
            {
                const newTodo = {
                    id: ++index,
                    description: action.payload.description,
                    completed: false
                }
                const newState = [...state, newTodo]
                return newState
            }
        case TOGGLE_TODO:
            {
                const newState = state.map( todo => {
                    if ( todo.id === action.payload.id ) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
                return newState
            }
        case REMOVE_TODO:
            {
                const newState = state.filter( todo => todo.id !== action.payload.id)
                return newState
            }
        default:
            return state
    }
}

export default reducer