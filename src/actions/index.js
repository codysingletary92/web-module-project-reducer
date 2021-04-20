import { memo } from "react";

export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const CHANGE_MEMORY = "CHANGE_MEMORY"

export const addOne = () => {
    
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type: CHANGE_OPERATION, payload: operator})
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY})
}

export const changeMemory = (memorySet) => {
    if (memorySet === 'M+'){
        return ({type:CHANGE_MEMORY})
    }
    else if (memorySet === 'MR'){

    }
    else if (memorySet === 'MC')
}