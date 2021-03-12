import { createStore, applyMiddleware } from "redux"
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {devReducer} from "./dev-reducer"
import { reducer as formReducer } from 'redux-form'



let reducers = combineReducers({
   form: formReducer,
   developersPage :devReducer
})
export type RootState = ReturnType<typeof reducers>


export const store = createStore(reducers, applyMiddleware(thunkMiddleware))


type ProprtisType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<ProprtisType<T>>

export default store