import {createStore, combineReducers} from 'redux'
import {NAME_ADDED, FNAME_ADDED, PASS_ADDED} from '../actions/actions'


const defaultState = {"name": "",
                        "fname": "",
                        "pass": ""}

const namereducer = (state = "", action) => {
    
    if(action.type === NAME_ADDED){
        console.log(action)
        return action.payload
    }
    else return state
}
const fnamereducer = (state = "", action) => {
    
    if(action.type === FNAME_ADDED){
        console.log(action)
        return action.payload
    }
    else return state
}
const passreducer = (state = "", action) => {
    
    if(action.type === PASS_ADDED){
        console.log(action)
        return action.payload
    }
    else return state
}
const reducer = combineReducers({
    "name": namereducer,
    "fname": fnamereducer,
    "pass": passreducer
})
const store = createStore(reducer, defaultState)
export default store