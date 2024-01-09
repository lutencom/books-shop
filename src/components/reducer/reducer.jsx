import React, {useReducer, useRef} from "react";

const initialData = {
    field1: 0,
    field2: 0,
    sum: 0
}
const reducerMethod = (state, action) => {
    switch (action.type) {
        case 'addNumber':
            return {...state, [action.field]: action.value};
        case 'addition':
            return {...state, sum: state.field1 + state.field2}
        case 'reduction':
            return {...state, sum: state.field1 - state.field2}
        case 'multiplication':
            return {...state, sum: state.field1 * state.field2}
        case 'division':
            return {...state, sum: state.field1 / state.field2}
        case 'clean':
            return {...state, sum: ''}
        default:
            throw new Error();
    }
}

function ReducerExplained() {
    const [state, dispatch] = useReducer(reducerMethod, initialData);
    const numberInput = useRef();

    const inputHandler = (e) => {
        dispatch({
            type: 'addNumber',
            field: e.target.name,
            value: Number(e.target.value)
        })
    }
    const calculate = (e) => {
        dispatch({
            type: e.target.value
        })
    }
    const makeClean = (e) => {
        numberInput.current.value = '';
        dispatch({
            type: e.target.value
        })
    }
    return (
        <>
            <h2>Calculator with useReducer</h2>
            <form onSubmit={event => event.preventDefault()}>
                <input ref={numberInput} type='number' name='field1' onChange={inputHandler}
                       placeholder="Add first value"/>
                <input ref={numberInput} type='number' name='field2' onChange={inputHandler}
                       placeholder="Add second value"/>
                <button onClick={calculate} className='button outline' type='text' value='addition'>+</button>
                <button onClick={calculate} className='button outline margin-left' type='text' value='reduction'>-
                </button>
                <button onClick={calculate} className='button outline margin-left' type='text'
                        value='multiplication'>*
                </button>
                <button onClick={calculate} className='button outline margin-left' type='text' value='division'>/</button>
                <button onClick={makeClean} className='button full margin-left' type='text' value='clean'>Clean
                </button>
            </form>

            <h2>{state.sum} </h2>

        </>
    );
}

export default ReducerExplained;