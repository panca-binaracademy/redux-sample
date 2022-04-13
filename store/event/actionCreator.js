import { ADD_EVENT, REMOVE_EVENT } from "./actionType.js"

export const addEvent = (eventDescription, eventDate) => {
    return {
        type: ADD_EVENT,
        payload: {
            description: eventDescription,
            date: eventDate
        }
    }
}

export const removeEvent = (eventId) => {
    return {
        type: REMOVE_EVENT,
        payload: {
            id: eventId
        }
    }
}