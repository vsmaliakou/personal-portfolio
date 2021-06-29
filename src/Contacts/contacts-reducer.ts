import {emailAPI} from "./contactsAPI";

type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof setName> | ReturnType<typeof setContacts> | ReturnType<typeof setMessage>

const initialState = {
    name: '',
    contacts: '',
    message: ''
}

export const contactsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'PORTFOLIO/CONTACTS/SET-NEW-NAME':
            return {...state, name: action.newName}
        case 'PORTFOLIO/CONTACTS/SET-NEW-EMAIL':
            return {...state, contacts: action.newEmail}
        case 'PORTFOLIO/CONTACTS/SET-NEW-MESSAGE':
            return {...state, message: action.newMessage}
        default:
            return state
    }
}

export const setName = (newName: string) => ({type: 'PORTFOLIO/CONTACTS/SET-NEW-NAME', newName} as const)
export const setContacts = (newEmail: string) => ({type: 'PORTFOLIO/CONTACTS/SET-NEW-EMAIL', newEmail} as const)
export const setMessage = (newMessage: string) => ({type: 'PORTFOLIO/CONTACTS/SET-NEW-MESSAGE', newMessage} as const)


export const sendMessage = (name: string, contacts: string, message: string) => () => {
    return emailAPI.sendMessage(name, contacts, message)
        .then(response => {
            alert('Message sent')
        })
}