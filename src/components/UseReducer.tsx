import React, { useReducer, useState } from 'react'

const initialState = {
    counter: 100,
}

type ACTIONTYPES =
   | { type: "increment", payload: number;}
   | {type: "decrement", payload: number;}

function counterReducer ( state: typeof initialState, action: ACTIONTYPES){
    switch(action.type){
        case "increment":
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "decrement":
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            throw new Error("Bad Action")
    }
}

export const UseReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [input, setInput] = useState('')

    const inputNum = parseInt(input) 
    return (
        <div>
            {state.counter}
            <input type="number" 
            onChange={
                (e)=> setInput(e.target.value)
            }/>
            <br/>
            <button
            onClick={()=>
                dispatch({
                    type: "increment",
                    payload: inputNum,
                })
            }
            >Increment</button>
            <button
            onClick={
                () => dispatch({
                    type: "decrement",
                    payload: inputNum,
                })
            }
            >Decrement</button>
        </div>
    )
}
