import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionType.js"

export const addTodo = (todoDescription) => {
    return {
        type: ADD_TODO,
        payload: {
            description: todoDescription
        }
    }
}

export const toggleTodo = (todoId) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id: todoId
        }
    }
}

export const removeTodo = (todoId) => {
    return {
        type: REMOVE_TODO,
        payload: {
            id: todoId
        }
    }
}