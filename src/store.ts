import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {contactsReducer} from "./Contacts/contacts-reducer";

export let rootReducer = combineReducers({
    contacts: contactsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>

//@ts-ignore
window.store = store

export default store