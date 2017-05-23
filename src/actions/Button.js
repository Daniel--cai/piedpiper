export const FETCH_CONTENT = "FETCH_CONTENT";
export const DO_SOMETHING = "DO_SOMETHING";
export const ERROR_SOMETHING = "ERROR_SOMETHING"
export const SPINNING = "SPINNER"
export const ADD_ROW = "ADD_ROW"
import thunk from 'redux-thunk';
import axios from 'axios';

function callFetch(){
    var res = axios.get('http://localhost:3000/image')

    return res;
}

const promiseAxios = () => ({
    type:'PROMISE',
    payload: {
        promise: callFetch()
    }
})

function errorSomething(error){
    console.log(error)
    return {
        type:ERROR_SOMETHING
    }
}

function doSomething(data){
    try{
    console.log(data)
    var string = JSON.stringify(data)
    } catch (ex){
        console.log(ex);
    }
 
    return {
        type: DO_SOMETHING,
    }
}

export function addRow(){
    return {
        type: ADD_ROW
    }
}

export function spinning(bool){
    return {
        type: SPINNING,
        show:bool
    }
}

export function fetchContent(){
    return (dispatch)=>{
        dispatch(spinning(true))     
        return callFetch()
            .then(response => {
                return response.data
            })
            .then(success => {
                dispatch(doSomething(success))        
            })
            .catch(error => dispatch(errorSomething(error.response)))
            .then(()=>dispatch(spinning(false)))
    }
}