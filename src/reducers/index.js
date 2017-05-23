import { combineReducers } from 'redux';
import { SPINNING, ADD_ROW } from 'actions/Button'

var initialState = false

function state(state=initialState,action){
    switch(action.type){
        case (SPINNING):
            return action.show;
        case ('PROMISE_PENDING'):
            console.log('pending')
            return false;
        case ('PROMISE_FULFILLED'): 
            console.log('pending')
            return false;
        case ('PROMISE_REJECTED'):
            console.log('pending')
            return false;
    }
    return state;
}

function modal(state = false,action){
    return state;
}

function titleList(state = [{file:'', title:''}], action){
    switch(action.type){
        case ADD_ROW:
            return [...state, {file:'', title:''}]
    }
    return state;
}

const App = combineReducers({
    state,
    modal,
    titleList,
})

export default App

