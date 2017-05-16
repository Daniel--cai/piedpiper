import { combineReducers } from 'redux';
import { SPINNING } from 'actions/Button'

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

const App = combineReducers({
    state
})

export default App

